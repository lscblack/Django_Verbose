from rest_framework import serializers
from .models import Stock

class StockSerializer(serializers.ModelSerializer):
    prod_cost = serializers.SerializerMethodField()

    class Meta:
        model = Stock
        fields = ['id', 'prod_name', 'prod_quantity','prod_desc', 'prod_unit_price', 'prod_cost','prod_date']

    def get_prod_cost(self, obj):
        return obj.prod_cost
