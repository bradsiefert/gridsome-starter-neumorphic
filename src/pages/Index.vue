<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12">

          <h1 class="display-1 mt-32">
            Hi, 👋🏻 &nbsp;I made this neumorphic 😱 blog design using Gridsome.<br /><br />

            I hope that you like it.<br />
            I had a lot of fun creating it.<br />
            Check out my personal site <a href="https://bradsiefert.com">here</a>.<br />
          </h1>
          
          <hr class="my-5">

          <h2>Read Me 📚</h2>
          <p>
            I hope that this starter helps you create something wonderful! My personal site was needing an update and this is what I came up with. I hope that it helps you to more quickly make whatever it is that you're trying to make.
          </p>
          
          <hr class="my-4">

          <h3>Development Notes</h3>
          
          <h4 class="mt-4">Bootstrap v5</h4>
          <p>
            I wanted to test out <a target="_blank" href="https://v5.getbootstrap.com">v5 of Bootstrap</a>, so I used it on this site. This is using <code>Bootstrap v5.0.0-beta1</code> so you should likely update it whenever there are new versions available. There are likely to be bugs I don't know about. 
          </p>
          
          <h4 class="mt-4">Search</h4>
          <p>
            I added search to the site using <a target="_blank" href="https://www.npmjs.com/package/vue-fuse"><code>vue-fuse</code></a> based on this <a href="https://www.youtube.com/watch?v=6i8D8j5Gkk8">wonderful tutorial</a>. I added code into the <code>gridsome.server.js</code> file that on build creates a JSON file of the current blog posts. To update that JSON file with new posts you run <code>gridsome build</code>.
          </p>

          <h4 class="mt-4">Skinny Responsive Containers</h4>
          <p>
            I made 2 custom containers for the site. The containers have an extra 32px gutter on the outside to match my custom grid spacing. They have media queries to make them responsive on all screen sizes.
          </p>

          <ul>
            <li><strong>skinny-contain</strong> has a max width of <code>672px wide</code> (640px of content space)</li>
            <li><strong>slim-contain</strong> has a max width of <code>992px wide</code> (960px of content space)</li>
          </ul>
          
          <h4 class="mt-4">Dark Mode</h4>
          <p>
            I've added css classes that properly style the site for devices that use dark mode.
          </p>
          <hr class="my-4">
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo() {
    return {
      title: 'Home'
    };
  }
}
</script>

<style>
</style>
