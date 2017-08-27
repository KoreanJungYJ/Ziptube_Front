//storage get data example

/*chrome.storage.sync.get(function (data) {
    var userData = document.querySelector('input');
    userData.value = data.saveVal;
});

var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    var input = document.querySelector('input');
    var saveVal = input.value;
    chrome.storage.sync.set({
        'saveVal' : saveVal
    });
});*/

/* x 이미지를 눌렀을 때 없애기 */
var exitBtn = document.getElementById('exitImg');
exitBtn.addEventListener('click', () => {
    window.close();
});

/* data가져와서 설정하기 */
chrome.storage.sync.get(function (data) {
    
});

/* 추가 했을 때 관련 모든 로직 */
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {

    //다운로드 버튼 표시하기
    document.getElementById('downloadPart').style.display = "block";

    //input 부분 표시하기
    var addCnt = 0;
    var showPart = document.getElementById('urlCover');
    var mainForm =
    '<label><input type="checkbox" class="checkBoxes" id="check'+addCnt+'"><input type="url" class="urlTitles" id="sepUrl'+addCnt+'" value="" maxlength = "40"></label>';
       
    var addDiv = document.createElement('div');
    addDiv.setAttribute("id", "keyForm" + addCnt);
    addDiv.innerHTML = mainForm;
    showPart.appendChild(addDiv);

    //url 받아와서 저장하기
    chrome.tabs.getSelected(null, function(tabs){
        var userVal = document.getElementsByClassName('urlTitles');
        var pageUrl = tabs.url;
        var saveVal, urlCnt;

        for(urlCnt = 0; urlCnt < userVal.length; urlCnt++){
            userVal[urlCnt].value = pageUrl;
            saveVal = userVal[urlCnt].value;
            console.log(saveVal);

            chrome.storage.sync.set({
                'saveVal' : saveVal
            });
        }
    });

    addCnt++;
});



