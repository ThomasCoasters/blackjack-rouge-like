var background_audio = new Audio('../../../audio/music/Grasswalk.mp3');
var freedom_motif_played = false;
var trobbio_motif_played = false;
var currentTime = 0;

function background_music_play_normal() {
    background_audio.loop = true;
    background_audio.play();
    background_audio.volume = 0.3;
}

function background_music_play_freedom() {
    trobbio_motif_played = false;
    currentTime = background_audio.currentTime;
    background_audio.pause();
    background_audio.src = '../../../audio/music/Grasswalk freedom motif.mp3';
    background_audio.loop = true;
    background_audio.currentTime = currentTime;
    background_audio.play();
}

function play_freedom_motif() {
    const audio = new Audio('../../../audio/sfx/freedom_motif.wav');
    audio.play();

    if (!freedom_motif_played) {
        background_music_play_freedom();
        freedom_motif_played = true;
    }

    background_audio.volume = 0.08;

    setTimeout(() => {
        background_audio.volume = 0.2;
        audio.pause();
    }, 3000);
}

function background_music_trobbio() {
    freedom_motif_played = false;
    currentTime = 0;
    background_audio.pause();
    background_audio.src = '../../../audio/music/trobbio music.mp3';
    background_audio.loop = true;
    background_audio.play();
}



function start_upgrade_music() {
    if (currentTime === 0) { currentTime = background_audio.currentTime; }
    background_audio.pause();
    if (freedom_motif_played) {
        background_audio.src = '../../../audio/music/Zen Garden freedom motif.mp3';
    }else {
        background_audio.src = '../../../audio/music/Zen Garden.mp3';
    }
    background_audio.loop = true;
    background_audio.play();
    background_audio.volume = 0.3;
}


function stop_upgrade_music() {
    background_audio.pause();
    if (freedom_motif_played) {
        background_audio.src = '../../../audio/music/Grasswalk freedom motif.mp3';
    }else {
        background_audio.src = '../../../audio/music/Grasswalk.mp3';
    }
    background_audio.loop = true;
    background_audio.currentTime = currentTime;
    background_audio.play();
}

function trobbio_sfx() {
    const audio = new Audio('../../../audio/sfx/trobbio.mp3');
    audio.play();

    if (!trobbio_motif_played) {
        background_music_trobbio();
        trobbio_motif_played = true;
    }

    background_audio.volume = 0.08;

    setTimeout(() => {
        background_audio.volume = 0.25;
        audio.pause();
    }, 2000);
}