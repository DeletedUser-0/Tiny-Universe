function decimate() {
    if (ExpantaNum.cmp(player.points.points, new ExpantaNum(1e10)) >= 0) {
        resetdecimal();
        if (ExpantaNum.cmp(player.decimal.total, 0) == 0) {
            player.decimal.amount = ExpantaNum.add(player.decimal.amount, 1);
        } else {
            player.decimal.amount = ExpantaNum.add(player.decimal.amount, player.decimal.earn);
        };
        player.decimal.total = ExpantaNum.add(player.decimal.total, 1);
    };
};

function calcdecimal() {
    if (player.Dup3.bought == false) {
        player.decimal.earn = ExpantaNum.floor(ExpantaNum.pow(1.75, ExpantaNum.sub(ExpantaNum.log10(player.points.points), 10)).times(ExpantaNum.pow(player.decbuy2.effect, player.decbuy2.level)).times(player.decimal.luck).times(ExpantaNum.pow(player.chal3.effect, player.chal3.complete)));
    } else {
        player.decimal.earn = ExpantaNum.floor(ExpantaNum.pow(1.75, ExpantaNum.sub(ExpantaNum.log10(player.points.points), 10)).times(ExpantaNum.pow(player.decbuy2.effect, player.decbuy2.level)).times(ExpantaNum.pow(1.01, player.up2.level)).times(player.decimal.luck).times(ExpantaNum.pow(player.chal3.effect, player.chal3.complete)));
    }
};

window.setInterval(function() {
    if (ExpantaNum.cmp(player.decimal.total, 0) == 0) {
        if (ExpantaNum.cmp(player.decimal.earn, 1) < 0) {
            document.getElementById("decimal").innerHTML = `Reach <b>10.00 B</b> points to unlock`;
        } else {
            document.getElementById("decimal").innerHTML = `You have <b>${notate2(player.decimal.amount)}</b> Decimal Points`;
        }
        if (ExpantaNum.cmp(player.points.points, 0.01) < 0) {
            document.getElementById("layer_1").innerHTML = `You are <b>0.00</b>% there`;
        } else {
            if (ExpantaNum.cmp(player.points.points, 1e10) >= 0) {
                if (ExpantaNum.cmp(player.decimal.earn, 1) == 0) {
                    document.getElementById("layer_1").innerHTML = `Decimate to earn <b>1</b> Decimal Point`;
                } else {
                    document.getElementById("layer_1").innerHTML = `Decimate to earn <b>${notate2(player.decimal.earn)}</b> Decimal Points`
                };
            } else {
                document.getElementById("layer_1").innerHTML = `You are <b>${notate(ExpantaNum.div(ExpantaNum.add(ExpantaNum.log10(player.points.points), 2), 12).times(100))}</b>% there`;
            };
        };
    } else {
        document.getElementById("decimal").innerHTML = `You have <b>${notate2(player.decimal.amount)} Decimal Points</b>.`;
        if (ExpantaNum.cmp(player.points.points, 0.01) < 0) {
            document.getElementById("layer_1").innerHTML = `You are <b>0.00</b>% there`;
        } else {
            if (ExpantaNum.cmp(player.points.points, 1e10) >= 0) {
                if (ExpantaNum.cmp(player.decimal.earn, 1) == 0) {
                    document.getElementById("layer_1").innerHTML = `Decimate to earn <b>${notate2(player.decimal.earn)}</b> Decimal Point`;
                } else {
                    document.getElementById("layer_1").innerHTML = `Decimate to earn <b>${notate2(player.decimal.earn)}</b> Decimal Points`
                };
            } else {
                document.getElementById("layer_1").innerHTML = `You are <b>${notate(ExpantaNum.div(ExpantaNum.add(ExpantaNum.log10(player.points.points), 2), 12).times(100))}</b>% there`;
            };
        };
    };
    document.getElementById("decimal2").innerHTML = `You have <b>${notate2(player.decimal.amount)} Decimal Points</b>.`;
}, 0);

window.setInterval(function(){
    addgens();
}, 20);

function gen1() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen1.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen1.cost);
        player.gen1.cost = ExpantaNum.add(player.gen1.cost, 1).pow(1.05);
        player.gen1.total = ExpantaNum.add(player.gen1.total, 1);
        player.gen1.mult = ExpantaNum.times(player.gen1.mult, 1.5);
        player.gen1.amount = ExpantaNum.add(player.gen1.amount, 1);
    };
};

