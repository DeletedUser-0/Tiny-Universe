class Player {
    constructor(data) {
        this.points = {
            points: data?.points?.points || 0,
            pps: data?.points?.pps || 0.01,
            max: data?.points?.max || 0,
            offline: data?.points?.offline || 0,
            offlinepps: data?.points?.offlinepps || 0,
            Bpps: data?.points?.Bpps || 0.01,
        };
        this.up1 = {
            cost: data?.up1?.cost || 0.1,
            level: data?.up1?.level || 0,
            effect: data?.up1?.effect || 0.01,
            basecost: data?.up1?.basecost || 0.1,
        };
        this.up1b = {
            cost: data?.up1b?.cost || 100,
            level: data?.up1b?.level || 0,
            basecost: data?.up1b?.basecost || 100,
        };
        this.up2 = {
            cost: data?.up2?.cost || 10,
            level: data?.up2?.level || 0,
            effect: data?.up2?.effect || 0.01,
            chance: data?.up2?.chance || 0,
            multpoints: data?.up2?.multpoints || 15,
            multchance: data?.up2?.multchance || 1.1,
            basecost: data?.up2?.basecost || 10,
        };
        this.up2b = {
            cost: data?.up2b?.cost || 1000,
            level: data?.up2b?.level || 0,
            basecost: data?.up2b?.basecost || 1000,
        };
        this.up3 = {
            cost: data?.up3?.cost || 10000,
            level: data?.up3?.level || 0,
            basecost: data?.up3?.basecost || 10000,
            effect: data?.up3?.effect || 1.5,
        };
        this.up3b = {
            cost: data?.up3b?.cost || 10000,
            level: data?.up3b?.level || 0,
            effect: data?.up3b?.effect || 0.95,
            basecost: data?.up3b?.basecost || 10000,
        };
        this.decimal = {
            amount: data?.decimal?.amount || 0, // amount of decimal points
            total: data?.decimal?.total || 0, // amount of times decimated
            earn: data?.decimal?.earn || 0, // amount of decimal points earned after prestige
            luck: data?.decimal?.luck || 1, // multiplier from luck based bonuses
            luck1: data?.decimal?.luck1 || 1, // multiplier from luck1
            luck2: data?.decimal?.luck2 || 1, // multiplier from luck2
            luck3: data?.decimal?.luck3 || 1, // multiplier from luck3
            luck4: data?.decimal?.luck4 || 1, // multiplier from luck4
        };
        this.gen1 = {
            amount: data?.gen1?.amount || 0,
            total: data?.gen1?.total || 0,
            mult: data?.gen1?.mult || 1,
            cost: data?.gen1?.cost || 1,
        };
        this.gen2 = {
            amount: data?.gen2?.amount || 0,
            total: data?.gen2?.total || 0,
            mult: data?.gen2?.mult || 1,
            cost: data?.gen2?.cost || 10,
        };
        this.gen3 = {
            amount: data?.gen3?.amount || 0,
            total: data?.gen3?.total || 0,
            mult: data?.gen3?.mult || 1,
            cost: data?.gen3?.cost || 100,
        };
        this.gen4 = {
            amount: data?.gen4?.amount || 0,
            total: data?.gen4?.total || 0,
            mult: data?.gen4?.mult || 1,
            cost: data?.gen4?.cost || 1000,
        };
        this.gen5 = {
            amount: data?.gen5?.amount || 0,
            total: data?.gen5?.total || 0,
            mult: data?.gen5?.mult || 1,
            cost: data?.gen5?.cost || 10000,
        };
        this.gen6 = {
            amount: data?.gen6?.amount || 0,
            total: data?.gen6?.total || 0,
            mult: data?.gen6?.mult || 1,
            cost: data?.gen6?.cost || 100000,
        };
        this.gen7 = {
            amount: data?.gen7?.amount || 0,
            total: data?.gen7?.total || 0,
            mult: data?.gen7?.mult || 1,
            cost: data?.gen7?.cost || 1000000,
        };
        this.gen8 = {
            amount: data?.gen8?.amount || 0,
            total: data?.gen8?.total || 0,
            mult: data?.gen8?.mult || 1,
            cost: data?.gen8?.cost || 1e9,
        };
        this.gen9 = {
            amount: data?.gen9?.amount || 0,
            total: data?.gen9?.total || 0,
            mult: data?.gen9?.mult || 1,
            cost: data?.gen9?.cost || 1e12,
        };
        this.subpoints = {
            amount: data?.subpoints?.amount || 0,
            sec: data?.subpoints?.sec || 0,
            effect: data?.subpoints?.effect || 1.1,
            multpts: data?.subpoints?.multpts || 1,
        };
        this.decbuy1 = {
            cost: data?.decbuy1?.cost || 1,
            level: data?.decbuy1?.level || 0,
            effect: data?.decbuy1?.effect || 2,
            multpts: data?.decbuy1?.multpts || 1,
        };
        this.decbuy2 = {
            cost: data?.decbuy2?.cost || 100,
            level: data?.decbuy2?.level || 0,
            effect: data?.decbuy2?.effect || 1.5,
        };
        this.Dup1 = {
            cost: data?.Dup1?.cost || 1,
            bought: data?.Dup1?.bought || false,
        };
        this.Dup2 = {
            cost: data?.Dup2?.cost || 100,
            bought: data?.Dup2.bought || false,
        };
        this.Dup3 = {
            cost: data?.Dup3?.cost || 1000,
            bought: data?.Dup3.bought || false,
        };
        this.Dup4 = {
            cost: data?.Dup4?.cost || 10000,
            bought: data?.Dup4.bought || false,
        };
        this.luck1 = {
            odds: data?.luck1?.odds || 70,
            effect: data?.luck1?.effect || 1.25,
            time: data?.luck1?.time || 0,
            resetTime: data?.luck1?.resetTime || 120,
            active: data?.luck1?.active || false,
        };
        this.luck2 = {
            odds: data?.luck2?.odds || 50,
            effect: data?.luck2?.effect || 1.3,
            time: data?.luck2?.time || 0,
            resetTime: data?.luck2?.resetTime || 120,
            active: data?.luck2?.active || false,
        };
        this.luck3 = {
            odds: data?.luck3?.odds || 20,
            effect: data?.luck3?.effect || 1.5,
            time: data?.luck3?.time || 0,
            resetTime: data?.luck3?.resetTime || 120,
            active: data?.luck3?.active || false,
        };
        this.luck4 = {
            odds: data?.luck4?.odds || 5,
            effect: data?.luck4?.effect || 2,
            time: data?.luck4?.time || 0,
            resetTime: data?.luck4?.resetTime || 120,
            active: data?.luck4?.active || false,
        };
        this.chal1 = {
            goal: this?.chal1?.goal || 1e15,
            pow: this?.chal1?.pow || 1.05,
            effect: this?.chal1?.effect || 1.2,
            complete: this?.chal1?.complete || 0,
            active: this?.chal1?.active || false,
        };
        this.chal2 = {
            goal: this?.chal2?.goal || 1e15,
            pow: this?.chal2?.pow || 1.04,
            effect: this?.chal2?.effect || 1.001,
            complete: this?.chal2?.complete || 0,
            active: this?.chal2?.active || false,
        };
        this.chal3 = {
            goal: this?.chal3?.goal || 1e15,
            pow: this?.chal3?.pow || 1.03,
            effect: this?.chal3?.effect || 1.15,
            complete: this?.chal3?.complete || 0,
            active: this?.chal3?.active || false,
        };
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
    if (player.load === false) {
        updateOfflineProgress(player.diff);
        player.load = true;
    } else {
        player.lastTick = Date.now();
    };
}, 20);

