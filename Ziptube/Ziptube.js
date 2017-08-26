window.onload = function() {
    exit();
    addUrl();
}

/* 클릭 시 종료 */
function exit(){
    let exitImg = document.getElementById('exitImg');
    exitImg.addEventListener('click', () => {
        window.close();
    });
}

/* 클릭 시 추가 코드 */
function addUrl(){
    var addBtn = document.getElementById('addBtn');
    var addCnt = 0;
    var downloadBtn = document.getElementById('downloadPart');

    //div 태그 임의로 생성 -> input type으로 변환시키기 위해
    var showPart = document.getElementById('urlCover');
    addBtn.addEventListener('click', () => {
        var mainForm = 
        '<label><input type="checkbox" class="checkBoxes" id="check'+addCnt+'"><input type="url" class="urlTitles" id="sepUrl'+addCnt+'" value="" maxlength = "40"></label>';

        //input으로 변환 부분
        var addDiv = document.createElement("div");
        addDiv.setAttribute("id", "keyword_Form"+addCnt);
        addDiv.innerHTML = mainForm;
        showPart.appendChild(addDiv);

        //button display 변경
        downloadBtn.style.display = "block";
        
        // title 값 저장
        chrome.tabs.getSelected(null, function(tabs){
            var inputCnt;

            for(inputCnt = 0; inputCnt < addCnt; inputCnt++){
                localStorage["urlValues"] = tabs.url;
            }
        });

        //value값 local에 저장 - 사라지지 않도록
         var urlTitles = document.getElementsByClassName('urlTitles');
        // urlTitles[addCnt].value = localStorage.urlValues;

        addCnt++;
    });
}