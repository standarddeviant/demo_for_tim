var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1'
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000],
  exclSolo: true,
  isAutomaticScroll: false
});

playlist.load([
  {
    "src": "audio/stereo-test.mp3",
    "name": "Stereo-Test",
    "gain": 0.75,
    "muted": false,
    "soloed": true
  },
  {
    "src": "audio/LRMonoPhase4.mp3",
    "name": "L / R / Mono / Phase 4",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
]).then(function() {
  //can do stuff with the playlist.
});
