console.log("Welcome to CryptoCheck!");

function getCoins() {
    //const apiKey = "c4397609-5c46-4e0e-bd5b-ba4704914632";
    ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.coingecko.com/api/v3/coins/', true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let coins = JSON.parse(this.response);
            // its a container for coins, a cointainer lul D:
            let cointainer = document.getElementById("coins");
            let iter = 1;
            for (coin in coins) {
                if (coins[coin]['name'].toLowerCase() == 'ethereum' || coins[coin]['name'].toLowerCase() == 'dogecoin' || coins[coin]['name'].toLowerCase() == 'safemoon') {
                    cointainer.insertAdjacentHTML("beforeend", `
                    <div class="row" id="coin">
                        <span id="coin-id"> `+ iter +`. `+ coins[coin]['name'] + ` <img src="`+ coins[coin]['image']['thumb']+ `" id="coin-icon"></span>
                        <div id="coin-price">Price `+ coins[coin]['market_data']['current_price']['eur'] + `€</div>
                    </div>
                    `);
                    iter++;
                }
            }
            
            
            /*let iter = 1;
            for (coin in coins) {
                cointainer.insertAdjacentHTML("beforeend", `
                    <div class="row" id="coin">
                        `+ iter +`.
                        <span id="coin-id"> `+ coins[coin]['id'] + ` -  <img src="`+ coins[coin]['image']['thumb']+ `" id="coin-icon"></span>
                        <div id="coin-price">Price `+ coins[coin]['market_data']['current_price']['eur'] + `</div>
                    </div>
                `);
                iter++;
            }*/
        }
    }
}

/* ADD/DELETE COINS */
function addCoin() {
    let coin = document.getElementById("coinlist");
    let amount = document.getElementById("amount");
    let myCoins = JSON.parse(localStorage.getItem("coins"));
    let coins = [{
        coin: coin.value,
        amount: amount.value,
    }];
    if (myCoins === null) {
        localStorage.setItem("coins", JSON.stringify(coins));
    } else {
        JSON.parse(localStorage.getItem("coins")).forEach(coin => {
            coins.push(coin);
        });
        localStorage.setItem("coins", JSON.stringify(coins));
    }
}

function deleteCoin() {
    
}

function showBalance(balance) {
    if (document.getElementById("balance").style.display = 'flex') {
        document.getElementById("balance").style.display = 'none';
    }
    document.getElementById("balance").style.display = 'flex';
}

getCoins();
