class Player {
    constructor(data) {
        this.points = {
            points: data?.points?.points || 0,
            pps: data?.points?.pps || 0.01,
            max: data?.points?.max || 0,
            offline: data?.points?.offline || 0,
            offlinepps: data?.points?.offlinepps || 0
        };
        this.up1 = {
            cost: data?.up1?.cost || 0.1,
            level: data?.up1?.level || 0,
            effect: data?.up1?.effect || 0.01
        };
        this.up1b = {
            cost: data?.up1b?.cost || 100,
            level: data?.up1b?.level || 0,
        };
        this.up2 = {
            cost: data?.up2?.cost || 10,
            level: data?.up2?.level || 0,
            effect: data?.up2?.effect || 0.01,
            chance: data?.up2?.chance || 0,
            multpoints: data?.up2?.multpoints || 15,
            multchance: data?.up2?.multchance || 1.1,
        };
        this.up2b = {
            cost: data?.up2b?.cost || 1000,
            level: data?.up2b?.level || 0,
        };
        this.up3 = {
            cost: data?.up3?.cost || 10000,
            level: data?.up3?.level || 0,
        };
        this.up3b = {
            cost: data?.up3b?.cost || 10000,
            level: data?.up3b?.level || 0,
            effect: data?.up3b?.effect || 0.95,
        }
        this.lastTick = data?.lastTick || Date.now();
        this.load = data?.load || false;
        this.diff = data?.diff || 0;
        this.offline = data?.offline || 0;
    };
};

var player = new Player();


window.setInterval(function() {
    chance1();
}, 1000);

window.setInterval(function() {
    addpoints();
    maxpoints();
    Save();
    if (player.load == false) {
        player.points.offline = ExpantaNum.times(player.points.pps, ExpantaNum.div(player.diff, 1000));
        player.points.offlinepps = ExpantaNum.times(ExpantaNum.times(ExpantaNum.div(player.up2.chance, 100), player.up2.effect), ExpantaNum.div(player.diff, 1000));
        player.points.points = ExpantaNum.add(player.points.points, ExpantaNum.times(player.points.pps, ExpantaNum.div(player.diff, 1000)));
        player.offline = ExpantaNum.add(player.offline, 1);
        if (ExpantaNum.cmp(player.up2.level, 0) > 0) {
            player.points.pps = ExpantaNum.add(player.points.pps, ExpantaNum.times(ExpantaNum.times(ExpantaNum.div(player.up2.chance, 100), player.up2.effect), ExpantaNum.div(player.diff, 1000)));
        };
        player.load = true;
    };
}, 20);

