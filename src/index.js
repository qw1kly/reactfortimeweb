import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './App.css';
import {showWALLET, showGAME, showPROFILE, showRATING, changeColor} from "./Main";
import {level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12} from "./Levels";
import {makeAfix} from "./AutoLayout";
import { Start, Name, Send, Savepass } from './Password';
import { Sendtofindwinner, Allwinners } from './Winners';
import { sendMessage } from './Chat';
import { MakeProf, Sendriddle } from './Profile';
import { closeModal, Hideallnew, Hidemain1, Hidemain2,Hidemain3,Hidemain4, Hideonlyrules, Hidesvgs, instantCopy, Showdetailstext, showModal, Showrules, instantSend,Hideonlydetail, Showmy, Showall  } from './Hiddendivs';
import { clicked } from './Game';


let tg = window.Telegram.WebApp;
let idi =  10;
tg.expand();
tg.setBackgroundColor("#000000");
console.log(tg.initDataUnsafe.id);




const Gamesum = document.getElementById("playsombasket");
Gamesum.addEventListener("click", (e) => {
    clicked();
})

MakeProf();
Allwinners();
axios({
    method: "POST",
    url: '/game',
    data: { telegram : idi, password: localStorage.getItem("pass") }
}).then((response) => {
        if (response['data'] === false){
            document.getElementById("insteadofall").style.display = "none";
            document.getElementById("nowGame").style.display = "none";
            document.getElementById("hideonlyauth").style.display = "none";
            document.getElementById("authpage").style.display = "block";
        } else {
            document.getElementById("clicki").innerHTML=response['data']['1'][0];
            document.getElementById("wallba").innerHTML=response['data']['1'][1];
        }

});


const winnerone = document.getElementById("sendtofindwinner");
winnerone.addEventListener("submit", (event) => {
    Sendtofindwinner(event);
})

axios({
    method: "POST",
    url: '/rating',
    data: { telegramidi: idi, password: localStorage.getItem("pass") }
}).then((response) => {
    if (response['data']['1']==0) {
        document.getElementById('messageText').setAttribute('disabled', 'disabled');
        document.getElementById('playdisplay').style.display = "none";
        document.getElementById("ver").style.display = "block";
    } else {
        document.getElementById('messageText').removeAttribute("disabled");
        document.getElementById('playdisplay').style.display = "block";
        document.getElementById("ver").style.display = "none";
    }
});
let nm = ''
axios({
    method: "POST",
    url: '/rating',
    data: { actname: idi}
}).then((response) => {
    nm = response['data']['1'];
    document.getElementById("hidenname").innerHTML = nm;
});
axios({
    method: "POST",
    url: '/',
    data: { telegramidi: idi, password: localStorage.getItem("pass") }
}).then((response) => {
    if (response['data']['1']==0) {
        document.getElementById("svgwarn").style.display = "block";
        document.getElementById("warn").style.display = "block";
    }
    if (response['data']['1']==1) {
        document.getElementById("insteadofall").style.display = "block";
        document.getElementById("nowGame").style.display = "block";
        document.getElementById("hideonlyauth").style.display = "block";
        document.getElementById("authpage").style.display = "none";
    }
    if (response['data']['1']==2) {
        document.getElementById("registerpage").style.display = "block";
        document.getElementById("authpage").style.display = "none";
        document.getElementById("tirecky").style.display = 'none';
        
    }
});

const authpass = document.getElementById("passwordformauth");
authpass.addEventListener("submit", (event) => {
    Savepass(event);
});

const passw = document.getElementById("passwordform");
passw.addEventListener("submit", (event) => {
    Send(event);
});
const passw2 = document.getElementById("continue2");
passw2.addEventListener("click", (event) => {
    Send(event);
});
const nick = document.getElementById("nicknameform");
nick.addEventListener("submit", (event) => {
    Name(event);
});
const nick2 = document.getElementById("continue");
nick2.addEventListener("click", (event) => {
    Name(event);
})
const createAcc = document.getElementById("create");
createAcc.addEventListener("click", (e) => {
    Start();
});
const levell1 = document.getElementById("sw1");
levell1.addEventListener("click", (e) => {
    level1();
});


const levell2 = document.getElementById("sw2");
levell2.addEventListener("click", (e) => {
    level2();
});

const levell3 = document.getElementById("sw3");
levell3.addEventListener("click", (e) => {
    level3();
});

const levell4 = document.getElementById("sw4");
levell4.addEventListener("click", (e) => {
    level4();
});


const levell5 = document.getElementById("sw5");
levell5.addEventListener("click", (e) => {
    level5();
});


