<template>
  <div class="row">
    <div class="col">
      <div class="breadcrumb">
        <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
        <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs'
}
</script>
