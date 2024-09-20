<script>
import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import 'tailwindcss/tailwind.css'

export default {
  components: {
    Header,
    Gallery
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset; // Get vertical position of the element
      window.scrollTo({
        top: topPosition,
        left: 0, // Ensure no horizontal scrolling happens
        behavior: 'smooth' // Smooth scrolling
      });
    }
    }
  }
}

</script>

<template>
  <section id="section1" class="pb-8 bg-white" >
    <div class="pt-10 px-4 mx-auto lg:px-16 md:px-12 max-w-screen-lg">
      <div class="text-center content-center">
      <Header @scrollTo="scrollToSection" />
        <!-- Profile Image -->
        <div class="pt-8 flex flex-col items-center justify-center gap-4 mx-auto lg:flex-row">
          <img class="h-96 rounded-full" src="./assets/Profile.jpg" />
        </div>

        <!-- Name and Instagram Link -->
        <div class="mt-6">
          <h2 class="pb-2 text-textBlue text-3xl md:text-5xl font-bold">Dylan Packham</h2>
          <a class="text-textBlue mt-4 hover:text-primaryBlue text-3xl" href="https://www.instagram.com/dylanpackham98/"
            target="_blank">@dylanpackham98</a>
        </div>
      </div>
    </div>
  </section>


  <section id="section1.5"
    class="pb-10 bg-secondaryBlue shadow-2xl relative z-0 transform translate-x-4 lg:-translate-x-20 transition-all duration-500 rounded-[30px]">

    <div class="pt-10 pb-24 px-4 mx-auto lg:px-16 md:px-12 max-w-screen text-center ">

      <!-- Introduction -->
      <p class="pl-10 mt-4 text-textWhite text-3xl md:text-6xl font-semibold ">
        Hi, I'm Dylan Packham.
        <br>Here you can check out what I'm working on.
      </p>

      <!-- About Section -->
      <p class="pl-10 pt-5 mt-4 text-textWhite text-4xl sm:px-6 md:px-12 lg:px-24 tracking-wide ">
        I'm a <span class="font-semibold">fullstack developer</span>, community builder, and <span
          class="font-semibold">explorer</span>. I love to <br> build <span class="font-semibold">apps</span> that solve
        real life problems.
      </p>
    </div>

  </section>


  <section id="section2"
    class="pb-10 bg-primaryBlue shadow-2xl relative transform z-24  max-w-screen translate-x-4 lg:translate-x-32 lg:-translate-y-16 transition-all  duration-500 rounded-[30px]">
    <div class="pt-10 pb-24 px-4 mx-auto lg:px-16 md:px-12 max-w-screen text-center ">
      <div class=" px-10 mt-4 text-left">
          <h2 class="text-white text-5xl md:text-7xl font-bold">My Projects</h2>
      </div>
      <div class="text-center">
        <!-- Projects -->
        <div>
          <Gallery />
        </div>

      </div>
    </div>
  </section>

  <section id="section3">
    <div class="pt-5 px-4 mx-auto lg:px-16 md:px-12 max-w-screen-lg">
      <div class="text-center">


      </div>
    </div>
  </section>
</template>
