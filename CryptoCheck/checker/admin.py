from django.contrib import admin
from .models import Coin, Wallet

# Register your models here.
admin.site.register(Coin)
admin.site.register(Wallet)