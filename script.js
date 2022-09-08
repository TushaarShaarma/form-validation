function validation(){
    
    var fName= document.getElementById('fname').value
    var lName= document.getElementById('lname').value
    var email= document.getElementById('email').value
    var phno= document.getElementById('phno').value
    var batchno= document.getElementById('batchno')
    var moduleno= document.getElementById('currmodule')
    var agreement=document.getElementById('agree')

    if (fName=="" || fName.length<4){
        document.getElementById('fnameerr').innerHTML='Please enter a valid first name'
        return false
    }
    if (lName=="" || lName.length<4){
        document.getElementById('lnameerr').innerHTML='Please enter a valid last name'
        return false
    }
    if (email==""){
        document.getElementById('emailerr').innerHTML='Please enter a valid email address'
        return false
    }
    if (phno=="" || phno.length!=10 || isNaN(phno)){
        document.getElementById('phnoerr').innerHTML='Please enter a valid phone number'
        return false
    }
    if(batchno.value==""){
        //console.log(batchno.value)
        //alert("hello")
        document.getElementById('batchnoid').innerHTML='Please select a valid batch number'
        return false
    }
    //console.log(batchno.value)
    //return true
    // else{
    //     document.getElementById('batchnoid').innerHTML='Please enter a valid batch number'

    //     return true
    // }
    if(moduleno.value==""){
        document.getElementById('moduleid').innerHTML='Please select a valid module number'
        return false
    }
    if(agreement.checked==false){
        document.getElementById('agreeid').innerHTML='You must agree before submitting'
        return false
    }
    
    else{
        alert("Your details have been saved successfully")
        return true
    }

    
}