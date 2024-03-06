// ! Animate red box with anime.js pause and play
// const red_box_animation = anime({
//     targets: 'div.box',
//     translateY: [
//         { value: 200, duration: 500 }, // Time to go down
//         { value: 0, duration: 1000 } // Time to go up
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     loop: true
// })

// const red_box = document.querySelector('.box.red');
// let is_paused = false;
// red_box.addEventListener('click', () => {
//     is_paused 
//         ? red_box_animation.play()
//         : red_box_animation.pause();

//     is_paused = !is_paused;
// });

// ! Animate all boxes with anime.js with delay function

const animation = anime({
    targets: 'div.box',
    translateY: [
        { value: 200, duration: 500 }, // Time to go down
        { value: 0, duration: 1000 } // Time to go up
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l) {
        return i * 500; // This will delay each box by 1 second
    },
    loop: true
})

const play_button = document.querySelector('.play');
const pause_button = document.querySelector('.pause');
const restart_button = document.querySelector('.restart');

play_button.addEventListener('click', () => {
    animation.play();
});

pause_button.addEventListener('click', () => {
    animation.pause();
});

restart_button.addEventListener('click', () => {
    animation.restart();
});