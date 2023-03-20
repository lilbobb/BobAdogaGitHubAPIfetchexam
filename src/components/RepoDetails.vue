<template>
  <div class="repositories">
    <h1>Repository Details</h1>
    <ul>
      <li>
        <h3>Name: {{ data.name }}</h3>
      </li>
      <li>
        <h3>Description: {{ data.description }}</h3>
      </li>
      <li>
        <h3>Forks: {{ data.forks }}</h3>
      </li>
      <li>
        <h3>Watchers: {{ data.watchers }}</h3>
      </li>
      <li>
        <h3>Open Issues: {{ data.open_issues }}</h3>
      </li>
      <li>
        <h3>Created At: {{ data.created_at }}</h3>
      </li>
      <li>
        <h3>Updated At: {{ data.updated_at }}</h3>
      </li>
      <li>
        <h3>Stars: {{ data.stars }}</h3>
      </li>
    </ul>
    <button>
      <router-link to="/myRepoList" class="btnn">Previous</router-link>
    </button>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();
const data = ref([]);
const fetchRepository = async () => {
  try {
    const res = await fetch("https://api.github.com/users/lilbobb/repos");
    const dataId = parseInt(route.params.id);
    const info = await res.json();
    const repository = info.find((repo) => repo.id === dataId);
    data.value = repository;
    console.log(repository);
  } catch (error) {
    console.log(error);
  }
}

onMounted(fetchRepository);

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

body {
  font-family: "Roboto" sans-serif;

}

 .btnn{
  background-color: #036501;
  color: #f1fcff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;}

.repositories {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  background-color: #f1fcff;
  border-radius: 5px;

}

.repositories h1 {
  text-align: center;
  font-size: 2.5rem;
  color:#036501;
  border-bottom: 1px solid #051901;
  padding-bottom: 10px;
  box-shadow: 0 2px 2px #051901;
}

.repositories h3 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  padding: 1rem;
  background-color: #c3f9c7;
  padding: 1.6em;
  border-radius: 5px;
  margin: .1rem;
  text-align: start;
}

.repositories li {
  margin: 10px 0;
  list-style: none;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: default;
}

@media screen and (max-width: 768px) {
  .repositories {
    padding: 10px;
  }
  
  .repositories h1 {
    font-size: 1.5rem;
  }

  .repositories ul {
    margin: 10px 0;
  }

  .repositories li {
    margin: 5px 0;
  }

  .pagination {
    flex-direction: column;
  }

  .pagination button {
    margin-top: 10px;
  }

  .pagination button:disabled {
    opacity: 2;
  }

  .pagination button:first-child {
    margin-top: 0;
  }

  .pagination button:last-child {
    margin-bottom: 0;
  }


}
</style>
