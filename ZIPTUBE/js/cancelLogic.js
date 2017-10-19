let cancelBtn = document.getElementById('cancelBtn');

cancelBtn.addEventListener('click', () => {
    cancelCheck();
});

function cancelCheck(){
    let rows = table.querySelectorAll('tbody > tr');
    let checkBox = document.getElementsByClassName('checkBoxes');
    
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].checked = false;
        rows[i].style.backgroundColor = "transparent";
    }
}