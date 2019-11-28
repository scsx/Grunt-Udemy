// REDRAW
function reDraw() {
    removeElementsByClass("back");
    removeElementsByClass("shape");
    createComp( bckMin, bckMax, divMin, divMax, circle, palette, imgUrl );
}

// INITIAL DRAW
reDraw();

// delete elements
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Choose color palette
let palEntries = Object.entries(allPalettes);
for (i = 0; i < palEntries.length; i++) {
    let palName = palEntries[i][0];
    let palColors = palEntries[i][1];
    let tempHTML = `
    <div class="column col-3" id="colorPalette_${i}">
        <div class="card">
            <div class="card-image">
                <ul>
                    ${palColors.map(color => 
                        `<li style="background-color: ${color};"></li>`
                    ).join('')}
                </ul>
            </div>
            <div class="card-header">
                <div class="card-title">${palName}</div>
            </div>
            <div class="card-footer">
                <a href="#close" class="btn btn-sm btn-success setpalette" data-palette="${palName}">Choose</a>
            </div>
        </div>
    </div>
    `;

    document.getElementById("colorsGrid").innerHTML += tempHTML;
}

let allButtons = document.querySelectorAll('.setpalette');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        let thisPalette = this.dataset.palette;
        palette = allPalettes[thisPalette];
        reDraw();
    });
}

// Choose image
let newPath;
let imageRadios = document.querySelectorAll('[name="imageurl"]');
for (let i = 0; i < imageRadios.length; i++) {
    imageRadios[i].addEventListener('change', function() {
        newPath = imageRadios[i].nextSibling.nextSibling.children[0].src;
    });
}
document.getElementById("chooseImage").onclick = function() { 
    let imagePath = document.getElementById('imagePath').value;
    if (imagePath != null && imagePath != "") {
        newPath = imagePath;
    }
    imgUrl = newPath;
    document.getElementById('imagePath').value = "";
    reDraw();
}

// shape
let shapeRadios = document.querySelectorAll('[name="shape"]');
for (var i = 0; i < shapeRadios.length; i++) {
    shapeRadios[i].addEventListener('change', function() {
        circle = !circle;
    });
}

// img position
document.getElementById("imgPos").onchange = function() {
    let newImgPos = this.options[this.selectedIndex].text;
    document.getElementById("imageholder").style.backgroundPosition = newImgPos;
}

// img size
document.getElementById("imgSize").onchange = function() {
    let newImgSize = this.options[this.selectedIndex].text;
    document.getElementById("imageholder").style.backgroundSize = newImgSize;
}

// 100%
document.getElementById("w100").onclick = function() {
    document.getElementById("tela").classList.toggle("fullwidth");
}

// overflow hidden 
document.getElementById("overflow").onclick = function() {
    document.getElementById("divs").classList.toggle("show");
}

// sliders
document.getElementById("backMin").oninput = function() {
    this.setAttribute('value', this.value);
    bckMin = this.value;
}
document.getElementById("backMax").oninput = function() {
    this.setAttribute('value', this.value);
    bckMax = this.value;
}
document.getElementById("frontMin").oninput = function() {
    this.setAttribute('value', this.value);
    divMin = this.value;
}
document.getElementById("frontMax").oninput = function() {
    this.setAttribute('value', this.value);
    divMax = this.value;
}

// MAIN ACTION
document.getElementById("mainRedraw").onclick = function() {
    reDraw();
}