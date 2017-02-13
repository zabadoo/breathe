var browser = browser || chrome;

browser.storage.local.get( [ 'bgcolor', 'textcolor', 'messages', 'textsize', 'font' ], function ( r ) {
	var  m = r.messages || 'Breathe';

	m = m.split( '\n' );
	m = m[ Math.floor( Math.random() * m.length ) ];

	if ( r.font !== '' ) {
		document.querySelector( 'h1' ).style.fontFamily = r.font;
	}

	document.querySelector( 'h1' ).textContent = m;
	document.querySelector( 'h1' ).style.fontSize = r.textsize + 'px' || '30px';
	document.body.style.backgroundColor = r.bgcolor || '#fff';
	document.body.style.color = r.textcolor || '#b3b3b3';
} );
