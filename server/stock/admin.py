from django.contrib import admin
from .models import Stock

class StockAdmin(admin.ModelAdmin):
    list_display = ('prod_name', 'prod_quantity','prod_desc', 'prod_unit_price', 'prod_cost', 'prod_date')
    
    def prod_cost(self, obj):
        return obj.prod_cost
    prod_cost.short_description = 'Product Cost'

admin.site.register(Stock, StockAdmin)