const levell6 = document.getElementById("sw6");
levell6.addEventListener("click", (e) => {
    level6();
});


const levell7 = document.getElementById("sw7");
levell7.addEventListener("click", (e) => {
    level7();
});


const levell8 = document.getElementById("sw8");
levell8.addEventListener("click", (e) => {
    level8();
});


const levell9 = document.getElementById("sw9");
levell9.addEventListener("click", (e) => {
    level9();
});


const levell10 = document.getElementById("sw10");
levell10.addEventListener("click", (e) => {
    level10();
});


const levell11 = document.getElementById("sw11");
levell11.addEventListener("click", (e) => {
    level11();
});


const levell12 = document.getElementById("sw12");
levell12.addEventListener("click", (e) => {
    level12();
});

const Wallet = document.getElementById("showWALLET");
Wallet.addEventListener("click", (e) => {
    showWALLET();
});


const Game = document.getElementById("showGAME");
Game.addEventListener("click", (e) => {
    showGAME();
});

const Profile = document.getElementById("showPROFILE");
Profile.addEventListener("click", (e) => {
    showPROFILE();
});

const Rating = document.getElementById("showRATING");
Rating.addEventListener("click", (e) => {
    showRATING();
});

const InputSome = document.getElementById("messageText");
InputSome.addEventListener("focus", (e) => {
    changeColor();
});

const chatmessage = document.getElementById("laca");
chatmessage.addEventListener("submit", (event) => {
    sendMessage(event);
});

const chatmessage2 = document.getElementById("playdisplay");
chatmessage2.addEventListener("click", (event) => {
    sendMessage(event);
});

const hide1 = document.getElementById("hide1");
hide1.addEventListener("click", (e) => {
    Hidemain1();
});

const hide2 = document.getElementById("hide2");
hide2.addEventListener("click", (e) => {
    Hidemain2();
});

const hide3 = document.getElementById("hide3");
hide3.addEventListener("click", (e) => {
    Hidemain3();
});

const hide4 = document.getElementById("hide4");
hide4.addEventListener("click", (e) => {
    Hidemain4();
});

const hide5 = document.getElementById("rojatvoja");
hide5.addEventListener("click", (e) => {
    Hideonlyrules();
});

const show1 = document.getElementById("hundred");
show1.addEventListener("click", (e) => {
    Showrules();
});

const show2 = document.getElementById("ticketshundred");
show2.addEventListener("click", (e) => {
    Showrules();
});

const hide6 = document.getElementById("rojatvoja1");
hide6.addEventListener("click", (e) => {
    Hideonlydetail();
});

const hide7 = document.getElementById("rojatvojamain1");
hide7.addEventListener("click", (e) => {
    Hideallnew();
});

const hide77 = document.getElementById("rojatvojamain2");
hide77.addEventListener("click", (e) => {
    Hideallnew();
});

const hide777 = document.getElementById("rojatvojamain3");
hide777.addEventListener("click", (e) => {
    Hideallnew();
});


const hide7777 = document.getElementById("rojatvojamain4");
hide7777.addEventListener("click", (e) => {
    Hideallnew();
});


const hide77777 = document.getElementById("rojatvojamain5");
hide77777.addEventListener("click", (e) => {
    Hideallnew();
});

const riddleclick = document.getElementById("riddleofform");
riddleclick.addEventListener("click", (e) =>{
    Hidesvgs();
});

const riddleclick2 = document.getElementById("riddleofform");
riddleclick2.addEventListener("submit", (event) =>{
    Sendriddle(event);
});

const riddleclick3 = document.getElementById("sendrobit");
riddleclick3.addEventListener("click", (event) =>{
    Sendriddle(event);
});

const shownew = document.getElementById("showmoredetails");
shownew.addEventListener("click", (e) =>{
    Showdetailstext();
});


const closesom = document.getElementById("closemodal");
closesom.addEventListener("click", (e) =>{
    closeModal();
});


const modal1 = document.getElementById("modalbuttonsend");
modal1.addEventListener("click", (e) =>{
    instantSend();
});

const modal2 = document.getElementById("modalbuttoncopy");
modal2.addEventListener("click", (e) =>{
    instantCopy();
});

const showmodal = document.getElementById("invitefriend");
showmodal.addEventListener("click", (e) =>{
    showModal();
});

const showmy = document.getElementById("showmy1");
showmy.addEventListener("click", (e) =>{
    Showmy();
});

const showall = document.getElementById("showall1");
showall.addEventListener("click", (e) =>{
    Showall();
});


const root = ReactDOM.createRoot(document.getElementById('root'));
const elem = (<div></div>);
root.render(elem);


