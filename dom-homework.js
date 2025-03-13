const div = document.getElementById('myDiv');

let h1 = document.createElement('h1');
h1.innerHTML = "Welcome to DOM homework";
h1.setAttribute('class', 'highlight');
div.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = "This is your first DOM homework assignment";
div.appendChild(p1);

const ul = document.createElement("ul")
div.appendChild(ul)

li1 = document.createElement("li")
li1.innerHTML = "Elden Ring"
ul.appendChild(li1)

li2 = document.createElement("li")
li2.innerHTML = "Terraria"
ul.appendChild(li2)

li3 = document.createElement("li")
li3.innerHTML = "Subnautica"
ul.appendChild(li3)

let item_counter = 0

button = document.createElement("button")
button.innerHTML = "Add List Item"
document.body.appendChild(button)

button.addEventListener('click', function() {
    item_counter += 1
    let newListItem = document.createElement("li")
    newListItem.innerHTML = ("New List Item: " + item_counter)
    ul.appendChild(newListItem)
})

div.addEventListener('click', function() {
    div.style.backgroundColor = '#'+Math. floor(Math. random()*16777215). toString(16);;
})

