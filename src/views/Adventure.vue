<template>
  <section class="min-h-screen bg-adventureBg bg-cover bg-center text-red p-8">
    <div class="container mx-auto">
      <h1 class="text-6xl font-bold mb-8 text-center">Adventure Page</h1>
      <p class="text-2xl text-center mb-12">
        Welcome to my DnD campaigns! Choose a campaign to explore the world, lore, and notes.
      </p>

      <!-- Campaign Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="campaign in campaigns"
          :key="campaign.id"
          :to="`/adventure/${campaign.slug}`"
          class="bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
        >
          <h2 class="text-3xl font-bold mb-4">{{ campaign.name }}</h2>
          <p class="text-lg">{{ campaign.description }}</p>
        </router-link>
      </div>

      <!-- Router View with Key to Force Re-render -->
      <router-view :key="$route.fullPath"></router-view> <!-- Add key here -->
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      campaigns: [
        {
          id: 1,
          name: "Campaign 1: The Lost Kingdom",
          slug: "lost-kingdom",
          description: "A tale of ancient ruins and forgotten treasures.",
        },
        {
          id: 2,
          name: "Campaign 2: Shadows of the Abyss",
          slug: "shadows-abyss",
          description: "A dark journey into the depths of the unknown.",
        }
      ],
    };
  },
};
</script>
