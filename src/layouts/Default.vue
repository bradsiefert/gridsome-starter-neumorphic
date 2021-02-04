<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <SearchBar />
        
      <transition name="fade" appear>
        <slot/>
      </transition>
    </main>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteUrl
  }
}
</static-query>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar, Footer, SearchBar
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>