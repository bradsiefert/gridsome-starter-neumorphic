<template>
<div>
  <header>
    <Navbar />
  </header>

  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment';

export default {
  components: {
    Navbar, Footer
  },
  data: () => ({
    showNav: false, // This is to make the navbar open/close on mobile.
  }),
  metaInfo() {
    return {
      title: 'Home'
    };
  },
}
</script>

<style media="screen">
  @media (max-width: 767px) {
    .display-1 {
      font-size: 1.75rem;
    }
  }
</style>
