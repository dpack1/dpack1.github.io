<template>
    <section :class="[themeClass, 'min-h-screen bg-campaign1Bg bg-cover bg-center text-red p-8']">
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
            theme: 'pathfinder', // Default theme (change as needed)
        };
    },
    computed: {
        compiledMarkdown() {
            const md = new MarkdownIt({ html: true }); // Allow raw HTML
            return md.render(this.markdownContent);
        },
        themeClass() {
            return this.theme; // Dynamically applies either "pathfinder" or "pathfinder-remaster"
        },
    },
    created() {
        fetch('/public/content/campaign1.md')
            .then((response) => response.text())
            .then((data) => {
                this.markdownContent = data;
            })
            .catch((error) => console.error('Error loading Markdown file:', error));
    },
};
</script>

<style>
@import '../../assets/styles/theme.css';
</style>
