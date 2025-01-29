// async await method
let getUserDetails = async () => {
    try{
        let response = await fetch("https://api.github.com/users/hiteshchoudhary");
        let responseData = await response.json();
        console.log(responseData);
    }

    catch (error){
        console.log(error);
    }
}
getUserDetails();

// thenables also known as chainable then

// JSON format response
let responseJson = fetch("https://api.github.com/users/hiteshchoudhary")
.then((data) => {
    let responseJson = data.json();
    return responseJson;
}).then((data) => {
    console.log(data);
})

//text or string format response
let responseText = fetch("https://api.github.com/users/hiteshchoudhary")
.then((data) => {
    let responseText = data.text();
    return responseText;
}).then((data) => {
    console.log(data);
})

// POST method example

let dummy = {
    abc : "def",
    ghi : "klm"
}

let options = {
    method : "POST",
    headers : {
        "Content-type" : "application/json",
    },
    body : JSON.stringify(dummy),
};

let postMethodExample = fetch('https://jsonplaceholder.typicode.com/posts',options)
.then((data) => {
    let response = data.json();
    return response;
})
.then((data) => {
    console.log(data);
});

