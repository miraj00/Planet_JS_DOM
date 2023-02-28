class planet{
    name; 
    inner; 
    diameter; 
    color;   
​
    //Instead of the class name JS uses the constructor keyword, otherwise same idea as Java
    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}
​
//Note the lack of the new keyword here, other constructor calls are the same, with one caveat 
//There's no typing on anything so you have to remember what type each property is 
// let p = planet("Mercury", true, 3031.9, "#696969"); 
 ​

//Push simply puts the element at the end of the array
// planetsArray.push(p); 
​
//So a big difference from Java is that JS uses properties instead of getters and setters. Propeties are 
//Variables that exist as part of a class/object in Javascript, the idea being is that they automatically handle 
//Getters and setters for you. 
​
//This is the equivalent of setName()
// p.name = "Planet Tommy"; 
​
//This is the equivalent of getName()
// console.log(p.name); 


let planetsArray = [
    planet("Mercury", true, 3031.9, "#696969"),
    planet("Venus", true, 7520.8, "#b89165"),
    planet("Earth", true, 7917.5, "#5a5b86"),
    planet("Mars", true, 4212.3, "#df8c4e"),
    planet("Jupiter", false, 86881, "#f6a049"),

    planet("Saturn", false, 72367, "#dcd3a1"),
    planet("Uranus", false, 31518, "#b4d9df"),
    planet("Neptune", false, 30599, "#456eff"),

]; 
​