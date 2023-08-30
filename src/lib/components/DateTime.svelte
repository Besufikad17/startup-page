<script lang="ts">
  let now = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday" 
  ];

</script>

<main>
 <div>
   <p class="time">{now.getHours() + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes())}</p>
   <p class="day">{dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear()}</p>
 </div>  
</main>

<style>
  @font-face {
    font-family: system-ui;
  }

  p {
    margin: 0;
  }

  .time {
    font-size: 32px;
    font-family: "system-ui";
  }

  .day {
    font-size: 15px;
    font-family: "system-ui";
  }

</style>
