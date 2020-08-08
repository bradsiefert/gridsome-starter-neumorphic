<template>
  <footer class="footer">
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-12">
          <h5>Credits</h5>
          <p class="mb-0">
            Powered by <a target="_blank" rel="noopener" title="Link to Gridsome" href="https://gridsome.org">Gridsome</a>, 
            <a target="_blank" rel="noopener" title="Link to Bootstrap" href="https://getbootstrap.com">Bootstrap</a>,
            <a target="_blank" rel="noopener" title="Link to Netlify" href="https://netlify.com">Netlify</a>.
            Images & thoughts &copy; {{ new Date().getFullYear() }} Gridsome Neumorphic.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  /* ---------- Footer --------- */
  footer {
    margin-top: 128px;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: .875rem;
    letter-spacing: 0;
    line-height: 1.4;
    border-top: 1px solid $gray-200;
  }
</style>