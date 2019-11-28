const canvasW = document.getElementById('tela').clientWidth;
const canvasH = document.getElementById('tela').clientHeight;

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// split height randomly by n parts
// https://stackoverflow.com/questions/18662125/javascript-generating-6-random-percentages-that-add-up-to-100
function generateProportion (parts) {
    let max = 100,
        segmentMax = 60,
        tempResults = [],
        remaining = max,
        segments = parts,
        finalResults = [];
    //create a series of random numbers and push them into an array
    for (let i = 1; i <= segments; i++) {
        let r = Math.random() * segmentMax;
        if (i === segments) {
            // the final segment is just what's left after the other randoms are added up
            r = remaining;
        }
        tempResults.push(r); // subtract them from the total
        remaining -= r; // no segment can be larger than what's remaining
        segmentMax = remaining;
    }
    //randomly shuffle the array into a new array
    while (tempResults.length > 0) {
        let index = Math.floor(Math.random() * tempResults.length);
        finalResults = finalResults.concat(tempResults.splice(index, 1));
    }
    return finalResults;
}

function createComp( bckMin, bckMax, divMin, divMax, circle = false, palette, imgUrl ) {

    // Image
    document.getElementById("imageholder").style.backgroundImage = "url('" + imgUrl + "')";

    // Background
    bckCount = rnd(bckMin, bckMax); // nr of stripes in the back
    bckCountParts = generateProportion (bckCount); // stripes should fill all height
    
    for (i = 0; i <= bckCount; i++) {
        let backDiv = document.createElement('div');
        backDiv.id = 'backDiv' + i;
        backDiv.className = 'back';
        backDiv.style.height = bckCountParts[i] + "%";
        backDiv.style.backgroundColor = palette[rnd(0, palette.length - 1)];
        document.getElementById("back").appendChild(backDiv);
    }

    // Random divs
    divsCount = rnd(divMin, divMax); 
    for (i = 1; i <= divsCount; i++) {
        let frontDiv = document.createElement('div');
        frontDiv.id = 'frontDiv' + i;
        frontDiv.className = 'shape';

        if (circle) {
            frontDiv.style.width = frontDiv.style.height = rnd(10, 40) + "%";
            frontDiv.style.borderRadius = "50%";
        } else {
            frontDiv.style.width = rnd(2, 80) + "%";
            frontDiv.style.height = rnd(2, 10) + "%";
        }
        frontDiv.style.left = rnd(-15, 95) + "%";
        frontDiv.style.top = rnd(-5, 95) + "%";
        frontDiv.style.opacity = (rnd(50, 90) / 100);
        frontDiv.style.zIndex = rnd(1, 4);
        frontDiv.style.backgroundColor = palette[rnd(0, palette.length - 1)];
        document.getElementById("divs").appendChild(frontDiv);
    }

}
