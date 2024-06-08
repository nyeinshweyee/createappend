var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Evan.";
favoriteEl.textContent = "My favorite foods are:";
// Add ordered list items containing four favorite foods
let listItems = document.querySelectorAll('li');

li1.textContent = "Cat Food  ";
li2.textContent = "Fish ";
li3.textContent = "Chicken ";
li4.textContent = "Rice";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);;

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "https://st.depositphotos.com/2337587/2728/i/950/depositphotos_27285599-stock-photo-wild-kitten-in-java-indonesia.jpg");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// Add styling to list element
listEl.setAttribute("style", "background:#6f4417; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:grey; background: #fbf9ef; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:grey; background: #fbf9ef; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:grey; background: #fbf9ef; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:grey; background: #fbf9ef; padding: 5px; margin-left: 35px;");

