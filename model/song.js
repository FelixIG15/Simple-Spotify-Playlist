import { randomUUID } from 'crypto';

class Song{
    constructor(title, artist, url){
        this.id = randomUUID();
        this.title = title;
        this.artist = artist;
        this.url = url;
        this.createdAt = new Date().toISOString();
        this.playCount = 0;
    }

    playSong(){
        this.playCount += 1
        return this.url
    }

}

export default Song;