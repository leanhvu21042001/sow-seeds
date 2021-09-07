// Sound effects:
const sound_pop1 = new Audio('./public/media/sounds/pop_1.mp3');

const btnMenu = document.querySelector('.menu-btn');
const btnMuteUnmute = document.querySelector('#btn-MuteUnmute_sound');
const sliderForSoundVolume = document.querySelector('#soundVolume-input');

btnMenu.addEventListener('click', () => {
    sound_pop1.play();
});

btnMuteUnmute.addEventListener('click', () => {
    if(sound_pop1.muted === false) {
        sound_pop1.muted = true;
        btnMuteUnmute.innerHTML = 'Unmute';
    }
    else {
        sound_pop1.muted = false;
        btnMuteUnmute.innerHTML = 'Mute';
    }
});

sliderForSoundVolume.addEventListener('change', () => {
    // The volume provided must be inside the range [0, 1]:
    sound_pop1.volume = (sliderForSoundVolume.value / 100);
});



// ____________________________________________________________________________________________________
// Background music settings:
const bgm_1 = new Audio('./public/media/bgm/Vexento - Spark.mp3');

const btnPlayPause_BGM = document.querySelector('#btn-PlayPause_bgMusic');
const btnStop_BGM = document.querySelector('#btn-Stop_bgMusic');
const sliderForBGMVolume = document.querySelector('#bgMusicVolume-input');

let intPlayOrPause = 0;

bgm_1.volume = 0.25;
bgm_1.loop = true;
sliderForBGMVolume.value = 25;

btnPlayPause_BGM.addEventListener('click', () => {
    if(intPlayOrPause === 0) {
        intPlayOrPause = 1;
        bgm_1.play();
        btnPlayPause_BGM.innerHTML = 'Pause';
    }
    else {
        intPlayOrPause = 0;
        bgm_1.pause();
        btnPlayPause_BGM.innerHTML = 'Play';
    }
});

btnStop_BGM.addEventListener('click', () => {
    // Set pause:
    intPlayOrPause = 0;
    bgm_1.pause();
    btnPlayPause_BGM.innerHTML = 'Play';
    // Set time to start:
    bgm_1.currentTime = 0;
});

sliderForBGMVolume.addEventListener('change', () => {
    // The volume provided must be inside the range [0, 1]:
    bgm_1.volume = (sliderForBGMVolume.value / 100);
});