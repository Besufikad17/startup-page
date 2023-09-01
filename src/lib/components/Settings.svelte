<script lang="ts">
  import Button from "./Button.svelte";

  export let closeDialog: VoidFunction;

  const save = () => {

  }
</script>

<main>
  <div class="container">
    <h4>Settings</h4>
    <div class="action-section">
      <label for="themes">Themes: </label> 
      <select name="themes" id="themes-menu"> 
         <option>Default</option>
         <option>Gruvbox</option>
         <option>Tokyonight</option>
      </select>
    </div>
    <div class="action-section">
      <label for="mode">Mode: </label>
      <select name="mode" id="mode-menu"> 
         <option>Light</option>
         <option>Dark</option>
      </select>
    </div>
    <div class="action-section">
      <Button 
        text="Save" 
        bgColor="#fff" 
        fgColor="#000" 
        borderRadius="0px" 
        borderColor="#000"
        width="60px"
        height="30px"
        margin="10px"
        onClick={save}
      />
      <Button 
        text="Close" 
        bgColor="#fff" 
        fgColor="#000" 
        borderRadius="0px" 
        borderColor="#000"
        width="60px"
        height="30px"
        margin="10px"
        onClick={closeDialog}
      /> 
    </div>
  </div>
</main>

<style>
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
