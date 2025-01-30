<template>
  <div>
    <Header @scrollTo="scrollToSection" />
    <router-view></router-view> <!-- This will render the matched component -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import 'tailwindcss/tailwind.css';

export default {
  components: {
    Header,
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topPosition,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>