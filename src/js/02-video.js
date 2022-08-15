
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const key = 'videoplayer-current-time';

player.on('timeupdate', throttle(data => {
    localStorage.setItem(key, data.seconds);
}, 1000));



player.setCurrentTime(localStorage.getItem(key)).then(function () { }).catch(function () { })







