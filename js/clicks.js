var clicks = 0;
function increment() {
    clicks = clicks + 1;
    seed_counter.innerHTML = clicks;
}
function reset() {
    clicks = 0;
    seed_counter.innerHTML = clicks;
}
