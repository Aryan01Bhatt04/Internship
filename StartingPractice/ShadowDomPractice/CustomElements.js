let count = 1;
class Todo extends HTMLElement{
    constructor() {
        super()
    }
    connectedCallback(){
        this.innerHTML = `
        <label>
            <input class="todo-checkbox" type="checkbox" />
            Todo ${count}
        </label>
        <br>
        `
        this.className = "todo"
        this.querySelector(".todo-checkbox").addEventListener('click',(e) => {
            if(e.target.checked){
                alert("You completed a task")
            }
            else{
                alert("You have not completed the task");
            }
        })
    }
}
customElements.define("to-do-checkbox",Todo);
const AddButton = document.querySelector("#Add");
AddButton.addEventListener('click',(event) =>{
    const newCheckBox = document.createElement("to-do-checkbox");
    document.body.appendChild(newCheckBox);
    count++;
})

// const clicked = document.querySelector(".todo");
// clicked.addEventListener('click',() => {
//     console.log("hello");
// })