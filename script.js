
function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var address=document.validateform.address.value;
    var phone=document.validateform.phone.value;
    if(fname==null||fname==""){
        alert("enter the firstname")
        return false;
    }
    else if(lname==null||lname==""){
        alert("enter the lastname")
        return false;
    }
    else if(city==null||city==""){
        alert("enter your city")
        return false;
    }
    else if(address==null||address==""){
        alert("enter your address")
        return false;
    }

    else if(phone.length<10 || phone.length>10){
        alert("Phone number should be 10 character");
        return false;
    }
    else{
        alert("form submitted Successfully");
    }
}
