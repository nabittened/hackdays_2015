japa(document).ready( function() {

	new apa.visavis.init().configure();
});

apa.spine.namespace.extend( 'visavis.init', function() {
	
	japa.extend( this, apa.spine.init );
	
	this.getFramework = function() {
		
		return new apa.visavis.controller.framework();
	}
});