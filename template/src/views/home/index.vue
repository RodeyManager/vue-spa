<template>
  <h1 style="margin:0 auto;">Home Page</h1>
</template>

<script>
export default {
  created() {
    this.Service.test.list({}).then(res => {
      console.log('Home Request: ', res);
    });
  }
};
</script>
