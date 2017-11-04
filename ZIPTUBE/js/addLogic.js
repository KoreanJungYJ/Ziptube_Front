const addBtn = document.getElementById('addBtn');
let table = document.querySelector('table');
let saveVals = new Array();

/*
유튜브 URL 테스트

let test = "https://www.youtube.com/watch?v=jHFVmsW9J5o";
let test2 = "https://www.naver.com";
let test3 = "https://www.youtube.com/watch?v=kaMWDfbPjp0";
let test4 = "https://www.youtube.com/watch?v=vGxVIWJbHLg";
*/


chrome.storage.sync.get((getData) => {
    saveVals = JSON.parse(getData.pageData);
    console.log("- 추가 후 저장된 배열 -");
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
                console.log("체크: " + elem.checked);
                console.log("Clicked CheckBox Index: " + index);
            });
        }
    }

    checkBoxColor();
}

//클릭 시 다운로드 버튼 보여주기
function showDownload(){
    let downloadPart = document.getElementById('downloadPart');
    let deletePart = document.getElementById('delete');
    let download = document.getElementById('download');

    deletePart.style.display = "none";
    downloadPart.style.display = "block";
    download.style.display = "table";
}

//페이지 URL 불러오기
function setValue(){
    chrome.tabs.query({'active': true, 
                       'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
        let boxUrls = document.getElementsByClassName('youtubeUrls');
        let pageUrl = tabs[0].url;
        let youtubeUrl = "";

        youtubeUrl = convertId(pageUrl);
        console.log(youtubeUrl);

        if(youtubeUrl != "ErrorUrl"){
            boxUrls[saveVals.length].value = youtubeUrl;
            saveVals.push(youtubeUrl);
            console.log(saveVals.length);

            chrome.storage.sync.set({
            //페이지 URL를 saveVals 배열에 보내기
            'pageData' : JSON.stringify(saveVals)

            }, () => {
                console.log("Clicked Datas are being saved");
            });
        }else{
            alert("유튜브 영상만 가능합니다!");
            window.close();
        }
    });
}

function convertId(url){
    let basicUrl = "https://youtu.be/";
    let setUrl = "";

    if(url){
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        let matches = url.match(regExp);
        if(matches){
            setUrl += matches[7];
            return basicUrl.concat(setUrl);
        }else{
            setUrl = "ErrorUrl";
            return setUrl;
        }
    }
}

/*function createHttpRequest5(url, callback){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                callback(true);
            }else{
                callback(false);
            }
        }
    };

    xhr.open('POST', '/zip', true);
    // url = Array , type = String [mp3,mp4] 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(value);
}*/



