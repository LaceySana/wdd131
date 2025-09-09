const input = document.getElementById("favchap");
const addButton = document.querySelector("button");
const chapList = document.getElementById("list");

const li = document.createElement("li");
const delButton = document.createElement("button");

li.innerHTML = input.value;
delButton.innerHTML = "❌";

li.append(delButton);

chapList.append(li);