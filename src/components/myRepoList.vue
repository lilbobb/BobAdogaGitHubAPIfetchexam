<template>
  <div class="repositories">
    <div class="homebtn">
      <button @click="router.push('/')">Home</button>
    </div>
    <div class="innerdiv">
      <h1 class="repohd">My GitHub Repositories</h1>
      <ul v-for="repo in paginatedRepositories" :key="repo.id" class="repo">
        <li>
          <a :href="repo.html_url">{{ repo.name }}</a>
          <button @click="router.push(`/data/${repo.id}`)">View repo Details</button>
        </li>
      </ul>

      <div class="pagination">
        <button @click="state.currentPage--" :disabled="state.currentPage === 1" class="pagibtn">Previous</button>
        <button @click="state.currentPage++" :disabled="state.currentPage === state.totalPages.length - 1"
          class="pagibtn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      repositories: [],
      currentPage: 1,
      perPage: 7,
      totalPages: 0
    })

    async function fetchRepositories() {
      const response = await axios.get(`https://api.github.com/users/lilbobb/repos?per_page=${state.perPage}&page=${state.currentPage}`, {
        headers: {
          Authorization: `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`
        }
      })
      state.repositories = response.data
      state.totalPages = Math.ceil(response.headers['x-total-count'] / state.perPage)
    }

    const paginatedRepositories = computed(() => {
      const start = (state.currentPage - 1) * state.perPage
      const end = start + state.perPage
      return state.repositories.slice(start, end)
    })

    function nextPage() {
      if (state.currentPage < state.totalPages) {
        state.currentPage++
      }
    }

    function prevPage() {
      if (state.currentPage > 1) {
        state.currentPage--
      }
    }

    onMounted(fetchRepositories)

    return {
      state,
      paginatedRepositories,
      nextPage,
      prevPage,
      router
    }

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #faf8ee;
  font-family: 'Roboto', sans-serif;
  color: #ece7e7;
}

.repohd {
  text-align: center;
  font-size: 2rem;
  margin: 20px;
  padding: 20px;
  background-color: #012005;
  border-radius: 10px;
  box-shadow: 0 1px 1px #d2cf71;
}

.repo {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;
  padding: 2em;
  background-color: #060a00;
  border-radius: 0.7em;
}

.repo ul {
  padding: 0;
  margin: 0;
}

.repo li {
  margin: 10px;
  padding: 2rem;
  border-radius: 0.5em;
  background-color: #0d1301;
  width: 25em;
}

.repo a {
  text-decoration: none;
  color: #275306;
  font-size: 1.5rem;
  font-weight: bold;
}

.repo button {
  padding: 10px 20px;
  background-color: #b59d02;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0b1801;
  font-size: large;
  width: 100px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

.repo button:hover {
  background-color: #283914;
  color: #ffffff;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}

.pagibtn {
  padding: 10px 20px;
  background-color: #b59d02;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0b1801;
  font-size: large;
  width: 100px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

.pagibtn:hover {
  background-color: #283914;
  color: #ffffff;
}

.homebtn {
  text-align: center;
  padding: 40px 0;
  border: 1px solid #4f4402;
}

.homebtn button {
  padding: 10px 20px;
  background-color: #4d4d03;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
  width: 100px;
  margin: 10px;
}

a:link,
a:visited,
a:active,
a:hover {
  text-decoration: none;
  color: #ececec;
}

a:hover {
  color: #e6ec7e;
}

a {
  text-decoration: none;
  color: #000;
}

button {
  padding: 10px 20px;
  background-color: #b59d02;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0b1801;
  font-size: large;
  width: 100px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

button:hover {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}


.repositories {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.repositories h1 {
  text-align: center;
  margin-bottom: 20px;
}

.repositories ul {
  list-style: none;
}

.repositories li {
  margin-bottom: 20px;
  border: 1px solid #4f4402;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 0 6px #252400;
}

.repositories li:last-child {
  margin-bottom: 0;
}

.repositories li a {
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.repositories li p {
  font-size: 16px;
  line-height: 1.5;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagibtn {
  padding: 10px 20px;
  background-color: #b59d02;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0b1801;
  font-size: large;
  width: 100px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

.pagibtn:hover {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 2px 6px #252400;
}

.pagination button:disabled {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}

.pagination button:hover {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}

.pagination button:disabled:hover {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}

.pagination button:disabled {
  cursor: not-allowed;
}

.pagination button:disabled:hover {
  background-color: #b59d02;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}

.pagination button:disabled {
  cursor: not-allowed;
}


@media screen and (max-width: 768px) {
  .repositories {
    padding: 0;
  }

  .repositories li {
    margin-bottom: 10px;
    padding: 10px;
  }

  .repositories li a {
    font-size: 16px;
  }

  .repositories li p {
    font-size: 14px;
  }

  .pagination button {
    padding: 10px 20px;
    background-color: #021b01;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: large;
    width: 100px;
    margin: 10px;
    box-shadow: 2px 0 6px #252400;
  }

  .pagination button:hover {
    background-color: #3d3c2f;
    color: #0b1801;
    box-shadow: 2px 0 6px #252400;
    translate: 2px;
    transition: 3s;
  }

}</style>