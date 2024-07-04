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