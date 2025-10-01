const input = document.getElementById("favchap");
const addButton = document.querySelector("button");
const chapList = document.getElementById("list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

addButton.addEventListener("click", () => {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let delButton = document.createElement("button");
    
    li.textContent = item;
    delButton.textContent = "❌";
    li.append(delButton);
    chapList.append(li);

    delButton.addEventListener("click", () => {
        chapList.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};
        
function setChapterList(array) {
    localStorage.setItem("favChaptersList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem("favChaptersList"));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, -1);
    chaptersArray = chaptersArray.filter((chap) => chap !== chapter);
    setChapterList(chaptersArray);
}
