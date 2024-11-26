import axios from "axios";

let nm = '';
const idi = document.getElementById("invid").innerHTML;


var ws = new WebSocket("https://qw1kly-fastapifortimeweb-d608.twc1.net/ws/rating");

    ws.onmessage = async function(event) {
    var chat = document.getElementById("topfive");
    var nickname = document.createElement('a');
    var mess = document.createElement('a');
    var krugl = document.createElement('div');
    var obshak = document.createElement('div');
    var prom = document.createElement('div');
    var ecel = document.createElement('div');
    var ecel2 = document.createElement('div');
    var emel = document.createElement("img");
    
    prom.style.background = "#000000";
    prom.style.height = "20px";
    krugl.style.maxWidth = "150px";
    krugl.style.minHeight = "40px";
    krugl.style.minWidth = "75px";
    krugl.style.maxHeight = "150px";
    krugl.style.borderRadius = "16px";
    krugl.style.background = "#121212";

    mess.style.color = "#FFFFFF";
    mess.style.fontStyle = "normal";
    mess.style.fontWeight = "700";
    mess.style.fontSize = "14px";
    mess.style.lineHeight = "19px";
    mess.style.fontFamily = "Inter";
    mess.style.overflowWrap = "break-word";
    let rojer_pre = event.data.indexOf("tgidi="); //+6
    let lent = event.data.slice(0, rojer_pre);
    let rojer = lent.length;
    let rojer2 = (lent.length-6)/5;
    krugl.style.width = rojer*12+"px";
    krugl.style.height = (parseInt(krugl.style.width.slice(0, -2)/130)+1)*28+"px";
    ecel.style.position = "absolute";

    if (50<parseInt(krugl.style.width.slice(0, -2)) & parseInt(krugl.style.width.slice(0, -2))<150) {
        ecel.style.width = parseInt(krugl.style.width.slice(0, -2))*0.8+"px";
        ecel.style.left = "4px";

    }
    if (50>parseInt(krugl.style.width.slice(0, -2))){
        ecel.style.width = krugl.style.width;
        ecel.style.left="4px";
    }
    else {

        ecel.style.width = "120px";
        ecel.style.left = "6px";

        }
    ecel.style.top = "2px";

    ecel.style.verticalAlign = "middle";
    let init_ID = event.data.indexOf("tgidi="); //+6
    let Real_ID = event.data.slice(init_ID+6);
    let Real_ID2 = event.data.slice(init_ID+6, -6);
      axios({
        method: "POST",
        url: 'https://qw1kly-fastapifortimeweb-d608.twc1.net/rating',
        data: { actname: Real_ID }
        }).then((response) => {
              nickname.innerHTML = response['data']['1'];
        });
    
    nickname.style.position="relative";
    nickname.style.top="-1px";
    nickname.style.color="#002AFF";
    nickname.style.left= "5px";
    mess.innerHTML = event.data.slice(0, init_ID);
    obshak.style.width = "150px";
    emel.style.width = "20px";
    emel.style.height = "20px";
    emel.style.borderRadius = "100px";

    emel.style.position="relative";
    emel.style.left= "2px";
    emel.style.top="-25px";
    let pos = 0;
    mess.style.position='relative';
    mess.style.top = '15px';
    if (parseInt(Real_ID).toString()==idi) {
        prom.style.height = "10px";
        mess.style.top = '0px';
        emel.style.top = '-12px';
        emel.style.display="none";
        nickname.style.display="none";
        krugl.style.minHeight = "20px";
        krugl.style.height = (parseInt(krugl.style.width.slice(0, -2)/130)+1)*22+"px";

        obshak.style.position = "relative";
        for (let i = 0; i < 300; i++) { // выведет 0, затем 1, затем 2
            if (i + parseInt(krugl.style.width.slice(0, -2))>=280) {
            pos = i-20;
            break;

            }
        };
        if (pos<130) {
            pos = 110;
        }
        if (pos>230) {
            pos = 210;
        }
        obshak.style.left = pos+"px";
    };
    krugl.style.position = "relative";
    krugl.style.top='5px';
    krugl.style.left= "5px";
    krugl.style.overflow = "hidden";
    obshak.style.width = "75px";
    ecel2.style.height = krugl.style.height;

    ecel.appendChild(mess);
    krugl.appendChild(ecel);
    obshak.appendChild(krugl);
    ecel2.appendChild(obshak);
    chat.appendChild(ecel2);
    chat.appendChild(prom);
    krugl.appendChild(nickname);



};
export function sendMessage(event) {
      
    var input = document.getElementById("messageText");
    if (input.value.length>0){
    ws.send(input.value+"tgidi="+idi);
    input.value = '';
    }
    input.blur();
    event.preventDefault();
};
