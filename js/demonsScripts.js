let name = "";
let type = "";
let img = "";

const processJSON = async () => {
    fetch('https://hdjburgess.github.io/dlib.json').then(response => {
        return response.json();
    }).then(demonLib => {
        textChanger(demonLib);
    }); 
};

const randomNum = (demonLib) => {
            var random = Math.floor(Math.random() * demonLib.Demons.length);
            return random
        };

const demonAssigner =async (demonLib) => {
            let x = randomNum(demonLib)
             name = demonLib.Demons[x].name;
             type = demonLib.Demons[x].type;
              img = demonLib.Demons[x].img
            };

const textChanger = async (demonLib) => {
        await demonAssigner(demonLib);
        document.getElementById("demo").innerHTML = "You have summoned.";
        document.getElementById("demo2").innerHTML = name;
        document.getElementById("Image1").src = img;
        document.getElementById("Button1").style.display = "none";
        document.getElementById("dmsg").innerHTML = `There are ${demonLib.Demons.length} daemons to collect, summon them all!`;
        document.getElementById("Button2").style.visibility = "visible";
        document.body.classList.add('crtx');

        };  
