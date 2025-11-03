var background_audio = new Audio('../../../audio/music/Grasswalk.mp3');
var freedom_motif_played = false;
var trobbio_motif_played = false;
var currentTime = 0;

var karmelita_no_vocal = false;
var karmelita_vocal = false;

var zote_music_babyy = false;

function background_music_play_normal() {
    background_audio.loop = true;
    background_audio.play();
    background_audio.volume = 0.3*(music_volume/100);
}

function background_music_play_freedom() {
    trobbio_motif_played = false;
    karmelita_no_vocal = false;
    karmelita_vocal = false;

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

    background_audio.volume = 0.08*(music_volume/100);

    setTimeout(() => {
        background_audio.volume = 0.2*(music_volume/100);
        audio.pause();
    }, 3000);
}

function background_music_trobbio() {
    freedom_motif_played = false;
    karmelita_no_vocal = false;
    karmelita_vocal = false;
    currentTime = 0;
    background_audio.pause();
    background_audio.src = '../../../audio/music/trobbio music.mp3';
    background_audio.loop = true;
    background_audio.play();

    if (zote_music_babyy) {
        background_music_zote();
    }
}

function background_music_karmelita_vocal() {
    if ( karmelita_vocal ) {return;}

    freedom_motif_played = false;
    trobbio_motif_played = false;

    let time_now;
    if ( karmelita_no_vocal) { time_now = background_audio.currentTime; }
    else { time_now = 0; }

    currentTime = 0;

    background_audio.pause();
    background_audio.src = '../../../audio/music/Skarrsinger Karmelita.mp3';
    background_audio.loop = true;
    background_audio.currentTime = time_now;
    background_audio.play();

    karmelita_no_vocal = false;
    karmelita_vocal = true;

    if (zote_music_babyy) {
        background_music_zote();
    }
}

function background_music_karmelita_no_vocal() {
    if (karmelita_vocal || karmelita_no_vocal) { return; }

    freedom_motif_played = false;
    trobbio_motif_played = false;

    currentTime = 0;

    background_audio.pause();
    background_audio.src = '../../../audio/music/Skarrsinger Karmelita no vocal.mp3';
    background_audio.loop = true;
    background_audio.play();

    karmelita_no_vocal = true;
    karmelita_vocal = false;

    if (zote_music_babyy) {
        background_music_zote();
    }
}


function background_music_zote(location = false) {
    zote_music_babyy = true;

    let time_now = background_audio.currentTime;

    currentTime = 0;
    background_audio.pause();

    if (location === "upgrade") { background_audio.src = '../../../audio/music/Zote zen garden.mp3'; }
    else if (karmelita_vocal || karmelita_no_vocal) { background_audio.src = '../../../audio/music/Zote karmelita.mp3'; }
    else if (trobbio_motif_played) { background_audio.src = '../../../audio/music/Zote trobbio.mp3'; }
    else { background_audio.src = '../../../audio/music/Zote grasswalk.mp3'; }

    background_audio.currentTime = time_now;
    background_audio.loop = true;
    background_audio.play();

    freedom_motif_played = false;
    trobbio_motif_played = false;
    karmelita_no_vocal = false;
    karmelita_vocal = false;
}

function start_upgrade_music() {
    trobbio_motif_played = false;
    karmelita_no_vocal = false;
    karmelita_vocal = false;
    zote_music_babyy = false;

    if (currentTime === 0) { currentTime = background_audio.currentTime; }
    background_audio.pause();
    if (freedom_motif_played) {
        background_audio.src = '../../../audio/music/Zen Garden freedom motif.mp3';
    }else {
        background_audio.src = '../../../audio/music/Zen Garden.mp3';
    }
    background_audio.loop = true;
    background_audio.play();
    background_audio.volume = 0.3*(music_volume/100);
}


function stop_upgrade_music() {
    background_audio.pause();
    zote_music_babyy = false;

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

    background_audio.volume = 0.08*(music_volume/100);

    setTimeout(() => {
        background_audio.volume = 0.25*(music_volume/100);
        audio.pause();
    }, 2000);
}

function weird_sfx() {
    const audio = new Audio('../../../audio/sfx/weird-route-jingle.mp3');
    audio.volume = 1*(music_volume/100);
    audio.play();
}

function shock_sfx() {
    const audio = new Audio('../../../audio/sfx/electricity-charge-sound-effect.mp3');
    audio.volume = 1*(music_volume/100);
    audio.play();
}

function runs_save_sfx() {
    const audio = new Audio('../../../audio/sfx/poshanka.mp3');
    audio.volume = 1*(music_volume/100);
    audio.play();
}

function swoosh_sfx(speed) {
    const audio = new Audio('../../../audio/sfx/swoosh-sound-effects.mp3');
    audio.playbackRate = Math.min(3,speed);
    audio.volume = 0.1*(music_volume/100);
    audio.play();
}

function grub_sfx() {
    const audio = new Audio('../../../audio/sfx/grub.mp3');
    audio.volume = 1*(music_volume/100);
    audio.play();
}

function flea_sfx() {
    const audio = new Audio('../../../audio/sfx/flea.mp3');
    audio.volume = 1*(music_volume/100);
    audio.play();
}
