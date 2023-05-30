class Player {
    constructor(data) {
        this.points = {
            points: data?.points?.points || 0,
            pps: data?.points?.pps || 0.01,
            max: data?.points?.max || 0
        };
        this.up1 = {
            cost: data?.up1?.cost || 0.10,
            level: data?.up1?.level || 0,
            effect: data?.up1?.effect || 0.01
        };
        this.up1b = {
            cost: data?.up1b?.cost || 10,
            level: data?.up1b?.level || 0,
        };
        this.up2 = {
            cost: data?.up2?.cost || 10,
            level: data?.up2?.level || 0,
            effect: data?.up2?.effect || 0.01,
            chance: data?.up2?.chance || 0
        }
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
}, 20);

window.setInterval(function() {
    document.getElementById("points").innerHTML = `Points: ${notate(player.points.points)} (+${notate(player.points.pps)}/s)`;
    document.getElementById("up1").innerHTML = `<b>Increase points production by ${notate(player.up1.effect)}</b> <br> Cost: <b>${notate(player.up1.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1.level)}`;
    document.getElementById("up1b").innerHTML = `<b>Multiply first upgrade effect by 2.5</b> <br> Cost: <b>${notate(player.up1b.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up1b.level)}`;
    if (ExpantaNum.cmp(player.points.max, 1) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            document.getElementById("up2").innerHTML = `<b>+${ExpantaNum.times(player.up2.chance, 0.1).toFixed(1)}% chance/s to increase points production by 0.01 (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        } else {
            document.getElementById("up2").innerHTML = `<b>Add a 10.0% chance/s to increase points production by 0.01 (currently: ${new ExpantaNum(player.up2.chance).toFixed(1)}%) </b> <br> Cost: <b>${notate(player.up2.cost)}</b> points <br> Level: ${ExpantaNum.round(player.up2.level)}`;
        };
    } else {
        document.getElementById("up2").innerHTML = `Reach 1 point to see this upgrade.`;
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
        player.up1.effect = ExpantaNum.times(player.up1.effect, 2.5);
        player.up1b.cost = ExpantaNum.times(player.up1b.cost, 10);
        player.up1b.level = ExpantaNum.add(player.up1b.level, 1);
    };
};

function up2() {
    if (ExpantaNum.cmp(player.points.points, player.up2.cost) >= 0) {
        if (ExpantaNum.cmp(player.up2.level, 1) >= 0) {
            player.up2.chance = ExpantaNum.times(player.up2.chance, 1.1);
        } else {
            player.up2.chance = new ExpantaNum("10");
        };
        player.points.points = ExpantaNum.sub(player.points.points, player.up2.cost);
        player.up2.cost = ExpantaNum.times(player.up2.cost, 1.5);
        player.up2.level = ExpantaNum.add(player.up2.level, 1);
    };
};

function notate(number) {

    const num = ExpantaNum(number);

    if (isNaN(number) == true) {
        number = num
    }
  
    const notationSymbols = [
      { value: ExpantaNum(1e3), symbol: 'K' },
      { value: ExpantaNum(1e6), symbol: 'M' },
      { value: ExpantaNum(1e9), symbol: 'B' },
      { value: ExpantaNum(1e12), symbol: 'T' },
      { value: ExpantaNum(1e15), symbol: 'Qa' },
      { value: ExpantaNum(1e18), symbol: 'Qi' },
      { value: ExpantaNum(1e21), symbol: 'Sx' },
      { value: ExpantaNum(1e24), symbol: 'Sp' },
      { value: ExpantaNum(1e27), symbol: 'Oc' },
      { value: ExpantaNum(1e30), symbol: 'No' },
      { value: ExpantaNum(1e33), symbol: 'Dc' },
      { value: ExpantaNum(1e36), symbol: 'uDc' },
      { value: ExpantaNum(1e39), symbol: 'dDc' },
      { value: ExpantaNum(1e42), symbol: 'tDc' },
      { value: ExpantaNum(1e45), symbol: 'qDc' },
      { value: ExpantaNum(1e48), symbol: 'QDc' },
      { value: ExpantaNum(1e51), symbol: 'sDc' },
      { value: ExpantaNum(1e54), symbol: 'SDc' },
      { value: ExpantaNum(1e57), symbol: 'oDc' },
      { value: ExpantaNum(1e60), symbol: 'nDc' },
      { value: ExpantaNum('1e63'), symbol: 'V' }, // Vigintillion threshold
    ];
  
    for (let i = notationSymbols.length - 1; i >= 0; i--) {
      if (num.gte(notationSymbols[i].value) && num.lt(notationSymbols[i].value.times(10))) {
        const notatedValue = num.div(notationSymbols[i].value);
        return `${notatedValue.toFixed(2)}${notationSymbols[i].symbol}`;
      }
    }
  
    if (ExpantaNum.cmp(num, 100) < 0) {
      // Ensure numbers less than 100 have exactly two decimal places
      return num.toFixed(2);
    } else if ((ExpantaNum.cmp(num, 1000) < 0) && (ExpantaNum.cmp(num, 100) > 0)) {
        return Math.floor(num);
    } else if ((ExpantaNum.cmp(num, 1000000) < 0) && (ExpantaNum.cmp(num, 1000) > 0)) {
        return `${ExpantaNum.div(num, 1000).toFixed(2)}K`;
    };
  
    if (num.gt(ExpantaNum(1e66))) {
      var exponent = ExpantaNum.log10(num).toFixed(0);
      var mantissa = ExpantaNum.div(num, ExpantaNum.pow(ExpantaNum(10), exponent)).toFixed(2);
      return `${mantissa}e${exponent}`;
    }
  
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
