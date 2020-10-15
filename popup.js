
document.addEventListener('DOMContentLoaded', function () {
   var bg = chrome.extension.getBackgroundPage();
    var myURL = bg.myURL;
    document.getElementById('url').innerHTML = bg.myURL;
    
    // const api_key = "add your api key here obtained from website-categorization.whoisxmlapi.com"

var request = new XMLHttpRequest();
request.open('GET', `https://website-categorization.whoisxmlapi.com/api/v1?apiKey= ${api_key} &domainName= ${myURL}`,true);
request.send();

request.onload = function(){
    var data = JSON.parse(request.responseText);
    category = data.categories[0];
    document.getElementById('category').innerHTML = category;
}

});

