const Fname = document.getElementById("Fname");
    Fname.addEventListener('blur',function(e){
        const messageNode = document.getElementById("NameError");
        if(/^[a-zA-Z]{2,}\S$/.test(e.target.value))
    {
        messageNode.style.color = "darkgreen";
        messageNode.innerText = "Valid Name";
    }
    else{
        messageNode.innerText = "Enter Valid Name";
    }
    return;
});

const Email = document.getElementById("Email");
    Email.addEventListener('blur',function(e){
        const messageNode = document.getElementById("EmailError");
        if(/^[A-Za-z0-9]+(?:[._][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(e.target.value))
        {
                messageNode.style.color = "darkgreen";
                messageNode.innerText = "Valid Email";
        }
        else{
            messageNode.innerText = "Enter Valid Email";
        }
});


const PhnNo = document.getElementById("PhnNo");
    PhnNo.addEventListener('blur',function(e){
        const messageNode = document.getElementById("ContactError");
        if(/^[0-9]{10}$/.test(e.target.value))
        {
                messageNode.style.color = "darkgreen";
                messageNode.innerText = "Valid Phone Number";
        }
        else{
            messageNode.innerText = "Enter Valid Phone Number";
        }
});


function validateDetails(e){
    e.preventDefault();
    let unfilled = false;
    const Address = document.getElementById("AddressBox").value;
    const Date = document.getElementById("DateField").value;
    const Title = document.getElementById("Prof_Details").value;
    const Experience = document.getElementById("Experience").value;
    if ((/^(Address)$/.test(Address)) && (Date == "") && (Title == "") && (/^(Experience)$/.test(Experience))) {
        unfilled = true;
    }

    if(unfilled == true ){
        const validateMessage = document.getElementById("validationError");
        validateMessage.innerText = "Fill all the details"
    }
    else{
        submitDetails(e);
    }
}

let recordList = new Array();

function submitDetails(e){
    e.preventDefault();
    let fieldList = {
        "Fullname" : document.getElementById("Fname").value +" "+document.getElementById("Lname").value,
        "Email" : document.getElementById("Email").value,
        "Phone" : document.getElementById("PhnNo").value,
        "Gender" : document.getElementById("Gender").value,
        "Address" : document.getElementById("AddressBox").value,
        "DOB" : document.getElementById("DateField").value,
        "Title" : document.getElementById("Prof_Details").value,
        "Experience" : document.getElementById("Experience").value
    };
    
    recordList.push(fieldList);
    localStorage.setItem('records',JSON.stringify(recordList));
    console.log(recordList);
    return;
    
}


let flag = 0; 

const plusButton = document.getElementById("plusButton");
plusButton.addEventListener('click',function(e){
        e.preventDefault();
        if(flag < 5 ){
                if(flag == 4)
                {
                    alert("Maximum number of fields reached");
                }
                else{
                        flag += 1;
                        const newNode = document.createElement("input");
                        newNode.setAttribute("id","Prof_Details");
                        newNode.setAttribute("type","text");
                        newNode.setAttribute("placeholder","Other Details");
                        const parent = document.getElementById("right");
                        parent.appendChild(newNode);
                    }
                }
            
    return;
});
