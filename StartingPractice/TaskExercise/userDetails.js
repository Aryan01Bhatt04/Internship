const errorMessages = document.querySelectorAll('.errorMessage');
let firstName = document.querySelector("#FirstName");
firstName.addEventListener('blur', (event) => {
    if(!(/^[a-zA-Z]{2,}\S$/.test(event.target.value))){
        showError(errorMessages[0]);
    }else{
        noError(errorMessages[0])
    }
    return;
})

let email = document.querySelector('#Email');
email.addEventListener('blur',(event) => {
    if(!(/^[A-Za-z0-9]+(?:[._][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(event.target.value))){
        showError(errorMessages[1]);
    }
    else{
        noError(errorMessages[1])
    }
    return;
})

let contact = document.querySelector('#Contact');
contact.addEventListener('blur',(event) => {
    if(!(/^[0-9]{10}$/.test(event.target.value))){
        showError(errorMessages[2]);
    }else{
        noError(errorMessages[2])
    }
    return;
})

let address = document.querySelector('#AddressBox');
address.addEventListener('blur',(event) => {
    if(event.target.value == ""){
        showError(errorMessages[3]);
    }else{
        noError(errorMessages[3])
    }
    return;
})

let DOBError = document.querySelector('#DateField');
DOBError.addEventListener('blur',(event) => {
    if(event.target.value == ""){
        showError(errorMessages[4]);
    }else{
        noError(errorMessages[4])
    }
    return;
})

let profDetails = document.querySelector('#Prof_Details');
profDetails.addEventListener('blur',(event) => {
    if(event.target.value == ""){
        showError(errorMessages[5]);
    }else{
        noError(errorMessages[5])
    }
    return;
})

let experience = document.querySelector('#Experience');
experience.addEventListener('blur',(event) => {
    if(event.target.value == "Experience" || event.target.value == "" ){
        showError(errorMessages[6]);
    }else{
        noError(errorMessages[6])
    }
    return;
})

let password = document.querySelector('#Password');
password.addEventListener('blur',(event) => {
    if(event.target.value == "" ){
        showError(errorMessages[7]);
    }else{
        noError(errorMessages[7])
    }
    return;
})

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
                        newNode.setAttribute("name","OtherDetails")
                        newNode.className = 'inputFields';
                        // const parent = document.querySelector(".right")
                        // parent.appendChild(newNode);
                        document.querySelector('.right').insertBefore(newNode, document.querySelector('#Password'));
                    }
                }
            
    return;
});
let userId = 1;
let detailList = [];
let heading = document.querySelector('.heading');
const authMessage = document.createElement('h3');
authMessage.setAttribute('id',"authMessage")
let validateDetails = (event) => {
    event.preventDefault();
    let formReceived = document.forms.UserDetails;
    let formFields = {
        fullName : formReceived.FirstName.value +" "+ formReceived.LastName.value,
        email : formReceived.Email.value,
        contact : formReceived.Contact.value,
        gender : formReceived.Gender.value,
        address : formReceived.AddressBox.value,
        date : formReceived.DateField.value,
        title : formReceived.Prof_Details.value,
        experience : formReceived.Experience.value,
        password : formReceived.Password.value,
    }
    let {fullName, email, contact, address, date, title, experience} = formFields;
    if((fullName != "") && (email != "") && (contact != "") && (address != "") && (date != "") && (title != "") && (experience != "")){
        let existingRecords = localStorage.getItem('records');
        if (!existingRecords){
            detailList.push(formFields);
            localStorage.setItem('records',JSON.stringify(detailList));
            console.log(detailList);
            showMessage(1)
            return;
        }
        else{
            detailList = JSON.parse(existingRecords);
            if(searchRecord(detailList,formFields)){
                showMessage(0);
            }
            else{
                showMessage(1)
                detailList.push(formFields);
                localStorage.setItem('records',JSON.stringify(detailList));
            }
        }
    }
    else{
        console.log("in red");
        showMessage(2)
    }
}

function searchRecord(recordList,formFields){
    for (const element of recordList){
        if(element.email == formFields.email){
            console.log("element exists",element);
            return true;
        }
    }
    return false;
}

function showError(message){
    message.style.display = '';
}

function noError(message){
    message.style.display = 'none';
}

function showMessage(flag){
    if(flag == 0){
        authMessage.style.display = 'block'
        authMessage.style.color = 'gold';
        authMessage.innerText = "User Already exists"
        heading.appendChild(authMessage);
    }
    else if(flag == 1){
        authMessage.style.display = 'block'
        authMessage.style.color = 'green';
        authMessage.innerText = "Details Registered"
        heading.appendChild(authMessage);
    }
    else if(flag == 2){
        authMessage.style.display = 'block'
        authMessage.style.color = 'red';
        authMessage.innerText = "Please Fill out all Details"
        heading.appendChild(authMessage);
    }
    setTimeout(() => {
        authMessage.style.display = 'none'
    },5000)
}

