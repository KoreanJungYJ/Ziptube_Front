let cancelBtn = document.getElementById('cancelBtn');

cancelBtn.addEventListener('click', () => {
    cancelCheck();
});

function cancelCheck(){
    let checkBox = document.getElementsByClassName('checkBoxes');
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].checked = false;
    }
}