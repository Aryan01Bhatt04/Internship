let recordList = new Array();
recordList = JSON.parse(localStorage.getItem("records"));
console.log( recordList);

    

const t_body = document.getElementById("table-body");
window.addEventListener('load',function(){
    
    
    for( elements of recordList ){
        const row = document.createElement("tr");
            t_body.appendChild(row);
            for (const property in elements) {
                // console.log(`${property}: ${elements[property]}`);
                let columnField = document.createElement("td");
                let columnText = document.createTextNode(`${elements[property]}`);
                columnField.appendChild(columnText);
                row.append(columnField);
              }
        }
        
    })
