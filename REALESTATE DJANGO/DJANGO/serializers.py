from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Request, Property, Payment, PropertyAction, Cart

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}  # Exclude password from read operations
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Include password in response if necessary (use with caution)
        representation['password'] = instance.password
        return representation

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'
        
class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
        
class PropertyActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyAction
        fields = '__all__'   
        
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

