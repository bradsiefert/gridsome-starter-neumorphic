<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <div class="breadcrumb">
            <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
            <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <g-image 
            class="img-fluid mb-3" 
            width="320"
            src="~/assets/images/clueless-my-bad.gif" 
            alt="Gif from the movie Clueless of Cher saying My bad!" 
          />
          <h1>404 Error: Page Not Found</h1>
          <p>
            I'm sorry about this. If you'd let me know <g-link to="/contact">about this</g-link>, I'd appreciate it. <br>
            Have a good day!
          </p>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '404 Error',
    };
  }
}
</script>

<style>
</style>
