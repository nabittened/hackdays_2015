apa.spine.namespace.extend( 'visavis.observer.site', function() {
	
	japa.extend( this, apa.spine.observer.site );
	
	this.init = function() {
		
		apa.spine.debug.showInfo('Starting observer.site');
		
		japa(window).on( 'resize', japa.proxy( this.resize, this ) );
		
		this.resize();
	};
	
	this.resize = function() {
		
		apa.spine.debug.showInfo('Resizing site');
		
		var windowHeight =	japa(window).height();
		
		tCSS	=	'body { height:' + windowHeight + 'px;}';
		tCSS	+=	'.apaHome { height:' + windowHeight + 'px;}';
		tCSS	+=	'.apaContent { min-height:' + windowHeight + 'px}';
		
		japa('#' + apa.config.optional.calculatedStyle).html(tCSS);
		
		// send event that size has resized
		
		var tEvent			=	japa.Event( apa.events.siteResize );
		tEvent.winHeight	=	windowHeight;
		
		japa(document).triggerHandler( tEvent );
	};
});