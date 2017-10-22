let delBtn = document.getElementById('delBtn');

//여기서 다시 get을 해보자
chrome.storage.sync.get(() => {
    
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
            //해당되는 index의 배열을 삭제시키기
            saveVals.splice(idx, 1);
        }else{
            console.log("Unselected : " + idx);
        }
    }
    
    console.log(saveVals);

    function setDeletedTable(){
        let rows = table.querySelectorAll('tbody > tr');
        let rowIndex = rows.length;

        //let checkBoxes = document.querySelectorAll('td:nth-of-type(2n-1)');
        //let inputTexts = document.querySelectorAll('td:nth-of-type(2n)');

        console.log("Leaving Index : " +  rowIndex);
    }

    setDeletedTable();
}
