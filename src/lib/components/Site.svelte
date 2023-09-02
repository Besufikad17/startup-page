<script lang="ts">
  import Icon from "@iconify/svelte";

  export let iconName: string;
  export let url: string;
</script>

<main>
  <a href="{url}" target="_blank">
    <div class="card">
      <Icon icon={iconName} width="30" height="30" /> 
    </div>
  </a> 
</main>

<style>
  a {
    text-decoration: none;
    color: var(--theme-text);
  }

  .card {
    display: flex;
    width: 60px;
    height: 60px;
    border-style: solid;
    border-width: 2px;
    border-color: var(--theme-text);
    transition: transform .2s;
    margin-right: 30px;
    align-items: center;
    justify-content: center; 
  }

  .card:hover {
    transform: scale(1.5);
  }
</style>
