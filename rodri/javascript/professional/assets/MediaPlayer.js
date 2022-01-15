function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    const player = {
        media: this.media,
        play: ()=> this.media.play(),
        pause: ()=> this.media.pause(),
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value;
        }
    }

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

MediaPlayer.prototype.togglePlay = function(){
    (this.media.paused)
        ? this.media.play()
        : this.media.pause();
};

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
};

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function(){
    (this.media.muted)
        ? this.unmute()
        : this.mute();
}


export default MediaPlayer;

