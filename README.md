# mygithubapifetchexam

#my project link below

https://bob-adoga-git-hub-ap-ifetchexam.vercel.app/

BobAdogaGitHubAPIfetchexam
This is a Vue.js project that fetches and displays repositories from a GitHub user using the GitHub API. The project also includes a feature to display repository details on a separate page and the ability to load more repositories.

Project setup
To set up the project, run the following command in your terminal:

Copy code
npm install
Compiles and hot-reloads for development
Copy code
npm run serve
This command compiles and hot-reloads the project for development.

Compiles and minifies for production
Copy code
npm run build
This command compiles and minifies the project for production.

Lints and fixes files
Copy code
npm run lint
This command lints and fixes the project files.

Using the Repositories component
The Repositories component fetches and displays repositories from a GitHub user. To use the component:

Create a new Vue.js project using Vue CLI.

Create a new component file (e.g., Repositories.vue) in the src/components directory.

Copy the following code into the Repositories.vue file:

html
Copy code
<template>
  <div>
    <div v-for="repo in repositories" :key="repo.id">
      <h2>{{ repo.name }}</h2>
      <p>{{ repo.description }}</p>
      <p>Language: {{ repo.language }}</p>
    </div>
    <button @click="loadMore">Load more</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repositories: [],
      currentPage: 1,
    };
  },
  methods: {
    loadMore() {
      this.fetchRepositories();
    },
    fetchRepositories() {
      const accessToken = "YOUR_ACCESS_TOKEN";
      const username = "octocat";
      const perPage = 10;
      const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${this.currentPage}`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.repositories.push(...data);
        });
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>
Replace the YOUR_ACCESS_TOKEN and octocat placeholders with your own access token and the username of the GitHub user you want to fetch repositories from.

Import the Repositories component into your main Vue.js app (e.g., App.vue) and use it in the template:

html
Copy code
<template>
  <div>
    <Repositories />
  </div>
</template>

<script>
import Repositories from "./components/Repositories.vue";

export default {
  components: {
    Repositories,
  },
};
</script>
This code displays the first 10 repositories of the GitHub user and a "Load more" button that fetches the next page of repositories when clicked.

Displaying repository details on a separate page
To display repository details on a separate page, you can create a new component (e.g., RepoDetails.vue) and use Vue Router to create a new route for the component. You can pass the repository data as props to the RepoDetails component.

Styling the Repositories component
You can add styles to the Repositories component by adding a <style> section to the component file. For example, the following CSS styles the repository cards and the "Load more" button:
