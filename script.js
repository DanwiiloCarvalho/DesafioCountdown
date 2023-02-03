/**
 * 1 - Pegar o timestamp do dia 06/02/2023
 * 2 - Pegar o timestamp atual(corrente)
 */

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

    /* console.log("Dias: " + days + " Horas: " + hours + " minutos: " + minutes + " segundos: " + seconds); */
    
}, 1000);