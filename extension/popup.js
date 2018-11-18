'use strict';

chrome.runtime.sendMessage('init', function(response){
    document.getElementById('translation').innerHTML = response;
});
