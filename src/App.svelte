<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
  import ArticleCard from "./lib/components/ArticleCard.svelte"; 
  import axios from "axios";
  // import { fetchArticles } from "./lib/utils/api";
  import { onMount } from "svelte";
  import { Article } from "./lib/models/article";
  import Category from "./lib/components/Category.svelte";
  import { categories } from "./lib/constants/sites";

  let articles: Article[] = [];
    
  const getArticles = async() => {
    const options = {
      method: 'GET',
      url: 'https://dev.to/api/articles'
    };
    axios.request(options)
      .then((result) => {
        for(var i = 0; i < 30; i++) {
          articles.push(
            new Article(
              result.data[i]["title"],
              result.data[i]["user"]["username"], 
              result.data[i]["description"],
              result.data[i]["url"],
              result.data[i]["tag_list"]
            )
          ); 
        } 
      }
    ).catch((e) => {
      throw e;
    });
  };

  onMount(async () => {
    await getArticles();
  });
</script>

<main class="container">
  <div class="row">
    <div class="col">
      <div class="row">
        <DateTime/>
      </div><br/><br/>
      <div class="row">
        {#if articles.length === 0}
         <span>Loading...</span>
        {:else}
          {#each articles as article}
            <ArticleCard 
              title={article.title}
              author={article.author}
              description={article.description} 
              url={article.url}
              tags={article.tags} />
          {/each}
        {/if}
      </div>
    </div> 
  </div> 
  <div class="category-row">
    <div class="col">
      {#each categories as category}
        <Category name="{category.name}" sites="{category.sites}" /> 
      {/each}
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .row {
    display: flex;
    flex-direction: column;
  } 

  .category-row {
    display: flex;
    flex-direction: column; 
    margin-left: 470px; 
  }

  .col {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .category-row {
      margin-left: 0px;
    }
  }
</style>
