// completes actions when points are clicked
function click() {
    // changes border
    this.classList.toggle('border');

    // gets coordinates to print out
    let xCoor = (this.getAttribute("cx") - 5) / 40
    let yCoor = 10 - ((this.getAttribute("cy") - 5) / 40)

    // prints out text
    let newText = "The last point clicked was: (" + xCoor + ", " + yCoor + ")";
    let buttonDiv = document.getElementById("lastPt");
    buttonDiv.innerHTML = newText

}

// sets point id
pointId = 5
// adds new points based on input
function submitPoint() {
    // gets new coordinate points
    let xCoor = (document.getElementById("x-coor").value * 40) + 5
    let yCoor = ((10 - document.getElementById("y-coor").value) * 40) + 5

    // adds point to svg and resets Event Listeners
    let plot = document.getElementById("plot");
    plot.innerHTML += "<circle class='point' id='" + pointId + "' cx='" + xCoor + "' cy='" + yCoor + "' r='7'></circle>"
    addListeners()

    // updates point id
    pointId += 1
}
// Event Listener for point adder button
document.getElementById('addPoint').addEventListener('click', submitPoint)

// functino to add event listeners for all points
function addListeners() {
    let pts = Array.from(document.getElementsByClassName("point"))
    for (let i = 0; i < pts.length; i++) {
        pts[i].addEventListener('click', click)
    }
}
// adds event listeners initially
addListeners()

