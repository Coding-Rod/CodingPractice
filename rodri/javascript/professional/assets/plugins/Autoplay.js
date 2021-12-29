function AutoPlay() {}

AutoPlay.prototype.run = function(player){
    player.mute();
    player.media.play();
};

export default AutoPlay;