let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on("data", (data) => {
    console.log(data);
})