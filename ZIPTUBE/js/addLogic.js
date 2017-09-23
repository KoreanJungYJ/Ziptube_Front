/*-------------------*/
let addBtn = document.getElementById('addBtn');
let table = document.querySelector('table');

addBtn.addEventListener('click', () => {
    addLogic();
});

function addLogic(){
    let downloadPart = document.getElementById('downloadPart');

    function addResult(){
        createTable();
        showDownload();
        setValue();
    }

    function createTable(){
        let row = table.insertRow(table.length); //tr
        let checkBoxCell = row.insertCell(0); //td
        let inputCell = row.insertCell(1); //td

        checkBoxCell.innerHTML 
                = `<input type = "checkbox">`;
        inputCell.innerHTML = new Date().toUTCString();
    }

    function showDownload(){
        downloadPart.style.display = "block";
    }

    function setValue(){

    }

    addResult();
}