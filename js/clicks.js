//Vars
var clicks = 0;
var score = 0;
var highscore = 0;

//Function
function increment() {
    
    clicks = clicks + 1;
    seed_counter.innerHTML = clicks;
    if (buy1_count>0) {
        clicks = clicks + buy1_count + 2;
    }

    if (buy2_count>0) {
        clicks = clicks + buy2_count + 10;
    }

    if (buy3_count>0) {
        clicks = clicks + buy3_count + 100;
    }

    if (buy4_count>0) {
        clicks = clicks + buy4_count + 1000;
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


