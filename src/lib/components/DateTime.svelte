<script lang="ts"> 
  import { dayNames, monthNames } from "../constants/date";
  
  let now = new Date();
</script>

<main>
 <div>
   <h2 class="time">{now.getHours() + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes())}</h2>
   <p class="day">{dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear()}</p>
 </div>  
</main>

<style>
  @font-face {
    font-family: system-ui;
  }

  h2, p {
    margin: 0;
  }

  .time { 
    font-family: "system-ui";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .day {
    font-size: 15px;
    font-family: "system-ui";
  }

</style>
