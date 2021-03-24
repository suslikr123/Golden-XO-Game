window.onload = function () {

    for (var i = 0; i < 9; i++) {
        document.getElementById('box').innerHTML += '<div class="block"></div>';
    }

    let hod = 0;
    let a = 0;
    let currNow = document.querySelector('.currNow');

    let currX = document.querySelector('.curX').onclick = () => {
        hod;
        a++;
        document.querySelector('.current-player').style.display = "none";
    }
    let currO = document.querySelector('.curO').onclick = () => {
        hod++;
        a++;
        document.querySelector('.current-player').style.display = "none";
    }


    document.getElementById('box').onclick = function (event) {
        if (a > 0) {
            if (event.target.className == 'block') {
                if (hod % 2 == 0) {
                    if (event.target.innerHTML == 'x' || event.target.innerHTML == 'o') {
                        return false;
                    }
                    else {
                        currNow.innerHTML = "Сейчас ход X";
                        event.target.innerHTML = 'x';
                    }
                }
                else {
                    if (event.target.innerHTML == 'x' || event.target.innerHTML == 'o') {
                        return false;
                    }
                    else {
                        currNow.innerHTML = "Сейчас ход O";
                        event.target.innerHTML = 'o';
                    }
                }
                hod++;
                checkWinner();
            }
        }
        else { return false; }
    }

    function checkWinner() {
        var blocks = document.getElementsByClassName('block');
        let x = 0;
        let o = 0;

        if ((blocks[0].innerHTML == 'x' && blocks[1].innerHTML == 'x' && blocks[2].innerHTML == 'x') || (blocks[3].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[5].innerHTML == 'x') || (blocks[6].innerHTML == 'x' && blocks[7].innerHTML == 'x' && blocks[8].innerHTML == 'x') || (blocks[0].innerHTML == 'x' && blocks[3].innerHTML == 'x' && blocks[6].innerHTML == 'x') || (blocks[1].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[7].innerHTML == 'x') || (blocks[2].innerHTML == 'x' && blocks[5].innerHTML == 'x' && blocks[8].innerHTML == 'x') || (blocks[0].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[8].innerHTML == 'x') || (blocks[2].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[6].innerHTML == 'x')) {
            document.getElementById('box').innerHTML = '<div class="info">Крестики победили!<br><button id="reload">Начать заново</button></div>';
            currNow.innerHTML = "";
            document.getElementById('reload').onclick = function () {
                location.reload();
            }
        }

        if ((blocks[0].innerHTML == 'o' && blocks[1].innerHTML == 'o' && blocks[2].innerHTML == 'o') || (blocks[3].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[5].innerHTML == 'o') || (blocks[6].innerHTML == 'o' && blocks[7].innerHTML == 'o' && blocks[8].innerHTML == 'o') || (blocks[0].innerHTML == 'o' && blocks[3].innerHTML == 'o' && blocks[6].innerHTML == 'o') || (blocks[1].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[7].innerHTML == 'o') || (blocks[2].innerHTML == 'o' && blocks[5].innerHTML == 'o' && blocks[8].innerHTML == 'o') || (blocks[0].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[8].innerHTML == 'o') || (blocks[2].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[6].innerHTML == 'o')) {
            document.getElementById('box').innerHTML = '<div class="info">Нолики победили!<br><button id="reload">Начать заново</button></div>';
            currNow.innerHTML = "";
            document.getElementById('reload').onclick = function () {
                location.reload();
            }
        }
        else {
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].innerHTML == 'x') x++;
                if (blocks[i].innerHTML == 'o') o++;
            }
            if ((x == 5 && o == 4) || (x == 4 && o == 5)) {
                document.getElementById('box').innerHTML = '<div class="info">Ничья!<br><button id="reload">Начать заново</button></div>';
                currNow.innerHTML = "";
                document.getElementById('reload').onclick = function () {
                    location.reload();
                }
            }
        }
    }
}