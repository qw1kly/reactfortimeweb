import axios from 'axios';
let idi =  10;
export function MakeProf() {
axios({
    method: "POST",
    url: 'https://qw1kly-fastapifortimeweb-d608.twc1.net/profile',
    data: { friends : idi }
}).then((response) => {
    let data = response['data'];
    let coount = 0;
    let friends = 0;
    let all_points = 0;
    for (let i = 0; i < (data.length/4); i++) {
        let name = data[coount];
        let idishnik = data[coount+1];
        let points = data[coount+2];
        var elem = document.createElement("div");
        var mes = document.createElement("a");
        var image = document.createElement("img");
        var lemda = document.createElement('div');
        var line = document.createElement('div');
        var pointer = document.createElement('a');
        var roja = document.createElement('div');

        line.style.position='relative';
        line.style.width= '320px';
        line.style.height= '0px';
        line.style.border= '0.8px solid #2B2B2B';
        line.style.top = '45px';
        lemda.style.position = 'relative';
        lemda.style.width = '45px';
        lemda.style.height = '5px';
        lemda.style.left='11px';
        lemda.style.top='-10px';
        mes.style.position="relative";
        mes.style.width= "70px";
        mes.style.height="24px";
        mes.innerHTML= name;
        mes.style.top = '7.5px';
        mes.style.left = '20px';

        mes.style.fontFamily= 'Inter';
        mes.style.fontStyle="normal";
        mes.style.fontWeight="500";
        mes.style.fontSize="20px";
        mes.style.lineHeight= "24px";

        mes.style.color="#FFFFFF";

        image.style.position='relative';
        image.style.width = '30px';
        image.style.height = '30px';
        image.style.left = '-10px';
        image.style.top = '0px';
        image.style.borderRadius = '100px';
        elem.style.width = '320px';
        elem.style.height = '45px';
        elem.style.position = 'relative';
        elem.style.top = '30px';
        pointer.style.position = 'relative';
        pointer.style.width= "70px";
        pointer.style.height="5px";
        pointer.style.left='290px';
        pointer.style.top = '-10px';

        pointer.style.fontFamily='Inter';
        pointer.style.fontStyle= "normal";
        pointer.style.fontWeight="500";
        pointer.style.fontSize= "20px";
        pointer.style.lineHeight= "24px";
        pointer.style.textAlign="center";
        pointer.style.color= "#002AFF";
        pointer.innerHTML = parseInt(points);
        roja.style.width = '10px';
        roja.style.height='0px';
        roja.appendChild(pointer);
        elem.appendChild(line);

        elem.appendChild(mes);
        document.getElementById("invitedfriends").appendChild(elem);
        document.getElementById("invitedfriends").appendChild(roja);

        coount = coount + 4;
        friends = friends + 1;
        all_points = all_points + parseInt(points);
    }
    document.getElementById("countfriends").innerHTML = friends+' Friends';
    document.getElementById("countpoints").innerHTML = all_points+' Points';
});
axios({
    method: "POST",
    url: 'https://qw1kly-fastapifortimeweb-d608.twc1.net/profile',
    data: { profilename : idi }
}).then((response) => {document.getElementById("profilename").innerHTML = response['data']['1'];
});
}

export function Sendriddle(event) {
    event.preventDefault();
    let val = document.getElementById("riddlemes").value;
    document.getElementById("riddlemes").value="";
    document.getElementById("riddlemes").blur();
    axios({
        method: "POST",
        url: 'https://qw1kly-fastapifortimeweb-d608.twc1.net/riddle',
        data: { telegram : idi, riddle : val }
    }).then((response) => {
        document.getElementById("pushnotif").style.display = "none";
        if (response['data']['1'] == 0) {
            document.getElementById("sendtele").style.display = "none";
            document.getElementById("pushnotif").style.display = "block";
            document.getElementById("pushnotif").style.zIndex = "1";
        }
        if (response['data']['1'] == 1) {
            document.getElementById("sendtele").style.display = "none";
            document.getElementById("pushnotif1").style.display = "block";
            document.getElementById("pushnotif1").style.zIndex = "1";
        }
        if (response['data']['1'] == 2) {
            document.getElementById("sendtele").style.display = "none";
            document.getElementById("pushnotif").style.display = "block";
            document.getElementById("pushnotif").style.zIndex = "1";
        }
        if (response['data']['1'] == 3) {
            document.getElementById("sendtele").style.display = "none";
            document.getElementById("pushnotif").style.display = "block";
            document.getElementById("pushnotif").style.zIndex = "1";

        }
    });
};
