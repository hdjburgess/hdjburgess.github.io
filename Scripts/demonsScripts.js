        var demons = ["Apollyon","Amon","Bael","Belial","Ifrit"];
        // just add demons to the list above to expand the summoning library
        const randomDemon = () => {
            var random = Math.floor(Math.random() * demons.length);
            return demons[random];
        }
        const textChanger = () => {
            document.getElementById("demo").innerHTML = "You have summoned.";
            document.getElementById("demo2").innerHTML = randomDemon();
            document.getElementById("Image1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Peter_Paul_Rubens_063.jpg/256px-Peter_Paul_Rubens_063.jpg";
            document.getElementById("Button1").style.display = "none";
            document.getElementById("dmsg").innerHTML = `There are ${demons.length} daemons to collect, summon them all!`;
        }