function gen2() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen2.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen2.cost);
        player.gen2.cost = ExpantaNum.add(player.gen2.cost, 1).pow(1.055);
        player.gen2.total = ExpantaNum.add(player.gen2.total, 1);
        player.gen2.mult = ExpantaNum.times(player.gen2.mult, 1.55);
        player.gen2.amount = ExpantaNum.add(player.gen2.amount, 1);
    };
};

function gen3() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen3.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen3.cost);
        player.gen3.cost = ExpantaNum.add(player.gen3.cost, 1).pow(1.061);
        player.gen3.total = ExpantaNum.add(player.gen3.total, 1);
        player.gen3.mult = ExpantaNum.times(player.gen3.mult, 1.6);
        player.gen3.amount = ExpantaNum.add(player.gen3.amount, 1);
    };
};

function gen4() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen4.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen4.cost);
        player.gen4.cost = ExpantaNum.add(player.gen4.cost, 1).pow(1.067);
        player.gen4.total = ExpantaNum.add(player.gen4.total, 1);
        player.gen4.mult = ExpantaNum.times(player.gen4.mult, 1.65);
        player.gen4.amount = ExpantaNum.add(player.gen4.amount, 1);
    };
};

function gen5() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen5.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen5.cost);
        player.gen5.cost = ExpantaNum.add(player.gen5.cost, 1).pow(1.074);
        player.gen5.total = ExpantaNum.add(player.gen5.total, 1);
        player.gen5.mult = ExpantaNum.times(player.gen5.mult, 1.7);
        player.gen5.amount = ExpantaNum.add(player.gen5.amount, 1);
    };
};

function gen6() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen6.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen6.cost);
        player.gen6.cost = ExpantaNum.add(player.gen6.cost, 1).pow(1.081);
        player.gen6.total = ExpantaNum.add(player.gen6.total, 1);
        player.gen6.mult = ExpantaNum.times(player.gen6.mult, 1.75);
        player.gen6.amount = ExpantaNum.add(player.gen6.amount, 1);
    };
};

function gen7() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen7.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen7.cost);
        player.gen7.cost = ExpantaNum.add(player.gen7.cost, 1).pow(1.098);
        player.gen7.total = ExpantaNum.add(player.gen7.total, 1);
        player.gen7.mult = ExpantaNum.times(player.gen7.mult, 1.8);
        player.gen7.amount = ExpantaNum.add(player.gen7.amount, 1);
    };
};

function gen8() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen8.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen8.cost);
        player.gen8.cost = ExpantaNum.add(player.gen8.cost, 1).pow(1.11);
        player.gen8.total = ExpantaNum.add(player.gen8.total, 1);
        player.gen8.mult = ExpantaNum.times(player.gen8.mult, 1.9);
        player.gen8.amount = ExpantaNum.add(player.gen8.amount, 1);
    };
};

function gen9() {
    if (ExpantaNum.cmp(player.decimal.amount, player.gen9.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.gen9.cost);
        player.gen9.cost = ExpantaNum.add(player.gen9.cost, 1).pow(1.12);
        player.gen9.total = ExpantaNum.add(player.gen9.total, 1);
        player.gen9.mult = ExpantaNum.times(player.gen9.mult, 2);
        player.gen9.amount = ExpantaNum.add(player.gen9.amount, 1);
    };
};

function addgens() {
    player.gen8.amount = ExpantaNum.add(player.gen8.amount, ExpantaNum.times(player.gen9.amount, player.gen9.mult).div(50));
    player.gen7.amount = ExpantaNum.add(player.gen7.amount, ExpantaNum.times(player.gen8.amount, player.gen8.mult).div(50));
    player.gen6.amount = ExpantaNum.add(player.gen6.amount, ExpantaNum.times(player.gen7.amount, player.gen7.mult).div(50));
    player.gen5.amount = ExpantaNum.add(player.gen5.amount, ExpantaNum.times(player.gen6.amount, player.gen6.mult).div(50));
    player.gen4.amount = ExpantaNum.add(player.gen4.amount, ExpantaNum.times(player.gen5.amount, player.gen5.mult).div(50));
    player.gen3.amount = ExpantaNum.add(player.gen3.amount, ExpantaNum.times(player.gen4.amount, player.gen4.mult).div(50));
    player.gen2.amount = ExpantaNum.add(player.gen2.amount, ExpantaNum.times(player.gen3.amount, player.gen3.mult).div(50));
    player.gen1.amount = ExpantaNum.add(player.gen1.amount, ExpantaNum.times(player.gen2.amount, player.gen2.mult).div(50));
    player.subpoints.sec = ExpantaNum.times(player.gen1.amount, player.gen1.mult).div(50).times(ExpantaNum.pow(player.decbuy2.effect, player.decbuy2.level));
    player.subpoints.amount = ExpantaNum.add(player.subpoints.amount, player.subpoints.sec);
};

