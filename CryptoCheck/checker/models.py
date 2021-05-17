from django.db import models

# Create your models here.
class Coin(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.name


class Wallet(models.Model):
    id = models.IntegerField(primary_key=True)
    coin = models.ForeignKey(Coin, on_delete=models.CASCADE)
    amount = models.FloatField(max_length=1000, default=0)

    def __str__(self) -> str:
        return self.id
