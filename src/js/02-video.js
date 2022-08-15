
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const key = 'videoplayer-current-time';

player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem(key, seconds);
}, 1000));


const dataFromlocalStorage = localStorage.getItem(key)

dataFromlocalStorage && player.setCurrentTime(asdssa)







