apa.spine.namespace.extend( 'visavis.data.factory.content', function() {
	
	japa.extend( this, new apa.spine.data.common() );
	
	this.id	= 'content';
	
	this.getLoader = function() {
		
		return new apa.spine.loader.common();
	};
	
	this.getUrl = function() {

		return apa.config.path.content + 'content.json.js';
	};
});