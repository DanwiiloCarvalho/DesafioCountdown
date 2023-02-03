const $days = document.querySelector(".watch #days");
const $hours = document.querySelector(".watch #hours");
const $minutes = document.querySelector(".watch #minutes");
const $seconds = document.querySelector(".watch #seconds");

//Função para adicionar zero à esquerda de valores menores que dez
function zeroLeft(value) {
    return value < 10 ? '0' + value : value;
}

setInterval(function() {
    //Timestamp da data alvo em segundos
    const futureTimestamp = Date.parse("2023-02-06T08:00") / 1000;
    //Timestamp do momento atual
    const nowTimestamp = new Date().getTime() / 1000;

    const displayTimestamp = futureTimestamp - nowTimestamp;
    /* console.log(Math.ceil(displayTimestamp / 86400)); */ //Segundos para dias

    const days = Math.floor(displayTimestamp / 86400);
    const hours = Math.floor((displayTimestamp % 86400) / 3600);
    const minutes = Math.floor(((displayTimestamp % 86400) % 3600) / 60);
    const seconds = Math.floor((((displayTimestamp % 86400) % 3600) % 60) % 60);

    $days.innerText = zeroLeft(days);
    $hours.innerText = zeroLeft(hours);
    $minutes.innerText = zeroLeft(minutes);
    $seconds.innerText = zeroLeft(seconds);
}, 1000);