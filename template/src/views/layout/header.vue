<template>
  <ul class="header">
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/todo">Todo App</router-link>
    </li>
    <li>
      <router-link to="/test">Test</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'app-header'
}
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0;
  margin: 0;
  background-color: white;
  clear: both;
  &::after {
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }

  li {
    display: block;
    flex: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
    a {
      text-decoration: none;
    }
  }
}
</style>

