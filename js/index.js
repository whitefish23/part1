const addNoteButton = document.querySelector(".button-add");
const inputText = document.querySelector(".input-line");
const noteZone = document.getElementById("noteZone");
const noteBlock = document.querySelector(".note");

if (noteZone.childElementCount === 0) {
  noteBlock.style.display = "none";
}

addNoteButton.addEventListener("click", function () {

  const text = inputText.value;

  if (text.trim() !== "") {
    const columnCard = document.createElement("div");
    columnCard.classList.add("column-card");

    const columnText = document.createElement("div");

    columnText.classList.add("column-text");
    columnText.textContent = text;

    const columnCross = document.createElement("div");
    
    columnCross.classList.add("column-cross");

    columnCross.addEventListener("click", function () {
      const parentCard = this.parentElement;
      if (parentCard) {
        noteZone.removeChild(parentCard);

        if (noteZone.childElementCount === 0) {
          noteBlock.style.display = "none";
        }
      }
    });

    const crossIcon = document.createElement("img");
    crossIcon.src = "/svg/cross-icon.svg";

    columnCross.appendChild(crossIcon);
    columnCard.appendChild(columnText);
    columnCard.appendChild(columnCross);

    noteZone.appendChild(columnCard);

    noteBlock.style.display = "block";

    inputText.value = "";
  }
});

