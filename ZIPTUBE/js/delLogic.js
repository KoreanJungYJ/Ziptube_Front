let delBtn = document.getElementById('delBtn');

delBtn.addEventListener('click', () => {
    let tab = document.querySelector('table');
    tab.deleteRow(tab.rows.length-1);
});