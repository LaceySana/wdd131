const input = document.getElementById("favchap");
const addButton = document.querySelector("button");
const chapList = document.getElementById("list");

addButton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        
        li.textContent = input.value;
        delButton.textContent = "❌";
        li.append(delButton);
        chapList.append(li);

        input.value = "";
        
        delButton.addEventListener("click", () => {
            chapList.removeChild(li);
            input.focus();
        });
    }
    input.focus();
});