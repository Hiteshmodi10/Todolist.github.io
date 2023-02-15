let submitButton = document.querySelector(".submit");
let input = document.querySelector(".input-text");
let container = document.querySelector(".container");
let alert = document.querySelector(".alert");

//edit item
let editElement;
let editFlag = false;

submitButton.addEventListener("click", addTodo);
// input.addEventListener("keypress",addTodo );
function addTodo(e) {

  if ((input.value !== "" && !editFlag) || e.key == "Enter") 
  {
    alert.classList.add("hidden");

    var list1 = document.createElement("div");

    let textNode = document.createTextNode(input.value);

    list1.appendChild(textNode);

    container.appendChild(list1);

    list1.classList.add("todo-list");

    list1.innerHTML = `
    <p class="text" >${input.value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>Edit
    </button>
    <button type="button" class="remove-btn">
      <i class="fas fa-trash"></i>remove
    </button>
  </div>`;

    const deleteBtn = list1.querySelector(".remove-btn");

    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });

    var editBtn = list1.querySelector(".edit-btn");

    input.value =""

    editBtn.addEventListener("click", (e) => {
      editElement = e.currentTarget.parentElement.previousElementSibling;
      input.value = editElement.innerHTML;
      submitButton.textContent = "Done";
      editFlag = true;
    });

  }
   else if ((input.value !== "" && editFlag) || e.key == "Enter") {
    editElement.innerHTML = input.value;
    input.value = "";
    editFlag = false;
    submitButton.textContent = "submit";
  }
   else {
    alert.textContent = "please enter a value";
    alert.classList.remove("hidden");
  }
}
