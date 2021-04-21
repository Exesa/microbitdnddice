input.onButtonPressed(Button.A, function () {
    drolling = 1
    music.playMelody("G B A G C5 B A C5 ", 300)
    basic.showNumber(randint(1, dlist[dtype]))
    basic.pause(2000)
    basic.clearScreen()
    drolling = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("STR:" + randint(3, 18) + " DEX:" + randint(3, 18) + " CON:" + randint(3, 18) + " INT:" + randint(3, 18) + " WIS:" + randint(3, 18) + " CHA:" + randint(3, 18))
})
input.onButtonPressed(Button.B, function () {
    if (dtype != 5) {
        dtype += 1
        basic.clearScreen()
    } else {
        dtype = 0
    }
})
let drolling = 0
let dlist: number[] = []
let dtype = 0
dtype = 0
dlist = [4, 6, 8, 10, 12, 20]
drolling = 0
basic.forever(function () {
    while (drolling == 0) {
        basic.showNumber(dlist[dtype])
    }
})
