
function Submit(){
   var Firstname = document.getElementById("firstname").value
   var Surname = document.getElementById("Surname").value
   var Email = document.getElementById("email").value
   var Phone = document.getElementById("number").value
   var Address = document.getElementById("message")
   var Faculty = document.getElementById("names").value
   var University = document.getElementById("UNI").value

   console.log(Submit)


var details = {
firstname:Firstname,
Surname:Surname,
email: Email,
Phone: Phone,
Employment: Employed,
Gender: gender,
Address:Address,
Faculty : Faculty,
University : University,

}

const url = "https://formspree.io/f/meqyeozj"

var send = JSON.stringify(details)

fetch(url,{
   method: "POST",
   body: send,
   headers: {"Content-Type":"application/json"}
})
console.log(send)
}
var Employed = "value"
function radio(value){
   Employed = value
}
var Unemployed = "value"

function radio(value){
   Employed= value
}

var Female= "value"
function option(value){
   gender = value
}
var Male = "value"
function option(value){
   gender = value
}