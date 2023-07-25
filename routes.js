import { Router } from 'express'
import helloWorldController from './controllers/helloWorldController.js';
import {getOneSongController, getAllSongsController, addSongToSongRepositoriesController, playSongController} from './controllers/songController.js'
import {addPlaylistController, getOnePlaylist, getAllPlaylistController,
        deletePlaylistController, putPlaylistController, getAllSongsInPlaylistController, addSongToPlaylistController} from './controllers/playlistController.js';

const router  = Router();

router.get('/', helloWorldController);

router.get('/song', getAllSongsController)
router.get('/song/:songId', getOneSongController)
router.get('/song/:songId/play', playSongController)
router.post('/song', addSongToSongRepositoriesController)

router.get('/playlist/:playlistId', getOnePlaylist);
router.get('/playlist', getAllPlaylistController);
router.post('/playlist', addPlaylistController);
router.delete('/playlist/:playlistId', deletePlaylistController);
router.put('/playlist/:playlistId', putPlaylistController);

router.get('/playlist/:playlistId/songs', getAllSongsInPlaylistController)
router.post('/playlist/:playlistId/songs', addSongToPlaylistController)

export default router;