function updateOfflineProgress() {
    player.diff = ExpantaNum.sub(Date.now(), player.lastTick);
    console.log(player.diff.toString());

    player.points.offline = getpoints(player.diff);
    player.points.offlinepps = ExpantaNum.mul(ExpantaNum.mul(ExpantaNum.div(player.up2.chance, 100), player.up2.effect), ExpantaNum.div(player.diff, 1000));
        player.points.points = ExpantaNum.add(player.points.points, player.points.offline);
      
        if (ExpantaNum.cmp(player.up2.level, 0) > 0) {
          player.points.pps = ExpantaNum.add(player.points.pps, player.points.offlinepps);
    };    
};

/////////////////////
///// UPDATE UI /////
/////////////////////

window.setInterval(function() {
    document.getElementById("points").innerHTML = `Points: ${notate(player.points.points)} <span style="font-size: 50%">(+${notate(player.points.pps)}/s)</span>`;
    document.getElementById("up1").innerHTML = `<b>Increase points production by ${notate(ExpantaNum.times(player.up1.effect, player.subpoints.multpts).times(player.decbuy1.multpts))}</b> <br> Cost: <b>${notate(player.up1.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1.level)}`;
    document.getElementById("up1b").innerHTML = `<b>Multiply first upgrade effect by 3</b> <br> Cost: <b>${notate(player.up1b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1b.level)}`;
    if (ExpantaNum.cmp(player.points.max, 1) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            document.getElementById("up2").innerHTML = `<b>+${ExpantaNum.times(player.up2.chance, ExpantaNum.sub(player.up2.multchance, 1)).toFixed(1)}% chance/s to increase points production by ${notate(ExpantaNum.times(player.up2.effect, player.subpoints.multpts).times(player.decbuy1.multpts))} (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        } else {
            document.getElementById("up2").innerHTML = `<b>Add a 10.0% chance/s to increase points production by 0.01 (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        };
    } else {
        document.getElementById("up2").innerHTML = `Reach <b>1 point</b> to see this upgrade.`;
    };
    if (ExpantaNum.cmp(player.points.max, 1000) >= 0) {
        if (ExpantaNum.cmp(player.up2b.level, 25) < 0) {
            document.getElementById("up2b").innerHTML = `<b>Improve the second upgrade</b> <br> Cost: <b>${notate(player.up2b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2b.level)}/25`;
        } else {
            document.getElementById("up2b").innerHTML = `<b>Improve the second upgrade</b> <br> <b>MAX LEVEL</b> <br> Level: ${ExpantaNum.round(player.up2b.level)}/25`;
        };
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
    calcdecimal();
    player.points.pps = ExpantaNum.times(player.points.Bpps, player.subpoints.multpts).times(player.decbuy1.multpts).times(ExpantaNum.pow(player.chal1.effect, player.chal1.complete));
    if (player.Dup1.bought == true) {
        player.up1.cost = ExpantaNum.div(player.up1.basecost, 2);
        player.up2.cost = ExpantaNum.div(player.up2.basecost, 2);
        player.up3.cost = ExpantaNum.div(player.up3.basecost, 2);
        player.up1b.cost = ExpantaNum.div(player.up1b.basecost, 2);
        player.up2b.cost = ExpantaNum.div(player.up2b.basecost, 2);
        player.up3b.cost = ExpantaNum.div(player.up3b.basecost, 2);
    } else {
        player.up1.cost = player.up1.basecost;
        player.up2.cost = player.up2.basecost;
        player.up3.cost = player.up3.basecost;
        player.up1b.cost = player.up1b.basecost;
        player.up2b.cost = player.up2b.basecost;
        player.up3b.cost = player.up3b.basecost;
    };
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
        player.points.Bpps = ExpantaNum.add(player.points.Bpps, player.up2.effect);
    };
};

function up1() {
    if (ExpantaNum.cmp(player.points.points, player.up1.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up1.cost);
        player.points.Bpps = ExpantaNum.add(player.points.Bpps, player.up1.effect);
        if (ExpantaNum.cmp(player.points.points, 1e10) < 0) {
            player.up1.basecost = ExpantaNum.add(player.up1.basecost, 0.05).times(1.06);
        } else {
            player.up1.basecost = ExpantaNum.pow(player.up1.basecost, 1.03).times(2);
        };
        player.up1.level = ExpantaNum.add(player.up1.level, 1);
    };
};

function up1b() {
    if (ExpantaNum.cmp(player.points.points, player.up1b.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up1b.cost);
        player.up1.effect = ExpantaNum.times(player.up1.effect, 3);
        if (ExpantaNum.cmp(player.points.points, 1e10) < 0) {
            player.up1b.basecost = ExpantaNum.times(player.up1b.basecost, 10);
        } else {
            player.up1b.basecost = ExpantaNum.pow(player.up1b.basecost, 1.1);
        };
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
        if (ExpantaNum.cmp(player.points.points, 1e10) < 0) {
            player.up2.basecost = ExpantaNum.times(player.up2.basecost, 1.5);
        } else {
            player.up2.basecost = ExpantaNum.pow(player.up2.basecost, 1.03);
        };
        player.up2.level = ExpantaNum.add(player.up2.level, 1);
    };
};

function up2b() {
    if (ExpantaNum.cmp(player.points.points, player.up2b.cost) >= 0) {
        if (ExpantaNum.cmp(player.up2b.level, 25) < 0) {
            player.points.points = ExpantaNum.sub(player.points.points, player.up2b.cost);
            player.up2b.basecost = ExpantaNum.pow(player.up2b.basecost, 1.075);
            player.up2b.level = ExpantaNum.add(player.up2b.level, 1);
            player.up2.multchance = ExpantaNum.times(player.up2.multchance, 1.005);
            player.up2.multpoints = ExpantaNum.times(player.up2.multpoints, 1.015);
        };
    };
};

function up3() {
    if (ExpantaNum.cmp(player.points.points, player.up3.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up3.cost);
        if (ExpantaNum.cmp(player.points.points, 1e10) < 0) {
            player.up3.basecost = ExpantaNum.times(player.up3.basecost, 3);
        } else {
            player.up3.basecost = ExpantaNum.pow(player.up3.basecost, 1.1);
        };
        player.up3.level = ExpantaNum.add(player.up3.level, 1);
        player.points.Bpps = ExpantaNum.times(player.points.Bpps, player.up3.effect);
        player.up1.effect = ExpantaNum.times(player.up1.effect, player.up3.effect);
        player.up2.effect = ExpantaNum.times(player.up2.effect, player.up3.effect);
    };
};

function up3b() {
    if (ExpantaNum.cmp(player.points.points, player.up3b.cost) >= 0) {
        player.points.points = ExpantaNum.sub(player.points.points, player.up3b.cost);
        if (ExpantaNum.cmp(player.points.points, 1e10) < 0) {
            player.up3b.basecost = ExpantaNum.times(player.up3b.basecost, 1.35).pow(1.02);
        } else {
            player.up3b.basecost = ExpantaNum.pow(player.up3b.basecost, 1.04);
        };
        player.up3b.level = ExpantaNum.add(player.up3b.level, 1);
        player.up1.basecost = ExpantaNum.times(player.up1.basecost, player.up3b.effect);
        player.up1b.basecost = ExpantaNum.times(player.up1b.basecost, player.up3b.effect);
        player.up2.basecost = ExpantaNum.times(player.up2.basecost, player.up3b.effect);
        player.up2b.basecost = ExpantaNum.times(player.up2b.basecost, player.up3b.effect);
        player.up3.basecost = ExpantaNum.times(player.up3.basecost, player.up3b.effect);
    };
};

window.onload = function(){
    player.load = false;
};

function getpoints(diff) {
    return ExpantaNum.mul(player.points.pps, ExpantaNum.div(diff, 1000));
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
      var mantissa = ExpantaNum.pow(10, ExpantaNum.sub(num.array[0][1], ExpantaNum.floor(num.array[0][1]))).toFixed(2);
      var exponent = ExpantaNum.floor(num.array[0][1]);
      return `${mantissa}e${exponent}`;
    };
  
    return number.toString();
}

