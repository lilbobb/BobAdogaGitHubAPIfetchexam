<template>
  <div>
    <router-view></router-view>

    <myRepoList></myRepoList>
  </div>
</template>

<script>
import myRepoList from './components/myRepoList.vue'

export default {
  name: 'App',
  component: {
    myRepoList,
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #110f01;
  font-family: 'Roboto', sans-serif;
  color: #ecede7;
}

</style>