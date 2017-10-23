const delBtn = document.getElementById('delBtn');

//여기서 다시 get을 해보자
/*chrome.storage.sync.get((savedData) => {
    saveVals = JSON.parse(savedData.leftData);
    console.log("- 삭제 시 배열 -");
    console.log(saveVals);    
});*/


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

            chrome.storage.sync.set({
                leftData : JSON.stringify(saveVals)
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
