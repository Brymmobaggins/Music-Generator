
var music = [
    "Jay Z ft Alicia keys - Empire state of Mind.",
    "Nasir jones - The world is ours",
    "Wizkid ft Burna Boy - Ginger",
    "Craig David - 7 days.",
    "Wizkid ft Drake and Skepta - Ojuelegba remix.",
    "Micheal jackson - Billie jean.",
    "John legend - ordinary people.",
    "Kanye west - No church in the wild",
    "Sade Adu - sweetest taboo.",
    "Kanye west - No church in the wild",
    "Naira Marley - Jo Soapy",
    "Naira Marley - Marlians Anthem",
    "Burna boy - Ye",
    "Burna boy - odoqwu",
    "Omahlay - My brother",
    "Zlatan Ibile- Money no dey lagos",
    "Davido - fem",
    "Davido - jowo",
    "Olamide ft badboy tems - Loading",
    "Burna boy - Ye",
    "Qdot - ah",
    "Damiam Marley - Young World",
    "Damiam Marley - Medication",
    "Damiam Marley - Autumn leaves",
    "Tems - like me",
    "Rema - lady",
    "Zinoleesky - Kilofeshe",

];

function getMusic() {
    var randomNumber = Math.floor(Math.random() * music.length);
    document.getElementById('newMusicSection').innerHTML = music[randomNumber];
}
