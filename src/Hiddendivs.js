const idi = document.getElementById("invid").innerHTML;

export function Hidemain1() {
    document.getElementById("hidefor").style.display = 'none';
    document.getElementById("riddleicon").style.display = 'none';
    document.getElementById("bigicon").style.display = 'none';
    document.getElementById("friendsicon").style.display = 'none';
    document.getElementById("langicon").style.display = 'none';

    document.getElementById("friendsbig").style.display = 'none';
    document.getElementById("list1").style.display = "block";
}
export function Hidemain2() {
    document.getElementById("friendsbig").style.display = 'none';
    document.getElementById("hidefor").style.display = 'none';
    document.getElementById("riddleicon").style.display = 'none';
    document.getElementById("bigicon").style.display = 'none';
    document.getElementById("friendsicon").style.display = 'none';
    document.getElementById("langicon").style.display = 'none';
    document.getElementById("list2").style.display="block";
    document.getElementById("maingift").style.display ="block";
}
export function Hidemain3() {
    document.getElementById("friendsbig").style.display = 'block';
    document.getElementById("hidefor").style.display = 'none';
    document.getElementById("riddleicon").style.display = 'none';
    document.getElementById("bigicon").style.display = 'none';
    document.getElementById("friendsicon").style.display = 'none';
    document.getElementById("langicon").style.display = 'none';
    document.getElementById("list3").style.display="block";


}
export function Hidemain4() {
    document.getElementById("friendsbig").style.display = 'none';
    document.getElementById("hidefor").style.display = 'none';
    document.getElementById("riddleicon").style.display = 'none';
    document.getElementById("bigicon").style.display = 'none';
    document.getElementById("friendsicon").style.display = 'none';
    document.getElementById("langicon").style.display = 'none';
    document.getElementById("list4").style.display="block";
    document.getElementById("languagenigga").style.display="block";


}

export function Hideonlyrules() {
    document.getElementById("listbonus").style.display = "block";
    document.getElementById("listofrules").style.display = "none";
    document.getElementById("friendsbig").style.display = "block";
}

export function Showrules() {
    document.getElementById("listbonus").style.display = "none";
    document.getElementById("listofrules").style.display = "block";
    document.getElementById("friendsbig").style.display = "none";
}

export function Hideonlydetail() {
    document.getElementById("list3").style.display = "block";
    document.getElementById("friendsbig").style.display = 'block';
    document.getElementById("listbonus").style.display = "none";

}

export function Hideallnew() {
    document.getElementById("list1").style.display = "none";
    document.getElementById("list2").style.display = "none";
    document.getElementById("list3").style.display = "none";
    document.getElementById("list4").style.display = "none";
    document.getElementById("list5").style.display = "none";
    document.getElementById("maingift").style.display="none";

    document.getElementById("friendsbig").style.display = 'none';
    document.getElementById("hidefor").style.display = 'block';
    document.getElementById("riddleicon").style.display = 'block';
    document.getElementById("bigicon").style.display = 'block';
    document.getElementById("friendsicon").style.display = 'block';
    document.getElementById("langicon").style.display = 'block';
    document.getElementById("languagenigga").style.display="none";

}

export function Hidesvgs() {
    document.getElementById("sendtele").style.display = "block";
    document.getElementById("pushnotif1").style.display = "none";
    document.getElementById("pushnotif").style.display = "none";
}

export function Showdetailstext() {
    document.getElementById("list3").style.display = "none";
    document.getElementById("friendsbig").style.display = 'block';
    document.getElementById("listbonus").style.display = "block";
}

export function closeModal() {
    document.getElementById("modalinvite").classList.remove("show");
    document.getElementById("modalinvite").classList.add("hidee");
    document.getElementById("modalinvite").style.display='none';
    document.getElementById("icongame1").style.display='block';
    document.getElementById("iconprofile1").style.display='block';
    document.getElementById("iconwallet1").style.display='block';
    document.getElementById("iconrating1").style.display='block';
    document.getElementById("closediv").style.display = "block";

}

export function instantSend() {
    const shareData = {
        title: "Make a Wish",
        text: "Your referal url!",
        url: "https://t.me/casino_test_cashup_bot/start"+"="+idi,
    };
    navigator.share(shareData);
}
export function instantCopy() {
    navigator.clipboard.writeText("https://t.me/casino_test_cashup_bot/start"+"="+idi)
        .then(() => {
        // Получилось!
        })
        .catch(err => {
        console.log('Something went wrong', err);
        });
}

export function showModal() {
    document.getElementById("modalinvite").classList.remove("hidee");

    document.getElementById("modalinvite").classList.add("show");
    document.getElementById("modalinvite").style.display='block';
    document.getElementById("icongame1").style.display='none';
    document.getElementById("iconprofile1").style.display='none';
    document.getElementById("iconwallet1").style.display='none';
    document.getElementById("iconrating1").style.display='none';
    document.getElementById("closediv").style.display = "none";
}

export function Showall() {
    document.getElementById("toblue1").style.background = "#002AFF";
    document.getElementById("toblue2").style.background = "linear-gradient(180deg, #141414 0%, #0F0F0F 100%)";
    document.getElementById("maingift").style.display = "block";
    document.getElementById("mygifts").style.display = "none";
    document.getElementById("allgift").style.color = "#FFFFFF";
    document.getElementById("mygift").style.color = "#999999";

};

export function Showmy() {
    document.getElementById("toblue2").style.background = "#002AFF";
    document.getElementById("mygift").style.color = "#FFFFFF";
    document.getElementById("allgift").style.color = "#999999";

    document.getElementById("toblue1").style.background = "linear-gradient(180deg, #141414 0%, #0F0F0F 100%)";
    document.getElementById("maingift").style.display = "none";
    document.getElementById("mygifts").style.display = "block";
    document.getElementById("maingift").style.display = "none";
};