window.setInterval(function() {
    document.getElementById("points").innerHTML = `Points: ${notate(player.points.points)} (+${notate(player.points.pps)}/s)`;
    document.getElementById("up1").innerHTML = `<b>Increase points production by ${notate(player.up1.effect)}</b> <br> Cost: <b>${notate(player.up1.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1.level)}`;
    document.getElementById("up1b").innerHTML = `<b>Multiply first upgrade effect by 3</b> <br> Cost: <b>${notate(player.up1b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1b.level)}`;
    if (ExpantaNum.cmp(player.points.max, 1) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            document.getElementById("up2").innerHTML = `<b>+${ExpantaNum.times(player.up2.chance, ExpantaNum.sub(player.up2.multchance, 1)).toFixed(1)}% chance/s to increase points production by ${notate(player.up2.effect)} (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        } else {
            document.getElementById("up2").innerHTML = `<b>Add a 10.0% chance/s to increase points production by 0.01 (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        };
    } else {
        document.getElementById("up2").innerHTML = `Reach <b>1 point</b> to see this upgrade.`;
    };
    if (ExpantaNum.cmp(player.points.max, 1000) >= 0) {
        document.getElementById("up2b").innerHTML = `<b>Improve the second upgrade</b> <br> Cost: <b>${notate(player.up2b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2b.level)}`;
    } else {
        document.getElementById("up2b").innerHTML = `Reach <b>1.00K points</b> to see this upgrade.`;
    };
    if (ExpantaNum.cmp(player.points.max, 5000) >= 0) {
        document.getElementById("up3").innerHTML = `<b>Multiply current production and upgrade effects by 1.5</b> <br> Cost: <b>${notate(player.up3.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up3.level)}`;
        document.getElementById("up3b").innerHTML = `<b>All upgrades become ${notate(ExpantaNum.sub(100, ExpantaNum.times(player.up3b.effect, 100)))}% cheaper (currently: ${notate(ExpantaNum.sub(100, ExpantaNum.pow(player.up3b.effect, player.up3b.level).times(100)))}% discount)</b> <br> Cost: <b>${notate(player.up3b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up3b.level)}`;
    } else {
        document.getElementById("up3").innerHTML = `Reach <b>5.00K points</b> to see this upgrade.`;
        document.getElementById("up3b").innerHTML = `Reach <b>5.00K points</b> to see this upgrade.`;
    };
    if (ExpantaNum.cmp(player.offline, 1) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            document.getElementById("offline").innerHTML = `While you were offline, you've earnt ${notate(player.points.offline)} points and ${notate(player.points.offlinepps)} points/s.`
        } else {
            document.getElementById("offline").innerHTML = `While you were offline, you've earnt ${notate(player.points.offline)} points.`
        };    
    } else {
        document.getElementById("offline").innerHTML = ``;
    };
    if (ExpantaNum.cmp(player.up2.chance, 100) >= 0) {
        player.up2.effect = ExpantaNum.times(player.up2.effect, player.up2.multpoints);
        player.up2.chance = new ExpantaNum("10");
    };
    if (ExpantaNum.cmp(player.points.points, new ExpantaNum(1e15)) >= 0) {
        player.points.points = new ExpantaNum(0);
        player.points.pps = new ExpantaNum(0.01);
        player.points.max = new ExpantaNum(0);
        player.up1.cost = new ExpantaNum(0.1);
        player.up1.level = new ExpantaNum(0);
        player.up1.effect = new ExpantaNum(0.01);
        player.up1b.cost = new ExpantaNum(100);
        player.up1b.level = new ExpantaNum(0);
        player.up2.cost = new ExpantaNum(10);
        player.up2.level = new ExpantaNum(0);
        player.up2.effect = new ExpantaNum(0.01);
        player.up2.chance = new ExpantaNum(0);      
        player.up2.multpoints = new ExpantaNum(15);
        player.up2.multchance = new ExpantaNum(1.1);  
        player.up2b.cost = new ExpantaNum(1000);
        player.up2b.level = new ExpantaNum(0);
        player.up3.cost = new ExpantaNum(10000);
        player.up3.level = new ExpantaNum(0);
    };
    player.lastTick = Date.now();
}, 0);

function addpoints() {
    player.points.points = ExpantaNum.add(player.points.points, ExpantaNum.div(player.points.pps, 50));
};

function maxpoints() {
    if (ExpantaNum.cmp(player.points.points, player.points.max) >= 0) {
        player.points.max = player.points.points;
    };
};

function chance1() {
    if (ExpantaNum.cmp(Math.random(), ExpantaNum.div(player.up2.chance, 100)) < 0) {
        player.points.pps = ExpantaNum.add(player.points.pps, player.up2.effect);
    };
};

function up1() {
    if (ExpantaNum.cmp(player.points.points, player.up1.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up1.cost);
        player.points.pps = ExpantaNum.add(player.points.pps, player.up1.effect);
        player.up1.cost = ExpantaNum.add(player.up1.cost, 0.05).times(1.06);
        player.up1.level = ExpantaNum.add(player.up1.level, 1);
    };
};

function up1b() {
    if (ExpantaNum.cmp(player.points.points, player.up1b.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up1b.cost);
        player.up1.effect = ExpantaNum.times(player.up1.effect, 3);
        player.up1b.cost = ExpantaNum.times(player.up1b.cost, 10);
        player.up1b.level = ExpantaNum.add(player.up1b.level, 1);
    };
};

function up2() {
    if (ExpantaNum.cmp(player.points.points, player.up2.cost) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            player.up2.chance = ExpantaNum.times(player.up2.chance, player.up2.multchance);
        } else {
            player.up2.chance = new ExpantaNum("10");
        };
        player.points.points = ExpantaNum.sub(player.points.points, player.up2.cost);
        player.up2.cost = ExpantaNum.times(player.up2.cost, 1.5);
        player.up2.level = ExpantaNum.add(player.up2.level, 1);
    };
};

function up2b() {
    if (ExpantaNum.cmp(player.points.points, player.up2b.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up2b.cost);
        player.up2b.cost = ExpantaNum.pow(player.up2b.cost, 1.075);
        player.up2b.level = ExpantaNum.add(player.up2b.level, 1);
        player.up2.multchance = ExpantaNum.times(player.up2.multchance, 1.005);
        player.up2.multpoints = ExpantaNum.times(player.up2.multpoints, 1.015);
    };
};

