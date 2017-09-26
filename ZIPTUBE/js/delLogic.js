let delBtn = document.getElementById('delBtn');

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
            console.log("Selected CheckBoxes : " + idx);
            table.deleteRow(idx);
        }else{
            console.log("UnSelected CheckBoxes : " + idx);
        }
    }
}