<template>
  <div>
    <search-focus @keyup="focusSearch"></search-focus>
    <div class="search-bar">
      <input 
        type="text" 
        class="form-control" 
        id="fuse-search" 
        placeholder="🔍 Search blog..."
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="searchResultsVisible = true"
        @keydown="performSearch"
        ref="search"
      >
      <div 
        class="close"
        v-if="query.length > 0"
        @click="reset"
      >
        &times;
      </div>
    </div>
    
    <div v-if="query.length > 1 && searchResultsVisible" class="search-bar-results">
      <div class="results-wrap" v-for="(post, index) in searchResults" :key="index">
        <a 
          :href="post.item.path" 
          @mousedown.prevent="searchResultsVisible = true"
          :class="{ 'results-active': index === highlightedIndex }"
        >
          <div class="results-head">
            {{ post.item.title }}
          </div>
          <p class="results-description">
            {{ post.item.description }}
          </p>
        </a>
      </div>
      <div v-if="query.length > 1 && searchResults.length === 0"  class="px-3 py-2">
        <div class="results-description mb-0">No results for <strong>"{{ query }}"</strong>.</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchFocus from '@/components/SearchFocus.vue'
import axios from 'axios'

export default {
  name: 'SearchBar', 
  components: {
    SearchFocus
  },
  data() {
    return {
      query: '',
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'description']
      }
    }
  },
  created() {
    axios.get('/search-blog.json')
      .then(response => {
        this.posts = response.data
      })
  },
  methods: {
    reset() {
      this.query = ''
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options)
        .then(results => {
          this.searchResults = results
        })
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.search-bar {
  position: fixed;
  top: 32px;
  right: 32px;
}

@media (max-width: 1024px) {
  .search-bar {
    display: none;
  }
}

.search-bar .form-control,
.search-bar .form-control:focus,
.search-bar-results {
  width: 160px;
  border-radius: 1rem !important;
  height: 32px;
  font-size: $font-size-300;
  color: $black;
  font-weight: 500;
  opacity: 1;
  z-index: 99;
}

.search-bar-results {
  z-index: 100;
  height: auto;
  min-width: 320px;
  position: fixed;
  top: 68px;
  right: 32px;
  // max-height: 288px;
  // overflow-y: auto;
}

.search-bar-results a {
  color: $black;
}

.results-wrap {
  padding: 1rem;
  border-bottom: 1px solid $gray-200;
}

.search-bar-results a > .results-wrap:hover {
  text-decoration: none;
}

.results-wrap:last-of-type {
  border-bottom: none;
}

.results-wrap:hover, .results-active {
  background-color: #d4f4ff;
}

.results-wrap a:hover {
  text-decoration: none;
}

.results-wrap:hover:last-of-type {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.results-wrap:hover:first-of-type {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.results-head {
  font-size: $font-size-500;
  font-family: "Merriweather";
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.25;
}

.results-description {
  font-size: $font-size-100;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-bar .close {
  position: absolute;
  top: 0;
  right: 12px;
  font-size: 1.25rem;
  color: $gray-500;
  cursor: pointer;
}
</style>