<script lang="ts">
  import { onMount } from "svelte";
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
      <img 
         src="../src/assets/images/icons8-settings-50.png" 
         width="30" 
         height="30" 
         alt="settings"
      />
    </button>
  </div>
  <dialog id="setting">
    <Settings closeDialog={closeDialog} />
  </dialog>
</main>

<style>
  .parent {
    width: auto;
    height: 50%;
    overflow: hidden;
    padding: 20px 10px;
    background-color: rgb(255, 255, 255);
  }
  
  .logo {
    float: right;
    margin-left: 10px;
    border-style: none;
    background-color: white;
  }

  dialog {
		border-width: 2px;
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
