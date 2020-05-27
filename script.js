let key;
let key2;
let audio;
let validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];

function getKeyCode(key) {
    key2 = typeof(key) == 'string' && key.indexOf('Key', 1) ? key.substr(3) : null;

    return key2 && key2.length === 1 && validKeys.includes(key2) ? key2 : null;
}

document.addEventListener('keydown', function(event) {
    key = getKeyCode(event.code)
     if (key) {
        audio = new Audio(`media/${key}.mp3`);
        console.log(`The '${key}' key is pressed.`);
        audio.play().then();
    }
    else {
         console.log('An invalid key was pressed.');
     }
});