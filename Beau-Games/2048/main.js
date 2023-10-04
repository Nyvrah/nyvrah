var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function onload() {
    container = document.getElementById("container");
    for (let y = 0; y<4; y++){
        for (let x = 0; x<4; x++){
            container.innerHTML += `<div class="box" id="${y}${x}"></div>`;
        }
    }
    
    for (var y = 0; y<2; y++){
        newNum();
    }
    update();

    document.addEventListener('keydown', function(event) {
        old = [[],[],[],[]]
        for (var y = 0; y<4; y++){
            for (var x = 0; x<4; x++){
                old[y][x]=board[y][x];
            }
        }
        if(event.key == "ArrowLeft") {
            left();
        }

        else if(event.key == "ArrowRight") {
            right();
        }
        else if(event.key == "ArrowDown") {
            down();
        }
        else if(event.key == "ArrowUp") {
            up();
        }
        for (var y = 0; y<4; y++){
            for (var x = 0; x<4; x++){
                if (board[y][x] == 11){
                    newNum();
                    update();
                    win(y,x);
                    return;
                }
                else if (board[y][x] != old[y][x]) {
                    newNum();
                    update();
                    return;
                }
            }
        }
    });
}

function newNum() {
    var free = [];

    for (var y = 0; y<4; y++){
        for (var x = 0; x<4; x++){
            if (board[y][x] == 0) {
                free.push([y,x]);
            }
        }
    }

    var n = free[Math.floor(Math.random() * free.length)];
    board[n[0]][n[1]] = 1;

}



function left() {
    var rep;
    var current;
    for (let y = 0; y<4; y++){
        rep = [];
        current = 0;
        for (let x = 0; x<4; x++){
            if (board[y][x] != 0) {
                if (board[y][x] == current){
                    rep[rep.length-1] += 1;
                    current = 0;
                }
                else {
                    rep.push(board[y][x]);
                    current = board[y][x];
                }
                
            }
        }
        const n = 4 - rep.length;
        for (let y = 0; y<n; y++){
            rep.push(0);
        }  
        board[y] = rep;
    }
}

function right() {
    var rep;
    var current;
    for (let y = 0; y<4; y++){
        rep = [];
        current = 0;
        for (let x = 3; x>=0; x--){
            if (board[y][x] != 0) {
                if (board[y][x] == current){
                    rep[0] += 1;
                    current = 0;
                }
                else {
                    rep.unshift(board[y][x]);
                    current = board[y][x];
                }
                
            }
        }
        const n = 4 - rep.length;
        for (let y = 0; y<n; y++){
            rep.unshift(0);
        }  
        board[y] = rep;
    }
}

function up() {
    var rep;
    var current;
    for (let x = 0; x<4; x++){
        rep = [];
        current = 0;
        for (let y = 0; y<4; y++){
            if (board[y][x] != 0) {
                if (board[y][x] == current){
                    rep[rep.length-1] += 1;
                    current = 0;
                }
                else {
                    rep.push(board[y][x]);
                    current = board[y][x];
                }
                
            }
        }
        const n = 4 - rep.length;
        for (let y = 0; y<n; y++){
            rep.push(0);
        }  
        for (let d = 0; d<4; d++){
            board[d][x] = rep[d];
        }  
    }
}

function down() {
    var rep;
    var current;
    for (let x = 0; x<4; x++){
        rep = [];
        current = 0;
        for (let y = 3; y>=0; y--){
            if (board[y][x] != 0) {
                if (board[y][x] == current){
                    rep[0] += 1;
                    current = 0;
                }
                else {
                    rep.unshift(board[y][x]);
                    current = board[y][x];
                }
                
            }
        }
        const n = 4 - rep.length;
        for (let y = 0; y<n; y++){
            rep.unshift(0);
        }   
        for (let d = 0; d<4; d++){
            board[d][x] = rep[d];
        }  
    }
}

function update() {
    for (var y = 0; y<4; y++){
        for (var x = 0; x<4; x++){
            if (board[y][x] != 0) {
                document.getElementById(`${y}${x}`).innerHTML = `<img src="${board[y][x]}.png"></img>`;
            }
            else {
                document.getElementById(`${y}${x}`).innerHTML = "";
            }
        }
    }
}

function win(y, x){
    document.getElementById("game").innerHTML= `<img id = "win" src="${board[y][x]}.png"></img>`+"<h1>winner wiener chicken diener!</h1>";
    document.getElementById("game").innerHTML+= `<button id="reset" onclick="reset()">new game</button>`;

}

function reset() {
    board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    document.getElementById("game").innerHTML= 
    `<h1>2048</h1>
    <div id="container">
        
    </div>`
    container = document.getElementById("container");
    for (let y = 0; y<4; y++){
        for (let x = 0; x<4; x++){
            container.innerHTML += `<div class="box" id="${y}${x}"></div>`;
        }
    }
    for (var y = 0; y<2; y++){
        newNum();
    }
    update();
}