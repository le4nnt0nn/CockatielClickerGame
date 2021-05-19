function init() {
    cronos = setInterval(function() { timer() }, 1000);
}

  function timer() {
    tiempo = parseInt(document.getElementById('time').value);
    document.getElementById('time').value = eval(tiempo + 1);
}