let lauchDate = new Date("nov 15, 2022 00:00:00").getTime();

let timer = setInterval (real, 1000);

function real () {

    let now = new Date().getTime();

    let t = lauchDate - now;
    
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('.countdown').innerText = time;
    }
}

function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById ('senha').value;

    if(login == "joji" && senha == "270321"){
        alert('Sucesso');
        location.href = 'home.html';
    } else{
        alert('Agora você tem menos chances');
    }
}
