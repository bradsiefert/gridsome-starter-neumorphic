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
            src="~/assets/images/brad-pitt-thats-cool-small.gif" 
            alt="Gif from the movie Clueless of Cher saying My bad!" 
          />
          <h1>Message Sent!</h1>
          <p>
            Thanks for reaching out. I'll do my best to get back with you shortly. 🙏🏻
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
      title: 'Message Sent!',
    };
  }
}
</script>

<style>
</style>
