<script lang="ts"> 
  import { DefaultLightTheme, themeMap } from "../constants/themes"; 
  import type { Color, Theme } from "../utils/types";

  export let title: string;
  export let author: string;
  export let description: string;
  export let url: string;
  export let tags: string[];

  const maptagToColor = (tags: string[]) => {
    let myMap: Map<string, Color> = new Map<string, Color>();
    tags.map(tag => {
      myMap.set(tag, currentTheme.colors[tags.indexOf(tag)])
    });
    return myMap;
  }

  let currentTheme: Theme = localStorage.getItem("theme") ? 
    themeMap.get(localStorage.getItem("theme")) : DefaultLightTheme;
  let tagsMap: Map<string, Color> = maptagToColor(tags);
 
</script>

<main>
  <a href={url} target="_blank">
    <div class="container">
      <b>{title}</b><br/>
      <span class="author">{author}</span><br/>
      <p>{description}</p>
      <div class="tags-container">
        {#each tagsMap.keys() as tag}
          <div class="tag-container" style="background-color: {tagsMap.get(tag).hexValue};">
            <span class="tag">{tag}</span>
          </div> 
        {/each}
      </div> 
    </div>
  </a>
</main>

<style>
  b,p {
    color: var(--theme-text);
  }

  a {
    text-decoration: none;
  }

  span {
    font-size: 10px; 
  }

  p {
    font-size: 13px;
  }

  .tag {
    color: var(--theme-text);
  }

  .author {
    color: grey;
  }

  .container { 
    width: 400px;
    height: auto;
    padding: 20px 10px;
    margin-bottom: 20px; 
    transition: transform .2s;
  }

  .container:hover {
    border-style: solid;
    border-width: 2px;
    border-color: var(--theme-text); 
  }

  .tags-container {
    display: flex;
    flex-direction: row;
    justify-items: end;
  }

  .tag-container {
    padding: 4px;
    border-radius: 10px;
    margin-right: 6px;
  }
</style>
