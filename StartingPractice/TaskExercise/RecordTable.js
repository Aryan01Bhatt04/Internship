let detailList = [];
detailList = JSON.parse(localStorage.getItem("records"));
// console.log(detailList);

const tableBody = document.querySelector("#table-body");
window.addEventListener('load',() => {
    for (let record of detailList){
        const row = document.createElement("tr");
        tableBody.appendChild(row);
        for (let key in record){
            const entry = document.createElement("td");
            entry.innerText = `${record[key]}`
            row.appendChild(entry);
        }
    }
})