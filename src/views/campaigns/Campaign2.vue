<template>
    <section class="min-h-screen bg-campaign2Bg bg-cover bg-center text-white p-8">
      <div class="container mx-auto">
        <h1 class="text-6xl font-bold mb-8 text-center">Shadows of the Abyss</h1>
        <p class="text-2xl text-center mb-12">
          Descend into the darkness and face the horrors that lurk below.
        </p>
  
        <!-- Campaign Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Lore Section -->
          <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
            <h2 class="text-3xl font-bold mb-4">Lore</h2>
            <p class="text-lg mb-4">
              The Abyss is a realm of eternal darkness, home to unspeakable horrors. Few who enter ever return.
            </p>
            <img src="../assets/campaign2-abyss.jpg" alt="The Abyss" class="rounded-lg mb-4" />
            <p class="text-lg">
              Legends say that the Abyss was created by a fallen god, and its depths hold the key to unimaginable power—or destruction.
            </p>
          </div>
  
          <!-- Notes Section -->
          <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
            <h2 class="text-3xl font-bold mb-4">Notes</h2>
            <ul class="list-disc list-inside text-lg mb-4">
              <li>The Abyss is filled with traps and monsters.</li>
              <li>A powerful artifact lies at its core.</li>
              <li>The darkness corrupts all who linger too long.</li>
            </ul>
            <img src="../assets/campaign2-artifact.jpg" alt="Abyssal Artifact" class="rounded-lg mb-4" />
            <p class="text-lg">
              The artifact, known as the "Eclipse Shard," is said to grant control over shadows—but at a terrible cost.
            </p>
          </div>
        </div>
  
        <!-- Back Button -->
        <router-link
          to="/adventure"
          class="mt-12 inline-block bg-white bg-opacity-10 backdrop-blur-md rounded-lg px-6 py-3 hover:bg-opacity-20 transition-all duration-300"
        >
          ← Back to Adventures
        </router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Campaign2',
  };
  </script>
  
  <style scoped>
  .bg-campaign2Bg {
    background-image: url('../assets/campaign2-bg.jpg'); /* Add a campaign-specific background image */
  }
  </style>