function up3() {
    if (ExpantaNum.cmp(player.points.points, player.up3.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up3.cost);
        player.up3.cost = ExpantaNum.times(player.up3.cost, 3);
        player.up3.level = ExpantaNum.add(player.up3.level, 1);
        player.points.pps = ExpantaNum.times(player.points.pps, 1.5);
        player.up1.effect = ExpantaNum.times(player.up1.effect, 1.5);
        player.up2.effect = ExpantaNum.times(player.up2.effect, 1.5);
    };
};

function up3b() {
    if (ExpantaNum.cmp(player.points.points, player.up3b.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up3b.cost);
        player.up3b.cost = ExpantaNum.times(player.up3b.cost, 1.35).pow(1.02);
        player.up3b.level = ExpantaNum.add(player.up3b.level, 1);
        player.up1.cost = ExpantaNum.times(player.up1.cost, player.up3b.effect);
        player.up1b.cost = ExpantaNum.times(player.up1b.cost, player.up3b.effect);
        player.up2.cost = ExpantaNum.times(player.up2.cost, player.up3b.effect);
        player.up2b.cost = ExpantaNum.times(player.up2b.cost, player.up3b.effect);
        player.up3.cost = ExpantaNum.times(player.up3.cost, player.up3b.effect);
    };
};

window.onload = function(){
    player.diff = ExpantaNum.sub(Date.now(), player.lastTick);
    console.log(player.diff.toString());
    player.load = false;
};

window.onbeforeunload = function(){
    player.lastTick = Date.now();
};

