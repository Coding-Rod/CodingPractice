class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    initPlayer() {
        this.container = document.createElement('div');

        this.container.style.position = 'relative';

        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
    private initPlugins() {
        // const player = {
        //     media: this.media,
        //     play: () => this.media.play(),
        //     pause: () => this.media.pause(),
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    togglePlay() {
        (this.media.paused)
            ? this.media.play()
            : this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        (this.media.muted)
            ? this.unmute()
            : this.mute();
    }
}







export default MediaPlayer;

