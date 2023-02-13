function click() {
    let col = document.getElementBy('lin');

    col.classList.add('red');

}
document.getElementById('btn').addEventListener('click', submitClicked)

function mouseover() {
    let circ = document.getElementByTagName('circle');

    circ.classList.toggle('orange');

}
document.getElementById('circ').addEventListener('mouseover', mouseover)
function mouseout() {
    let circ = document.getElementById('circ');

    circ.classList.remove('orange');
}
document.getElementById('circ').addEventListener('mouseout', mouseout)

