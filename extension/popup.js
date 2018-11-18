'use strict';

chrome.runtime.sendMessage('init', function(response){
    document.getElementById('output').innerHTML = response;
});