function decbuy1() {
    if (ExpantaNum.cmp(player.decimal.amount, player.decbuy1.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.decbuy1.cost);
        player.decbuy1.cost = ExpantaNum.times(player.decbuy1.cost, 2).pow(1.1);
        player.decbuy1.level = ExpantaNum.add(player.decbuy1.level, 1);
        player.decbuy1.multpts = ExpantaNum.times(player.decbuy1.multpts, player.decbuy1.effect);
    };
};

function decbuy2() {
    if (ExpantaNum.cmp(player.decimal.amount, player.decbuy2.cost) >= 0) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.decbuy2.cost);
        player.decbuy2.cost = ExpantaNum.times(player.decbuy2.cost, 10);
        player.decbuy2.level = ExpantaNum.add(player.decbuy2.level, 1);
    };
};

function Dup1() {
    if ((ExpantaNum.cmp(player.decimal.amount, player.Dup1.cost) >= 0) && (player.Dup1.bought == false)) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.Dup1.cost);
        player.Dup1.bought = true;
    };
};

function Dup2() {
    if ((ExpantaNum.cmp(player.decimal.amount, player.Dup2.cost) >= 0) && (player.Dup2.bought == false)) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.Dup2.cost);
        player.Dup2.bought = true;
    };
};

function Dup3() {
    if ((ExpantaNum.cmp(player.decimal.amount, player.Dup3.cost) >= 0) && (player.Dup3.bought == false)) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.Dup3.cost);
        player.Dup3.bought = true;
    };
};

function Dup4() {
    if ((ExpantaNum.cmp(player.decimal.amount, player.Dup4.cost) >= 0) && (player.Dup4.bought == false)) {
        player.decimal.amount = ExpantaNum.sub(player.decimal.amount, player.Dup4.cost);
        player.Dup4.bought = true;
    };
};

function luck1() {
    if ((ExpantaNum.cmp(player.luck1.time, 0) == 0) && (player.luck1.active == false)) {
        player.luck1.time = player.luck1.resetTime;
        if (ExpantaNum.cmp(Math.random(), ExpantaNum.div(player.luck1.odds, 100)) < 0) {
            player.luck1.active = true;
        } else {
            player.luck1.active = false;
        };
    };
};

function luck2() {
    if ((ExpantaNum.cmp(player.luck2.time, 0) == 0) && (player.luck2.active == false)) {
        player.luck2.time = player.luck2.resetTime;
        if (ExpantaNum.cmp(Math.random(), ExpantaNum.div(player.luck2.odds, 100)) < 0) {
            player.luck2.active = true;
        } else {
            player.luck2.active = false;
        };
    };
};

function luck3() {
    if ((ExpantaNum.cmp(player.luck3.time, 0) == 0) && (player.luck3.active == false)) {
        player.luck3.time = player.luck3.resetTime;
        if (ExpantaNum.cmp(Math.random(), ExpantaNum.div(player.luck3.odds, 100)) < 0) {
            player.luck3.active = true;
        } else {
            player.luck3.active = false;
        };
    };
};

function luck4() {
    if ((ExpantaNum.cmp(player.luck4.time, 0) == 0) && (player.luck4.active == false)) {
        player.luck4.time = player.luck4.resetTime;
        if (ExpantaNum.cmp(Math.random(), ExpantaNum.div(player.luck4.odds, 100)) < 0) {
            player.luck4.active = true;
        } else {
            player.luck4.active = false;
        };
    };
};

function chal1() {
    if (ExpantaNum.cmp(player.chal1.complete, 100) != 1) {
        if (player.chal1.active == false) {
            player.chal1.active = true;
            resetdecimal();
        } else {
            player.chal1.active = false;
        };
    };
};

function chal2() {
    if (ExpantaNum.cmp(player.chal2.complete, 100) != 1) {
        if (player.chal2.active == false) {
            player.chal2.active = true;
            resetdecimal();
        } else {
            player.chal2.active = false;
        };
    };
};

