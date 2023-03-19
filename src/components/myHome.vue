<template class="boby">
  <div class="home">
    <h1>Welcome to my page</h1>
    <p>Here you can find my projects</p>
    <button>
      <router-link to="/myRepoList">click to see my repository page</router-link>
    </button>
  </div>
</template>

<script setup>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a:link,
a:visited,
a:active,
a:hover {
  text-decoration: none;
  color: #327101;
}

a:hover {
  color: #e8df80;
}

.home {
  font-family: 'Roboto', sans-serif;
  color: #031701;
  margin: 8em auto;
  text-align: center;
  padding: 40px 0;
  line-height: 2em;
  max-width: 800px;
  font-weight: bold;
  background: #f9ffd1;

}

.home h1 {
  font-size: 3.5rem;
  margin-bottom: 25px;
  opacity: calc(2 - 0.1 * 1);
  transition-delay: 0.1s;
  transition: opacity 0.5s ease-in-out;
}

.home p {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.home button {
  background: #134103;
  color: #f3f0f0;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 8px #4e4c0a;
  cursor: pointer;
  opacity: 1;

}

.home button:hover {
  background: #645207;
  color: #f7f3f3;
  font-size: 1rem;

}

.home button:active {
  background: #051501;
  color: #f3f0f0;
}

.home button:focus {
  outline: none;
}

.home button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.home button:disabled:hover {
  background: none;
  color: #f8f4f4;
}

.home button:disabled:active {
  background: none;
  color: #f5efef;
}

.home button:disabled:focus {
  outline: none;
}

.home button a {
  color: inherit;
  text-decoration: none;
}

.home button a:hover {
  color: inherit;
  text-decoration: none;
}

.home button a:active {
  color: inherit;
  text-decoration: none;
}


@media screen and (max-width: 768px) {

  .home h1 {
    font-size: 2rem;
  }

  .home p {
    font-size: 1rem;
  }

  .home button {
    font-size: 0.8rem;
  }

  .home button:hover {
    font-size: 0.8rem;
  }

  .home button:active {
    font-size: 0.8rem;
  }

  .home button:focus {
    outline: none;
  }

  .home button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .home button:disabled:hover {
    background: none;
    color: #f8f4f4;
  }

  .home button:disabled:active {
    background: none;
    color: #f5efef;
  }

  .home button:disabled:focus {
    outline: none;
  }

  .home button a {
    color: inherit;
    text-decoration: none;
  }

  .home button a:hover {
    color: inherit;
    text-decoration: none;
  }

  .home button a:active {
    color: inherit;
    text-decoration: none;
  }
}
</style>