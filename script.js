const $days = document.querySelector(".watch #days");
const $hours = document.querySelector(".watch #hours");
const $minutes = document.querySelector(".watch #minutes");
const $seconds = document.querySelector(".watch #seconds");
const $subscribeButton = document.querySelector("button.subscribe");
const $modalFullScreen = document.querySelector("div.modal-fullscreen");
const $subscribeModal = document.querySelector(".subscribe-modal");

//Função para adicionar zero à esquerda de valores menores que dez
function zeroLeft(value) {
    return value < 10 ? '0' + value : value;
}

setInterval(function() {
    if ($days.innerText == '00' && $hours.innerText == '00' && $minutes.innerText == '00' && $seconds.innerText == '00'){
        return;
    }
    //Timestamp da data alvo em segundos
    /* const futureTimestamp = Date.parse("2023-02-06T08:00") / 1000; */
    const futureTimestamp = Date.parse("2023-06-24T19:22") / 1000;
    //Timestamp do momento atual em segundos
    const nowTimestamp = new Date().getTime() / 1000;

    const displayTimestamp = futureTimestamp - nowTimestamp; //Diferença entre os timestamps

    //Cálculos matemáticos para obter os dias, horas, minutos e segundos
    const days = Math.floor(displayTimestamp / 86400);
    const hours = Math.floor((displayTimestamp % 86400) / 3600);
    const minutes = Math.floor(((displayTimestamp % 86400) % 3600) / 60);
    const seconds = Math.floor((((displayTimestamp % 86400) % 3600) % 60) % 60);

    //Atribuindo os valores aos elementos span
    $days.innerText = zeroLeft(days);
    $hours.innerText = zeroLeft(hours);
    $minutes.innerText = zeroLeft(minutes);
    $seconds.innerText = zeroLeft(seconds);
}, 1000);

//Implementação da abertura do modal clicando no botão inscreva-se
$subscribeButton.addEventListener("click", () => {
    $modalFullScreen.style.display = 'flex'; 
})

/* $modalFullScreen.addEventListener("click", () => {

}) */