// Inspirado em: https://css-tricks.com/lets-create-a-custom-audio-player/

class AudioPlayer extends HTMLElement {
    constructor() {
        super();
        const template = document.querySelector('template');
        const templateContent = template.content;
        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
        everything(this);
    }
}

const everything = function(element) {
    const shadow = element.shadowRoot;

    const player = shadow.getElementById('audio-player');
    const audio = shadow.querySelector('audio');
    const playButton = shadow.getElementById('play-icon');
    const duration = shadow.getElementById('duration');
    const seekSlider = shadow.getElementById('seek-slider');
    const currentTime = shadow.getElementById('current-time');
    const muteButton = shadow.getElementById('mute-button');
    const volumeSlider = shadow.getElementById('volume-slider');

    let playing = false;
    let muted = false;
    let rAF = null;

    audio.src = element.getAttribute('data-src');

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const initPlayer = () => {
        displayDuration();
        setSliderMax();
    }

    const displayDuration = () => {
        duration.textContent =  calculateTime(audio.duration);
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(audio.duration);
    }

    const whilePlaying = () => {
        seekSlider.value = Math.floor(audio.currentTime);
        currentTime.textContent = calculateTime(Math.floor(audio.currentTime));
        rAF = requestAnimationFrame(whilePlaying);
    }

    const playAudio = () => {
        audio.play();
        requestAnimationFrame(whilePlaying);
        player.classList.add("playing");
        playing = true;
    }

    const pauseAudio = () => {
        audio.pause();
        cancelAnimationFrame(rAF);
        player.classList.remove("playing");
        playing = false;
    }

    const muteAudio = () => {
        audio.muted = true;
        muted = true;
        player.classList.add('muted');
        volumeSlider.value = 0;
    }

    const unmuteAudio = () => {
        audio.muted = false;
        muted = false;
        player.classList.remove('muted');
        volumeSlider.value = audio.volume * 100;
    }

    

    seekSlider.addEventListener('input', () => {
        currentTime.textContent = calculateTime(seekSlider.value);
        if (!audio.paused) {
            cancelAnimationFrame(rAF)
        }
    });

    seekSlider.addEventListener('change', () => {
        audio.currentTime = seekSlider.value;
        if (!audio.paused) {
            requestAnimationFrame(whilePlaying)
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        audio.volume = value / 100;
        if (muted && value != 0)
            unmuteAudio();
    });

    muteButton.addEventListener('click', () => {
        if (muted)
            unmuteAudio();
        else
            muteAudio();
    });

    playButton.addEventListener('click', () => {
        if (playing)
            pauseAudio();
        else
            playAudio();
    });

    if (audio.readyState > 0) {
        initPlayer();
    }
    else {
        audio.addEventListener('loadedmetadata', () => {
            initPlayer();
        });
    }
}

customElements.define('audio-player', AudioPlayer);