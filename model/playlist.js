import { randomUUID } from 'crypto';

class Playlist{
    constructor(title){
        this.createdAt = new Date().toISOString();
        this.id = randomUUID()
        this.title = title;
        this.songs = [];
    }
    
    addSong(song){
        return this.songs.push(song);
    }

    getAllSongs(){
        return this.songs
    }

    getSongById(){
        return this.songs
    }
}

export default Playlist;