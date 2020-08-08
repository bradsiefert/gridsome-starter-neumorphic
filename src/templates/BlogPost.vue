<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12 blog-post">

          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <g-link title="Link back to home" to="/">Home</g-link>
            </div>
            <div class="breadcrumb-item">
              <g-link title="Link back to Blog posts" to="/blog">
                {{ $metaInfo.postTitle }}
              </g-link>
            </div>
            <div class="breadcrumb-item">
              {{ this.$page.blog.title }}
            </div>
          </div>

          <article>
            <h1 v-html="$page.blog.title"></h1>
            <ul class="list-inline mb-32">
              <li class="list-inline-item blog-details">
                <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
              </li>
              <li class="list-inline-item blog-details pl-16">
                {{ $page.blog.timeToRead }} min read
              </li>
            </ul>

            <div v-html="$page.blog.content"></div>
          </article>

          <div class="divider mt-32"></div>
          <!-- <div class="divider"></div> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      content
      description
      cover_image
      timeToRead
      humanTime : date(format:"YYYY MMMM Do")
    }
    metadata {
      siteUrl
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Blog / ${this.$page.blog.title}`,
      postTitle: 'Blog'
    };
  },
};
</script>
