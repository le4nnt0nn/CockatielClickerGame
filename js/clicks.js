//Vars
var clicks = 0;
var score = 0;
var highscore = 0;

//Function
function increment() {
    
    seed_counter.innerHTML = clicks;
    if (buy1_count>0) {
        clicks = clicks + buy1_count + 2;
    } else {
        clicks = clicks + 1;
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


