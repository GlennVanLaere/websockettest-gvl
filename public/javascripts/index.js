let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})


document.querySelector(".emotions").addEventListener("click", (e) => {

    let emo = e.target.parentElement.getAttribute("class");
    
    primus.write({
        emotion: emo
    });
})