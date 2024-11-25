import axios from 'axios';
let tg = window.Telegram.WebApp;
let idi =  10;
export function Sendtofindwinner(event) {
    event.preventDefault();
    document.getElementById("hidemytext").blur();
    document.getElementById("winner1").style.display="none";
    document.getElementById("winner2").style.display="none";
    document.getElementById("winner3").style.display="none";
    document.getElementById("winner4").style.display="none";
    document.getElementById("winner5").style.display="none";
    document.getElementById("hidemedal1").style.display="none";
    document.getElementById("hidemedal2").style.display="none";
    document.getElementById("hidemedal3").style.display="none";
    axios({
    method: "POST",
    url: '/rating',
    data: { selectwinner : document.getElementById("hidemytext").value }
}).then((response) => {
        document.getElementById("lupaid").style.display = "block";
        document.getElementById("hidemytext").value="";
        document.getElementById("hidemytext").blur();
        if (response['data']['1']=='0') {
            document.getElementById("notfound").style.display = "block";
            document.getElementById("notfoundsvg").style.display = "block";

            document.getElementById("fakewinner").style.display = 'none';
            document.getElementById("fakewinnertxt").style.display = 'none';
            document.getElementById("fakewinnertxt2").style.display = 'none';
            document.getElementById("fakewinnertext").style.display = 'none';
        } else {
            document.getElementById("fakewinner").style.display = 'block';
            document.getElementById("fakewinnertxt").style.display = 'block';
            document.getElementById("fakewinnertxt2").style.display = 'block';
            document.getElementById("fakewinnertext").style.display = 'block';
            document.getElementById("notfound").style.display = "none";
            document.getElementById("notfoundsvg").style.display = "none";
            document.getElementById("fakewinnertxt").innerHTML = response['data']['1'];
            document.getElementById("fakewinnertxt2").innerHTML = response['data']['2'];
            document.getElementById("fakewinnertext").innerHTML = response['data']['3']+'$';
        }
});
}

