<script lang="ts">
  export let closeDialog: VoidFunction;

  let theme = localStorage.getItem("theme") ? 
    localStorage.getItem("theme").split("-")[0] : 
    "default";
  
  let mode = localStorage.getItem("theme") ? 
    localStorage.getItem("theme").split("-")[1] : 
    "light";

  const save = () => {
    localStorage.setItem("theme", `${theme}-${mode}`);
    closeDialog();
    location.reload();
  }
</script>

<main>
  <div class="container">
    <h4>Settings</h4>
    <div class="action-section">
      <label for="themes">Themes: </label> 
      <select name="themes" id="themes-menu" bind:value={theme}> 
         <option value="default">Default</option>
         <option value="gruvbox">Gruvbox</option> 
      </select>
    </div>
    <div class="action-section">
      <label for="mode">Mode: </label>
      <select name="mode" id="mode-menu" bind:value={mode}> 
         <option value="light">Light</option>
         <option value="dark">Dark</option>
      </select>
    </div>
    <div class="action-section">
      <button on:click={save}>Save</button>
      <button on:click={closeDialog}>Close</button> 
    </div>
  </div>
</main>

<style>
  main {
    background-color: var(--theme-background);
    color: var(--theme-text);
  }

  button {
    background-color: var(--theme-background);
    color: var(--theme-text);
    width: 60px;
    height: 30px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--theme-text);
  }

  .container {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
  }

  .action-section {
    display: flex;
    flex-direction: row;
    padding: 8px;
  }

  .action-section * {
    float: left;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  option {
    width: 70px;
    height: 30px;
  }
</style>
