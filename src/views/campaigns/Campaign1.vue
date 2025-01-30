<template>
  <section :class="[themeClass, 'min-h-screen bg-adventureBg bg-cover bg-center text-white p-8']">
    <div class="container mx-auto flex flex-col items-center">
      <!-- Tabs with Underline Animation -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="handleTabChange(tab.name)"
          :class="{ 'active': currentTab === tab.name }"
          class="tab-button"
        >
          {{ tab.label }}
          <span class="underline"></span>
        </button>
      </div>

      <!-- Content -->
      <div v-if="currentTab" class="markdown-content mt-8 max-w-10xl w-full" v-html="compiledMarkdown"></div>
    </div>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'Campaign1',
  data() {
    return {
      markdownContent: '',
      theme: 'pathfinder',
      currentTab: 'overview',
      tabs: [
        { name: 'overview', label: 'Overview' },
        { name: 'characters', label: 'Characters' },
        { name: 'lore', label: 'Lore' },
      ],
    };
  },
  computed: {
    compiledMarkdown() {
      const md = new MarkdownIt({ html: true });
      return md.render(this.markdownContent);
    },
    themeClass() {
      return this.theme;
    },
  },
  watch: {
    currentTab(newTab) {
      this.loadMarkdownContent(newTab);
    },
  },
  created() {
    this.loadMarkdownContent(this.currentTab);
  },
  methods: {
    handleTabChange(tabName) {
      this.currentTab = tabName;
    },
    loadMarkdownContent(tabName) {
      const filePath = `/public/content/campaign1/${tabName}.md`;
      fetch(filePath)
        .then((response) => response.text())
        .then((data) => {
          this.markdownContent = data;
        })
        .catch((error) => console.error('Error loading Markdown {{tabName}} file:', error));
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.tab-button {
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

.tab-button:hover {
  color: #800008; /* Metallic Gold on hover */
}

.tab-button.active {
  color: #8B0000; /* Dark Red for active tab */
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #5e0000; /* Metallic Gold underline */
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.tab-button.active .underline {
  transform: scaleX(1); /* Animate underline to full width */
}
.tab-button:focus {
  outline: none; /* Removes the focus outline */
}


</style>

<style>
/* Import your theme.css file */
@import '../../assets/styles/theme.css';
</style>