var player = {
    points: {
        points: 0,
        pps: 0.01,
    },
};

window.setInterval(function() {
    addpoints();
}, 20);

window.setInterval(function() {
    document.getElementById("points").innerHTML = `Points: ${new ExpantaNum(player.points.points).toFixed(2)} (+${new ExpantaNum(player.points.pps).toFixed(2)}/s)`;
}, 0);

function addpoints() {
    player.points.points = ExpantaNum.add(player.points.points, ExpantaNum.div(player.points.pps, 50));
};