var clicks = 0;
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
}
function reset() {
    clicks = 0;
    seed_counter.innerHTML = clicks;
}
