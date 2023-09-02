<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import Settings from "./Settings.svelte";

  let dialog;

  onMount(() => {
    dialog = document.getElementById("setting");
  });

  const showDialog = () => {
     dialog['show']();
  }

  const closeDialog = () => {
     dialog.close();
  }
</script>

<main>
  <div class="parent" >
    <button class="logo" on:click={showDialog}>
      <Icon icon="material-symbols:settings" width="30" height="30"/> 
    </button>
  </div>
  <dialog id="setting">
    <Settings closeDialog={closeDialog} />
  </dialog>
</main>

<style>
  main {
    background-color: var(--theme-background);
    color: var(--theme-text);
  }

  .parent {
    width: auto;
    height: 50%;
    overflow: hidden;
    padding: 20px 10px;
    background-color: var(--theme-background);
  }
  
  .logo {
    float: right;
    margin-left: 10px;
    border-style: none;
    background-color: var(--theme-background);
    color: var(--theme-text);
  }
  
  dialog {
    background-color: var(--theme-background);
    border-width: 1px;
    border-color: var(--theme-text);
		transition: all 2s;
	}
  
  dialog::backdrop {
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
    animation: fade-in 1s;
  }

  @keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
</style>
