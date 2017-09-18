/*function urlTest(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        document.getElementById('test').innerHTML += url + "<br/><br/>";
        var arr = [];
        arr += arr.push(url);
        arr = arr.slice(0,-1);
    });
}


var btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    urlTest();
});*/


/* 눌렀을 때 생성 관련 코드 */

// var addBtn = document.getElementById('addBtn');
// var addCnt = 0;

// addBtn.addEventListener('click', () => {
//     var addForm = document.getElementById('showUrl');
//     var mainForm = 
//         '<label><input type="checkbox" class="boxes" id="check'+addCnt+'"><input type="url" class="urls" id="sepUrl'+addCnt+'" value=""></label>';

//     var addDiv = document.createElement("div");
//     addDiv.setAttribute("id", "keyword_Form"+addCnt);
//     addDiv.innerHTML = mainForm;
//     addForm.appendChild(addDiv);

//     addCnt++;

//     /* 삭제 버튼을 누르고 다시 추가를 눌렀을 경우 */
    
// });

// /* checkbox는 delBtn을 눌렀을 때만 display상으로 보여지도록 */

// /* 눌렀을 때 checkbox표시 관련 코드 */

// var delBtn = document.getElementById('delBtn');
// var checkBoxes = document.getElementsByClassName('boxes');
// var delCnt;

// delBtn.addEventListener('click', () => {
//     delCnt = 0;
//     if(checkBoxes.length > 0){
//         for(delCnt in checkBoxes){
//             checkBoxes[delCnt].style.display = "inline-block";
//         }
//     }
// });

// /* checkbox 재삭제 코드 */

// var canBtn = document.getElementById('cancelBtn');

// canBtn.addEventListener('click', () => {
//     let cancelCnt = 0;
//     for(cancelCnt in checkBoxes){
//         checkBoxes[cancelCnt].style.display = defaultStatus;
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(function (data) {
    let test = document.querySelector('input');
    test.checked = data.set;
});

let test = document.querySelector('input');
chrome.storage.sync.set({
    'set' : test.checked
})
});







