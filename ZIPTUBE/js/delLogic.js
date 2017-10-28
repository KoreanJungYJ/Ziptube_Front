const delBtn = document.getElementById('delBtn');

//여기서 다시 get을 해보자
chrome.storage.sync.get((savedData) => {
    saveVals = JSON.parse(savedData.leftData);
    console.log("- 삭제 후 남은 데이터 -");
    console.log(saveVals);
});


delBtn.addEventListener('click', () => {
    let checks = document.getElementsByClassName('checkBoxes');
    let table = document.querySelector('table');
    // tab.deleteRow(tab.rows.length-1);

    delTable(checks.length, checks, table);
    
});

/* checkbox true인 table 삭제 */
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

