<template>
  <div class="repositories">
    <h1>Repository Details</h1>
    <ul>
      <li>
        <h3>Name: {{ data.name }}</h3>
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
      <router-link to="/myRepoList">Previous</router-link>
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
  box-sizing: border-box;
}

body {
  font-family: "roboto", sans-serif;
  background-color: rgb(50, 50, 47);
  color: #0c2703;
}

a {
  color: #122d03;
  text-decoration: none;
}

button {
  padding: 10px 20px;
  background-color: #8c7303;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
}
.repositories {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
}

.repositories h1 {
  text-align: center;
  font-size: 2rem;
  color:#cea100;
  border-bottom: 1px solid #051901;
  padding-bottom: 10px;
}

.repositories h3 {
  font-size: 1.25rem;
  color: #e1fbd8;
  padding: 1rem;
}

.repositories ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.repositories li {
  margin: 10px 0;
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
