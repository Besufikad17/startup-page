<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
  import ArticleCard from "./lib/components/ArticleCard.svelte";
  import { LightTheme } from "./lib/constants/themes"; 

  let tags: string[] = ["tech", "Software Testing"];
  let currentTheme: Theme = LightTheme;
</script>

<main>
  <div class="row">
    <div class="col">
      <div class="row">
        <DateTime/>
      </div><br/><br/>
      <div class="row">
        <ArticleCard title="Test" description="test blog" url="#" tags={tags} colors={currentTheme.colors}/>
      </div>
    </div>
  </div> 
</main>

<style>
  .row {
    display: flex;
    flex-direction: column;
  } 

  .col {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
</style>
