input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += -1
    if (x < 0) {
        x = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
})
