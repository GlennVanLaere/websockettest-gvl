let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on("data", (data) => {
    console.log(data);
    let emo = data.emotion;
    let width = document.querySelector(`.${emo} img`).style.width;
    console.log(width);

    let px = width.substring(0, width.length-2);

    px*=1.1;
    
    document.querySelector(`.${emo} img`).style.width = px + "px";
})