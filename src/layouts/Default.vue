<template>
  <div class="flex flex-col font-body min-h-screen dark:bg-gray-900">
    <!-- Start: Header -->
    <header>
      <!-- Start: Desktop Bar -->
      <div
        class="container px-5 mx-auto mt-10 flex justify-end items-center sm:px-10 md:justify-start md:space-x-10"
      >
        <!-- Start: Button Mobile -->
        <div class="md:hidden">
          <div class="inline-flex mr-6 mt-1">
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </div>

          <button
            type="button"
            aria-label="Abrir Menu Mobile"
            class="p-2 inline-flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            v-on:click="showMobile = !showMobile"
          >
            <!-- Heroicon: menu-alt-1 -->
            <svg
              v-if="showMobile === false"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>

            <!-- Heroicon: x -->
            <svg
              v-else
              class="h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Start: Navigation Bar -->
        <nav class="hidden md:flex space-x-10">

            <!-- Home -->
          <a
            href="/"
            class="group p-3 rounded-md inline-flex items-center bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Home
          </a>

          <!-- Currículo -->
          <!-- <a
            href="#"
            class="group p-3 rounded-md inline-flex items-center bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Currículo
          </a> -->

          <!-- Portfólio -->
          <!-- <a
            href="/portfolio"
            class="group p-3 rounded-md inline-flex items-center bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Portfólio
          </a> -->

          <!-- Blog -->
          <a
            href="/blog"
            class="group p-3 rounded-md inline-flex items-center bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Blog
          </a>

          <theme-switcher :theme="theme" @themeChanged="updateTheme" class="p-3 "/>
        </nav>
        <!-- End: Navigation Bar -->

        <!-- Button Conheça meu Instagram -->
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button
            v-on:click="openInstagram()"
            aria-label="Conheça meu Instagram"
            class="whitespace-nowrap px-7 py-5 inline-flex items-center justify-center rounded-2xl text-white bg-purple-500 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
          >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 mr-4"
                    fill="rgba(255, 255, 255)"
                    viewBox="-2 -2 24 24"
                  >
                    <path
                      d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
                    ></path>
                    <path
                      d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"
                    ></path>
                    <circle cx="15.156" cy="4.858" r="1.237"></circle>
                  </svg>
            Acesse meu Instagram
          </button>
        </div>
      </div>
      <!-- End: Desktop Bar -->

      <!-- Start: Mobile Menu -->
      <div
        class="container px-5 mx-auto top-0 inset-x-0 p-4 transition transform origin-top-right sm:px-10 md:hidden"
        v-if="showMobile"
      >
        <div
          class="rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-gray-50"
        >
          <div class="pt-1 pb-6 px-5">
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <!-- Serviços -->
                <a
                  v-if="$route.path === '/'"
                  v-scroll-to="'#services'"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="ml-3"> Serviços </span>
                </a>
                <g-link
                  v-else
                  to="/#services"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="ml-3"> Serviços </span>
                </g-link>

                <!-- Valores -->
                <a
                  v-if="$route.path === '/'"
                  v-scroll-to="'#values'"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span class="ml-3"> Valores </span>
                </a>
                <g-link
                  v-else
                  to="/#values"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span class="ml-3"> Valores </span>
                </g-link>

                <!-- Apoiadores -->
                <a
                  v-if="$route.path === '/'"
                  v-scroll-to="'#partners'"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span class="ml-3"> Apoiadores </span>
                </a>
                <g-link
                  v-else
                  to="/#partners"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span class="ml-3"> Apoiadores </span>
                </g-link>

                <!-- Sobre Nós -->
                <a
                  v-if="$route.path === '/'"
                  v-scroll-to="'#about-us'"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="ml-3"> Sobre Nós </span>
                </a>
                <g-link
                  v-else
                  to="/#about-us"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="ml-3"> Sobre Nós </span>
                </g-link>

                <a
                  href="https://drive.google.com/file/d/1mJKzZd_HsGtrV_Wgde1MPSbf9-tLJxUp/view?usp=sharing"
                  class="-m-3 p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span class="ml-3"> Portfólio </span>
                </a>

                <a
                  href="/blog"
                  class="p-3 flex items-center rounded-xl text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="h-6 flex-shrink-0 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <span class="ml-3"> Blog </span>
                </a>
              </nav>
            </div>
          </div>

          <!-- Start: Mobile Menu Footer -->
          <div class="py-6 px-5 space-y-6">
            <button
              v-on:click="openInstagram()"
              aria-label="Conheça meu Instagram"
              class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-white bg-purple-500 hover:bg-purple-ribbon-700"
            >
<svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6"
                    fill="rgba(255, 255, 255)"
                    viewBox="-2 -2 24 24"
                  >
                    <path
                      d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
                    ></path>
                    <path
                      d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"
                    ></path>
                    <circle cx="15.156" cy="4.858" r="1.237"></circle>
                  </svg>
              <span class="ml-3"> Conheça meu Instagram </span>
            </button>
          </div>
          <!-- End: Mobile Menu Footer -->
        </div>
      </div>
      <!-- End: Mobile Menu -->
    </header>
    <!-- End: Header -->

    <transition name="fade" appear>
      <!-- Start: Page Content -->
      <main class="flex-grow">
        <slot />
      </main>
      <!-- End: Page Content -->
    </transition>

    <!-- Start: Footer -->
    <footer>
      <div class="pt-6 md:pt-12 bg-purple-500 text-white">
        <div class="container px-5 mx-auto sm:px-10">
          <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            <!-- Start: First Block -->
            <div class="lg:w-1/3 md:px-4 justify-center m-auto">
              
              <div class="sm:flex-1 text-center">
                <g-link to="/" class="text-white hover:text-gray-900 py-1 block"
                  >Home</g-link
                >
                                <!-- <a
                  href="#"
                  class="text-white hover:text-gray-900 py-1 block"
                  >Currículo</a
                >
                <a
                  href="#"
                  class="text-white hover:text-gray-900 py-1 block"
                  >Portfólio</a
                > -->
                <a
                  href="/blog"
                  class="text-white hover:text-gray-900 py-1 block"
                  >Blog</a
                >
              </div>
              
            </div>
            <!-- End: First Block -->

            <!-- Start: Second Block -->
            <div class="md:w-2/3 lg:w-1/6 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              
            </div>
            <!-- End: Second Block -->

            <!-- Start: Third Block -->
            <div
              class="md:w-1/3 lg:w-1/2 md:px-4 text-center mt-12 lg:mt-0"
            >
              <h2 class="text-base mb-4 font-bold">Tem alguma dúvida?</h2>
              <p class="text-base mb-4 text-justify">Me chame no Whatsapp sem compromisso. Falamos sobre o meu trabalho, amostra grátis e formas de pagmento.</p>
                
            </div>
            <!-- End: Third Block -->
          </div>
        </div>
      </div>
    </footer>
    <!-- End: Footer -->
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher";

export default {
  components: {
    ThemeSwitcher,
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
    if (this.theme == "theme-dark") {
      document.querySelector("html").classList.add("dark");
    }
  },
  data() {
    return {
      showHome: false,
      showMobile: false,
      theme: "",
    };
  },
  methods: {
    openInstagram(){
      window.open('https://www.instagram.com/alexiapradomarketing/');
    },   
    openWhatsapp(){
      window.open('https://api.whatsapp.com/send?phone=5512997195967&text=Ol%C3%A1%20Al%C3%A9xia.%20Eu%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho.');
    },
    updateTheme(theme) {
      this.theme = theme;
    },
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "twitter:site",
          name: "twitter:site",
          content: this.$static.metadata.twitter.site,
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: this.$static.metadata.twitter.creator,
        },
      ],
    };
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
