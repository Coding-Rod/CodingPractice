import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        
        entry.intersectionRatio >= this.threshold
            ?this.player.media.play()
            :this.player.media.pause();
    }

    private handleVisibilityChange(){
        document.visibilityState === 'visible'
            ? this.player.media.play()
            : this.player.media.pause();
    }
}

export default AutoPause;