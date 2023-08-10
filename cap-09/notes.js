window.onload = init;

function init() {
    var button = document.getElementById("add_button");
    button.onclick = createSticky;

    let stickiesArray = getStickiesArray();

    for (let i = 0; i < stickiesArray.length; i++) {
        let key = stickiesArray[i];
        let value = localStorage[key];

        addStickyToDOM(value);
    }
};

// add the notes in stickies
function addStickyToDOM(value) {
    let stickies = document.getElementById("stickies");

    let sticky = document.createElement("li");

    let span = document.createElement("span");

    span.setAttribute("class", "sticky");
    span.innerHTML = value;

    sticky.appendChild(span);
    stickies.appendChild(sticky);
};

function createSticky() {
    var stickiesarray = getStickiesArray();

    var value = document.getElementById("note_text").value;

    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();


    localStorage.setItem(key, value);
    stickiesarray.push(key);
    localStorage.setItem("stickiesarray", JSON.stringify(stickiesarray));

    addStickyToDOM(value);
};

function getStickiesArray() {
    let stickiesArray = localStorage.getItem("stickiesarray");

    if (!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesarray", JSON.stringify(stickiesArray));
    } else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray
}