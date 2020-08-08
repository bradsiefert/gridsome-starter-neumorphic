<template>
  <Layout>

    <div class="container slim-contain">
      <div class="row">
        
        <div class="col-lg-12 gx-3">
          <h1>Bio</h1>
        </div>

        <div class="col-lg-8 gx-3">
          <article class="lead">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus justo sed pulvinar hendrerit. 
              Vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. Pellentesque habitant morbi tristique 
              senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ipsum sit amet neque varius, eget 
              condimentum lacus egestas. Donec vulputate metus eu sagittis efficitur. Quisque dignissim nibh turpis, et 
              maximus nibh aliquam aliquet. Quisque tempus et nunc eu malesuada. Maecenas sodales, ante vel condimentum 
              lobortis, arcu libero faucibus augue, vel molestie ipsum dui sit amet lacus.
            </p>

            <p>
              Sed iaculis hendrerit mauris vel faucibus. Quisque non tortor id tortor rutrum tempus suscipit quis mi. 
              Curabitur tristique purus eget nulla posuere, in sodales ipsum imperdiet. Suspendisse nec est eu dui 
              volutpat imperdiet sit amet eu sapien. Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas.
            </p>

            <a target="_blank" class="btn btn-outline-dark my-4" href="#">
              Download Resume &nbsp;📂
            </a>
          </article>
        </div>

        <div class="col-lg-4">
          <g-image class="img-fluid" src="~/assets/images/photo-white-patagonia-guy-cute-smile.jpg" alt="Photo of a white dude" />
        </div>

      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'About'
    };
  }
};
</script>
