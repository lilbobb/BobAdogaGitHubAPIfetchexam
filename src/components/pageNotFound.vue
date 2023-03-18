<template>
  <div class="notfound">
    <h1>404 Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <button>
      <router-link to="/">Go to Home</router-link>
    </button>
  </div>
</template>

<script>
import pageNotFound from "./pageNotFound.vue";

export default {
  name: "PageNotFound",
  components: pageNotFound,
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.notfound {
  background-color: #0d0d0d;
  font-family: "Roboto", sans-serif;
  color: #6f8a04;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
  line-height: 2em;
}

a {
  color: #0e0d01;
  text-decoration: none;
}

a:hover {
  color: #ffe100;
  background: #000;
  text-decoration: none;
}

.page-not-found h1 {
  font-size: 2rem;
  margin-bottom: 0;
}

.page-not-found p {
  font-size: 1.25rem;
  margin-top: 0;
}

.page-not-found button {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #000;
  background: none;
  font-size: 1rem;
  cursor: pointer;
}

.page-not-found button:hover {
  background: #000;
  color: #fff;
}

.page-not-found {
  text-align: center;
  padding: 40px 0;
}

.page-not-found h1 {
  font-size: 2rem;
  margin-bottom: 0;
}

.page-not-found p {
  font-size: 1.25rem;
  margin-top: 0;
}

.page-not-found button {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #000;
  background: none;
  font-size: 1rem;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .page-not-found {
    padding: 80px 0;
  }

  .page-not-found h1 {
    font-size: 3rem;
  }

  .page-not-found p {
    font-size: 1.5rem;
  }

  .page-not-found button {
    font-size: 1.25rem;
  }
}
</style>