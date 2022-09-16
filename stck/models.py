from django.db import models



class MyStocks(models.Model):
    name = models.CharField(max_length=100)
    current_amount_of_shares = models.CharField(max_length=100)
    price_prediction = models.CharField(max_length=100)
    buy_or_sell = models.CharField(max_length=100)

    def __str__(self):
        return self.name
