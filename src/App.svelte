<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
  import ArticleCard from "./lib/components/ArticleCard.svelte"; 
  import Category from "./lib/components/Category.svelte";
  import Header from "./lib/components/Header.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import { Article } from "./lib/models/article"; 
  import { categories } from "./lib/constants/sites";
  import { DefaultLightTheme, themeMap } from "./lib/constants/themes";
  

  let articles = [];

  const fetch = async() => { 
    axios.get("https://dev.to/api/articles").then(result => {
      let datas = [];
      for(var i = 0; i < 30; i++) {
          datas.push(
            new Article(
              result.data[i]["title"],
              result.data[i]["user"]["username"], 
              result.data[i]["description"],
              result.data[i]["url"],
              result.data[i]["tag_list"]
            )
          ); 
      }
      articles = [...datas];
    }).catch(err => {
      console.log(err)
    })
  }

  onMount(async () => {
    fetch(); 
    if(localStorage.getItem("theme")) {
      let theme = themeMap.get(localStorage.getItem("theme"));
      document.documentElement.style.setProperty('--theme-background', theme.bg.hexValue);
      document.documentElement.style.setProperty('--theme-text', theme.fg.hexValue);
      document.documentElement.style.setProperty('--theme-name', theme.name)
    }else {
      document.documentElement.style.setProperty('--theme-background', DefaultLightTheme.bg.hexValue);
      document.documentElement.style.setProperty('--theme-text', DefaultLightTheme.fg.hexValue); 
      document.documentElement.style.setProperty('--theme-name', DefaultLightTheme.name)
    }
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
  main {
    background-color: var(--theme-background);
    color: var(--theme-text);
  }

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
    display: none;
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
