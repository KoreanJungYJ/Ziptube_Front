chrome.storage.sync.get(function (data) {
    var input = document.querySelector('input');
    
    if(data.count == 1){
        input.value = data.getData;
    }
});



var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    var input = document.querySelector('input');
    chrome.tabs.getSelected(null, function(tab){
        input.value = tab.url;
        chrome.storage.sync.set({
            'getData' : input.value,
            'count' : 1
        });
    });
});