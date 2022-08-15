let listItems = document.querySelectorAll('.list-item');
//**var */

const checkTask = (checkbox, label) => {
    checkbox.addEventListener('change', (e) => {
        let checked = e.target.checked;
        // console.log(checked);
        if (checked) {
            label.style.textDecoration = 'line-through';
        }
        else {
            label.style.textDecoration = 'none';
        }

    });
}

listItems.forEach(item => {
    // console.log(item);
    let children = item.children

    let checkbox = children[0];
    let label = children[1];

    checkTask(checkbox, label)
});
let todoListInput = document.querySelector('.todo-list__input');
let todoListAddButton = document.querySelector('.todo-list__btn');

todoListAddButton.addEventListener('click', () => {
    let listItems = document.querySelectorAll('.list-item');
    let nextIndex = listItems.Length + 1;
    let inputValue = todoListInput.value
    if (inputValue) {

        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('list-item__checkbox');
        checkbox.id = `item${nextIndex}`;
        let label = document.createElement('label');
        label.classList.add('list-item__label');
        label.htmlFor = `item${nextIndex}`;
        label.innerText = inputValue;
        listItem.append(checkbox, label);
        checkTask(checkbox, label);
        let list = document.querySelector('.list');
        list.appendChild(listItem);
        todoListInput.value = '';
    }
}

)