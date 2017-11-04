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

const mp3Btn = document.getElementById('mp3Btn');
const mp4Btn = document.getElementById('mp4Btn');
