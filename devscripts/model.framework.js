apa.spine.namespace.extend( 'visavis.model.framework', function() {
	
	japa.extend( this, new apa.spine.model.common() );	
	
	this.id	=	'framework';

	this.requiredData	=	{ 
		
		0: [ ['content', false] ]
	};
	
	this.processData = function(data, defObj) {
		
		data.communities	=	this.buildCommunities( data );
		apa.data			=	data;
		
		defObj.resolve();			
		return data;
	};
	
	this.buildCommunities = function(data) {
		
		var commArr = [];
		
		japa.each( data, function(key, value) {
			
			if ( key.indexOf('community_') == 0 ) commArr.push( [key, value.name] );
		});
		
		return commArr;
	};
});