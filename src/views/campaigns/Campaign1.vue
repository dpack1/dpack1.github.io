<template>
    <section
      :class="['min-h-screen', 'bg-campaign1Bg', 'bg-cover', 'bg-center', 'text-red', 'p-8', themeClass]"
    >
      <div class="container mx-auto">
        <!-- Render Markdown Content with custom styles -->
        <div v-html="compiledMarkdown" class="markdown-content"></div>
      </div>
    </section>
  </template>
  
  <script>
  import MarkdownIt from 'markdown-it';
  
  export default {
    name: 'Campaign1',
    data() {
      return {
        markdownContent: '', // Empty initially, will be populated later
      };
    },
    computed: {
      compiledMarkdown() {
        const md = new MarkdownIt();
        return md.render(this.markdownContent);
      },
    },
    created() {
      fetch('/public/content/campaign1.md')
        .then((response) => response.text())
        .then((data) => {
          this.markdownContent = data;
        })
        .catch((error) => console.error('Error loading Markdown file:', error));
    }

  };
  </script>
  