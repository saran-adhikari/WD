function allChanges() {
    // document.querySelector('#heading').style.color='red';
    // document.querySelector('#heading').style.backgroundColor='yellow';
    // document.querySelector('#heading').style.fontWeight='bold';
    // document.querySelector('#heading').style.fontStyle='italic';
    // document.querySelector('#heading').style.textDecoration='underline';
    // document.querySelector('#heading').style.fontSize='35px';

    document.querySelector('#heading').classList.add('text');

}
function change() {
    var name = document.querySelector('#change').innerText;
    if (name == 'Hide') {
        document.querySelector('#change').innerText = 'Show'
    }
    else {
        document.querySelector('#change').innerText = 'Hide'
    }
    document.querySelector('#heading').classList.toggle('show-hide').innerText
}
function color() {
    var color = document.querySelector('#color').value;
    document.querySelector('#second').style.color = color;
}
function bgcolor() {
    var bgcolor = document.querySelector('#bg').value;
    document.querySelector('#second').style.backgroundColor = bgcolor;
}
function font() {
    var size = document.querySelector('#font').value;
    document.querySelector('#second').style.fontSize = size
}
function multiple() {
    var opt = document.querySelector('#option1').value
    console.log(opt)
    if (opt == 'all') {
        document.querySelector('#second').classList.add('optn')

    }
    else if (opt == 'bold') {
        document.querySelector('#second').style.fontWeight = opt
    }
    else if (opt == 'italic') {
        document.querySelector('#second').style.fontStyle = opt
    }
    else if (opt == 'underline') {
        document.querySelector('#second').style.textDecoration = opt
    }

}
function changeLight() {
    var name = document.querySelector('#light').innerText;

    if (name == 'ON') {
        document.querySelector('#light').innerText = 'OFF'
        document.querySelector('#one').src = 'https://prabhatmallik.com.np/dom/image/ON.jpg'

    }
    else {
        document.querySelector('#light').innerText = 'ON'
        document.querySelector('#one').src = 'https://prabhatmallik.com.np/dom/image/OFF.jpg'

    }
    document.querySelector('#light').value
}
function toggle() {
    let pw = document.querySelector('#pass');
    if (pw.type === "password") {
        pw.type = "text";
    }
    else {
        pw.type = "password";
    }
}