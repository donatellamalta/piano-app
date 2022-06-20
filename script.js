//SIMPLIFIED
// const keyElement = document.getElementById('do');


// function playSound(){
//    console.log('Ciao suono');
//    const audioElement = new Audio(); /*Create programmatically in JS an audio tag. Associate to it an audio file and reproduce it.  */
//    audioElement.src = 'sounds/01-do.mp3';
//    audioElement.play();
// }


// // Intercept user tab*
// keyElement.addEventListener('touchend', function(){
//     playSound();
// });


// DYNAMICAL AND PROGRAMMATICAL
// Capture n elements through a common css selector

const keyElements = document.querySelectorAll('.key');
console.log(keyElements);

let interactionEvent;
if('ontouchend' in document.documentElement){
    interactionEvent = 'ontouchend';
}else{
    interactionEvent = 'click';
}

const notes = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'

}


function playSound(key){ 
   const audioElement = new Audio(); /*Create programmatically in JS an audio tag. Associate to it an audio file and reproduce it.  */
   const filename = notes[key];
   audioElement.src = 'sounds/' + filename;
   console.log(audioElement.src);
   audioElement.play();
}

keyElements.forEach(function(keyElement){ //for each key execute a function (on the node of the DOM I'm considering) --> each iteration corresponds to the pressed note    
    keyElement.addEventListener(interactionEvent, function(){
        const key = keyElement.id;
        playSound(key);
    });
});
