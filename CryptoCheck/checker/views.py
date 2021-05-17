from django.shortcuts import render
from .models import Coin, Wallet

# Create your views here.

def home_screen_view(request):
    ## print(request.headers())
    ## https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=ethereum
    # response = requests.get('https://api.coingecko.com/api/v3/coins/')
    # coins = response.json()
    # ethereum = {
    #    'img': coins[1]['image'],
    #    'current_price': coins[1]['market_data']['current_price']['eur'],
    #    'id': coins[1]['id']
    #}
    coins = Coin.objects.all
    wallets = Wallet.objects.all
    return render(request, "check/home.html", {'coins':coins, 'wallets':wallets})