function notate2(number) {
    const num = new ExpantaNum(number);

    if (isNaN(number) == true) {
        number = num
    };
  
    if (ExpantaNum.cmp(num, 100) < 0) {
      // Ensure numbers less than 100 have exactly two decimal places
      return Math.floor(num);
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
      var mantissa = ExpantaNum.pow(10, ExpantaNum.sub(num.array[0][1], ExpantaNum.floor(num.array[0][1]))).toFixed(2);
      var exponent = ExpantaNum.floor(num.array[0][1]);
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
            player.points.Bpps = new ExpantaNum(0.01);
            player.up1.cost = new ExpantaNum(0.1);
            player.up1.level = new ExpantaNum(0);
            player.up1.effect = new ExpantaNum(0.01);
            player.up1.effect = new ExpantaNum(0.01);
            player.up1.basecost = new ExpantaNum(0.1);
            player.up1b.cost = new ExpantaNum(100);
            player.up1b.basecost = new ExpantaNum(100);
            player.up1b.level = new ExpantaNum(0);
            player.up2.cost = new ExpantaNum(10);
            player.up2.level = new ExpantaNum(0);
            player.up2.effect = new ExpantaNum(0.01);
            player.up2.effect = new ExpantaNum(0.01);
            player.up2.chance = new ExpantaNum(0);      
            player.up2.multpoints = new ExpantaNum(15);
            player.up2.multchance = new ExpantaNum(1.1);
            player.up2.basecost = new ExpantaNum(10);
            player.up2b.cost = new ExpantaNum(1000);
            player.up2b.level = new ExpantaNum(0);
            player.up2b.basecost = new ExpantaNum(1000);
            player.up3.cost = new ExpantaNum(10000);
            player.up3.level = new ExpantaNum(0);
            player.up3.basecost = new ExpantaNum(10000);
            player.up3.effect = new ExpantaNum(1.5);
            player.up3b.cost = new ExpantaNum(10000);
            player.up3b.effect = new ExpantaNum(0.95);
            player.up3b.level = new ExpantaNum(0);
            player.up3b.basecost = new ExpantaNum(10000);
            player.lastTick = new ExpantaNum(Date.now());
            player.load = false;
            player.diff = 0;
            player.offline = 0;
            player.points.offline = new ExpantaNum(0);
            player.points.offlinepps = new ExpantaNum(0);
            player.decimal.earn = new ExpantaNum(0);
            player.decimal.amount = new ExpantaNum(0);
            player.decimal.total = new ExpantaNum(0);
            player.decimal.luck = new ExpantaNum(1);
            player.decimal.luck1 = new ExpantaNum(1);
            player.decimal.luck2 = new ExpantaNum(1);
            player.decimal.luck3 = new ExpantaNum(1);
            player.decimal.luck4 = new ExpantaNum(1);
            player.gen1.amount = new ExpantaNum(0);
            player.gen1.total = new ExpantaNum(0);
            player.gen1.mult = new ExpantaNum(1);
            player.gen1.cost = new ExpantaNum(1);
            player.gen2.amount = new ExpantaNum(0);
            player.gen2.total = new ExpantaNum(0);
            player.gen2.mult = new ExpantaNum(1);
            player.gen2.cost = new ExpantaNum(10);
            player.gen3.amount = new ExpantaNum(0);
            player.gen3.total = new ExpantaNum(0);
            player.gen3.mult = new ExpantaNum(1);
            player.gen3.cost = new ExpantaNum(100);
            player.gen4.amount = new ExpantaNum(0);
            player.gen4.total = new ExpantaNum(0);
            player.gen4.mult = new ExpantaNum(1);
            player.gen4.cost = new ExpantaNum(1e3);
            player.gen5.amount = new ExpantaNum(0);
            player.gen5.total = new ExpantaNum(0);
            player.gen5.mult = new ExpantaNum(1);
            player.gen5.cost = new ExpantaNum(1e4);
            player.gen6.amount = new ExpantaNum(0);
            player.gen6.total = new ExpantaNum(0);
            player.gen6.mult = new ExpantaNum(1);
            player.gen6.cost = new ExpantaNum(1e5);
            player.gen7.amount = new ExpantaNum(0);
            player.gen7.total = new ExpantaNum(0);
            player.gen7.mult = new ExpantaNum(1);
            player.gen7.cost = new ExpantaNum(1e6);
            player.gen8.amount = new ExpantaNum(0);
            player.gen8.total = new ExpantaNum(0);
            player.gen8.mult = new ExpantaNum(1);
            player.gen8.cost = new ExpantaNum(1e9);
            player.gen9.amount = new ExpantaNum(0);
            player.gen9.total = new ExpantaNum(0);
            player.gen9.mult = new ExpantaNum(1);
            player.gen9.cost = new ExpantaNum(1e12);
            player.subpoints.amount = new ExpantaNum(0);
            player.subpoints.sec = new ExpantaNum(0);
            player.subpoints.effect = new ExpantaNum(1.1);
            player.subpoints.multpts = new ExpantaNum(1);
            player.decbuy1.cost = new ExpantaNum(1);
            player.decbuy1.level = new ExpantaNum(0);
            player.decbuy1.effect = new ExpantaNum(2);
            player.decbuy1.multpts = new ExpantaNum(1);
            player.decbuy2.cost = new ExpantaNum(100);
            player.decbuy2.level = new ExpantaNum(0);
            player.decbuy2.effect = new ExpantaNum(1.5);
            player.Dup1.cost = new ExpantaNum(1);
            player.Dup1.bought = false;
            player.Dup2.cost = new ExpantaNum(100);
            player.Dup2.bought = false;
            player.Dup3.cost = new ExpantaNum(1000);
            player.Dup3.bought = false;
            player.Dup4.cost = new ExpantaNum(10000);
            player.Dup4.bought = false;
            player.luck1.odds = new ExpantaNum(70);
            player.luck1.effect = new ExpantaNum(1.25);
            player.luck1.time = new ExpantaNum(0);
            player.luck1.resetTime = new ExpantaNum(120);
            player.luck1.active = false;
            player.luck2.odds = new ExpantaNum(50);
            player.luck2.effect = new ExpantaNum(1.3);
            player.luck2.time = new ExpantaNum(0);
            player.luck2.resetTime = new ExpantaNum(120);
            player.luck2.active = false;
            player.luck3.odds = new ExpantaNum(20);
            player.luck3.effect = new ExpantaNum(1.5);
            player.luck3.time = new ExpantaNum(0);
            player.luck3.resetTime = new ExpantaNum(120);
            player.luck3.active = false;
            player.luck4.odds = new ExpantaNum(5);
            player.luck4.effect = new ExpantaNum(2);
            player.luck4.time = new ExpantaNum(0);
            player.luck4.resetTime = new ExpantaNum(120);
            player.luck4.active = false;
            player.chal1.goal = new ExpantaNum(1e15);
            player.chal1.pow = new ExpantaNum(1.05);
            player.chal1.effect = new ExpantaNum(1.2);
            player.chal1.complete = new ExpantaNum(0);
            player.chal1.active = false;
            player.chal2.goal = new ExpantaNum(1e15);
            player.chal2.pow = new ExpantaNum(1.05);
            player.chal2.effect = new ExpantaNum(1.001);
            player.chal2.complete = new ExpantaNum(0);
            player.chal2.active = false;
            player.chal3.goal = new ExpantaNum(1e15);
            player.chal3.pow = new ExpantaNum(1.03);
            player.chal3.effect = new ExpantaNum(1.15);
            player.chal3.complete = new ExpantaNum(0);
            player.chal3.active = false;
        };
    };
};

