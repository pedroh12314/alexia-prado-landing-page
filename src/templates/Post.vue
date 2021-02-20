<template>
  <Layout>
    <div class="container px-5 md:px-0 mx-auto py-10 max-w-2xl sm:px-10">
      <!-- Start: Title -->
      <h1
        class="text-4xl font-bold font-display leading-tight text-black dark:text-gray-50 md:text-6xl"
      >
        {{ $page.post.title }}
      </h1>
      <!-- End: Title -->

      <!-- Start: Past data -->
      <div class="inline-flex my-6">
        <div class="flex-col ml-4 -mt-1">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $page.post.date }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $page.post.timeToRead }} minuto<span
              class="text-sm text-gray-500 dark:text-gray-400"
              v-if="$page.post.timeToRead >= 2"
              >s</span
            >
            de leitura
          </p>
        </div>
      </div>
      <!-- End: Past data -->

      <!-- Start: Tags -->
      <div class="text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="mr-3 mb-4 inline-flex px-5 py-3 rounded-xl bg-purple-50 dark:bg-gray-800 text-purple-500 dark:text-gray-400 hover:bg-purple-500 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-300"
        >
          #{{ tag.title }}
        </g-link>
      </div>
      <!-- End: Tags -->

      <!-- Start: Image Cover -->
      <g-image
        class="bg-cover bg-center object-cover w-full max-h-96"
        :src="$page.post.cover_image"
      />
      <!-- End: Image Cover -->

      <!-- Start: Content -->
      <div class="my-8 markdown-body" v-html="$page.post.content" />
      <!-- End: Content -->
      <!-- Start: Footer -->
      <div class="mt-16 mb-8">
        <g-link
          to="/blog"
          class="text-purple-500 dark:text-purple-300 hover:text-gray-900 dark:hover:text-purple-500"
        >
          Retornar ao Blog</g-link
        >
      </div>
      <!-- End: Footer -->
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "DD/MM/Y")
    cover_image
    content
    excerpt
    timeToRead
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import SEO from "./../components/SEO";

export default {
  mixins: [SEO],
};
</script>

<style src="../css/markdown.css" />