window.onload = function() {

    var translate = function (el, x, y) {
        var style = 'translate(' + x + 'px, ' + y + 'px)'
        el.style.webkitTransform = style
        el.style.MozTransform = style
    }

    var colors = [
            [225, 0, 204],
            [225, 0, 187],
            [0, 212, 225],
            [0, 225, 30]
        ]

    var size = colors.length
    var to = colors[Math.floor(Math.random() * size)]
    
    var txt = document.getElementById('main'),
        header = document.querySelector('header'),
        shadow = document.getElementById('shadow'),
        // for color purpose only
        squiggly = document.querySelector('h2')

    var centerX = (window.innerWidth * 0.5)
    var centerY = (txt.clientHeight + header.clientHeight) / 2
    var frameId = 0
    
    // prevent page content clipping logo stuff
    document.getElementById('block').style.height = 
        (txt.clientHeight + header.clientHeight) + 'px'
    
    window.onresize = function () {
        centerX = (window.innerWidth * 0.5)
    }
    
    // stop anim. when not in focus (save some battery, man)
    window.onblur = function () {
        if (frameId !== 0)
            cancelAnimationFrame(frameId)
        frameId = 0
    }
    // and enable it when we have focus
    window.onfocus = function () {
        if (frameId === 0)
            frameId = requestAnimationFrame(render)
    }

    var move = function (t) {
        // origin point
        var ox = centerX - 8 * Math.cos(t * 0.0005)
        var oy = centerY + 8 * Math.sin(t * 0.0005)

        // SHAI text pos
        var x = ox - txt.clientWidth * 0.5
        var y = oy - txt.clientHeight * 0.5

        // shadow SHAI text pos
        var sx = ox + 3 * Math.cos(t * 0.001) - 4 - txt.clientWidth * 0.5
        var sy = oy + 3 * Math.sin(t * 0.001) + 4 - txt.clientHeight * 0.5

        // ~~~~ text pos
        var hx = ox - header.clientWidth * 0.5
        var hy = oy

        translate(txt, x, y)
        translate(shadow, sx, sy)
        translate(header, hx , hy)
    }

    var color = function () {
        var clr = colors[Math.floor(Math.random() * size)]

        txt.style.color = 
        squiggly.style.color = 'rgb(' + 
            clr[0] + ',' + 
            clr[1] + ',' + 
            clr[2] + 
        ')'

        shadow.style.color = 'rgb(' + 
            to[0] + ',' + 
            to[1] + ',' + 
            to[2] + 
        ')'

        to = colors[Math.floor(Math.random() * size)]

        setTimeout(color, Math.floor(Math.random() * 2000) + 3000)
    }

    var render = function (ts) {
        move(ts)
        frameId = requestAnimationFrame(render)
    }

    // let's kick it!
    color()
    frameId = requestAnimationFrame(render)
}