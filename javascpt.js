function validation(){
    if(document.formfill.username.value=""){
      document.getElementById("result").innerHTML="Enter User name";
      return false;

    }
      else if(document.formfill.username.value.length>=6){
         document.getElementById("result").innerHTML="Atleast six letters";
           return false;
  
      }
         else if(document.formfill.Email.value==""){
          document.getElementById("result").innerHTML="Enter your Emails";
           return false;
  
      }
        else if(document.formfill.Password.value==""){
         document.getElementById("result").innerHTML="Enter your password here";
         return false;
  
      }
        else if(document.formfill.Password.value.length<6){
          document.getElementById("result").innerHTML="password must be 6 characters";
          return false;
  
      }
      
        else if(document.formfill.CPassword.value==""){
         document.getElementById("result").innerHTML="Enter confirm password";
         return false;
  
      }
        else if(document.formfill.CPassword.value!==document.formfill.Password.value){
         document.getElementById("result").innerHTML="Password doesnot match";
         return false;
  
      }
      else if(document.formfill.Password.value==document.formfill.CPassword.value){
      popup.classList.add("open-slide")
        return false;
 
     }

      

      
}
var popup= document.getElementById('popup');
function CloseSlide(){
  popup.classList.remove("open-slide")
}