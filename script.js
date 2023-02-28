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

for ( var planetone of planetsArray) {
    console.log(planetone);
}