<template>
  <div class="flex justify-between text-xl items-center">
    <g-link
      :to="previousPage"
      class="text-gray-500 dark:text-gray-400"
      :class="{
        'text-gray-400 dark:text-gray-700 cursor-not-allowed': !showPreviousPage,
      }"
    >
      <svg
        class="h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </g-link>
    <div class="text-base text-gray-500 dark:text-gray-400">
      Página {{ currentPage }} de {{ totalPages }}
    </div>
    <g-link
      :to="nextPage"
      class="text-gray-500 dark:text-gray-400"
      :class="{
        'text-gray-400 dark:text-gray-700 cursor-not-allowed': !showNextPage,
      }"
    >
      <svg
        class="h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["base", "totalPages", "currentPage"],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1;
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages;
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`;
    },
  },
};
</script>
