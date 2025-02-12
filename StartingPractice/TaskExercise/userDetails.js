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
    if((/^(Address)$/.test(event.target.value) || (event.target.value == ""))){
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
                        const parent = document.querySelector(".right")
                        parent.appendChild(newNode);
                    }
                }
            
    return;
});
let detailList = [];
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
    }
    let {fullName, email, contact, address, date, title, experience} = formFields;
    if((fullName != "") && (email != "") && (contact != "") && (address != "") && (date != "") && (title != "") && (experience != "")){
        let existingRecords = localStorage.getItem('records');
        if (existingRecords == null){
            detailList.push(formFields);
            localStorage.setItem('records',JSON.stringify(detailList));
            console.log(detailList);
            return;
        }
        else{
            detailList = JSON.parse(existingRecords);
            detailList.push(formFields);
            localStorage.setItem('records',JSON.stringify(detailList));
            console.log(detailList);
        }
    }
}

function showError(message){
    message.style.display = '';
}

function noError(message){
    message.style.display = 'none';
}