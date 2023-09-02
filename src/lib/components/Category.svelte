<script lang="ts">
  import Site from "./Site.svelte";
  import { SiteModel }  from "../models/site";

  export let name: string;
  export let sites: SiteModel[];  
</script>

<main>
  <h2>{name}</h2>
  <div class="container"> 
    {#each sites as site}
      <Site iconName="{site.iconName}" url="{site.url}" />
    {/each}
  </div>
</main>

<style>
  h2 { 
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
    margin-bottom: 20px;
  } 
</style>
