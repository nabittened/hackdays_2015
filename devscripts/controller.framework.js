apa.spine.namespace.extend( 'visavis.controller.framework', function() {
	
	japa.extend( this, new apa.spine.controller.framework() );
	
	this.id			=	'framework';
	this.model		=	'framework';
	this.shown		=	false;			//	false is home, true is content;
	this.content	=	0;				//	0 is EU, 1 Austria,…
	this.subContent	=	0;				//	0 = population, 1 age,…
	
	this.bindEvents = function() {
		
		japa.proxy( this.parent.bindEvents, this )();
		
		japa(document).on( apa.config.clickEvent, '.apaHome ul a', japa.proxy( this.showContent, this ) );
		japa(document).on( apa.config.clickEvent, '.apaContent h1 a', japa.proxy( this.hideContent, this ) );
		japa(document).on( apa.config.clickEvent, 'footer a', japa.proxy( this.goUp, this ) );		
		japa(document).on( apa.config.clickEvent, '#apaShownContent', japa.proxy( this.toggleDrop, this ) );
		japa(document).on( apa.config.clickEvent, '.apaContentMenu ul a', japa.proxy( this.changeContent, this ) );
		japa(document).on( apa.config.clickEvent, '.apaSubContentMenu a', japa.proxy( this.changeSubContent, this ) );
		japa(document).on( apa.events.siteResize, japa.proxy( this.adaptPage, this ) );
	};
	
	this.kill = function() {
		
		japa.proxy( this.parent.kill, this )();
		
		japa(document).off( apa.config.clickEvent, '.apaHome ul a' );
		japa(document).off( apa.config.clickEvent, '.apaContent h1 a' );
		japa(document).off( apa.config.clickEvent, 'footer a' );		
		japa(document).on( apa.config.clickEvent, '#apaShownContent' );
		japa(document).off( apa.config.clickEvent, '.apaContentMenu ul a' );
		japa(document).off( apa.config.clickEvent, '.apaSubContentMenu a' );
		japa(document).off( apa.events.siteResize, japa.proxy( this.adaptPage, this ) );
	};
	
	this.view = function(data) {

		return new apa.visavis.view.framework();
	};
	
	this.goUp = function() {
					
		var winHeight = japa(window).height();
		
		japa('.apaOuterFrame').css('top', -winHeight);
	}
	
	this.showContent = function(ev) {
			
		this.content = parseInt( japa(ev.currentTarget).attr('id').split('_')[1], 10 );
		
		this.buildContent();
		
		this.goUp();
		
		this.shown = true;
	};
	
	this.hideContent = function(ev) {
		
		this.shown = false;
		
		japa('.apaOuterFrame').css('top', 0);
	};
	
	this.adaptPage = function(ev) {
		
		if ( this.shown ) japa('.apaOuterFrame').css('top', -ev.winHeight);
	};
	
	this.toggleDrop = function() {
		
		if ( japa('.apaContentMenu ul').hasClass('apaShow') ) {
			
			japa('.apaContentMenu ul').slideUp(100);
			japa('.apaContentMenu ul').removeClass('apaShow');
		} else {
			
			japa('.apaContentMenu ul').slideDown(100);
			japa('.apaContentMenu ul').addClass('apaShow');
		}
	};
	
	this.buildContent = function() {
		
		this.adaptContentNav();
	};
	
	this.changeContent = function(ev) {
		
		this.content = parseInt( japa(ev.currentTarget).attr('id').split('_')[1], 10 );
		
		this.toggleDrop();
		
		this.buildContent();
	};
	
	this.changeSubContent = function(ev) {
		
		this.subContent = parseInt( japa(ev.currentTarget).attr('id').split('_')[1], 10 );
		
		japa('.apaSubContentMenu a').removeClass('apaSelected');
		
		japa(ev.currentTarget).addClass('apaSelected');
		
		this.buildContent();
	};
	
	this.adaptContentNav = function() {
		
		var tString;
		
		switch( this.content ) {
			
			case 0:
				tString = apa.spine.language.getText('navUnion');
				break;
			case 1:
				tString = apa.spine.language.getText('navAustria');
				break;
			case 2:
				tString = apa.spine.language.getText('navCommunity');
				break;
			case 3:
				tString = apa.spine.language.getText('navMe');
				break;
		}
		
		japa('#apaShownContent').html(tString);
	};
});