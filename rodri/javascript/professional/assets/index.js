import MediaPlayer from  "./MediaPlayer.js"
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector('video');
const button = document.querySelector('#playButton');
const button1 = document.querySelector('#muteButton');

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

button.onclick = () => player.togglePlay();
button1.onclick = () => player.toggleMute();