function notate(number) {
    const num = new ExpantaNum(number);

    if (isNaN(number) == true) {
        number = num
    };
  
    if (ExpantaNum.cmp(num, 100) < 0) {
      // Ensure numbers less than 100 have exactly two decimal places
      return num.toFixed(2);
    } else if ((ExpantaNum.cmp(num, 1000) < 0) && (ExpantaNum.cmp(num, 100) > 0)) {
        return Math.floor(num);
    } else if ((ExpantaNum.cmp(num, 1000000) < 0) && (ExpantaNum.cmp(num, 1000) >= 0)) {
        return `${ExpantaNum.div(num, 1000).toFixed(2)}K`;
    } else if ((ExpantaNum.cmp(num, 1e9) < 0) && (ExpantaNum.cmp(num, 1e6) >= 0)) {
        return `${ExpantaNum.div(num, 1e6).toFixed(2)} M`;
    } else if ((ExpantaNum.cmp(num, 1e12) < 0) && (ExpantaNum.cmp(num, 1e9) >= 0)) {
        return `${ExpantaNum.div(num, 1e9).toFixed(2)} B`;
    } else if ((ExpantaNum.cmp(num, 1e15) < 0) && (ExpantaNum.cmp(num, 1e12) >= 0)) {
        return `${ExpantaNum.div(num, 1e12).toFixed(2)} T`;
    } else if ((ExpantaNum.cmp(num, 1e18) < 0) && (ExpantaNum.cmp(num, 1e15) >= 0)) {
        return `${ExpantaNum.div(num, 1e15).toFixed(2)} Qa`;
    } else if ((ExpantaNum.cmp(num, 1e21) < 0) && (ExpantaNum.cmp(num, 1e18) >= 0)) {
        return `${ExpantaNum.div(num, 1e18).toFixed(2)} Qi`;
    } else if ((ExpantaNum.cmp(num, 1e24) < 0) && (ExpantaNum.cmp(num, 1e21) >= 0)) {
        return `${ExpantaNum.div(num, 1e21).toFixed(2)} Sx`;
    } else if ((ExpantaNum.cmp(num, 1e27) < 0) && (ExpantaNum.cmp(num, 1e24) >= 0)) {
        return `${ExpantaNum.div(num, 1e24).toFixed(2)} Sp`;
    } else if ((ExpantaNum.cmp(num, 1e30) < 0) && (ExpantaNum.cmp(num, 1e27) >= 0)) {
        return `${ExpantaNum.div(num, 1e27).toFixed(2)} Oc`;
    } else if ((ExpantaNum.cmp(num, 1e33) < 0) && (ExpantaNum.cmp(num, 1e30) >= 0)) {
        return `${ExpantaNum.div(num, 1e30).toFixed(2)} No`;
    } else if ((ExpantaNum.cmp(num, 1e36) < 0) && (ExpantaNum.cmp(num, 1e33) >= 0)) {
        return `${ExpantaNum.div(num, 1e33).toFixed(2)} Dc`;
    } else if ((ExpantaNum.cmp(num, 1e39) < 0) && (ExpantaNum.cmp(num, 1e36) >= 0)) {
        return `${ExpantaNum.div(num, 1e36).toFixed(2)} uDc`;
    } else if ((ExpantaNum.cmp(num, 1e42) < 0) && (ExpantaNum.cmp(num, 1e39) >= 0)) {
        return `${ExpantaNum.div(num, 1e39).toFixed(2)} dDc`;
    } else if ((ExpantaNum.cmp(num, 1e45) < 0) && (ExpantaNum.cmp(num, 1e42) >= 0)) {
        return `${ExpantaNum.div(num, 1e42).toFixed(2)} tDc`;
    } else if ((ExpantaNum.cmp(num, 1e48) < 0) && (ExpantaNum.cmp(num, 1e45) >= 0)) {
        return `${ExpantaNum.div(num, 1e45).toFixed(2)} qDc`;
    } else if ((ExpantaNum.cmp(num, 1e51) < 0) && (ExpantaNum.cmp(num, 1e48) >= 0)) {
        return `${ExpantaNum.div(num, 1e48).toFixed(2)} QDc`;
    } else if ((ExpantaNum.cmp(num, 1e54) < 0) && (ExpantaNum.cmp(num, 1e51) >= 0)) {
        return `${ExpantaNum.div(num, 1e51).toFixed(2)} sDc`;
    } else if ((ExpantaNum.cmp(num, 1e57) < 0) && (ExpantaNum.cmp(num, 1e54) >= 0)) {
        return `${ExpantaNum.div(num, 1e54).toFixed(2)} SDc`;
    } else if ((ExpantaNum.cmp(num, 1e60) < 0) && (ExpantaNum.cmp(num, 1e57) >= 0)) {
        return `${ExpantaNum.div(num, 1e57).toFixed(2)} oDc`;
    } else if ((ExpantaNum.cmp(num, 1e63) < 0) && (ExpantaNum.cmp(num, 1e60) >= 0)) {
        return `${ExpantaNum.div(num, 1e60).toFixed(2)} nDc`;
    } else if ((ExpantaNum.cmp(num, 1e66) < 0) && (ExpantaNum.cmp(num, 1e63) >= 0)) {
        return `${ExpantaNum.div(num, 1e63).toFixed(2)} V`;
    };
    if (ExpantaNum.cmp(num, 1e66) >= 0) {
      var exponent = ExpantaNum.log10(num).toFixed(0);
      var mantissa = ExpantaNum.div(num, ExpantaNum.pow(ExpantaNum(10), exponent)).toFixed(2);
      return `${mantissa}e${exponent}`;
    };
  
    return number.toString();
}

function Save() {
    localStorage.player = JSON.stringify(player);
};
  
function Load() {
    player = new Player(JSON.parse(localStorage.player));
    console.log("Save loaded");
    return player.obj || "default";
};

Load();

function resetgame() {
    if (confirm("Are you sure you want to reset the game?") == true) {
        if (confirm("ARE YOU REALLY SURE?") == true) {
            player.points.points = new ExpantaNum(0);
            player.points.pps = new ExpantaNum(0.01);
            player.points.max = new ExpantaNum(0);
            player.up1.cost = new ExpantaNum(0.1);
            player.up1.level = new ExpantaNum(0);
            player.up1.effect = new ExpantaNum(0.01);
            player.up1b.cost = new ExpantaNum(100);
            player.up1b.level = new ExpantaNum(0);
            player.up2.cost = new ExpantaNum(10);
            player.up2.level = new ExpantaNum(0);
            player.up2.effect = new ExpantaNum(0.01);
            player.up2.chance = new ExpantaNum(0);      
            player.up2.multpoints = new ExpantaNum(15);
            player.up2.multchance = new ExpantaNum(1.1);  
            player.up2b.cost = new ExpantaNum(1000);
            player.up2b.level = new ExpantaNum(0);
            player.up3.cost = new ExpantaNum(10000);
            player.up3.level = new ExpantaNum(0);
            player.lastTick = new ExpantaNum(Date.now());
            player.load = false;
            player.diff = 0;
            player.offline = 0;
            player.points.offline = new ExpantaNum(0);
            player.points.offlinepps = new ExpantaNum(0);
        };
    };
};
