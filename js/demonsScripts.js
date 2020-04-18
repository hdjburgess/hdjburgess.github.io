const demonLib = require("../dlib.json");   
let name = "";
let type = "";
let img = "";

const randomNum = () => {
            var random = Math.floor(Math.random() * demonLib.Demons.length);
            return random
        };

const demonAssigner = () =>{
            let x = randomNum()
             name = demonLib.Demons[x].name;
             type = demonLib.Demons[x].type;
              img = demonLib.Demons[x].img
            };

const textChanger = () => {
    demonAssigner();
        document.getElementById("demo").innerHTML = "You have summoned.";
        document.getElementById("demo2").innerHTML = name;
        document.getElementById("Image1").src = img;
        document.getElementById("Button1").style.display = "none";
        document.getElementById("dmsg").innerHTML = `There are ${demonLib.Demons.length} daemons to collect, summon them all!`;
        };  





        