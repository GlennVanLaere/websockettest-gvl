const Primus = require('primus');

function go(server){
    let primus = new Primus(server, {});
    primus.on('connection', (spark) => {
        console.log("we have a spark");
        spark.on("data", (data) => {
            primus.write(data);
        })
    });
}

module.exports.go = go;