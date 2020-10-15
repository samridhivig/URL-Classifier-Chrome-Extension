var myURL;

chrome.webNavigation.onCompleted.addListener(pageLoaded);

function pageLoaded(tab) {
    myURL = tab.url;
}

console.log(myURL);





