const delBtn = document.getElementById('delBtn');

//여기서 다시 get을 해보자
chrome.storage.sync.get((savedData) => {
    saveVals = JSON.parse(savedData.pageData);
});

function showDelForm(){
    let downloadBtn = document.getElementById('download');
    let deletePart = document.getElementById('delete');

    downloadBtn.style.display = "none";
    deletePart.style.display = "block";
}


delBtn.addEventListener('click', () => {
    delClickEvent();
    showDelForm();
});

/* checkbox true인 table 삭제 */
function delClickEvent(){
    let delClicks = document.getElementsByClassName('deletes');
    let checks = document.getElementsByClassName('checkBoxes');

    let table = document.querySelector('table');
    let rows = table.querySelectorAll('tbody > tr');
    let rowIndex = rows.length;

    Array.from(delClicks).forEach((elem, index) => {
        elem.addEventListener('click', () => {
            if(index == 0){
                delAll(checks, rows);
            }else{
                delTable(checks.length, checks, table);
            }
        });
    });
}

function delAll(checks, rows){
    for(let i = 0; i < saveVals.length; i++){
        checks[i].checked = true;
        rows[i].style.backgroundColor = "#F2F2F2";
    }
}

function delTable(checkLeng, checkBox, table){
    for(let idx = checkLeng-1; idx >= 0; idx--){
        if(checkBox[idx].checked === true){
            table.deleteRow(idx);
            saveVals.splice(idx, 1);

            //삭제한 값 빼고 배열 저장
            chrome.storage.sync.set({
                'pageData' : JSON.stringify(saveVals)
            }, () => {
                console.log("Deleting!");
            });
        }else{
            console.log("Unselected : " + idx);
        }
    }
}

