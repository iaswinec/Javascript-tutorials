s="Luminar Technolab"
console.log(s);
console.log(s.length);

console.log(s.startsWith("Lum"));
console.log(s.endsWith("lab"));

phn="+919946568090"
    if(phn.startsWith("+91")){
        console.log("Indian mobile number");
    }
    else{
        console.log("Not an Indian number");
    }
    if(phn.length==13){
        console.log("Number is valid");
    }
    else{
        console.log("Number is invalid");
    }

mail="asusrog@gmail.com"
    mail.endsWith("@gmail.com")? console.log("Mail id is valid"):console.log("Mail is is invalid");   