function chal3() {
    if (ExpantaNum.cmp(player.chal3.complete, 100) != 1) {
        if (player.chal3.active == false) {
            player.chal3.active = true;
            resetdecimal();
        } else {
            player.chal3.active = false;
        };
    };
};

window.setInterval(function(){
    document.getElementById("1genA").innerHTML = `${notate2(player.gen1.amount)} (${notate2(player.gen1.total)})`;
    document.getElementById("2genA").innerHTML = `${notate2(player.gen2.amount)} (${notate2(player.gen2.total)})`;
    document.getElementById("3genA").innerHTML = `${notate2(player.gen3.amount)} (${notate2(player.gen3.total)})`;
    document.getElementById("4genA").innerHTML = `${notate2(player.gen4.amount)} (${notate2(player.gen4.total)})`;
    document.getElementById("5genA").innerHTML = `${notate2(player.gen5.amount)} (${notate2(player.gen5.total)})`;
    document.getElementById("6genA").innerHTML = `${notate2(player.gen6.amount)} (${notate2(player.gen6.total)})`;
    document.getElementById("7genA").innerHTML = `${notate2(player.gen7.amount)} (${notate2(player.gen7.total)})`;
    document.getElementById("8genA").innerHTML = `${notate2(player.gen8.amount)} (${notate2(player.gen8.total)})`;
    document.getElementById("9genA").innerHTML = `${notate2(player.gen9.amount)} (${notate2(player.gen9.total)})`;
    document.getElementById("1genM").innerHTML = `x${notate(player.gen1.mult)}`;
    document.getElementById("2genM").innerHTML = `x${notate(player.gen2.mult)}`;
    document.getElementById("3genM").innerHTML = `x${notate(player.gen3.mult)}`;
    document.getElementById("4genM").innerHTML = `x${notate(player.gen4.mult)}`;
    document.getElementById("5genM").innerHTML = `x${notate(player.gen5.mult)}`;
    document.getElementById("6genM").innerHTML = `x${notate(player.gen6.mult)}`;
    document.getElementById("7genM").innerHTML = `x${notate(player.gen7.mult)}`;
    document.getElementById("8genM").innerHTML = `x${notate(player.gen8.mult)}`;
    document.getElementById("9genM").innerHTML = `x${notate(player.gen9.mult)}`;
    document.getElementById("1genC").innerHTML = `${notate2(player.gen1.cost)} <b>Decimal Points</b>`;
    document.getElementById("2genC").innerHTML = `${notate2(player.gen2.cost)} <b>Decimal Points</b>`;
    document.getElementById("3genC").innerHTML = `${notate2(player.gen3.cost)} <b>Decimal Points</b>`;
    document.getElementById("4genC").innerHTML = `${notate2(player.gen4.cost)} <b>Decimal Points</b>`;
    document.getElementById("5genC").innerHTML = `${notate2(player.gen5.cost)} <b>Decimal Points</b>`;
    document.getElementById("6genC").innerHTML = `${notate2(player.gen6.cost)} <b>Decimal Points</b>`;
    document.getElementById("7genC").innerHTML = `${notate2(player.gen7.cost)} <b>Decimal Points</b>`;
    document.getElementById("8genC").innerHTML = `${notate2(player.gen8.cost)} <b>Decimal Points</b>`;
    document.getElementById("9genC").innerHTML = `${notate2(player.gen9.cost)} <b>Decimal Points</b>`;
    document.getElementById("subpoints").innerHTML = `You have <span style="font-size: 150%">${notate(player.subpoints.amount)}</span> subpoints, which is giving you a <span style="font-size: 150%">${notate(player.subpoints.multpts)}x</span> on your points production. <br> <span style="font-size: 75%">You are receiving ${notate(ExpantaNum.times(player.subpoints.sec, 50))} subpoints per second.`;
    if (ExpantaNum.cmp(player.decimal.total, 0) == 0) {
        document.getElementById("points_btn").style.display = `none`;
        document.getElementById("decimal_btn").style.display = `none`;
        document.getElementById("points_tab").style.display = `block`;
    } else {
        document.getElementById("points_btn").style.display = `block`;
        document.getElementById("decimal_btn").style.display = `block`;
    };
    document.getElementById("decbuy1").innerHTML = `<b>Receive ${notate(player.decbuy1.effect)} times more points</b> <br> Cost: <b>${notate2(player.decbuy1.cost)}</b> Decimal Points <br> Level: ${notate2(player.decbuy1.level)}`;
    document.getElementById("decbuy2").innerHTML = `<b>Receive ${notate(player.decbuy2.effect)} times more Decimal Points</b> <br> Cost: <b>${notate2(player.decbuy2.cost)}</b> Decimal Points <br> Level: ${notate2(player.decbuy2.level)}`;
    if (player.Dup1.bought == false) {
        document.getElementById("Dup1").innerHTML = `<b>Every points buyable becomes 50% cheaper</b> <br> <br> Cost: <b>${notate2(player.Dup1.cost)}</b> Decimal Point`;
        document.getElementById("Dup1").style.backgroundColor = `transparent`;
    } else {
        document.getElementById("Dup1").innerHTML = `<b>Every points buyable becomes 50% cheaper</b> <br> <br> <b>BOUGHT</b>`;
        document.getElementById("Dup1").style.backgroundColor = `lightgreen`;
    };
    if (player.Dup2.bought == false) {
        document.getElementById("Dup2").innerHTML = `<b>The subpoints effect becomes better</b> <br> <br> Cost: <b>${notate2(player.Dup2.cost)}</b> Decimal Points`;
        document.getElementById("Dup2").style.backgroundColor = `transparent`;
    } else {
        document.getElementById("Dup2").innerHTML = `<b>The subpoints effect becomes better</b> <br> <br> <b>BOUGHT</b>`;
        document.getElementById("Dup2").style.backgroundColor = `lightgreen`;
    };
    if (player.Dup3.bought == false) {
        document.getElementById("Dup3").innerHTML = `<b>The second buyable of the first row (points tab) increases Decimal Points per level</b> <br> <br> Cost: <b>${notate2(player.Dup3.cost)}</b> Decimal Points`;
        document.getElementById("Dup3").style.backgroundColor = `transparent`;
    } else {
        document.getElementById("Dup3").innerHTML = `<b>The second buyable of the first row (points tab) also increases Decimal Points</b> <br> Currently: ${notate(ExpantaNum.pow(1.01, player.up2.level))}x<br> <b>BOUGHT</b>`;
        document.getElementById("Dup3").style.backgroundColor = `lightgreen`;
    };
    if (player.Dup4.bought == false) {
        document.getElementById("Dup4").innerHTML = `<b>Every upgrade from the points tab will be bought automatically</b> <br> <br> Cost: <b>${notate2(player.Dup4.cost)}</b> Decimal Points`;
        document.getElementById("Dup4").style.backgroundColor = `transparent`;
    } else {
        document.getElementById("Dup4").innerHTML = `<b>Every upgrade from the points tab will be bought automatically</b> <br><br> <b>BOUGHT</b>`;
        document.getElementById("Dup4").style.backgroundColor = `lightgreen`;
        up1();
        up1b();
        up2();
        up2b();
        up3();
        up3b();
    };
    if (player.luck1.active == true) {
        document.getElementById("luck1").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck1.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck1.odds)}%</b> <br> <br> <span style="color: green">SUCCESS</span> (${ExpantaNum.round(player.luck1.time)}s left)`;
        document.getElementById("luck1").style.backgroundColor = `lightgreen`;
    } else {
        if (ExpantaNum.cmp(player.luck1.time, 0) == 0) {
            document.getElementById("luck1").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck1.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck1.odds)}%</b> <br> <br> <b>TRY NOW</b>`;
            document.getElementById("luck1").style.backgroundColor = `transparent`;    
        } else {
            document.getElementById("luck1").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck1.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck1.odds)}%</b> <br> <br> <span style="color: red">FAIL</span> (Try again in ${ExpantaNum.round(player.luck1.time)}s)`;
            document.getElementById("luck1").style.backgroundColor = `lightred`;    
        };
    };
    if (player.luck2.active == true) {
        document.getElementById("luck2").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck2.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck2.odds)}%</b> <br> <br> <span style="color: green">SUCCESS</span> (${ExpantaNum.round(player.luck2.time)}s left)`;
        document.getElementById("luck2").style.backgroundColor = `lightgreen`;
    } else {
        if (ExpantaNum.cmp(player.luck2.time, 0) == 0) {
            document.getElementById("luck2").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck2.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck2.odds)}%</b> <br> <br> <b>TRY NOW</b>`;
            document.getElementById("luck2").style.backgroundColor = `transparent`;    
        } else {
            document.getElementById("luck2").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck2.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck2.odds)}%</b> <br> <br> <span style="color: red">FAIL</span> (Try again in ${ExpantaNum.round(player.luck2.time)}s)`;
            document.getElementById("luck2").style.backgroundColor = `lightred`;    
        };
    };
    if (player.luck3.active == true) {
        document.getElementById("luck3").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck3.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck3.odds)}%</b> <br> <br> <span style="color: green">SUCCESS</span> (${ExpantaNum.round(player.luck3.time)}s left)`;
        document.getElementById("luck3").style.backgroundColor = `lightgreen`;
    } else {
        if (ExpantaNum.cmp(player.luck3.time, 0) == 0) {
            document.getElementById("luck3").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck3.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck3.odds)}%</b> <br> <br> <b>TRY NOW</b>`;
            document.getElementById("luck3").style.backgroundColor = `transparent`;    
        } else {
            document.getElementById("luck3").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck3.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck3.odds)}%</b> <br> <br> <span style="color: red">FAIL</span> (Try again in ${ExpantaNum.round(player.luck3.time)}s)`;
            document.getElementById("luck3").style.backgroundColor = `lightred`;    
        };
    };
    if (player.luck4.active == true) {
        document.getElementById("luck4").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck4.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck4.odds)}%</b> <br> <br> <span style="color: green">SUCCESS</span> (${ExpantaNum.round(player.luck4.time)}s left)`;
        document.getElementById("luck4").style.backgroundColor = `lightgreen`;
    } else {
        if (ExpantaNum.cmp(player.luck4.time, 0) == 0) {
            document.getElementById("luck4").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck4.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck4.odds)}%</b> <br> <br> <b>TRY NOW</b>`;
            document.getElementById("luck4").style.backgroundColor = `transparent`;    
        } else {
            document.getElementById("luck4").innerHTML = `Multiply <b>decimal points production</b> by <b>${notate(player.luck4.effect)}</b> <br> <b>Probability</b> of success: <b>${notate(player.luck4.odds)}%</b> <br> <br> <span style="color: red">FAIL</span> (Try again in ${ExpantaNum.round(player.luck4.time)}s)`;
            document.getElementById("luck4").style.backgroundColor = `lightred`;    
        };
    };
    if (player.chal1.active == false) {
        document.getElementById("chal1").innerHTML = `<b>The third buyable of the first row (points tab) doesn't do anything</b> <br> Goal: <b>${notate(player.chal1.goal)}</b> Points <br> Completions: <b>${notate2(player.chal1.complete)}</b>/100 <br> <b>Reward:</b> Points receivement multiply by 1.2 every completion`;
        document.getElementById("chal1").style.backgroundColor = "transparent";
    } else {
        document.getElementById("chal1").innerHTML = `<b>The third buyable of the first row (points tab) doesn't do anything</b> <br> Goal: <b>${notate(player.chal1.goal)}</b> Points <br> Completions: <b>${notate2(player.chal1.complete)}</b>/100 <br> <b>Reward:</b> Points receivement multiply by 1.2 every completion`;
        document.getElementById("chal1").style.backgroundColor = "lightgreen";
    };
    if (player.chal2.active == false) {
        document.getElementById("chal2").innerHTML = `<b>Subpoints don't do anything</b> <br> Goal: <b>${notate(player.chal2.goal)}</b> Points <br> Completions: <b>${notate2(player.chal2.complete)}</b>/100 <br> <b>Reward:</b> Its effect increases by 0.001 every completion`;
        document.getElementById("chal2").style.backgroundColor = "transparent";
    } else {
        document.getElementById("chal2").innerHTML = `<b>Subpoints don't do anything</b> <br> Goal: <b>${notate(player.chal2.goal)}</b> Points <br> Completions: <b>${notate2(player.chal2.complete)}</b>/100 <br> <b>Reward:</b> Its effect increases by 0.001 every completion`;
        document.getElementById("chal2").style.backgroundColor = "lightgreen";
    };
    if (player.chal3.active == false) {
        document.getElementById("chal3").innerHTML = `<b>The first buyable of the decimal tab doesn't do anything</b> <br> Goal: <b>${notate(player.chal3.goal)}</b> Points <br> Completions: <b>${notate2(player.chal3.complete)}</b>/100 <br> <b>Reward:</b> You receive 1.15 times more Decimal Points per completion`;
        document.getElementById("chal3").style.backgroundColor = "transparent";
    } else {
        document.getElementById("chal3").innerHTML = `<b>The first buyable of the decimal tab doesn't do anything</b> <br> Goal: <b>${notate(player.chal3.goal)}</b> Points <br> Completions: <b>${notate2(player.chal3.complete)}</b>/100 <br> <b>Reward:</b> You receive 1.15 times more Decimal Points per completion`;
        document.getElementById("chal3").style.backgroundColor = "lightgreen";
    };
}, 0);

