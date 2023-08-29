<script lang="ts">
  import { Color } from "../utils/types";

  export let title: string;
  export let description: string;
  export let url: string;
  export let tags: string[];
  export let colors: Color[];

  let index: number = 0;
</script>

<main>
  <a href={url}>
    <div class="container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div class="tag-container">
        {#each tags as tag}
          <span style="background-color: ${colors[index]};">{tag}</span>
          {index++}
        {/each}
      </div> 
    </div>
  </a>
</main>

<style>
  @font-face {
    font-family: system-ui;
  }

  h2, p, span {
    font-family: "system-ui";
    color: black;
  }

  .container {
    width: 500px;
    height: 200px;
    padding: 10px;
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

  a {
    text-decoration: none;
  }

  span {

  }
</style>
