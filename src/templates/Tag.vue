<template>
  <Layout>
    <div
      class="container mx-auto px-5 py-10 font-body sm:px-10 sm:py-16 xl:px-40"
    >
      <h2 class="text-4xl font-bold mb-8 font-display text-black dark:text-gray-50">
        Tag: {{ $page.tag.title }}
      </h2>

      <div
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        class="lg:flex rounded-xl border-2 bg-white dark:bg-gray-800 border-gray-50 dark:border-gray-800 mb-8"
        v-scroll-reveal
      >
        <g-image
          class="h-64 w-full lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-none bg-center object-cover bg-cover text-center overflow-hidden rounded-xl"
          :src="post.node.cover_image"
        />
        <div class="p-2 sm:p-4 lg:p-8 flex flex-col leading-normal">
          <div class="inline-flex">
            
            
          </div>
          <g-link :to="post.node.path" class="mb-4">
            <div
              class="text-black dark:text-gray-300 font-bold font-display text-2xl sm:text-3xl mt-4 mb-1"
            >
              {{ post.node.title }}
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-base">{{ post.node.excerpt }}...</p>
          </g-link>
          <p class="text-sm text-gray-500 dark-text-gray-400">
            {{ post.node.date }} &#8226; {{ post.node.timeToRead }} min
          </p>
        </div>
      </div>

      <pagination
        class="my-16"
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :base="`/tag/${$page.tag.title}`"
        :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
        :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 5) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            timeToRead
    	      date (format: "DD/MM/Y")
            cover_image
            path
            excerpt
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Pagination from "../components/Pagination";

export default {
  metaInfo() {
    return {
      title: "Tag: " + this.$page.tag.title,
    };
  },
  components: {
    Pagination,
  },
};
</script>
