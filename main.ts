let waarde_kompas = input.compassHeading()
basic.forever(function () {
    if (waarde_kompas > 315 && waarde_kompas < 360 || waarde_kompas > 0 && waarde_kompas < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (waarde_kompas < 136 && waarde_kompas > 46) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (waarde_kompas > 136 && waarde_kompas < 226) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (waarde_kompas > 226 && waarde_kompas < 316) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
