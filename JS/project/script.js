function allChanges(){
    // document.querySelector('#heading').style.color='red';
    // document.querySelector('#heading').style.backgroundColor='yellow';
    // document.querySelector('#heading').style.fontWeight='bold';
    // document.querySelector('#heading').style.fontStyle='italic';
    // document.querySelector('#heading').style.textDecoration='underline';
    // document.querySelector('#heading').style.fontSize='35px';

    document.querySelector('#heading').classList.add('text');

}
function change(){
    var name=document.querySelector('#change').innerText;
    if(name=='Hide'){
        document.querySelector('#change').innerText='Show'
    }
    else{
        document.querySelector('#change').innerText='Hide'
    }
    document.querySelector('#heading').classList.toggle('show-hide').innerText
}
function color(){
    var color=document.querySelector('#color').value;
    document.querySelector('#second').style.color=color;
}
function bgcolor(){
    var bgcolor=document.querySelector('#bg').value;
    document.querySelector('#second').style.backgroundColor=bgcolor;
}
function font(){
    var size=document.querySelector('#font').value;
    document.querySelector('#second').style.fontSize=size
}
function options(){
    var opt=document.querySelector('#option').value
    document.querySelector('#second').style.font=opt
}
function changeLight(){
    var name=document.querySelector('#light').innerText;
    document.querySelector('#one')[0].src='https://prabhatmallik.com.np/dom/image/ON.jpg'

    if(name=='ON'){
        document.querySelector('#light').innerText='OFF'
    }
    else{
        document.querySelector('#light').innerText='ON'
    }
    document.querySelector('#light').value
}