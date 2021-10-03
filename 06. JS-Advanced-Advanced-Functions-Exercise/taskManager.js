function solve() {
    const taskName = document.querySelectorAll('input')[0];
    const description = document.querySelector('textarea');
    const dueDate = document.querySelectorAll('input')[1];
    const addBtn = document.getElementById('add').addEventListener('click', addTask);

    const openSection = document.querySelectorAll('section')[1].children[1];
    const inProgressSection = document.getElementById('in-progress');
    const completedSection = document.querySelectorAll('section')[3].children[1];
    
    function addTask(ev) {
        ev.preventDefault();

        if (taskName.value != '' && description.value != '' && dueDate.value != '') {
            let task = document.createElement('article');
            task.innerHTML = 
                `<h3>${taskName.value}</h3>
                <p>Description: ${description.value}</p>
                <p>Due Date: ${dueDate.value}</p>
                <div class="flex">
                    <button class="green">Start</button>
                    <button class="red">Delete</button>
                </div>`;

            const startBtn = task.querySelectorAll('div button')[0].addEventListener('click', startTask);
            const deleteBtn = task.querySelectorAll('div button')[1].addEventListener('click', deleteTask);
            openSection.appendChild(task);

            taskName.value = '';
            description.value = '';
            dueDate.value = '';
        }
    };


    function startTask(ev) {
        const taskTitle = ev.target.parentElement.parentElement.querySelector('h3').textContent;
        const taskDescription = ev.target.parentElement.parentElement.querySelectorAll('p')[0].textContent;
        const taskDueDate = ev.target.parentElement.parentElement.querySelectorAll('p')[1].textContent;

        let task = document.createElement('article');
        task.innerHTML = 
            `<h3>${taskTitle}</h3>
            <p>${taskDescription}</p>
            <p>${taskDueDate}</p>
            <div class="flex">
                <button class="red">Delete</button>
                <button class="orange">Finish</button>
            </div>`;

        const deleteBtn = task.querySelectorAll('div button')[0].addEventListener('click', deleteTask);
        const finishBtn = task.querySelectorAll('div button')[1].addEventListener('click', finishTask);
        inProgressSection.appendChild(task);

        ev.target.parentElement.parentElement.remove();
    };

    function deleteTask(ev) {
        ev.target.parentElement.parentElement.remove();
    };

    function finishTask(ev) {
        const taskTitle = ev.target.parentElement.parentElement.querySelector('h3').textContent;
        const taskDescription = ev.target.parentElement.parentElement.querySelectorAll('p')[0].textContent;
        const taskDueDate = ev.target.parentElement.parentElement.querySelectorAll('p')[1].textContent;

        let task = document.createElement('article');
        task.innerHTML = 
            `<h3>${taskTitle}</h3>
            <p>${taskDescription}</p>
            <p>${taskDueDate}</p>`


        completedSection.appendChild(task);
        ev.target.parentElement.parentElement.remove();
    };
}