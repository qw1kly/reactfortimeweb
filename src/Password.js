import axios from 'axios';
let tg = window.Telegram.WebApp;
let idi =  10;
export function Savepass(event) {
    event.preventDefault();

    let pass = document.getElementById('passwordinput').value;
    axios({
        method: "POST",
        url: '/',
        data: { telegramidi: idi, password: pass }
    }).then((response) => {
        if (response['data']['1']==1) {
            localStorage.setItem('pass', document.getElementById('passwordinput').value);
            document.getElementById("insteadofall").style.display = "block";
            document.getElementById("nowGame").style.display = "block";
            document.getElementById("hideonlyauth").style.display = "block";
            document.getElementById("authpage").style.display = "none";
        }
        if (response['data']['1']==0) {
            document.getElementById('warn').style.display = 'block';
            document.getElementById('svgwarn').style.display = 'block';
        }
        document.getElementById("passwordinput").value = "";
        document.getElementById("passwordinput").blur();
    });
};
export function Start(){
    document.getElementById("biglogoo").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("continue").style.display = "block";
    document.getElementById("tirecky").style.display = "block";
    document.getElementById("nickname").style.display = "block";
    document.getElementById("nicknameinput").style.display = "block";
    document.getElementById("pencil").style.display = "none";
}
export function Name(event) {
    event.preventDefault();
    let name = document.getElementById("nicknameinput").value;
    document.getElementById("nicknameinput").value="";
    document.getElementById("nicknameinput").blur();
    axios({
        method: "POST",
        url: '/register2',
        data: {name: name, telegramtodelete: idi}
    }).then((response) => {
        if (response['data']['1'] == 0) {
            document.getElementById("typeshit").style.width = "294px";
            document.getElementById("typeshit").style.top = "410.5px";
            document.getElementById("typeshit").innerHTML = "User name must be at least 5-characters long but not more than 20-characters, must start with a letter, may consist only of A-z, 0-9.";
            document.getElementById("warningtext").style.display = "block";
            document.getElementById("typeshit").style.display = "block";
        }
        if (response['data']['1'] == 2) {
            document.getElementById("typeshit").innerHTML = "Username is already taken";
            document.getElementById("typeshit").style.display = "block";
            document.getElementById("warningtext").style.display = "block";

        }
        if (response['data']['1'] == 1) {
            document.getElementById("typeshit").style.display = "none";
            document.getElementById("warningtext").style.display = "none";
            document.getElementById("continue").style.display = "none";
            document.getElementById("nickname").style.display = "none";
            document.getElementById("nicknameinput").style.display = "none";
            document.getElementById("continue2").style.display = "block";
            document.getElementById("passwordinput2").style.display = "block";
            document.getElementById("pass").style.display = "block";

        }

            });

    }
    export function Send(event) {
        event.preventDefault();
        let pass = document.getElementById("passwordinput2").value;
        document.getElementById("passwordinput2").value = "";
        document.getElementById("passwordinput2").blur();
        axios({
            method: "POST",
            url: '/register2',
            data: {password: pass, telegramtodelete: idi}
        }).then((response) => {
            if (response['data']['1']==1) {
                localStorage.setItem('pass', pass);
                document.getElementById("insteadofall").style.display = "block";
                document.getElementById("nowGame").style.display = "block";
                document.getElementById("hideonlyauth").style.display = "block";
                document.getElementById("registerpage").style.display = "none";
            }
            if (response['data']['1']==0) {
                document.getElementById("typeshit").innerHTML = "NO.";
                document.getElementById("warningtext").style.display = "block";
                document.getElementById("typeshit").style.display = "block";            }
            if (response['data']['1']==2) {
                document.getElementById("typeshit").innerHTML = "Password must be at least 8-characters long but not more than 15-characters, must start with a letter, may consist only of A-z, 0-9.";
                document.getElementById("warningtext").style.display = "block";
                document.getElementById("typeshit").style.display = "block";
            }

        });
    }