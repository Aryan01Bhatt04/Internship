let detailList = [];
detailList = JSON.parse(localStorage.getItem("records"));

const editMode = (index, event) => {
    const targetRow = event.target.closest("tr")
    targetRow.querySelectorAll('.cells').forEach((cell) => {
        const editElement = document.createElement('input');
        editElement.id = 'editInput';
        editElement.setAttribute('value',`${cell.innerHTML}`)
        cell.addEventListener('click', () => {
            editElement.value = cell.innerHTML;
            cell.replaceWith(editElement);
        });
        editElement.addEventListener('blur',() => {
            cell.innerHTML = editElement.value;
            editElement.replaceWith(cell);
        });
    })
    const editState = document.querySelectorAll('#operations')[index];
    editState.innerHTML = `
        <button id="saveButton" onclick="saveRecord(${index},event)"><img src="icons/checked.png" alt="editing"></button>
        <button id="cancelButton" onclick="cancelOperation(${index},event)"><img src="icons/cancel.png" alt="delete"></button>`;
}

const cancelOperation = (index, event) => {
    let currentRecord = Object.values(detailList[index]);
    console.log(currentRecord);
    const targetRow = event.target.closest("tr");
    targetRow.querySelectorAll('.cells').forEach((cell, index) => {
        cell.innerText = currentRecord[index];
    })
    const cancelMessage = document.createElement('h3');
    cancelMessage.className = 'cancelMessage';
    cancelMessage.innerText = 'Editing Cancelled'
    document.querySelector('#table-container').insertBefore(cancelMessage, document.querySelector('.main-table'));
    localStorage.setItem('records', JSON.stringify(detailList));
    setTimeout(() => {
        cancelMessage.style.display = 'none'
    },4000)
    const editState = document.querySelectorAll('#operations')[index];
    editState.innerHTML = `
            <button id="editRecord" onclick="editMode(${index},event)"><img src="icons/editing.png" alt="editing"></button>
            <button id="deleteRecord"><img src="icons/bin.png" alt="delete"></button>`;
}

const saveRecord = (index, event) => {
    let currentRecord = detailList[index];
    console.log("before: ",currentRecord);
    const cellValues = [];
    const targetCells = event.target.closest('tr').querySelectorAll('.cells').forEach((cell) => {
        cellValues.push(cell.innerText);
    })
    let indexValue = 0;
    for (let property in currentRecord){
        currentRecord[property] = cellValues[indexValue];
        indexValue++;
    }
    detailList[index] = currentRecord;
    const successMessage = document.createElement('h3');
    successMessage.className = 'successMessage';
    successMessage.innerText = 'Record Edited Successfully'
    document.querySelector('#table-container').insertBefore(successMessage, document.querySelector('.main-table'));
    localStorage.setItem('records', JSON.stringify(detailList));
    setTimeout(() => {
        successMessage.style.display = 'none'
    },4000)
    const editState = document.querySelectorAll('#operations')[index];
    editState.innerHTML = `
            <button id="editRecord" onclick="editMode(${index},event)"><img src="icons/editing.png" alt="editing"></button>
            <button id="deleteRecord"><img src="icons/bin.png" alt="delete"></button>`;
}

const tableCreation = () => {
    detailList.forEach((record, index) => {
        console.log(record, index);
        const rowElement = tableBody.insertRow();
        Object.values(record).forEach(value => {
            const newCell = rowElement.insertCell();
            newCell.className = 'cells'
            newCell.textContent = value;
        });
        const actionCell = rowElement.insertCell();
        actionCell.className = 'opr';
        actionCell.innerHTML = `<div id="operations">
            <button id="editRecord" onclick="editMode(${index},event)"><img src="icons/editing.png" alt="editing"></button>
            <button id="deleteRecord"><img src="icons/bin.png" alt="delete"></button>
        </div>`

    })
}

const tableBody = document.querySelector("#table-body");
window.addEventListener('load',() => {
    tableCreation();
    const deleteOperation = document.querySelectorAll("#deleteRecord");
    deleteOperation.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            const targetRow = event.target.closest("tr");
            targetRow.childNodes
            targetRow.remove();
            detailList.splice(index, 1);
            localStorage.setItem('records', JSON.stringify(detailList));
        });
    })
});

