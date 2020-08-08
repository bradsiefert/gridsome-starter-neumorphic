<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <h1>Say Hello</h1>
          <p class="mb-4">Please reach out and I'll do my best to get back to you asap.</p>

          <form 
            name="Contact Form"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div class="mb-3">
              <h3 class="">
                <label for="your-name">Name</label>
              </h3>
              <input 
                type="text" 
                name="your-name" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="Your Name" 
              />
            </div>

            <div class="mb-3">
              <h3 class="">
                <label for="your-email">Email</label>
              </h3>
              <input 
                type="email" 
                name="your-email" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="name@email.com" 
              />
            </div>

            <div class="mb-3">
              <h3 class="">
                <label for="your-message">Message</label>
              </h3>
              <textarea 
                type="text" 
                name="your-message" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="" 
              />
              </textarea>
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-outline-dark">Send Message&nbsp; 📤</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Contact'
    };
  },
  data() {
    return {
      formData: {},
    }
  }
};
</script>
