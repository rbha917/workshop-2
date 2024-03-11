# workshop-2

### Link to sketch: https://rbha917.github.io/workshop-2/

## setTimeout
- setTimeout (function, time in ms) = execute  function at a specific time e.g. (makeRedSquare, 2000)
- function makeRedSquare(){
	fill(255, 0, 0)
	rect(random(0, 300), random(0,300), 60, 60);
}
- function mousePressed 
 	setTimeout(makeHouse, 2000, random(0,width), random(0,height)) will execute function when mouse is pressed
- add the setTimeout into the makeHouse function and it will create a loop

## setInterval
- setInterval (function, time in ms) = continously does the function
- to stop the function, add it into a variable e.g.
	let countInterval = setInterval(makeRedSquare, 1000)
- let counter = 0
 function makeRedSquare(){
	fill(255, 0, 0)
	rect(random(0, 300), random(0,300), 60, 60);
	counter++
	if (counter > 5){
	clearInterval(countInterval)
	counter = 0;
	}
}

## Experimenting
- point(x, y) = position, stroke(colour), strokeWeight(z) = size
- stroke('purple') can be used for colours

- Error fixed using chatgpt: setTimeout would not work with icecream function under mousePressed so it added in a function after setTimeout to make it work