window.setInterval(function(){
    player.subpoints.multpts = ExpantaNum.pow(player.subpoints.effect, ExpantaNum.logBase(player.subpoints.amount, 2)).add(1);
    if (player.luck1.active == true) {
        player.decimal.luck1 = player.luck1.effect;
    } else {
        player.decimal.luck1 = new ExpantaNum(1);
    };
    if (player.luck2.active == true) {
        player.decimal.luck2 = player.luck2.effect;
    } else {
        player.decimal.luck2 = new ExpantaNum(1);
    };
    if (player.luck3.active == true) {
        player.decimal.luck3 = player.luck3.effect;
    } else {
        player.decimal.luck3 = new ExpantaNum(1);
    };
    if (player.luck4.active == true) {
        player.decimal.luck4 = player.luck4.effect;
    } else {
        player.decimal.luck4 = new ExpantaNum(1);
    };
    player.decimal.luck = ExpantaNum.times(player.decimal.luck1, player.decimal.luck2).times(player.decimal.luck3).times(player.decimal.luck4);
    if (player.chal1.active == true) {
        player.up3.effect = 1;
        if (ExpantaNum.cmp(player.points.points, player.chal1.goal) >= 0) {
            player.chal1.complete = ExpantaNum.add(player.chal1.complete, 1);
            player.chal1.goal = ExpantaNum.pow(player.chal1.goal, player.chal1.pow);
        };
        if (ExpantaNum.cmp(player.chal1.complete, 100) >= 0) {
            chal1();
        };
    };
    if (player.chal2.active == true) {
        player.subpoints.effect = 1;
        if (ExpantaNum.cmp(player.points.points, player.chal2.goal) >= 0) {
            player.chal2.complete = ExpantaNum.add(player.chal2.complete, 1);
            player.chal2.goal = ExpantaNum.pow(player.chal2.goal, player.chal2.pow);
        };
        if (ExpantaNum.cmp(player.chal2.complete, 100) >= 0) {
            chal2();
        };
    };
    if (player.chal3.active == true) {
        player.decbuy1.effect = 1;
        if (ExpantaNum.cmp(player.points.points, player.chal3.goal) >= 0) {
            player.chal3.complete = ExpantaNum.add(player.chal3.complete, 1);
            player.chal3.goal = ExpantaNum.pow(player.chal3.goal, player.chal3.pow);
        };
        if (ExpantaNum.cmp(player.chal3.complete, 100) >= 0) {
            chal3();
        };
    };
    if (player.Dup2.bought == true) {
        player.subpoints.effect = ExpantaNum.add(1.12, ExpantaNum.times(player.chal2.effect, player.chal2.complete));
    } else {
        player.subpoints.effect = ExpantaNum.add(1.1, ExpantaNum.times(player.chal2.effect, player.chal2.complete));
    };
}, 0);

window.setInterval(function() {
    if (ExpantaNum.cmp(player.luck1.time, 0) > 0) {
        player.luck1.time = ExpantaNum.sub(player.luck1.time, 0.05);
    } else {
        player.luck1.time = new ExpantaNum(0);
        player.luck1.active = false;
    };
    if (ExpantaNum.cmp(player.luck2.time, 0) > 0) {
        player.luck2.time = ExpantaNum.sub(player.luck2.time, 0.05);
    } else {
        player.luck2.time = new ExpantaNum(0);
        player.luck2.active = false;
    };
    if (ExpantaNum.cmp(player.luck3.time, 0) > 0) {
        player.luck3.time = ExpantaNum.sub(player.luck3.time, 0.05);
    } else {
        player.luck3.time = new ExpantaNum(0);
        player.luck3.active = false;
    };
    if (ExpantaNum.cmp(player.luck4.time, 0) > 0) {
        player.luck4.time = ExpantaNum.sub(player.luck4.time, 0.05);
    } else {
        player.luck4.time = new ExpantaNum(0);
        player.luck4.active = false;
    };
}, 50);
