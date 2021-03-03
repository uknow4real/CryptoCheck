console.log("Welcome to CryptoCheck!");

function getCoins() {
    ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.coingecko.com/api/v3/coins/', true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let coins = JSON.parse(this.response);
            // its a container for coins, a cointainer lul D:
            let cointainer = document.getElementById("coins"); 
            
            
            /*
            let iter = 1;
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

getCoins();