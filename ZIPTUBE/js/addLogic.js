let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    addLogic();
});

function addLogic(){
    function addResult(){
        init();
        createTable();
        showDownload();
        setValue();
    }

    function init(){
        let downloadPart = document.getElementById('downloadPart');
    }

    function createTable(){

    }

    function showDownload(){
        downloadPart.style.display = "block";
    }

    function setValue(){

    }

    addResult();
}