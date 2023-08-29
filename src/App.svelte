<script lang="ts">
  import DateTime from "./lib/components/DateTime.svelte";
</script>

<main>
  <div class="row">
    <div class="col">
      <DateTime/>
    </div>
  </div> 
</main>

<style>
  .row {
    display: flex;
    flex-direction: column;
  } 

  .col {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
</style>
