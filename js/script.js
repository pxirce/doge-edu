function hideNav(){
    document.getElementById('navbar').style.top = "-34px";
    document.getElementById('navbar').style.opacity = "99%";
    var d = document.createElement('div');
    d.classList.add('navEl');
    d.id = "navEl";
    d.onclick = function(){
        document.getElementById('navbar').style.top = "10px";
        document.getElementById('navbar').style.opacity = "100%";
        d.remove();
    }
    document.body.appendChild(d);
}

var gamesList = document.querySelectorAll('button');

document.getElementById("appSearch").addEventListener('input', function(e){
    for (var i = 0; i < gamesList.length; i++){
        var search = e.target.value.toLowerCase();
        var isVisible = gamesList[i].innerHTML.toLowerCase().includes(search);
        if (isVisible){
            gamesList[i].style.display = "";
        }
        else{
            gamesList[i].style.display = "none";
        }
    }
})

function openApp(url){
    var f = document.createElement('iframe');
    f.src = url;
    document.body.appendChild(f);
    document.getElementById('fullBtn').style.display = "block";
    document.getElementById('hideBtn').style.display = "block";
}

function full(){
    document.querySelector('iframe').requestFullscreen();
}

function openURL(urll){
    const url = search(urll);
    openApp( __uv$config.prefix + __uv$config.encodeUrl(url))
}