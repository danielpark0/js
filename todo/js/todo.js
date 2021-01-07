let todoInputHandler = function () {
    //todos 배열에 {todoNum은 todos.Length+1, title: #todoInput 에 입력된 Value 값 추가}
    //todoList rendering
    displayList();
}

let todoDeleteHandler = function (todoNum) {
    //todo배열에서 todoNum에 해당하는 데이터 삭제
    const index = todos.findIndex(todo => todo.todoNum==todoNum);
    todos.splice(index, 1);
    //todoList rendering
    displayList();
}

let todoClear = function () {
    //todos 배열 empty
    todos = [];
    //todoList rendering
    displayList();
}

function displayList() {
    const todoList = document.getElementById("todoList");
    let dataList = "";
    todos.forEach(todo => {
        dataList += `
                    <li class="shadow">
                        <i aria-hidden="true" class="checkBtn fa fa-check"></i>
                        ${todo.title}
                        <span type="button" class="removeBtn" onClick="todoDeleteHandler(${todo.todoNum})">
                            <i aria-hidden="true" class="fa fa-trash-o"></i>
                        </span>
                    </li>
                    `
    });
    todoList.innerHtml = dataList;
}