
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const key = 'videoplayer-current-time';
// let counter = 0;


player.on('timeupdate', throttle(data => {
    localStorage.setItem(key, data.seconds);
    // console.log(counter++);
}, 1000));



player.setCurrentTime(localStorage.getItem(key))







