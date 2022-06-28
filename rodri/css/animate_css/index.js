var title = document.querySelector('.title');
title.addEventListener("mouseover", () => {title.classList.add('animate__animated', 'animate__pulse');}, false);
title.addEventListener("mouseout", () => {title.classList.remove('animate__animated', 'animate__pulse');}, false);

var description = document.querySelector('.description');
description.addEventListener("mouseover", () => {description.classList.add('animate__animated', 'animate__tada');}, false);
description.addEventListener("mouseout", () => {description.classList.remove('animate__animated', 'animate__tada');}, false);