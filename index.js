window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementByClass("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function validate(){
      var fname=document.reg_form.fname;
      var email=document.reg_form.email;
      var contactno=document.reg_form.contactno;
      var msg=document.reg_form.msg;
      console.log(document.reg_form.fname.value);
      console.log(document.reg_form.email.value);
      console.log(document.reg_form.contactno.value);
      console.log(document.reg_form.msg.value);
        
      if(fname.value.length <=0 ){
        alert("Name is requied");
        fname.focus();
        return false;
      }
      if(email.value.length <=0 ){
        alert("Email is requied");
        email.focus();
        return false;
      }
      if(contactno.value.length <=0 ){
        alert("Contact Number is requied");
        contactno.focus();
        return false;
      }
      if(msg.value.length <=0 ){
        alert("Message is requied");
        msg.focus();
        return false;
      }
      return false;
  }