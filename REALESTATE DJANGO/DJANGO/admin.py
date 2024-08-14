from django.contrib import admin
from .models import User, Request, Property, Payment, PropertyAction, Cart

# Register User model with custom admin configuration
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role')
    search_fields = ('username', 'email')
    list_filter = ('role',)

# Register Request model with custom admin configuration
@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'property_location', 'address', 'amount_settled')
    search_fields = ('name', 'property_location', 'address')
    list_filter = ('property_location',)
    
@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'price', 'status', 'image')
    list_filter = ('status',)
    search_fields = ('name', 'address')
    ordering = ('-price',)

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'address', 'city', 'state', 'zip_code', 'card_number', 'exp_month', 'exp_year', 'cvv')
    search_fields = ('full_name', 'email', 'address', 'city', 'state', 'zip_code', 'card_number')

@admin.register(PropertyAction)
class PropertyActionAdmin(admin.ModelAdmin):
    list_display = ('property_id', 'name', 'address', 'price', 'status', 'image')
    search_fields = ('name', 'address')
    list_filter = ('status',)

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('property_id', 'name', 'address', 'price', 'image')
    search_fields = ('name', 'address')