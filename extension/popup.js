'use strict';

chrome.runtime.sendMessage('init', function(response){
    var words = response.responses[0].textAnnotations[0].description
    var submit = document.createElement('input');
    submit.setAttribute('id', 'submit-untrans');
    submit.setAttribute('type', 'button');
    submit.addEventListener('click', submitUntranslated);

    words.trim().split('\n').map(function(item) {
        //console.log(item);
        document.getElementById('word-list').appendChild(newBar(item));
    });
    document.getElementById('word-list').appendChild(submit);
});

function newBar(item) {
    var element = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', item);
    var mergeUp = document.createElement('button');
    mergeUp.setAttribute('type', 'button');
    mergeUp.innerHTML = 'Merge up';
    var mergeDn = document.createElement('button');
    mergeDn.setAttribute('type', 'button');
    mergeDn.innerHTML = 'Merge dn';
    var split = document.createElement('button');
    split.setAttribute('type', 'button');
    split.innerHTML = 'Split text';

    element.appendChild(input);
    element.appendChild(mergeUp);
    element.appendChild(mergeDn);
    element.appendChild(split);
    element.appendChild(document.createElement('br'));

    return element;
}

function submitUntranslated(event) {
    //console.log(event);
    var elements = document.forms['word-list'].elements;
    //console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];

        if (isText(e)) {
            console.log(e.value);
        }
    }
}

function isText(element) {
    return element.tagName === 'INPUT' && element.type === 'text';
}