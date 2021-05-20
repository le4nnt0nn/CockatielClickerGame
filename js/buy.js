function check_buy() {
    var buy1 = document.getElementById("buy_button1");
    if(clicks>=50){
        buy1.style.display = 'inline';
    } else {
        buy1.style.display = 'none';
    }
}