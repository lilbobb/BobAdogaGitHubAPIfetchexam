# mygithubapifetchexam

#my project link below

https://bob-adoga-git-hub-ap-ifetchexam.vercel.app/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
Set up a Vue.js project

To create a new Vue.js project, you can use the Vue CLI command line interface

Install Vue CLI by running the following command in your terminal:

npm install -g @vue/cli

Create a new Vue.js project by running the following command;

vue create my-project

Follow the prompts to choose the options for your project (e.g., Babel, ESLint, etc.)
Create a component to fetch and display repositories

Create a new component file (e.g., Repositories.vue) in the src/components directory

In the component file, define a data object with an empty array for the repositories, and a currentPage variable to keep track of the current page number


COPY

COPY
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
      this.currentPage++;
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
In the fetchRepositories method, we use fetch() to make an API request to the GitHub API, passing in the current page number and number of items per page

We then append the fetched repositories to the repositories array using the spread operator

We also define a loadMore method that increments the currentPage variable and calls fetchRepositories again to load the next page of repositories

Finally, we call fetchRepositories in the mounted hook to load the initial page of repositories

Use the component in your Vue.js app

In your main Vue.js app (App.vue), import the Repositories component and use it in the template:
<template>

<div>

<Repositories />

</div>

</template>

<script>

import Repositories from "./components/Repositories.vue";

export default {

components: { Repositories, },

};

</script>

This code displays the first 10 repositories of the user "octocat" and a "Load more" button that fetches the next page of repositories when clicked

The axios library is used to make an HTTP GET request to the GitHub API with the appropriate query parameters and headers

The fetched repository data is stored in the repos array in the component's data object

The loadMore method updates the page parameter and fetches the next page of repositories

Displaying repository details on a separate page

Once we have fetched the repository data from the API, we can create a new Vue.js component to display the repository details on a separate page

We can use Vue Router to create a new route for the repository details page

We can pass the repository data as props to the repository details component

For example, the following code creates a new RepoDetails component that displays the details of a single

Style the component

You can add styles to the Repositories component by adding a <style> section to the component file

For example, the following CSS styles the repository cards and the "Load more" button:


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# BobAdogaGitHubAPIfetchexam" 
