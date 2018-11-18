'use strict';

chrome.runtime.sendMessage('init', function(response){
    var words = response.responses[0].textAnnotations[0].description
    
    words.trim().split('\n').map(function(item) {
        console.log(item);
    });
});

function addElement() {
    var p = document.createElement('p');
    var n = document.createTextNode('this is text');
    p.appendChild(n);
    document.getElementById('word-list').appendChild(p);
}

document.getElementById('alert').addEventListener('click', addElement);