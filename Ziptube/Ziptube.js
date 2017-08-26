/* 종료 버튼 */
var exitBtn = document.getElementById('exitImg');
exitBtn.addEventListener('click', () => {
    window.close();
});

/* 추가 버튼 눌렀을 시 */
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    var addCnt = 0; //클릭시 count되는 변수
    var showPart = document.getElementById('urlCover'); //input으로 바꿀 div
    var mainForm =
        '<label><input type="checkbox" class="checkBoxes" id="check'+addCnt+'"><input type="url" class="urlTitles" id="sepUrl'+addCnt+'" value="" maxlength = "40"></label>';
    //input으로 바꿔지는 label 폼

    //input 변환 및 추가
    var addDiv = document.createElement('div');
    addDiv.setAttribute("id", "keyForm" + addCnt);
    addDiv.innerHTML = mainForm;
    showPart.appendChild(addDiv);

    //url 및 title값 저장
    chrome.tabs.getSelected(null, function(tabs){
        for(let inputCnt = 0; inputCnt < addCnt; inputCnt++){
            localStorage["urlValues"] = tabs.url;
        }
    });

    //더해줄 addCnt 변수
    addCnt++;
});