from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from .models import Product,Order,OrderItem,ShippingAddress
from rest_framework_simplejwt.tokens import RefreshToken


# serializer class for jwt tokenization
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self,attrs):
       data = super().validate(attrs)

       serializer = UserSerializerWithToken(self.user).data

       for k,v in serializer.items():
           data[k] = v

       return data



class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model= User
        fields= ['id','_id','username','email','name','isAdmin']

    def get__id(self,obj):
        return obj.id
    
    def get_isAdmin(self,obj):
        return obj.is_staff

    def get_name(self,object):
        name = object.first_name
        if name == '':
            name = object.email
        return name
    

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin',"token"]

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        