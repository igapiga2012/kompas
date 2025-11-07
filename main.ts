let waarde_kompas = 0
waarde_kompas += 90
basic.forever(function () {
    if (waarde_kompas > 44 && waarde_kompas < 136) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (waarde_kompas > 134 && waarde_kompas < 226) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (waarde_kompas > 316 && waarde_kompas < 224) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (waarde_kompas > 46 && waarde_kompas < 314) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
