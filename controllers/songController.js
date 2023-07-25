import Song from "../model/song.js";
import {songs} from "../data.js"

export const getOneSongController = (req, res) => {
    let index = songs.findIndex(prop => prop.id === req.params.songId);
    res.status(200).json(songs[index]);
}

export const getAllSongsController = (req, res) => {
    res.status(200).json(songs)
}

export const addSongToSongRepositoriesController = (req, res) => {
    let newSong = new Song(req.body.title, req.body.artist, req.body.url);
    songs.push(newSong);
    res.status(200).json(newSong)
}

export const playSongController = (req, res) => {
    let index = songs.findIndex(prop => prop.id === req.params.songId);
    res.status(200).redirect(songs[index].playSong())
}