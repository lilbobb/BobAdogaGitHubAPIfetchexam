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