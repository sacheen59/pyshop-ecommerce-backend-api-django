from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .product import products

from .models import Product
from .serializers import ProductSerializer

# Create your views here.

def getRoutes(request):
    return JsonResponse("Hello",safe=False)

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request,pk):
    product = Product.objects.get(pk=pk)
    serializer = ProductSerializer(product, many = False)
    return Response(serializer.data)