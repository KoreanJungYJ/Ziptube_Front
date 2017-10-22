let addBtn = document.getElementById('addBtn');
let table = document.querySelector('table');
let saveVals = new Array();


//저장된 값을 불러올 storage
/*chrome.storage.sync.get((getData) => {
    let data = JSON.parse(getData.pageData);
    console.log("-Parsed Data-");
    console.log(data);
});*/

chrome.storage.sync.get((getData) => {
    saveVals = JSON.parse(getData.pageData);
    console.log("-추가 부분 배열-");
    console.log(saveVals);

    if(saveVals && saveVals.length > 0){
        showDownload();
        for(let idx = 0; idx < saveVals.length; idx++){
            createTable();
        }
    }
});

//클릭 시 이벤트
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

//테이블 생성
function createTable(){
    let rows = table.querySelectorAll('tbody > tr');
    let index = rows.length;

    let row = table.insertRow(index); //table에 tr 추가
    let checkBoxCell = row.insertCell(0); //tr에 td 추가
    let inputCell = row.insertCell(1); //tr에 td 추가

    //추가되는 input 값들
        checkBoxCell.innerHTML 
                = `<input type = "checkbox" class = "checkBoxes">`;
        inputCell.innerHTML 
                = `<input type = "text" class = "youtubeUrls" value = '${saveVals[index]}'>`;

    //클릭 시 배경색 변경
    function checkBoxColor(){
        let checks = document.getElementsByClassName('checkBoxes');

        if(checks && checks.length > 0){
            let elem = Array.from(checks)[index];

            elem.addEventListener('click', () => {
                row.style.backgroundColor = elem.checked ? "#F2F2F2" : "transparent";
                console.log("체크: " +elem.checked);
                console.log("Clicked CheckBox Index: " + index);
            });
        }
    }

    checkBoxColor();
}

//클릭 시 다운로드 버튼 보여주기
function showDownload(){
    let downloadPart = document.getElementById('downloadPart');
    downloadPart.style.display = "block";
}

//페이지 URL 불러오기
function setValue(){
    chrome.tabs.query({'active': true, 
                       'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
        let boxUrls = document.getElementsByClassName('youtubeUrls');
        let pageUrl = tabs[0].url;
        
        //id Test
        tabs.forEach(function(tab) {
            console.log('Tab ID : ' + tab.id);
        });
        //

        boxUrls[saveVals.length].value = pageUrl;
        saveVals.push(pageUrl);
        console.log(saveVals.length);

        //데이터 설정하기
        chrome.storage.sync.set({
            //페이지 URL를 saveVals 배열에 보내기
            'pageData' : JSON.stringify(saveVals)

        }, function() {
            console.log("Clicked Datas are being saved");
        });
    });
}


