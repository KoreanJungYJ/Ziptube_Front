//  chrome.storage.sync.get(function(data) {
//     document.getElementById('urlPart').innerText = data.value;
//  })

// document.getElementById('addBtn').addEventListener('click', () => {
//     alert("check");
//     var foo = document.getElementById('urlPart');
//     foo.innerText = "test";
//     var soo = foo.innerText;
//     chrome.storage.sync.set({
//         "value" : soo
//     })

//set해서 get으로 값 가져오기 성공
// })
// document.addEventListener('DOMContentLoaded', function() {
//     //  chrome.storage.sync.get(function (data) {
//     //      var userData = data.saveVal;
//     //      var foo = document.getElementsByClassName('urlTitles');
//     //      foo[0].value = userData;
//     //  });

//     var addBtn = document.getElementById('addBtn');
//     addBtn.addEventListener('click', function() {
//         var addCnt = 0;
//         var showPart = document.getElementById('urlCover');
//         var mainForm =
//             '<label><input type="checkbox" class="checkBoxes" id="check'+addCnt+'"><input type="url" class="urlTitles" id="sepUrl'+addCnt+'" value="" maxlength = "40"></label>';
       
//         var addDiv = document.createElement('div');
//         addDiv.setAttribute("id", "keyForm" + addCnt);
//         addDiv.innerHTML = mainForm;
//         showPart.appendChild(addDiv);
//         addCnt++;

//         chrome.tabs.getSelected(null, function(tabs){
//             var userVal = document.getElementsByClassName('urlTitles');
//             var pageUrl = tabs.url;
//             var saveVal;

//             for(let cnt = 0; cnt < addCnt; cnt++){
//                 userVal[cnt].value = pageUrl;
//                 saveVal = userVal[cnt].value;

//                 chrome.storage.sync.set({
//                     'saveVal' : saveVal
//                 });
//             }
//         });
//     })
// })

// chrome.storage.sync.get(function (data) {
//     var userData = document.querySelector('input');
//     userData.value = data.saveVal;
// });

// var addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', () => {
//     var input = document.querySelector('input');
//     var saveVal = input.value;
//     chrome.storage.sync.set({
//         'saveVal' : saveVal
//     });
// });
