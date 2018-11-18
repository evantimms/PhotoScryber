'use strict';

chrome.runtime.sendMessage('init', function(response){
    var words = response.responses[0].textAnnotations[0].description
    var submit = document.createElement('input');
    submit.setAttribute('id', 'submit-untrans');
    submit.setAttribute('type', 'submit');

    words.trim().split('\n').map(function(item) {
        console.log(item);
        document.getElementById('word-list').appendChild(newBar(item));
    });
    document.getElementById('word-list').appendChild(submit);

    document.getElementById('submit-untrans').addEventListener('click', submitUntranslated);
});

function newBar(item) {
    var element = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', item);

    element.appendChild(input);
    element.appendChild(document.createElement('button'));
    element.appendChild(document.createElement('button'));
    element.appendChild(document.createElement('button'));
    element.appendChild(document.createElement('button'));
    element.appendChild(document.createElement('br'));

    return element;
}

function submitUntranslated(event) {
    console.log(event);
}