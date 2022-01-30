function validate()
{
 var flag=true

 var name=document.getElementById("name").value 
 var username=document.getElementById("username").value
 var password=document.getElementById("password").value
 var mobile=document.getElementById("mobile").value
 var address=document.getElementById("address").value
 var city=document.getElementById("city").value
 var male=document.getElementById("male").checked
 var female=document.getElementById("female").checked
 
 var err1=document.getElementById("err1")
 var err2=document.getElementById("err2")
 var err3=document.getElementById("err3")
 var err4=document.getElementById("err4")
 var err5=document.getElementById("err5")
 var err6=document.getElementById("err6")
 var err7=document.getElementById("err7")

 var patt=/^\w+[@]+\w+[.]+\w+$/
 var patt1=/^\w+[._]+\w+[@]+\w+[.]+\w+$/
 var result=username.match(patt) 
 var result1=username.match(patt1)

 if(username.length==0)
 {
  err2.innerHTML="*Username is required"
  err2.style.color="red"	   
  flag=false 
 }
 else if(result==null && result1==null)
 {
  err2.innerHTML="*Please enter valid emailid"
  err2.style.color="red"	   
  flag=false 
 }
 else
  err2.innerHTML=""

 if(male==false && female==false)
 {
  err7.innerHTML="*Please select gender"
  err7.style.color="red"	   
  flag=false 
 }  
 else
  err7.innerHTML=""

 if(city==0)
 {
  err6.innerHTML="*Please select city"
  err6.style.color="red"	   
  flag=false 
 }  
 else
  err6.innerHTML=""	

 if(address=="")
 {
  err5.innerHTML="*Address is required"
  err5.style.color="red"	   
  flag=false 
 }  
 else
  err5.innerHTML=""	


 if(mobile.length==0)
 {
  err4.innerHTML="*Mobile is required"
  err4.style.color="red"	   
  flag=false 
 }
 else if(isNaN(mobile))
 {
  err4.innerHTML="*Mobile number must be numeric"
  err4.style.color="red"	   
  flag=false 
 }
 else if(mobile.length!=10)
 {
  err4.innerHTML="*Mobile number must be 10-digit"
  err4.style.color="red"	   
  flag=false 
 }
 else 
  err4.innerHTML=""

 if(password.length=="")
 {
  err3.innerHTML="*Password is required"
  err3.style.color="red"	   
  flag=false 
 }  
 else if(password.length<5 || password.length>9)
 {
  err3.innerHTML="*Password must be of 5-8 character long"
  err3.style.color="red"	   
  flag=false 
 } 
 else
  err3.innerHTML=""

 if(name=="")
 {
  err1.innerHTML="*Name is required"
  err1.style.color="red"	   
  flag=false 
 }  
 else
  err1.innerHTML=""	

 
 return flag 
}