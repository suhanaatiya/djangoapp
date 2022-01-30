from django.http import HttpResponse
from django.shortcuts import render,redirect
import time

from . import models

def home(request):
 return render(request,"home.html") 

def about(request):
 return render(request,"about.html")

def contact(request):
 return render(request,"contact.html")

def service(request):
 return render(request,"service.html")

def register(request):
 if request.method=="GET": 
  return render(request,"register.html",{"msg":""})
 else:
  name=request.POST.get("name")
  username=request.POST.get("username")
  password=request.POST.get("password")
  mobile=request.POST.get("mobile")
  address=request.POST.get("address")
  city=request.POST.get("city")
  gender=request.POST.get("gender")
  info=time.asctime()

  p=models.Register(name=name,username=username,password=password,mobile=mobile,address=address,city=city,gender=gender,info=info)		
  p.save()	  

  return render(request,"register.html",{"msg":"User registered successfully...."})		

def login(request):
 if request.method=="GET":
  return render(request,"login.html",{'msg':''})
 else:
  username=request.POST.get("username")
  password=request.POST.get("password")

  userDetails=models.Register.objects.filter(username=username,password=password)	    

  if len(userDetails)>0:	
   return redirect('/userhome/')
  else:
   return render(request,"login.html",{'msg':'Invalid user , please login again....'}) 	 

def userhome(request):
 return render(request,"userhome.html")




