<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row justify-content-center">
        <div class="col-lg-12">

          <h1>Blog</h1>
          <p>A blog about Jamstack, Gridsome and other things I can't stop thinking about.</p>

          <div v-for="entry in $page.allBlog.edges" :key="entry.node.id">
            <div class="box">
              <div class="posts flex flex-wrap">
                <article>
                  <g-link :to="entry.node.path">
                    <figure>
                      <g-image class="img-fluid" :src="entry.node.cover_image" :alt="entry.node.title"/>
                    </figure>
                  </g-link>

                  <p class="blog-details">
                    <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
                  </p>

                  <g-link :to="entry.node.path">
                    <h2 class="h1">{{ entry.node.title }}</h2>
                  </g-link>

                  <p>{{ entry.node.description }}</p>

                  <g-link class="btn btn-outline-dark" :to="entry.node.path">
                    Read Post &nbsp;➡️
                  </g-link>

                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Blog"
    };
  }
};
</script>

<page-query>
  query {
    allBlog {  
      edges {
        node {
          title
          path
          description
          cover_image(width:960)
          humanTime : date(format:"YYYY-MM-DD")
          datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

