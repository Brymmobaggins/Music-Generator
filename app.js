
var music = [
    "Jay Z ft Alicia keys - Empire state of Mind.",
    "Nasir jones - The world is ours",
    "Craig David - 7 days.",
    "Wizkid ft Drake and Skepta - Ojuelegba remix.",
    "Micheal jackson - Billie jean.",
    "John legend - ordinary people.",
    "Kanye west - No church in the wild",
    "Sade Adu - sweetest taboo.",
    "Kanye west - No church in the wild",
    "larry gaga - we got served.",
    "chris brown - Privacy"

];

function getMusic() {
    var randomNumber = Math.floor(Math.random() * music.length);
    document.getElementById('newMusicSection').innerHTML = music[randomNumber];
}
