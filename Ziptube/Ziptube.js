
/* x 이미지를 눌렀을 때 없애기 */
var exitBtn = document.getElementById('exitImg');
exitBtn.addEventListener('click', () => {
    window.close();
});

//pageUrl을 저장할 배열
var saveVals = []; 

//생성 함수
function createForm(vals, idx){

    document.getElementById('downloadPart').style.display = "block";

    let showPart = document.getElementById('urlCover');
    let mainForm = 
            `<label>
                <input type="checkbox" class="checkBoxes" id="check${vals.length}">
                <input type="url" class="urlTitles" id="sepUrl${vals.length}" value="${vals[idx]}" maxlength = "40">
            </label>`;
       
    let addDiv = document.createElement('div');
    addDiv.setAttribute("id", "keyForm" + vals.length);
    addDiv.innerHTML = mainForm;
    showPart.appendChild(addDiv);
}

/* set에서 data가져와서 storage에 저장시켜주기 */
chrome.storage.sync.get(function (data) {
    saveVals = JSON.parse(data.saveVals);
    console.log(saveVals);

    if (saveVals && saveVals.length > 0) {
        for(let idx = 0; idx < saveVals.length; idx++){
            createForm(saveVals, idx);
        }
    }
});


/* 추가 했을 때 관련 모든 로직 */
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {

    // label 생성 및 버튼 보이게 하기
    createForm(saveVals, null);
    
    //url 받아와서 JSON으로 보내주기
    chrome.tabs.getSelected(null, function(tabs) {
        var userVals = document.getElementsByClassName('urlTitles');

        var pageUrl = tabs.url;
        
        userVals[saveVals.length].value = pageUrl;
        saveVals.push(pageUrl);

        chrome.storage.sync.set({
            'saveVals' : JSON.stringify(saveVals)
        });
    });
});

/* 삭제 했을 때 관련 모든 로직 */




