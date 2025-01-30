<template>
  <section class="min-h-screen bg-adventureBg bg-cover bg-center text-red p-8">
    <div class="container mx-auto">
      <h1 class="text-6xl font-bold mb-8 text-center">Adventure Page</h1>
      <p class="text-2xl text-center mb-12">
        Welcome to my DnD campaigns! Choose a campaign to explore the world, lore, and notes.
      </p>

      <!-- Campaign Cards -->
      <div class="flex flex-wrap justify-center gap-8">
        <router-link
          v-for="campaign in campaigns"
          :key="campaign.id"
          :to="`/adventure/${campaign.slug}`"
          class="campaign-card bg-red bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 hover:text-adventureRed"
          :class="{ 'selected': selectedCampaign === campaign.id, 'faded': selectedCampaign && selectedCampaign !== campaign.id }"
          @click="selectCampaign(campaign.id)"
        >
          <h2 class="text-3xl font-bold mb-4">{{ campaign.name }}</h2>
          <p class="text-lg">{{ campaign.description }}</p>
        </router-link>
      </div>

      <!-- Router View with Key to Force Re-render -->
      <router-view :key="$route.fullPath"></router-view>
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
        },
      ],
      selectedCampaign: null, // Track the selected campaign
    };
  },
  methods: {
    selectCampaign(id) {
      this.selectedCampaign = id; // Set the selected campaign
    },
  },
};
</script>

<style scoped>
.campaign-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
  flex: 1 1 300px; /* Flex-grow, flex-shrink, and flex-basis */
  max-width: 400px; /* Optional: Set a max-width for the cards */
}

.campaign-card.selected {
  transform: scale(1.1); /* Scale up the selected card */
  z-index: 10; /* Bring the selected card to the front */
}

.campaign-card.faded {
  opacity: 0.3; /* Fade out the non-selected cards */
  transform: scale(0.9); /* Slightly scale down the non-selected cards */
}

/* Tab Styles with Increased Specificity */
.adventure-tabs .tabs {
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.adventure-tabs .tab-button {
  padding: 1rem 0;
  background: transparent;
  border: none;
  color: #A9A9A9; /* Dark Gray for unselected tabs */
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.adventure-tabs .tab-button:hover {
  color: #800008 !important; /* Force the hover color */
}

.adventure-tabs .tab-button.active {
  color: #8B0000; /* Dark Red for active tab */
}

.adventure-tabs .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #5e0000; /* Dark Red underline */
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.adventure-tabs .tab-button.active .underline {
  transform: scaleX(1); /* Animate underline to full width */
}

.adventure-tabs .tab-button:focus {
  outline: none; /* Removes the focus outline */
}
</style>