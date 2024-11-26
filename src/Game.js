import axios from 'axios';
let idi = 10;
let items = ["basketlost1.gif", "basketlost2.gif", "basketlost3.gif"];

export function clicked() {
    if (document.getElementById("clicki").innerHTML==1) {
          alert('Недостаточно средств')
      } else {
        axios({
            method: "POST",
            url: 'https://qw1kly-fastapifortimeweb-d608.twc1.net/game',
            data: { telegramid : idi, password: localStorage.getItem("pass") }
        }).then((response) => {

          if (response['data']['1']==1) {
              document.getElementById("clicki").innerHTML=Number(document.getElementById("clicki").innerHTML)+200;
              var image = document.getElementById("gifanim");
              image.style.top = "200px";
              image.src = "basketwin.gif";
          } else {
              document.getElementById("win").innerHTML="LOST";
          }
          var image = document.getElementById("gifanim");

          document.getElementById("hideneoniphone").style.display = "block";
          document.getElementById("insteadofall").style.display = "none";
          image.src = items[Math.floor(Math.random()*items.length)];
        
          document.getElementById("inv").style.display="none";
          document.getElementById("icongame1").style.display="none";
          document.getElementById("iconprofile1").style.display="none";
          document.getElementById("iconrating1").style.display="none";
          document.getElementById("iconwallet1").style.display="none";
          document.getElementById("switch2k").style.display="none";
          document.getElementById("switch1k").style.display="none";
          document.getElementById("play_But").style.display="none";
          document.getElementById("sw2").style.display="none";


          async function clickedback() {
          if  (response['data']['1']==1) {
              await new Promise(resolve => setTimeout(resolve, 12000));
              } else {
              await new Promise(resolve => setTimeout(resolve, 8000));

              }
          var image = document.getElementById("gifanim");

          image.src = "basket.png";

          document.getElementById("insteadofall").style.display = "block";
          document.getElementById("hideneoniphone").style.display = "none";
          document.getElementById("inv").style.display="block";
          document.getElementById("icongame1").style.display="block";
          document.getElementById("iconprofile1").style.display="block";
          document.getElementById("iconrating1").style.display="block";
          document.getElementById("iconwallet1").style.display="block";
          document.getElementById("switch2k").style.display="block";
          document.getElementById("switch1k").style.display="block";
          document.getElementById("play_But").style.display="block";
          document.getElementById("sw2").style.display="block";
          }
          clickedback()
      });
      document.getElementById("clicki").innerHTML = document.getElementById("clicki").innerHTML - 1;

      }
  }
