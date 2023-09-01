<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
  import ArticleCard from "./lib/components/ArticleCard.svelte"; 
  import Category from "./lib/components/Category.svelte";
  import Header from "./lib/components/Header.svelte";
  import { onMount } from "svelte";
  import { Article } from "./lib/models/article"; 
  import { categories } from "./lib/constants/sites";

  let articles: Article[] = [
    new Article("Test", "Test", "Test", "Test", ["Test", "Test", "Test"]),
    new Article("Test", "Test", "Test", "Test", ["Test", "Test", "Test"]),
    new Article("Test", "Test", "Test", "Test", ["Test", "Test", "Test"]),
    new Article("Test", "Test", "Test", "Test", ["Test", "Test", "Test"])
  ];
 
  onMount(async () => {
    
  });
</script>

<main>
  <Header />
  <div class="container">
    <div class="left-row">
    <div class="col">
      <div class="date-row">
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
  <div class="right-row">
    <div class="col">
      {#each categories as category}
        <Category name="{category.name}" sites="{category.sites}" /> 
      {/each}
    </div>
  </div>
  </div>  
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  
  .date-row, .row {
    display: flex;
    flex-direction: column; 
  }

  .row { 
    max-height: 400px;
    overflow-y: scroll;
  } 

  .right-row {
    display: flex;
    flex-direction: column;  
  }

  .left-row {
    display: flex;
    flex-direction: column;
  }

  .col {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
 
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
 
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .left-row, .right-row {
      margin-left: 0px;
    }
  }
</style>
