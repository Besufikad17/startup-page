<script lang="ts"> 
  import { LightTheme } from "../constants/themes"; 
  import type { Color, Theme } from "../utils/types";

  export let title: string;
  export let author: string;
  export let description: string;
  export let url: string;
  export let tags: string[];

  let currentTheme: Theme = LightTheme;
  let tagsMap: Map<string, Color> = new Map<string, Color>();
  tags.map((tag) => {
    tagsMap.set(tag, currentTheme.colors[tags.indexOf(tag)])
  });
</script>

<main>
  <a href={url}>
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
  @font-face {
    font-family: system-ui;
  }

  b, p, span {
    font-family: "system-ui"; 
  }

  b,p {
    color: black;
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
    color: black;
  }

  .author {
    color: grey;
  }

  .container { 
    width: 400px;
    height: auto;
    padding: 20px 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .container:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
      rgba(0, 0, 0, 0.12) 0px -12px 30px, 
      rgba(0, 0, 0, 0.12) 0px 4px 6px, 
      rgba(0, 0, 0, 0.17) 0px 12px 13px, 
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
