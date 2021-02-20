<template>
  <Layout>
    <div class="container mx-auto px-5 py-10 sm:px-10 xl:px-40 flex flex-col">
      <h1
        class="text-4xl font-bold mb-8 font-display text-black dark:text-gray-50 text-center max-w-lg mx-auto"
      >
        Pedimos desculpas, a página não foi encontrada
      </h1>
      <a
        href="/"
        class="px-10 py-5 mb-10 mx-auto rounded-2xl bg-purple-50 dark:bg-gray-800 text-purple-500 dark:text-gray-400 focus:outline-none transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
      >
        Voltar para Home
      </a>
      <g-image
        class="mx-auto w-full"
        src="./../assets/404/illustration_404.svg"
        alt="Página não Encontrada"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Página não encontrada",
  },
};
</script>