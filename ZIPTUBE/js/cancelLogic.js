let cancelBtn = document.getElementById('cancelBtn');

cancelBtn.addEventListener('click', () => {
    cancelCheck();
    showDownload();
});

function cancelCheck(){
    let rows = table.querySelectorAll('tbody > tr');
    let checkBox = document.getElementsByClassName('checkBoxes');
    
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].checked = false;
        rows[i].style.backgroundColor = "transparent";
    }
}

function showDownload(){
    let downloadPart = document.getElementById('downloadPart');
    let deletePart = document.getElementById('delete');
    let download = document.getElementById('download');

    deletePart.style.display = "none";
    downloadPart.style.display = "block";
    download.style.display = "table";
}