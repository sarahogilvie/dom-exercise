// TASK 1


// 1. Access HTML element with id tag-line.

var taglineElement = document.getElementById("tag-line");
//console.log(tagline);


// 2. Access all headings that belong to div with the class name bg-main-content.
var headings = document.querySelectorAll(".bg-main-content h2");
console.log(headings);


// 3. Create the variable collect and assign it with content of tag-line.
var collect = document.getElementById("tag-line").innerHTML + "\n-------------------------------------------\n";


// 4. Loop through the array of headings and append the content of each heading to variable collect


for (var i = 0; i < headings.length; i += 1) {
    var collect = collect + headings[i].firstChild.nodeValue + "\n";
}


// 5. After the loop, use alert to print collect
alert(collect);







// TASK 2


// 1. Access 13th div with class name box that belongs to div with the class name bg-main-content. 
//You can name the variable when_to_launch.
    
var when_to_launch = document.querySelector(".bg-main-content .box:nth-child(13)");




// 2. Use property children to "scoop" in array all HTML elements that belong to that div.

var scoop = when_to_launch.children;



// 3. Create the variable collect and assign it with content of heading that belongs to gotten array.

var collect = scoop[0].innerHTML;


// 4. Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.


for (var j = 1; j < scoop.length; j += 3) {
    var collect1 = collect + "\n------------------------\n" + scoop[j].innerHTML;
}



// 5. After the loop, use alert to print collect

alert(collect1);























