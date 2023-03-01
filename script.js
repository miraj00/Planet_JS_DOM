class planet{
    name; 
    inner; 
    diameter; 
    color;

    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}

let planetsArray = [
   new planet("Mercury", true, 3031.9, "#696969"),
   new planet("Venus", true, 7520.8, "#b89165"),
   new planet("Earth", true, 7917.5, "#5a5b86"),
   new planet("Mars", true, 4212.3, "#df8c4e"),
   new planet("Jupiter", false, 86881, "#f6a049"),
   new planet("Saturn", false, 72367, "#dcd3a1"),
   new planet("Uranus", false, 31518, "#b4d9df"),
   new planet("Neptune", false, 30599, "#456eff"),
]; 

// console.log(planetsArray.length);

// loop to log the name of each planet in the array.   - - - - - - - -  1
for ( var planetOne of planetsArray) { 
    console.log(planetOne.name);
}

// function that takes in array of planets  as a parameter 
//and returns the average diameter of planets in the array    - - - - -  2
logAvgDiameter(planetsArray);

function logAvgDiameter(Array1) {

    var sum = 0;
    for ( let i=0; i< Array1.length; i++) {
        sum += Array1[i].diameter;    
    }

    let avgDiameter= sum/Array1.length;
    console.log( "Average Diameter : " + avgDiameter);
}


//Add event handlers to the buttons so that the index variable
// is incremented or decremented and the <p> is updated with the new number. 
//The next button adds one to index. The previous button subtracts one from index.

var index = 0;

updatePlanetDisplay(index);


//previous button
var previousButton =document.getElementById("previous");
previousButton.addEventListener("click", ()=>{
 
    index--;

    let indVal = document.getElementById("indexValue");
    indVal.innerText = index;

    updatePlanetDisplay(index); 
    enableButtons(index);
});



//next button
var nextButton =document.getElementById("next");
nextButton.addEventListener("click", ()=>{

    index++;

    let indVal = document.getElementById("indexValue");
    indVal.innerText = index;
    
    updatePlanetDisplay(index);
    enableButtons(index);
});


// updatePlanetDisplay
function updatePlanetDisplay(index) {

    // name display
    let newName  = planetsArray[index].name;
     let indPlanetName = document.getElementById("indvplanetName");
     indPlanetName.innerText = newName;   


    // core display
     let core  = planetsArray[index].inner;
     let innerCore = document.getElementById("inner");
     if(core === true){ 
        newCoreval = "Inner Planet"
     } else {
        newCoreval = "Outer Planet"
     }   
     innerCore.innerText = newCoreval; 
     

     // circle color
     let newShape = document.getElementById("shape");
     newShape.style.backgroundColor = planetsArray[index].color ;

    // diameter display
     let diameterVal  = planetsArray[index].diameter;  
     let newDiamterVal = diameterVal/100;
     newShape.style.width = `${newDiamterVal}px`;
     newShape.style.height = `${newDiamterVal}px`;

}

function enableButtons(i) {

     var prev = document.getElementById('previous');
     var next = document.getElementById('next');
    
    if ( i <= 0){
       prev.disabled = true;
       next.disabled = false;
    
    }  else if ( i < planetsArray.length-1 )  {
        next.disabled = false;
        prev.disabled = false;
    
    }  else  {   
       prev.disabled = false;
       next.disabled = true; 
    } 
 

  }