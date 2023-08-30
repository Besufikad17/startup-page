<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
  import ArticleCard from "./lib/components/ArticleCard.svelte";
  import { LightTheme } from "./lib/constants/themes"; 
  import type { Color, Theme } from "./lib/utils/types";

  let tags: string[] = ["modernweb", "webp", "frontend", "ecofriendly"];
  let currentTheme: Theme = LightTheme;
  let tagsMap = new Map<string, Color>();

  tags.map((tag) => {
    tagsMap.set(tag, currentTheme.colors[tags.indexOf(tag)])
  });

</script>

<main>
  <div class="row">
    <div class="col">
      <div class="row">
        <DateTime/>
      </div><br/><br/>
      <div class="row">
        <ArticleCard 
          title="The Power of WebP"
          author="ekeijl"
          description="How WebP can make your site load faster, and help save the planet." 
          url="https://dev.to/nataliedeweerd/the-power-of-webp-2dlc" 
          tagsMap={tagsMap} />
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
