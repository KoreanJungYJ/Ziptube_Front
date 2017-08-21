/*function urlTest(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        document.getElementById('test').innerHTML += url + "<br/><br/>";
        var arr = [];
        arr += arr.push(url);
        arr = arr.slice(0,-1);
    });
}


var btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    urlTest();
});*/

var addBtn = document.getElementById('addBtn');
var cnt = 0;

addBtn.addEventListener('click', () => {
    var addForm = document.getElementById('showUrl');
    var mainForm = '<label><input type="checkbox" id="check'+cnt+'"><input type="url" id="urls'+cnt+'" value=""></label>';

    var addDiv = document.createElement("div");
    addDiv.setAttribute("id", "keyword_Frm"+cnt);
    addDiv.innerHTML = mainForm;
    addForm.appendChild(addDiv);

    cnt++;
})