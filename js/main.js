function luminanace(r, g, b) {
    var a = [r,g,b].map(function(v) {
        v /= 255;
        return (v <= 0.03928) ?
            v / 12.92 :
            Math.pow( ((v+0.055)/1.055), 2.4 );
        });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function onMouseOver (e) {
	document.getElementById("img-" + e.target.id).style.background = randomColor({luminosity: 'light'});
};

function onMouseLeave (e) {
	document.getElementById("img-" + e.target.id).style.background = "#6DC8F0";
};

window.onload = function() {
	var projects = document.getElementsByClassName('grid-25');

	for (var i = projects.length - 1; i >= 0; i--) {
		projects[i].onmouseenter = onMouseOver;
		projects[i].onmouseleave = onMouseLeave;
	};

    var fittext = document.getElementsByClassName('grid-25');
    
    for (var i = fittext.length - 1; i >= 0; i--) {
        window.fitText(fittext[i], 1.2);
    };

    window.fitText(document.getElementById('title'), 1.0);
};