var background_audio = new Audio('../../../audio/music/Grasswalk.mp3');
var freedom_motif_played = false;

function background_music_play_normal() {
    background_audio.loop = true;
    background_audio.play();
    background_audio.volume = 0.3;
}

function background_music_play_freedom() {
    const currentTime = background_audio.currentTime;
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
