/*-------------------*/
let addBtn = document.getElementById('addBtn');
let table = document.querySelector('table');

addBtn.addEventListener('click', () => {
    addLogic();
});

function addLogic(){

    function addResult(){
        createTable();
        showDownload();
        setValue();
    }

    addResult();
}

function createTable(){
    let row = table.insertRow(table.length); //tr
    let checkBoxCell = row.insertCell(0); //td
    let inputCell = row.insertCell(1); //td

    checkBoxCell.innerHTML 
            = `<input type = "checkbox" class = "checkBoxes">`;
    inputCell.innerHTML = `<input type = "text" class = "youtubeUrls">`;
}


function showDownload(){
    let downloadPart = document.getElementById('downloadPart');
    downloadPart.style.display = "block";
}


function setValue(){

}