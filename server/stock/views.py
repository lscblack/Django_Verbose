from django.http import JsonResponse
from .models import Stock
from .serializers import StockSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# get all Items
@api_view(['GET'])
def all_prod(request):
    Products = Stock.objects.all()
    serializer = StockSerializer(Products, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# get all Items
@api_view(['POST'])
def add_prod(request):
    serializer = StockSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

# get all Items
@api_view(['DELETE','GET','PUT','PATCH'])
def manage_products(request, id):
    try:
        stock = Stock.objects.get(pk=id)
    except Stock.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = StockSerializer(stock)
        return Response(serializer.data)
        
    elif request.method == "PUT":
         serializer = StockSerializer(stock, data=request.data)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_200_OK)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
    elif request.method == "DELETE":
        stock.delete()
        return Response(status=status.HTTP_204_No_CONTENT)
    elif request.method == "PATCH":
        serializer = StockSerializer(stock, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
    return Response(status=status.HTTP_400_BAD_REQUEST)