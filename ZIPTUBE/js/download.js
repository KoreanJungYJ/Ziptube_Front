let downloadBtn = document.getElementById('download');
let exit = document.getElementsByClassName('exitImg');
let clickForm = document.getElementById('clickForm');

exit[1].addEventListener('click', () => {
    clickForm.style.display = "none";
});

downloadBtn.addEventListener('click', () => {
    clickForm.style.display = "block";
});

/* Axios 통신 */

const downBtns = document.getElementsByClassName('formBtns');
Array.from(downBtns).forEach((elem, index) => {
    elem.addEventListener('click', () => {
        axiosConnect(index);
    });
});

function axiosConnect(index){
    console.log("Clicked Index : " + index);

    if(index == 0){
        axios({
            method : 'POST',
            url : 'https://ziptube.herokuapp.com/zip',
            data : {
                type : "mp3",
                url : saveVals
            },
            withCredentials : false,
            headers : {
                "Access-Control-Allow-Origin" : '*'
            },
            routes : {
                "cors" : true
            }
        }).then(function(data) {
            console.log(data);
            //createNewTab();

        }).catch(function(err) {
            console.log(err);
        });
    }else{
        axios({
            method : 'POST',
            url : 'https://ziptube.herokuapp.com/zip',
            data : {
                type : "mp4",
                url : saveVals
            },
            withCredentials : false,
            headers : {
                "Access-Control-Allow-Origin" : '*'
            },
            routes : {
                "cors" : true
            }
        }).then(function(data) {
            console.log(data);
            //createNewTab();

        }).catch(function(err) {
            console.log(err);
        });
    }
    createNewTab();
}

function createNewTab(){
    chrome.tabs.create({
        'url' : chrome.extension.getURL('downPage.html')
    }, function(tab){
        console.log("Connection Success!");
    })
}
