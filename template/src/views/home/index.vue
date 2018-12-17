<template>
  <h1 style="margin:0 auto;">Home Page</h1>
</template>

<script>

export default {
  created() {
    this.SERVER.test.list({ limit: 100 }).then(res => {
      console.log('Home Request GET: ', res);
    });
  }
};
</script>
