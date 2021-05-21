// Buy counters
var buy1_count = 0;
var buy2_count = 0;
var buy3_count = 0;
var buy4_count = 0;

// Function check Buy
function check_buy() {
    var buy1 = document.getElementById("buy_button1");
    var buy2 = document.getElementById("buy_button2");
    var buy3 = document.getElementById("buy_button3");
    var buy4 = document.getElementById("buy_button4");

    buy1.style.display = clicks >= 50 ? "inline" : "node";
    buy2.style.display = clicks >= 500 ? "inline" : "node";
    buy3.style.display = clicks >= 5000 ? "inline" : "node";
    buy4.style.display = clicks >= 50000 ? "inline" : "node";
}

// Success buy function
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