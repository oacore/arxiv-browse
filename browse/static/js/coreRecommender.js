function getCORERecCookie() {
    var coreCookie = "arxiv_core";
    var dc = document.cookie;
    var prefix = coreCookie + "=";
    var begin = dc.indexOf(prefix);
    var end = document.cookie.indexOf(";", begin);
    var returnVal;
    if (end == -1) {
        end = dc.length
    }
    returnVal = decodeURIComponent(dc.substring(begin + prefix.length, end));
    return returnVal
}
function setCORERecCookie() {
    var coreCookie = "arxiv_core";
    var value = "disabled";
    var cv = getCORERecCookie();
    console.log("cv");
    console.log(cv);
    if (cv == "disabled") {
        value = "enabled"
    } else if (cv == "enabled") {
        value = "disabled"
    }
    var coreCookieValue = value;
    var today = new Date;
    var expire = new Date;
    var nDays = 365;
    expire.setTime(today.getTime() + 36e5 * 24 * nDays);
    document.cookie = coreCookie + "=" + encodeURIComponent(value) + ";domain=.arxiv.org;;path=/;expires=" + expire.toGMTString();
    window.location.reload()
}

function coreRecommender() {
    var cv =getCORERecCookie();
    if (cv !='disable' ){
        (function (d, s, idScript, idRec, userInput) {
                          var coreAddress = 'https://core.ac.uk/';
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(idScript))
                              return;
                          js = d.createElement(s);
                          js.id = idScript;
                          js.src = coreAddress + 'recommender/embed.js';
                          fjs.parentNode.insertBefore(js, fjs);

                          localStorage.setItem('idRecommender', idRec);
                          localStorage.setItem('userInput', JSON.stringify(userInput));
                          // To force the recommender to output in a specific lanuage, uncomment the field below
                          // localStorage.setItem('overridelocale', "en_GB");

                          var link = d.createElement('link');
                          link.setAttribute('rel', 'stylesheet');
                          link.setAttribute('type', 'text/css');
                          link.setAttribute('href', coreAddress + 'recommender/embed-arxiv-style.css');
                          d.getElementsByTagName('head')[0].appendChild(link);
        }(document, 'script', 'recommender-embed', '24c597', {}));
    }
}
