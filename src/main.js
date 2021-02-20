// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollReveal from 'gridsome-scroll-reveal';
import VueScrollTo from 'vue-scrollto'

import DefaultLayout from '~/layouts/Default.vue';
import './css/global.css'

const fonts = `
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/fonts/Poppins/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/Poppins/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/Poppins/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/Poppins/poppins-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/Poppins/poppins-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/Poppins/poppins-v15-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url('/fonts/Poppins/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/Poppins/poppins-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/Poppins/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/Poppins/poppins-v15-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/Poppins/poppins-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/Poppins/poppins-v15-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
}

/* dm-sans-700 - latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url('/fonts/DM-Sans/dm-sans-v6-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/DM-Sans/dm-sans-v6-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/DM-Sans/dm-sans-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/DM-Sans/dm-sans-v6-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/DM-Sans/dm-sans-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/DM-Sans/dm-sans-v6-latin-700.svg#DMSans') format('svg'); /* Legacy iOS */
}
`

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  // Plugins
  Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal',
    duration: 1500,
    scale: 1,
    distance: '100px',
  });

  Vue.use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
  })

  // Fonts
  head.style.push({
    type: 'text/css',
    cssText: fonts,
  })

  // Collect Chat
  head.script.push({
    innerHTML: ''
  })

  // Metadata
  head.meta.push(
    {
      key: 'keywords',
      name: 'keywords',
      content: 'Marketing Digital, propaganda, artes, midia social, alexia prado, instagram'
    },
    {
      name: 'author',
      content: 'Alexia Prado'
    },
    {
      key: 'description',
      name: 'description',
      content: 'Confecção de artes para mídias sociais'
    },
    { key: "og:type", property: "og:type", content: 'BlogPosting' },
    { key: "og:description", property: "og:description", content: 'Confecção de artes para mídias sociais' },
    { key: "og:image", property: "og:image", content: './assets/foto-perfil.jpg' },
    { property: "og:site_name", content: 'Alexia Prado Marketing Digital' }
  );
}
