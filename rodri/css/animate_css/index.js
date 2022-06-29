var title = document.querySelector('.title');
title.addEventListener("mouseover", () => {title.classList.add('animate__animated', 'animate__pulse');}, false);
title.addEventListener("mouseout", () => {title.classList.remove('animate__animated', 'animate__pulse');}, false);

var description = document.querySelector('.description');
description.addEventListener("click", () => {
    description.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        description.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);
}, false);