function resetdecimal() {
    player.points.points = new ExpantaNum(0);
    player.points.pps = new ExpantaNum(0.01);
    player.points.max = new ExpantaNum(0);
    player.points.Bpps = new ExpantaNum(0.01);
    player.up1.cost = new ExpantaNum(0.1);
    player.up1.level = new ExpantaNum(0);
    player.up1.effect = new ExpantaNum(0.01);
    player.up1.basecost = new ExpantaNum(0.1);
    player.up1b.cost = new ExpantaNum(100);
    player.up1b.level = new ExpantaNum(0);
    player.up1b.basecost = new ExpantaNum(100);
    player.up2.cost = new ExpantaNum(10);
    player.up2.level = new ExpantaNum(0);
    player.up2.effect = new ExpantaNum(0.01);
    player.up2.chance = new ExpantaNum(0);  
    player.up2.multpoints = new ExpantaNum(15);
    player.up2.multchance = new ExpantaNum(1.1); 
    player.up2.basecost = new ExpantaNum(10); 
    player.up2b.cost = new ExpantaNum(1000);
    player.up2b.basecost = new ExpantaNum(1000);
    player.up2b.level = new ExpantaNum(0);
    player.up3.cost = new ExpantaNum(10000);
    player.up3.level = new ExpantaNum(0);
    player.up3.basecost = new ExpantaNum(10000);
    player.up3b.cost = new ExpantaNum(10000);
    player.up3b.effect = new ExpantaNum(0.95);
    player.up3b.level = new ExpantaNum(0);
    player.up3b.basecost = new ExpantaNum(10000);
    player.subpoints.multpts = new ExpantaNum(1);
};
