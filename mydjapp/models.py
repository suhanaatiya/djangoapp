from django.db import models

#Create your models here.

class Register(models.Model):
	regid = models.AutoField(primary_key=True)
	name=models.CharField(max_length=50)
	username=models.CharField(max_length=50,unique=True)
	password=models.CharField(max_length=10)
	mobile=models.CharField(max_length=10)	
	address=models.CharField(max_length=1000)
	city=models.CharField(max_length=10)
	gender=models.CharField(max_length=20)
	info=models.CharField(max_length=1000)