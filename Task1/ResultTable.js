let data = window.location.search;
let fields = new URLSearchParams(data);
let FirstName = fields.get("Fname");
let LastName = fields.get("Lname");
let FullName = FirstName + LastName;
let PhoneNumber = fields.get("PhnNo");
let Gender = fields.get("Gender");
let AddressBox = fields.get("AddressBox");
let DateField = fields.get("DateField");
let 