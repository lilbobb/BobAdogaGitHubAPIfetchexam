<template>
  <div class="repositories">
    <div>
      <div class="wrapdiv">
        <router-link to="/"><button class="btn"><i>GoToHomePage</i></button></router-link>
        <h1 class="repohd"><i class="fa-brands fa-github"></i>My GitHub Repositories</h1>
        <ul v-for="repo in paginatedRepositories" :key="repo.id" class="repo">
          <li>
            <a :href="repo.html_url">
              {{ repo.name }}</a>
          </li>
          <li>
            <button @click="router.push(`/data/${repo.id}`)">View repo Details<i class="fas fa-envelope"></i></button>
          </li>
        </ul>
      </div>

      <div class="pagination">
        <button @click="state.currentPage--" :disabled="state.currentPage === 1" class="pagibtn">Previous</button>
        <button @click="state.currentPage++" :disabled="state.currentPage === state.totalPages"
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
      perPage: 6,
      totalPages: 0
    })

    async function fetchRepositories() {
      const response = await axios.get('https://api.github.com/users/lilbobb/repos', {
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

    const nextPage = () => {
      if (state.currentPage < state.totalPages) {
        state.currentPage++
      }
    }

    const prevPage = () => {
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

.repohd {
  text-align: center;
  font-weight: bold;
  margin: 20px;
  padding: 25px;
  background-color: #000000;
  color: #e2e1d5;
}

.repo {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius:  70px 20rem 10rem;
  background-color: #000000;
  box-shadow: 0 2px 10px #081a01;
}

.repo ul {
  padding: 0;
  margin: 0;
}

.repo li {
  margin: 10px;
  padding: 2rem;
  background-color: #0a1a01;
  width: 40em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-delay: calc(10s * var(--i));
}

.repo a {
  text-decoration: none;
  color: #f3e228;
  font-size: 3rem;
  font-weight: bold;
}

.repo button {
  padding: 10px 20px;
  background-color: #383104;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
  font-size: large;
  font-weight: bold;
  width: 100px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

.repo button:hover {
  background-color: #283914;
  color: #ffffff;
}

.btn {
  padding: 10px 20px;
  background-color: #a19c00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fefefe;
  font-weight: 600;
  width: 200px;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
  margin-bottom: 0px;
  display: flex;
  justify-content: left;
}

.pagibtn {
  padding: 10px 20px;
  background-color: #383104;
  border: none;
  cursor: pointer;
  color: #0b1801;
  font-size: large;
  margin: 10px;
  box-shadow: 2px 0 6px #252400;
}

.pagibtn:hover {
  background-color: #b59d02;
  color: #0b1801;
}

.homebtn button {
  padding: 10px 20px;
  background-color: #4d4d03;
  border-radius: 5px;
  cursor: pointer;
  color: #d5ffab;
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

.fa-brands {
  color: #ffffff;
  margin: 10px;
  display: flex;
  justify-content: left;

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
  background-color: #ffdd00;
  color: #0b1801;
  box-shadow: 2px 0 6px #252400;
}


.repositories {
  max-width: 960px;
  margin: -20px auto;
  padding: 20px;
}

.repositories h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #efefef;

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

.pagination button:hover {
  background-color: #208103;
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


@media screen and (max-width: 768px) {
  .repositories {
    padding: 0;
  }

  .repositories li {
    margin-bottom: 10px;
    padding: 10px;
  }

  .repositories li a {
    font-size: 12px;
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

  .repo {
    padding: 0;
  }

}
</style>