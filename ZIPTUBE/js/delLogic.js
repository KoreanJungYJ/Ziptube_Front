const delBtn = document.getElementById('delBtn');

//여기서 다시 get을 해보자
chrome.storage.sync.get((savedData) => {
    saveVals = JSON.parse(savedData.pageData);
    if(saveVals && saveVals.length > 0){
        delBtn.addEventListener('click', () => {
            showDelForm();
        });
    }
});

function showDelForm(){
    let downloadBtn = document.getElementById('download');
    let deletePart = document.getElementById('delete');

    downloadBtn.style.display = "none";
    deletePart.style.display = "block";
}


delBtn.addEventListener('click', () => {
    let checks = document.getElementsByClassName('checkBoxes');
    let table = document.querySelector('table');
    // tab.deleteRow(tab.rows.length-1);

    delClickEvent();
});

/* checkbox true인 table 삭제 */
function delClickEvent(){
    let delClicks = document.getElementsByClassName('deletes');
    Array.from(delClicks).forEach((elem, index) => {
        console.log(elem + "-" + index);
        elem.addEventListener('click', () => {
            if(index == 0){
                delAll();
            }else{
                delTable(checks.length, checks, table);
            }
        });
    }); 
}

function delAll(){
    for(let i = 0; i < saveVals.length; i++){
        checks[i].checked = true;
        rows[i].style.backgroundColor = "transparent";
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

    function setDeletedTable(){
        let rows = table.querySelectorAll('tbody > tr');
        let rowIndex = rows.length;

        console.log("Leaving Index : " +  rowIndex);
    }

    setDeletedTable();
}

