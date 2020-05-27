let key;
let audio;
let validKeys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];

function getKeyCode(key) {
    if (typeof(key) == "string" && key.indexOf("Key", 1)) {
        key = key.substr(3)
    }

    return key && key.length === 1 && validKeys.includes(key) ? key : null
}

document.addEventListener("keydown", function(event) {
    key = getKeyCode(event.code)
     if (key) {
        audio = new Audio(`media/${key}.mp3`)
        console.log(`The '${key}' key is pressed.`)
        audio.play().then()
    }
    else {
         console.log("An invalid key was pressed.")
     }
})