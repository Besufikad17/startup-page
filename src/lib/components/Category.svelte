<script lang="ts">
  import Site from "./Site.svelte";
  import type { SiteType }  from "../utils/types";

  export let name: string;
  export let sites: SiteType[];  
</script>

<main>
  <h2>{name}</h2>
  <div class="container"> 
    {#each sites as site}
      <Site imgUrl="{site.imgUrl}" url="{site.url}" />
    {/each}
  </div>
</main>

<style>
  @font-face {
    font-family: system-ui;
  }

  h2 {
    font-family: "system-ui";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-items: end;
    padding: 4px;
  } 
</style>
