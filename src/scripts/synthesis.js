export function chat_voice(text) {
    const msg = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();

    
    msg.voice = voices.find((voice) => voice.lang == "pt-BR");
    msg.volume = .8;
    msg.rate = 1.3;
    msg.pitch = .8;
    msg.text = text
    msg.lang = "pt-BR"
    window.speechSynthesis.speak(msg);
}
