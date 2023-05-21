var player = {
    points: {
        points: 0,
        pps: 0.01,
    },
    up1: {
        cost: 0.10,
        level: 0,
    }
};

window.setInterval(function() {
    addpoints();
}, 20);

window.setInterval(function() {
    document.getElementById("points").innerHTML = `Points: ${new ExpantaNum(player.points.points).toFixed(2)} (+${new ExpantaNum(player.points.pps).toFixed(2)}/s)`;
    document.getElementById("up1").innerHTML = `<b>Increase points production by 0.01</b> <br> Cost: <b>${new ExpantaNum(player.up1.cost).toFixed(2)}</b> points <br> Level: ${Math.round(new ExpantaNum(player.up1.level))}`
}, 0);

function addpoints() {
    player.points.points = ExpantaNum.add(player.points.points, ExpantaNum.div(player.points.pps, 50));
};

function up1() {
    if (ExpantaNum.cmp(player.points.points, player.up1.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up1.cost);
        player.points.pps = ExpantaNum.add(player.points.pps, 0.01);
        player.up1.cost = ExpantaNum.add(player.up1.cost, 0.05).times(1.06);
        player.up1.level = ExpantaNum.add(player.up1.level, 1);
    }
}
