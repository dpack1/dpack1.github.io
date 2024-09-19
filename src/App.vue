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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

</script>

<template>
  <section id="section1" class="pb-10 bg-gradient-to-b from-primary via-secondary to-accent">
    <div class="pt-5 px-4 mx-auto lg:px-16 md:px-12 max-w-screen-lg">
      <Header @scrollTo="scrollToSection" />
      <div class="text-center">
        <!-- Profile Image -->
        <div class="flex flex-col items-center justify-center gap-4 mx-auto lg:flex-row">
          <img class="w-32 h-32 lg:w-64 lg:h-64 rounded-full border border-[#E8E3F4]" src="./assets/Profile.jpg" />
        </div>

        <!-- Name and Instagram Link -->
        <div class="mt-4">
          <h2 class="text-gray-800 text-2xl md:text-3xl font-bold">Dylan Packham</h2>
          <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/dylanpackham98/"
            target="_blank">@dylanpackham98</a>
          <hr class="my-4" />
        </div>

        <!-- Introduction -->
        <p class="mt-4 text-[#10172A] text-2xl md:text-4xl font-semibold tracking-tighter">
          Hi, I'm
          <span class="underline leading-8 underline-offset-8 decoration-6 decoration-[#8B5CF6]">Dylan Packham.</span>
          Here you can check out what I'm working on.
        </p>

        <!-- About Section -->
        <p class="mt-4 text-[#10172A] text-base md:text-lg lg:text-xl sm:px-6 md:px-12 lg:px-24 leading-relaxed">
          I'm a <span class="font-semibold">fullstack developer</span>, community builder, and <span
            class="font-semibold">explorer</span>. I love to build <span class="font-semibold">apps</span> that solve
          real life problems.
        </p>


      </div>
    </div>
  </section>


  <section id="section2" class="pb-10 bg-[#181c24]">
    <div class="pt-5 px-4 mx-auto lg:px-16 md:px-12 max-w-screen-lg">
      <div class="text-center">

        <div class="mt-4">
          <h2 class="text-white text-2xl md:text-6xl font-bold">Featured Work</h2>
        </div>

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
