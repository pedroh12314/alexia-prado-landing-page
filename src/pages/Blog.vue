<template>
  <Layout>
    <hr class="mt-10">
    <div
      class="container mx-auto px-5 py-10 sm:px-10 sm:py-10 xl:px-40 flex-wrap"
    >
      <h2 class="text-4xl font-bold mb-8 font-display text-black dark:text-gray-50">Blog</h2>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="lg:flex rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-50 dark:border-gray-800 mb-8"
        v-scroll-reveal
      >
        <g-image
          class="h-64 w-full lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-none bg-center object-cover bg-cover text-center overflow-hidden rounded-xl"
          :src="post.node.cover_image"
        />
          <g-link :to="post.node.path" class="p-4">
        <div class="p-2 sm:p-4 lg:p-8 flex flex-col leading-normal">
            <div
              class="text-black dark:text-gray-300 font-bold font-display text-2xl sm:text-3xl mb-1"
            >
              {{ post.node.title }}
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-base">{{ post.node.excerpt }}...</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 dark-text-gray-400">
            {{ post.node.date }} &#8226; {{ post.node.timeToRead }} min
          </p>
        </div>
          </g-link>
      </div>

      <pagination
        class="mt-16 mb-8"
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: 
    allPost (sortBy: "date", order: DESC, perPage: 5, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date (format: "DD/MM/Y")
          cover_image
          timeToRead
          excerpt
          path
        }
      }
  }
}
</page-query>

<script>
import Pagination from "../components/Pagination";

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    Pagination,
  },
};
</script>

