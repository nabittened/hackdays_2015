japa(document).ready( function() {

	configure();
	hideArrows('landingPage');
});

var apaActual = 'eu';

var configure = function() {
	
	japa(document).on( 'click', 'area', function(ev) {
		
		var tId = japa(ev.currentTarget).attr('id');
		var tClass	=	japa(ev.currentTarget).attr('class');
		
		if (tClass = 'eu_up') {
			
			window.scrollTo(0, 0);
		}
		
		if (tId == 'landing_eu') {
			
			japa('.apaContent').css('top', 0);
			japa('body').css('overflow', 'auto');
		} else if (tId == 'eu_click') {
			
			changePage('eu_clickPage'); 
		} else if (tId == 'eu_austria') {
			
			changePage('austriaPage');
		} else if (tId == 'austria_religion') {
			
			changePage('austriaReligionPage');
		} else if (tId == 'austria_click') {
			
			changePage('austriaClick');
		} else if (tId == 'commu_search') {
			
			changePage('commuSearch');
		} else if (tId == 'commu_get') {
			
			changePage('commuGet');
		} else if (tId == 'me_get') {
			
			changePage('meGet');
		} else if (tId == 'me_choose') {
			
			changePage('meChoose');
		} else if (tId == 'me_show') {
			
			changePage('meShow');
		}
	});
};

var changePage = function(newPage) {
	
	japa('#' + newPage).css('display', 'block');
	japa('#' + apaActual).css('display', 'none');
	
	apaActual = newPage;
	
	hideArrows(apaActual);
};

var hideArrows = function(page) {
	
	window.setTimeout( function() {
		
		japa('#' + page + ' div.help').fadeOut(600);
	}, 3000);
};