function getRate(top, bot) {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22' + top + bot + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=parseJSON');
    document.body.appendChild(script);
}
            
function parseJSON(data) {
    var rate   = parseFloat(data.query.results.rate.Rate);
    var value = document.getElementById('amount').value;
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        var amount = parseFloat(value);
        var ans    = amount * rate;
        document.getElementById('output').value = ans;
    } else document.getElementById('output').value = "Error";
}
            
function extractData() {
                
    var top = document.getElementById('currency_1').value;
    var bot = document.getElementById('currency_2').value;
    getRate(top, bot);
                
}