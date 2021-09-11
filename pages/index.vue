<template>

</template>

<script lang="ts">
export default ({
  name: "index",
  beforeMount(): void{
    return this.$router.push('/users');
  }
})
</script>

<style scoped>

</style>
