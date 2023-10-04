var x = 0;

function turn(box) {
    if (box.innerHTML==""){
        if (x%2==0){
            box.innerHTML = "<img src=\"beau.png\">";
        }
        else {
            box.innerHTML = "<img src=\"spoing.png\">";
        }
        x += 1;
        check();
    }
}

function check(){
    var a = document.getElementById("1").innerHTML;
    var b = document.getElementById("2").innerHTML;
    var c = document.getElementById("3").innerHTML;
    var d = document.getElementById("4").innerHTML;
    var e = document.getElementById("5").innerHTML;
    var f = document.getElementById("6").innerHTML;
    var g = document.getElementById("7").innerHTML;
    var h = document.getElementById("8").innerHTML;
    var i = document.getElementById("9").innerHTML;

    if (a!="" && a==b && a==c) {
        win(a);
    }
    else if (d!="" && d==e && d==f) {
        win(d);
    }
    else if (g!="" && g==h && g==i) {
        win(g);
    }
    else if (a!="" && a==d && a==g) {
        win(a);
    }
    else if (b!="" && b==e && b==h) {
        win(b);
    }
    else if (c!="" && c==f && c==i) {
        win(c);
    }
    else if (a!="" && a==e && a==i) {
        win(a);
    }
    else if (c!="" && c==e && c==g) {
        win(c);
    }
    else if (x==9){
        win("none");
    }
}

function win(winner) {
    if (winner=="none"){
        document.getElementById("game").innerHTML="<h1>tie!</h1>";
    }
    else {
        document.getElementById("game").innerHTML=winner+"<h1>winner wiener chicken diener!</h1>";
    }   
    document.getElementById("game").innerHTML+= "<button id=\"reset\" onclick=\"reset()\">new game</button>";
}

function reset() {
    x = 0;
    document.getElementById("game").innerHTML=
    `<h1>Tic-Tac-Beau</h1>
    <div id="container">
        <button onclick="turn(this)" class="box" id="1"></button>
        <button onclick="turn(this)" class="box" id="2"></button>
        <button onclick="turn(this)" class="box" id="3"></button>
        <button onclick="turn(this)" class="box" id="4"></button>
        <button onclick="turn(this)" class="box" id="5"></button>
        <button onclick="turn(this)" class="box" id="6"></button>
        <button onclick="turn(this)" class="box" id="7"></button>
        <button onclick="turn(this)" class="box" id="8"></button>
        <button onclick="turn(this)" class="box" id="9"></button>
    </div>`;
}