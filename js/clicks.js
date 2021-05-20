//Vars
var clicks = 0;
var score = 0;
var highscore = 0;

//Function
function increment() {
    clicks = clicks + 1;
    seed_counter.innerHTML = clicks;
    if (clicks > 50) {
        clicks = clicks + 2;
    }
    if (clicks > 100) {
        clicks = clicks + 4;
    }
    if (clicks > 200) {
        clicks = clicks + 5;
    }
    if (clicks > 400) {
        clicks = clicks + 8;
    }
    if (clicks > 800) {
        clicks = clicks + 9;
    }
    if (clicks > 1500) {
        clicks = clicks + 10;
    }
    if (clicks > 3000) {
        clicks = clicks + 20;
    }
    if (clicks > 5000) {
        clicks = clicks + 30;
    }
    if (clicks > 6000) {
        clicks = clicks + 60;
    }
    if (clicks > 10000) {
        clicks = clicks + 90;
    }
    if (clicks > 50000) {
        clicks = clicks + 200;
    }
    if (clicks > 80000) {
        clicks = clicks + 300;
    }
    if (clicks > 100000) {
        clicks = clicks + 500;
    }
    if (clicks > 400000) {
        clicks = clicks + 800;
    }
    if (clicks > 600000) {
        clicks = clicks + 1200;
    }
    if (clicks > 1000000) {
        clicks = clicks + 1800;
    }
    if (clicks > 1500000) {
        clicks = clicks + 3000;
    }
    if (clicks > 2000000) {
        clicks = clicks + 5000;
    }
    if (clicks > 8000000) {
        clicks = clicks + 8000;
    }
    if (clicks > 10000000) {
        clicks = clicks + 10000;
    }
    if (clicks > 15000000) {
        clicks = clicks + 18000;
    }
    if (clicks > 20000000) {
        clicks = clicks + 30000;
    }

    //Score
    score = clicks;
    if (score > highscore) {
        highscore = score;    
    }
}
function reset() {
    clicks = 0;
    seed_counter.innerHTML = clicks;
    //Save Highscore
    highscore_count.innerHTML = highscore;
}


