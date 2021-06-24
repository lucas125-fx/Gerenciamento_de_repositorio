console.log('funciona');
var modoNoturno = function () {
    var body = document.getElementById('corpo');
    if (body.classList.contains('modo-noturno')) {
        body.classList.remove('modo-noturno');
    } else {
        body.classList.add('modo-noturno');
    }
}

var modoClaro = function () {
    var body = document.getElementById('corpo');
    if (body.classList.contains('modo-claro')) {
        body.classList.remove('modo-claro');
    } else {
        body.classList.add('modo-claro');
    }
}