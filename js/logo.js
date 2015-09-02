window.onload = function() {
    var translate = function (el, x, y) {
        var style = 'translate(' + x + 'px, ' + y + 'px)'

        el.style.webkitTransform = style
        el.style.MozTransform = style
        el.style.transform = style
    }

    var colors = [
        "#F433FF",
        "#00E11E",
        "#E100BB",
        "#00D4E1",
        "#DD0048",
        "#F3F315"
    ]

    var size = colors.length
    var nextColorId = Math.floor(Math.random() * size)
    
    var txt = document.getElementById('main')
    var shadow = document.getElementById('shadow')
    var squiggly = document.getElementById('dots')
    
    window.onresize = function () {
        var cx = window.innerWidth * 0.5
        var cy = window.innerHeight * 0.1

        if (cy - txt.clientHeight * 0.5 - 10 < 0)
            cy = txt.clientHeight * 0.5 + 10

        txt.style.left =      cx - txt.clientWidth * 0.5 + 'px'
        shadow.style.left =   cx - shadow.clientWidth * 0.5 - 5 + 'px'
        squiggly.style.left = cx - squiggly.clientWidth * 0.5 + 'px'

        txt.style.top =      cy - txt.clientHeight * 0.5 + 'px'
        shadow.style.top =   cy - shadow.clientHeight * 0.5 + 5 + 'px'
        squiggly.style.top = cy + txt.clientHeight + 'px'

        document.body.style["margin-top"] = 20 + 
            (cy + txt.clientHeight + squiggly.clientHeight) + 'px'
    }
    window.onresize()

    // sometimes needed 
    setTimeout(window.onresize, 25)

    var move = function () {
        var y = Math.random() * 16 - 8
        var x = Math.random() * 16 - 8

        translate(txt, x, y)
        translate(shadow, 
            Math.random() * 16 - 8, 
            Math.random() * 16 - 8)
        translate(squiggly, x, y)

        setTimeout(move, 4000)
    }

    var color = function () {
        var id = Math.floor(Math.random() * size)
        if (id === nextColorId)
            id = (nextColorId + 1) % size

        txt.style.color = 
        squiggly.style.color = colors[id]

        shadow.style.color = colors[nextColorId]

        nextColorId = Math.floor(Math.random() * size)
        setTimeout(color, Math.floor(Math.random() * 2000 - 1000) + 4000)
    }

    // let's kick it!
    color()
    move()
}