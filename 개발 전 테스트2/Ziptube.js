/*-----------------------------------------------------------------------------------------------------*/


/* x 이미지를 눌렀을 때 없애기 */
let exitBtn = document.getElementById('exitImg');
exitBtn.addEventListener('click', () => {
    window.close();
});

/*-----------------------------------------------------------------------------------------------------*/

//pageUrl을 저장할 배열
var saveVals = []; 

/* set에서 data가져와서 storage에 저장시켜주기 */

chrome.storage.sync.get( (data) => {
    saveVals = JSON.parse(data.saveVals);
    console.log(saveVals);

    if (saveVals && saveVals.length > 0) {
        for(let idx = 0; idx < saveVals.length; idx++){
            createForm(saveVals, idx);
        }
    }
});



//생성 함수
function createForm(vals, idx){

    document.getElementById('downloadPart').style.display = "block";

    let showPart = document.getElementById('urlCover');
    let mainForm = 
            `<label>
                <input type="checkbox" 
                       class="checkBoxes" 
                       id="check${vals.length}">

                <input type="url" 
                       class="urlTitles" 
                       id="sepUrl${vals.length}" 
                       value="${vals[idx]}" 
                       maxlength = "40">
            </label>`;
       
    let addDiv = document.createElement('div');
    addDiv.setAttribute("id", "keyForm" + vals.length);
    addDiv.innerHTML = mainForm;
    showPart.appendChild(addDiv);

    //background-color Test
    let labels = document.querySelectorAll('label');
    let check = document.getElementsByClassName('checkBoxes');
    if( idx % 2 === 1 ){
        labels[idx].style.backgroundColor = "#E6E6E6";
    }

}


/* 추가 했을 때 관련 모든 로직 */
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {

    // label 생성 및 버튼 보이게 하기
    createForm(saveVals, null);


    //url 받아와서 JSON으로 보내주기
    chrome.tabs.getSelected(null, (tabs) => {
        let userVals = document.getElementsByClassName('urlTitles');

        let pageUrl = tabs.url;
        
        userVals[saveVals.length].value = pageUrl;
        saveVals.push(pageUrl);

        chrome.storage.sync.set({
            'saveVals' : JSON.stringify(saveVals)
        }, function() {
            console.log("Datas are saved!");
        });
    });
});


/*-----------------------------------------------------------------------------------------------------*/


/* check가 true시 모두 해제 */
function delChecks(checkClass, idx){
    for(let idx = 0; idx < checkClass.length; idx++){
        if(checkClass[idx].checked === true){
            checkClass[idx].checked = false;
        }
    }
}

/* 취소 했을 때 로직 */
var cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', () => {
    let checkBoxes = document.getElementsByClassName('checkBoxes');
    let checkCnt;

    delChecks(checkBoxes, checkCnt);
});


/*-----------------------------------------------------------------------------------------------------*/

/* 삭제 했을 때 모든 로직 */

var delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', () => {
    

});









