<script lang="ts">
  export let imgUrl: string;
  export let url: string;
</script>

<main>
  <a href="{url}" target="_blank">
    <div class="card">
      <img src="{imgUrl}" width="30px" height="30px" alt="">
    </div>
  </a> 
</main>

<style>
  a {
    text-decoration: none;
    color: black;
  }

  .card {
    display: flex;
    width: 60px;
    height: 60px;
    border-style: solid;
    border-width: 2px;
    margin-right: 30px;
    align-items: center;
    justify-content: center; 
  }
</style>
