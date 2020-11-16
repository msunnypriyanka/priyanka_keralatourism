// --------this is an error-----------
//  let inputtxt=document.getElementById("phone");
// function phonenumber(inputtxt)
// {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if((inputtxt.value.match(phoneno))
//    {
    
//       return true;
//     }
//       else
//     {
//         alert("message");
//         return false;
//     }
// }


function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}
