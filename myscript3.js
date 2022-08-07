var fname = prompt("Your First Name Please :")
var lname = prompt("Your Last Name Please :")
var age = prompt("Your Age Please :")
var height = prompt("Your Height Please :")
var pname = prompt("Your Pet Name Please :")
alert("Thanks for the information!!")

var namecond=null
var agecond=null
var heightcond=null
var petcond=null


if(fname[0]==lname[0]){
    namecond=true

}else{
    namecond=false
}

if(age>=20 && age<30){
    agecond=true

}else{
    agecond=false
}

if(height>172){
    heightcond=true

}else{
    heightcond=false
}


if(pname[pname.length-1]=="y"){
    petcond=true

}else{
    petcond=false
}

if(petcond&&namecond&&heightcond&&agecond){
    console.log("Welcome SPY!! Your Next Target is Nawaz Shreef.")

}else{
    console.log("Nothing to see here FUCKK OFF")
}

