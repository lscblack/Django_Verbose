from django.db import models

class Stock(models.Model):
    prod_name = models.CharField(max_length=250)
    prod_desc = models.TextField()
    prod_quantity = models.IntegerField()
    prod_unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    prod_date = models.DateTimeField(auto_now_add=True)
    
    @property
    def prod_cost(self):
        return self.prod_quantity * self.prod_unit_price

    def __str__(self):
        return self.prod_name
