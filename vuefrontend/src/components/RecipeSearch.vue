<template>
  <div>
    <form @submit.prevent="searchRecipes">
      <input v-model="query" type="text" placeholder="Search for recipes" />
      <button type="submit">Search</button>
    </form>

    <ul v-if="recipes.length">
      <li v-for="recipe in recipes" :key="recipe.uri">
        <h3>{{ recipe.label }}</h3>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient.text }}
          </li>
        </ul>
        <a :href="recipe.url">Link to recipe</a>
      </li>
    </ul>

    <p v-else>No recipes found</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      recipes: [],
    };
  },

  methods: {
    searchRecipes() {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${this.query}&app_id=${'e19c9152'}&app_key=${'41926769d0131d663c06113f7c4e431f'}`
        )
        .then((response) => {
          this.recipes = response.data.hits.map((hit) => hit.recipe);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
