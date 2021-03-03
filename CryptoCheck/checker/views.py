from django.shortcuts import render
import requests

# Create your views here.

def home_screen_view(request):
    ##print(request.headers())
    response = requests.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=ethereum')
    ethereum = response.json()
    return render(request, "check/home.html", {
        'img': ethereum[0]['image'],
        'current_price': ethereum[0]['current_price']
    })