function iDoLoveYou() {
    document.write('I LOVE YOU Tooooo <3')
}
function random() {
    let x = Math.round(Math.random() * window.innerWidth)
    let y = Math.round(Math.random() * window.innerHeight)
    document.getElementById('no').style.left = x + 'px'
    document.getElementById('no').style.top = y + 'px'
}