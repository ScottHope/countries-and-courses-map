//Create variables, add properties and methods
let x = 51.509865,
    y = -0.118092,
    mapdiv = document.getElementById("map"),
    button = document.getElementById("btn"),
    club = document.getElementById("club"),
    country = document.getElementById("country"),
    tables = document.getElementById("tables"),
    trs = document.querySelectorAll("tr:not(.noHighlight)");
    
for (i = 0; i < trs.length; i++) {
    trs[i].addEventListener("click", ctryselect);
}
button.addEventListener("click", change);

//Create map
function initMap() {
    var location = { lat: x, lng: y };
    map = new google.maps.Map(mapdiv, {
        zoom: 4,
        center: location,
        mapTypeId: "roadmap",
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy",
        controlSize: 25
    });
    info = new google.maps.InfoWindow({ position: location });
    info.addListener("closeclick", removeHighlight);
}

//Deselect country/club highlight on closing info window
function removeHighlight() {
    document.querySelector(".select").classList.remove("select");
}

//Toggle country and course lists
function change() {
    club.classList.toggle("hidden");
    country.classList.toggle("hidden");
    club.classList.contains("hidden") ? this.textContent = "Show Golf Courses" : this.textContent = "Show Countries";
}

//Pan map and move marker
function ctryselect(ev) {
    (this.children[2].textContent);
    if (document.querySelector(".select")) document.querySelector(".select").classList.remove("select");
    this.classList.add("select");
    x = parseFloat(this.children[4].textContent);
    y = parseFloat(this.children[5].textContent);
    map.panTo({ lat: x, lng: y });
    info.setPosition({ lat: x, lng: y });
    info.setContent(`${this.children[2].textContent} ${this.children[3].textContent}`);
    info.setMap(map);
}