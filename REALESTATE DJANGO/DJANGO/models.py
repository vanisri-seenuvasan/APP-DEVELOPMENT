from django.db import models
from cryptography.fernet import Fernet
class User(models.Model):
    ROLE_CHOICES = [
        ('owner', 'Owner'),
        ('tenant', 'Tenant'),
    ]
    
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username

class Request(models.Model):
    name = models.CharField(max_length=100)
    property_location = models.CharField(max_length=255)
    address = models.TextField()
    amount_settled = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class Property(models.Model):
    PROPERTY_STATUS_CHOICES = [
        ('For Rent', 'For Rent'),
        ('For Sale', 'For Sale'),
    ]
    
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=PROPERTY_STATUS_CHOICES)
    image = models.URLField()

    def __str__(self):
        return self.name
    


class Payment(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    card_number = models.CharField(max_length=20)
    exp_month = models.CharField(max_length=2)
    exp_year = models.CharField(max_length=4)
    cvv = models.CharField(max_length=4)
    
    def __str__(self):
        return self.full_name

class PropertyAction(models.Model):
    property_id = models.IntegerField()
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50)
    image = models.URLField()
    
class Cart(models.Model):
    property_id = models.IntegerField()
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()