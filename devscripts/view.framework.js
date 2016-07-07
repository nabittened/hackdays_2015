apa.spine.namespace.extend( 'visavis.view.framework', function() {
	
	japa.extend( this, apa.spine.view.common );
	
	this.get = function() {
	
		var tHtml	=	'<section class="apaHome">';
		tHtml		+=	'<header>';
		tHtml		+=	'<h1>' + apa.spine.language.getText('title') + '</h1>';
		tHtml		+=	'<h2>' + apa.spine.language.getText('subtitle') + '</h2>';
		tHtml		+=	'</header>';
		tHtml		+=	'<nav>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" id="cont_0">' + apa.spine.language.getText('navUnion') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_1">' + apa.spine.language.getText('navAustria') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_2">' + apa.spine.language.getText('navCommunity') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_3">' + apa.spine.language.getText('navMe') + '</a></li>';
		tHtml		+=	'</ul>';		
		tHtml		+=	'</nav>';
		tHtml		+=	'</section>';
		tHtml		+=	'<section class="apaContent">';
		tHtml		+=	'<header>';
		tHtml		+=	'<h1><a href="javascript:">' + apa.spine.language.getText('title') + '</a></h1>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" class="apaFacebook">Facebook</a></li>';
		tHtml		+=	'<li><a href="javascript:" class="apaTwitter">Twitter</a></li>';
		tHtml		+=	'<li><a href="javascript:" class="apaPinterest">Pinterest</a></li>';
		tHtml		+=	'</ul>';
		tHtml		+=	'</header>';
		tHtml		+=	'<nav class="apaContentMenu">';
		tHtml		+=	'<p>';
		tHtml		+=	apa.spine.language.getText('subtitle');
		tHtml		+=	'</p>';
		tHtml		+=	'<a id="apaShownContent" href="javascript:"></a>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" id="cont_0">' + apa.spine.language.getText('navUnion') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_1">' + apa.spine.language.getText('navAustria') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_2">' + apa.spine.language.getText('navCommunity') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="cont_3">' + apa.spine.language.getText('navMe') + '</a></li>';
		tHtml		+=	'</ul>';
		tHtml		+=	'</nav>';
		tHtml		+=	'<nav class="apaSubContentMenu">';
		tHtml		+=	'<h2>' + apa.spine.language.getText('concerning') + '</h2>';
		tHtml		+=	'<ul>';
		tHtml		+=	'<li><a href="javascript:" id="sub_0" class="apaSelected">' + apa.spine.language.getText('population') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="sub_1">' + apa.spine.language.getText('gender') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="sub_2">' + apa.spine.language.getText('religion') + '</a></li>';
		tHtml		+=	'<li><a href="javascript:" id="sub_3">' + apa.spine.language.getText('age') + '</a></li>';
		tHtml		+=	'</ul>';
		tHtml		+=	'</nav>';
		tHtml		+=	'<content id="apaInfoGfx"></content>';
		tHtml		+=	'<footer>';
		tHtml		+=	'<nav>';
		tHtml		+=	'<a href="javascript:">' + apa.spine.language.getText('goUp') + '</a>';
		tHtml		+=	'</nav>';
		tHtml		+=	'</footer>';
		tHtml		+=	'</section>';
		
		return tHtml;
	};
});