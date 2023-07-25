import Playlist from "../model/playlist.js"
import {playlists, songs} from "../data.js"

export const addPlaylistController = (req, res) => {
    let playlist = new Playlist(req.body.title);
    playlists.push(playlist);
    res.status(200).json(playlist);
}

export const getOnePlaylist = (req, res) => {
    let index = playlists.findIndex(prop => prop.id === req.params.playlistId);
    res.status(200).json(playlists[index]);
}

export const getAllPlaylistController = (req, res) => {
    res.status(200).json(playlists);
}

export const deletePlaylistController = (req, res) => {
    let index = playlists.findIndex(prop => prop.id === req.params.playlistId);
    let deleted_object = playlists[index];
    playlists.splice(index,1);
    res.status(200).json({status: "success", data: deleted_object});
}

export const putPlaylistController = (req, res) => {
    let index = playlists.findIndex(prop => prop.id === req.params.playlistId);
    if(index === undefined){
        res.json({status:`Failed, no playlist found with ID: ${req.params.playlistId}`})
    }
    playlists[index].title = req.body.newTitle
    res.status(200).json({status: "success", data: playlists[index]})
}

export const getAllSongsInPlaylistController = (req, res) => {
    let playlistIndex = playlists.findIndex(prop => prop.id === req.params.playlistId);
    if(playlistIndex === undefined){
        res.json({status:`Failed, no playlist found with ID: ${req.params.playlistId}`})
    }
    let selectedPlaylist = playlists[playlistIndex]
    if(req.query.sort === "byplaycount"){
        let songsArraySorted = selectedPlaylist.songs.sort((a, b) => b.playCount-a.playCount);
        res.status(200).json({status: "success", data: songsArraySorted})
    } else {
        res.status(200).json({status: "success", data: selectedPlaylist.songs})
    }
}

export const addSongToPlaylistController = (req, res) => {
    let playlistIndex = playlists.findIndex(prop => prop.id === req.params.playlistId);
    if(playlistIndex === undefined){
        res.json({status:`Failed, no playlist found with ID: ${req.params.playlistId}`})
    }
    let songIndex = songs.findIndex(prop => prop.id === req.body.songId);
    if(songIndex === undefined){
        res.json({status:`Failed, no song found with ID: ${req.body.songId}`})
    }

    playlists[playlistIndex].songs.push(songs[songIndex])
    res.status(200).json({status: "success"})
}