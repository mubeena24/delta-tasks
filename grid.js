function randomc() {
    let color = ['#FFFFFF', '#FF0000', '#00FF00', '#FFFF00', '#0000FF', '#FFA500'];
    // console.log(color[1])
    let block_clr = color[Math.floor(Math.random() * 6)];
    return block_clr;

}

let pattern = document.getElementsByClassName('pattern');
let content = document.getElementsByClassName('content');

function shuffle() {
    for (x = 0; x < 24; x++) {
        let y = Math.floor(Math.random() * (24 - x));
        [Boxes[x], Boxes[y]] = [Boxes[y], Boxes[x]];

    }
    console.log(Boxes);


}

function assignc() {
    p = 24;
    content[24].style.backgroundColor = '#000000';
    shuffle();
    for (i = 0; i < 9; i++) {
        pattern[i].style.backgroundColor = randomc();
        content[Boxes[i]].style.backgroundColor = pattern[i].style.backgroundColor;
    }
    for (i = 9; i < 24; i++) {
        content[Boxes[i]].style.backgroundColor = randomc();
    }
    score.innerHTML = " your score: 0";
    document.querySelector('.pop-up').style.display = 'none';
}
Boxes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

let p = 24,
    q;
let sc = 0;

function check(q) {
    if (q == p + 1 || q == p + 5 || q == p - 1 || q == p - 5) {
        if (p == 4 || p == 9 || p == 14 || p == 19) {
            if (q == p + 5 || q == p - 1 || q == p - 5)
                swapc(q);


        } else if (p == 5 || p == 10 || p == 15 || p == 20) {
            if (q == p + 5 || q == p + 1 || q == p - 5)
                swapc(q);


        } else
            swapc(q);


    }
}


function check_sol() {
    if (pattern[0].style.backgroundColor == content[6].style.backgroundColor && pattern[1].style.backgroundColor == content[7].style.backgroundColor && pattern[2].style.backgroundColor == content[8].style.backgroundColor && pattern[3].style.backgroundColor == content[11].style.backgroundColor && pattern[4].style.backgroundColor == content[12].style.backgroundColor && pattern[5].style.backgroundColor == content[13].style.backgroundColor && pattern[6].style.backgroundColor == content[16].style.backgroundColor && pattern[7].style.backgroundColor == content[17].style.backgroundColor && pattern[8].style.backgroundColor == content[18].style.backgroundColor) {
        // console.log( 'YOu WIn');
        disp();
    }
}

function disp_close() {
    document.querySelector('.pop-up').style.display = 'none';
}



function swapc(q) {

    [content[p].style.backgroundColor, content[q].style.backgroundColor] = [content[q].style.backgroundColor, content[p].style.backgroundColor];
    p = q;
    check_sol();
    sc++;
    score.innerHTML = " your score: " + sc;

}