export function Allwinners() {
    axios({
        method: "POST",
        url: '/rating',
        data: { winners : '1' }
    }).then((response) => {
    document.getElementById("winner1txt").innerHTML = response['data']["5"]+"$";
    document.getElementById("winner2txt").innerHTML = response['data']["6"]+"$";
    document.getElementById("winner3txt").innerHTML = response['data']["7"]+"$";
    document.getElementById("winner4txt").innerHTML = response['data']["8"]+"$";
    document.getElementById("winner5txt").innerHTML = response['data']["9"]+"$";
    document.getElementById("winner1txt2").innerHTML = response['data']["0"];
    document.getElementById("winner2txt2").innerHTML = response['data']["1"];
    document.getElementById("winner3txt2").innerHTML = response['data']["2"];
    document.getElementById("winner4txt2").innerHTML = response['data']["3"];
    document.getElementById("winner5txt2").innerHTML = response['data']["4"];
    document.getElementById("winner1txt2").style.color = "#FFFFFF";
    document.getElementById("winner1txt2").style.fontFamily =  'Inter';
    document.getElementById("winner1txt2").style.fontStyle= 'normal';
    document.getElementById("winner1txt2").style.fontWeight= '500';
    document.getElementById("winner1txt2").style.fontSize= '20px';
    document.getElementById("winner1txt2").style.lineHeight= '24px';
    document.getElementById("winner1txt2").style.position="absolute";
    document.getElementById("winner1txt2").style.top="6px";
    document.getElementById("winner1txt2").style.left="54px";
    document.getElementById("winner2txt2").style.color = "#FFFFFF";
    document.getElementById("winner2txt2").style.fontFamily =  'Inter';
    document.getElementById("winner2txt2").style.fontStyle= 'normal';
    document.getElementById("winner2txt2").style.fontWeight= '500';
    document.getElementById("winner2txt2").style.fontSize= '20px';
    document.getElementById("winner2txt2").style.lineHeight= '24px';
    document.getElementById("winner2txt2").style.position="absolute";
    document.getElementById("winner2txt2").style.top="6px";
    document.getElementById("winner2txt2").style.left="54px";
    document.getElementById("winner3txt2").style.color = "#FFFFFF";
    document.getElementById("winner3txt2").style.fontFamily =  'Inter';
    document.getElementById("winner3txt2").style.fontStyle= 'normal';
    document.getElementById("winner3txt2").style.fontWeight= '500';
    document.getElementById("winner3txt2").style.fontSize= '20px';
    document.getElementById("winner3txt2").style.lineHeight= '24px';
    document.getElementById("winner3txt2").style.position="absolute";
    document.getElementById("winner3txt2").style.top="6px";
    document.getElementById("winner3txt2").style.left="54px";
    document.getElementById("winner4txt2").style.color = "#FFFFFF";
    document.getElementById("winner4txt2").style.fontFamily =  'Inter';
    document.getElementById("winner4txt2").style.fontStyle= 'normal';
    document.getElementById("winner4txt2").style.fontWeight= '500';
    document.getElementById("winner4txt2").style.fontSize= '20px';
    document.getElementById("winner4txt2").style.lineHeight= '24px';
    document.getElementById("winner4txt2").style.position="absolute";
    document.getElementById("winner4txt2").style.top="6px";
    document.getElementById("winner4txt2").style.left="54px";
    document.getElementById("winner5txt2").style.color = "#FFFFFF";
    document.getElementById("winner5txt2").style.fontFamily =  'Inter';
    document.getElementById("winner5txt2").style.fontStyle= 'normal';
    document.getElementById("winner5txt2").style.fontWeight= '500';
    document.getElementById("winner5txt2").style.fontSize= '20px';
    document.getElementById("winner5txt2").style.lineHeight= '24px';
    document.getElementById("winner5txt2").style.position="absolute";
    document.getElementById("winner5txt2").style.top="6px";
    document.getElementById("winner5txt2").style.left="54px";
    document.getElementById("winner1txt").style.color = "#FFFFFF";
    document.getElementById("winner1txt").style.fontFamily =  'Inter';
    document.getElementById("winner1txt").style.fontStyle= 'normal';
    document.getElementById("winner1txt").style.fontWeight= '400';
    document.getElementById("winner1txt").style.fontSize= '16px';
    document.getElementById("winner1txt").style.lineHeight= '19px';
    document.getElementById("winner1txt").style.position="absolute";
    document.getElementById("winner1txt").style.top="8px";
    document.getElementById("winner1txt").style.left="264px";
    document.getElementById("winner2txt").style.color = "#FFFFFF";
    document.getElementById("winner2txt").style.fontFamily =  'Inter';
    document.getElementById("winner2txt").style.fontStyle= 'normal';
    document.getElementById("winner2txt").style.fontWeight= '400';
    document.getElementById("winner2txt").style.fontSize= '16px';
    document.getElementById("winner2txt").style.lineHeight= '19px';
    document.getElementById("winner2txt").style.position="absolute";
    document.getElementById("winner2txt").style.top="8px";
    document.getElementById("winner2txt").style.left="264px";
    document.getElementById("winner3txt").style.color = "#FFFFFF";
    document.getElementById("winner3txt").style.fontFamily =  'Inter';
    document.getElementById("winner3txt").style.fontStyle= 'normal';
    document.getElementById("winner3txt").style.fontWeight= '400';
    document.getElementById("winner3txt").style.fontSize= '16px';
    document.getElementById("winner3txt").style.lineHeight= '19px';
    document.getElementById("winner3txt").style.position="absolute";
    document.getElementById("winner3txt").style.top="8px";
    document.getElementById("winner3txt").style.left="264px";
    document.getElementById("winner4txt").style.color = "#FFFFFF";
    document.getElementById("winner4txt").style.fontFamily =  'Inter';
    document.getElementById("winner4txt").style.fontStyle= 'normal';
    document.getElementById("winner4txt").style.fontWeight= '400';
    document.getElementById("winner4txt").style.fontSize= '16px';
    document.getElementById("winner4txt").style.lineHeight= '19px';
    document.getElementById("winner4txt").style.position="absolute";
    document.getElementById("winner4txt").style.top="8px";
    document.getElementById("winner4txt").style.left="264px";
    document.getElementById("winner5txt").style.color = "#FFFFFF";
    document.getElementById("winner5txt").style.fontFamily =  'Inter';
    document.getElementById("winner5txt").style.fontStyle= 'normal';
    document.getElementById("winner5txt").style.fontWeight= '400';
    document.getElementById("winner5txt").style.fontSize= '16px';
    document.getElementById("winner5txt").style.lineHeight= '19px';
    document.getElementById("winner5txt").style.position="absolute";
    document.getElementById("winner5txt").style.top="8px";
    document.getElementById("winner5txt").style.left="264px";

});
}