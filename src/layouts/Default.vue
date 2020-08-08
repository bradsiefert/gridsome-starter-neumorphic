<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar, Footer
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