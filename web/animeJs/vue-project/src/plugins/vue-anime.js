import anime from 'animejs';

export default {
  install: (app) => {
    app.config.globalProperties.$anime = anime;
  },
};