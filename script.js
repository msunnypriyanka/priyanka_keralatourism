let email=document.getElementById("email");
let password=document.getElementById("pwd");
let merror=document.getElementById("merror");
// let perror=document.getElementById("perror");
// function validate(){
//      let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     let regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     if(regexp.test(email.value)){
            
//             merror.innerHTML="Email is Valid";
//             merror.style.color="green";
//             email.style.border="2px solid green";
//             return true;
//             }
//             else{
                
//                  merror.innerHTML="Email is not valid";
//                 merror.style.color="red";
//                 email.style.border="2px solid red";
//                 return false;
//             }

//     if(regpass.test(password.value.length>=8)){
//         if(password.value.length>=8){
//             perror.innerHTML="Password is Valid";
//             perror.style.color="green";
//             password.style.border="2px solid green";
//             return true;
//             }
//             else if(password.value.length>=5){
//             perror.innerHTML="Password is not valid and length should be 8 or more";
//             perror.style.color="orange";
//             password.style.border="2px solid orange";
//             return false;
//             }
//             else{
//             perror.innerHTML="Password is not Valid and too short";
//             perror.style.color="red";
//             password.style.border="2px solid red";
//             return false;
//             }
//       }
// }  
    
//-------------------------------------------------------------------------


// function validate(){
//     let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     // let regpass=/^([A-Z]+[0-9]+[a-z]+{8,15})$/;
//     let regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//     if(regexp.test(email.value)){
//     merror.innerHTML="Email is Valid";
//     merror.style.color="green";
//     email.style.border="2px solid green";
//     return true;
//     }
//     else{
//          merror.innerHTML="Email is not valid";
//         merror.style.color="red";
//         email.style.border="2px solid red";
//         return false;
//     }
//     if(regpass.test(password.value>=8)){
//     perror.innerHTML="Password is Valid";
//     perror.style.color="green";
//     email.style.border="2px solid green";
//     return true;
//     }
//     else if(password.value>=5){
//         perror.innerHTML="Password is not Valid";
//     perror.style.color="orange";
//     email.style.border="2px solid orange";
//     }
//     else{
//         perror.innerHTML="Password is not Valid";
//     perror.style.color="red";
//     email.style.border="2px solid red";
//     }
// }

// -------------------------------

// function validate(){
//     if(email.value.trim()==""||password.value.trim()==""){
//     alert("field is empty");
//     return false;
//     }
//     else{
//         return true;
//         //alert("validation is proper");
        
//     }
// }

// -------------------------
// function validate(){
// let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
// let regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// if(regexp.test(email.value=="") && regpass.test(password.value=="")){
//     alert("Email should be filled");
//     merror.innerHTML="Email is Valid";
//     merror.style.color="green";
//     email.style.border="2px solid green";
//     password.style.border="2px solid green"
//     return true;
// }
// else{
//         // perror.innerHTML="Password should be 8or more characters and should contain 1 uppercase, 1 lowercase";
//         return false;
// }
// }
// else if(regpass.test(password.value=="")){
// password.style.border="2px solid green";
// return true;
// }
// else if(password.value==""){
//     alert("password is empty");
//     return false;
// }
// else if(password.value.length>=8){
// //     alert("password is too short");
//     password.style.border="2px solid green";
//     return true;
// }
// else{
//         email.style.border="2px solid red";
//         password.style.border="2px solid red";
//     return false;
    
// }



function validate(){
        let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        let regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if(regexp.test(email.value) && regpass.test(password.value)){
                
                merror.innerHTML="Email is Valid";
                    merror.style.color="green";
                    email.style.border="2px solid green";  
                    password.style.border="2px solid green";
                    return true;   
        }
       
        else{   
               
                merror.innerHTML="Invalid";
                merror.style.color="red";
                return false;
        }
}