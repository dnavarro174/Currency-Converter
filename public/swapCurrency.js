function swapCurrency() {
    var top = document.getElementById('currency_1').value;
    var bot = document.getElementById('currency_2').value;
    var tmp = top;
    top = bot;
    bot = tmp;
    document.getElementById('currency_1').value = top;
    document.getElementById('currency_2').value = bot;
    
    extractData();
}