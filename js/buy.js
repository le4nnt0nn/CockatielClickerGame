var buy1_count = 0;
var buy2_count = 0;
var buy3_count = 0;
var buy4_count = 0;

function check_buy() {
    var buy1 = document.getElementById("buy_button1");
    if(clicks>=50){
        buy1.style.display = 'inline';
    } else {
        buy1.style.display = 'none';
    }

    var buy2 = document.getElementById("buy_button2");
    if(clicks>=500){
        buy2.style.display = 'inline';
    } else {
        buy2.style.display = 'none';
    }

    var buy3 = document.getElementById("buy_button3");
    if(clicks>=5000){
        buy3.style.display = 'inline';
    } else {
        buy3.style.display = 'none';
    }

    var buy4 = document.getElementById("buy_button4");
    if(clicks>=50000){
        buy4.style.display = 'inline';
    } else {
        buy4.style.display = 'none';
    }
}

function buy_suc1() {
   seed_counter.innerHTML = clicks - 50;
   clicks = clicks - 50;
   buy1_count = buy1_count + 1;
   check_buy();
}

function buy_suc2() {
    seed_counter.innerHTML = clicks - 500;
    clicks = clicks - 500;
    buy2_count = buy2_count + 1;
    check_buy();
}

function buy_suc3() {
    seed_counter.innerHTML = clicks - 5000;
    clicks = clicks - 5000;
    buy3_count = buy3_count + 1;
    check_buy();
}

function buy_suc4() {
    seed_counter.innerHTML = clicks - 50000;
    clicks = clicks - 50000;
    buy4_count = buy4_count + 1;
    check_buy();
}