let btn = document.getElementById('btn');

const doSpeak = () => {
    let inp = document.getElementById('text');
    if (inp.value.length <= 0) {
        let speech = new SpeechSynthesisUtterance('Put Something on the text box');
        window.speechSynthesis.speak(speech)
    }
    else {
        let speech = new SpeechSynthesisUtterance(inp.value);
        window.speechSynthesis.speak(speech);
        inp.value = ''
    }
}

btn.addEventListener('click', doSpeak);