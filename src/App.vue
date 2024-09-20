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
          <img class="h-80 sm:h-80 md:h-80 lg:h-96 rounded-full" src="./assets/Profile.jpg" />
        </div>

        <!-- Name and Instagram Link -->
        <div class="mt-6">
          <h2 class="pb-2 text-textBlue text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">Dylan Packham</h2>
          <a class="text-textBlue mt-4 hover:text-primaryBlue text-2xl sm:text-1xl md:text-2xl lg:text-3xl" href="https://www.instagram.com/dylanpackham98/"
            target="_blank">@dylanpackham98</a>
        </div>
      </div>
    </div>
  </section>


  <section id="section1.5"
    class="bg-secondaryBlue shadow-2xl 
    relative transform z-0 max-w-screen 
    -translate-x-6 sm:-translate-x-6 md:-translate-x-12 lg:-translate-x-20 
    transition-all duration-500 rounded-[30px]">

    <div class="
    pl-10
    pt-4 sm:pt-4 md:pt-6 lg:pt-10
    pb-14 sm:pb-14 md:pb-20  lg:pb-24
    px-4 mx-auto lg:px-16 md:px-12 max-w-screen text-center ">

      <!-- Introduction -->
      <p class="pl-10 mt-4 text-textWhite text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold ">
        Hi, I'm Dylan Packham.
        <br>Here you can check out what I'm working on.
      </p>

      <!-- About Section -->
      <p class="pl-10 pt-5 mt-4 text-textWhite text-1xl sm:text-1xl md:text-2xl lg:text-4xl tracking-wide ">
        I'm a <span class="font-semibold">fullstack developer</span>, community builder, and <span
          class="font-semibold">explorer</span>. <br> I love to build <span class="font-semibold">apps</span> that solve
        real life problems.
      </p>
    </div>

  </section>


  <section id="section2"
    class=" bg-primaryBlue shadow-2xl 
    relative transform z-24  max-w-screen 
    translate-x-6 sm:translate-x-6 md:translate-x-16 lg:translate-x-32 
    -translate-y-10 sm:-translate-y-10 md:-translate-y-10 lg:-translate-y-16 
    transition-all  duration-500 rounded-[30px]">
    <div class="pt-2 sm:pt-2 md:pt-4 lg:px-10 pb-10 px-4 mx-auto lg:px-16 md:px-12 max-w-screen text-center ">
      <div class=" px-2 sm:px-2 md:px-4 lg:px-10 my-2 sm:my-0 md:my-2 lg:mt-4 text-left">
          <h2 class="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">My Projects</h2>
      </div>
      <div class="text-center">
        <!-- Projects -->
          <Gallery />
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
