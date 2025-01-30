<template>
    <section class="min-h-screen bg-campaign1Bg bg-cover bg-center text-white p-8">
      <div class="container mx-auto">
        <!-- Campaign Title -->
        <h1 class="text-6xl font-bold mb-8 text-center">The Lost Kingdom</h1>
        <p class="text-2xl text-center mb-12">
          Explore the ancient ruins and uncover the secrets of the forgotten kingdom.
        </p>
  
        <!-- Campaign Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Lore Section -->
          <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
            <h2 class="text-3xl font-bold mb-4">Lore</h2>
            <p class="text-lg mb-4">
              The Lost Kingdom was once a thriving civilization, but it vanished overnight. Legends speak of a powerful artifact hidden within its ruins.
            </p>
            <img src="../assets/campaign1-ruins.jpg" alt="Ancient Ruins" class="rounded-lg mb-4" />
            <p class="text-lg">
              The kingdom was ruled by a wise and just king, but a dark curse befell the land, turning it into a desolate wasteland. Only the bravest adventurers dare to explore its ruins.
            </p>
          </div>
  
          <!-- Notes Section -->
          <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
            <h2 class="text-3xl font-bold mb-4">Notes</h2>
            <ul class="list-disc list-inside text-lg mb-4">
              <li>The ruins are guarded by ancient constructs.</li>
              <li>A mysterious figure has been seen near the ruins.</li>
              <li>The artifact is said to grant immense power.</li>
            </ul>
            <img src="../assets/campaign1-artifact.jpg" alt="Ancient Artifact" class="rounded-lg mb-4" />
            <p class="text-lg">
              The artifact, known as the "Heart of the Kingdom," is rumored to be hidden deep within the central temple. Many have tried to retrieve it, but none have returned.
            </p>
          </div>
        </div>
  
        <!-- Characters Section -->
        <div class="mt-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
          <h2 class="text-3xl font-bold mb-4">Key Characters</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="character in characters" :key="character.id" class="bg-white bg-opacity-20 rounded-lg p-4">
              <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 class="text-xl font-bold">{{ character.name }}</h3>
              <p class="text-lg">{{ character.description }}</p>
            </div>
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
    name: 'Campaign1',
    data() {
      return {
        characters: [
          {
            id: 1,
            name: "King Alden",
            description: "The last ruler of the Lost Kingdom, known for his wisdom and courage.",
            image: require('../assets/campaign1-king.jpg'), // Use require for dynamic image paths
          },
          {
            id: 2,
            name: "The Mysterious Stranger",
            description: "A shadowy figure seen near the ruins. Their motives are unknown.",
            image: require('../assets/campaign1-stranger.jpg'),
          },
          {
            id: 3,
            name: "The Guardian",
            description: "An ancient construct tasked with protecting the ruins.",
            image: require('../assets/campaign1-guardian.jpg'),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-campaign1Bg {
    background-image: url('../assets/campaign1-bg.jpg'); /* Add a campaign-specific background image */
  }
  </style>