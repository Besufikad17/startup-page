<script lang="ts">
  export let text: string = ``;
  export let bgColor: string = `white`;
  export let fgColor: string = `black`;
  export let borderRadius: string = `0px`;
  export let borderColor: string = `black`;
  export let width: string;
  export let height: string;
  export let margin: string;
  export let onClick: VoidFunction;
</script>

<button 
  style="
    width: {width};
    height: {height};
    background-color: {bgColor};
    color: {fgColor};
    border-style: solid;
    border-width: 2px;
    border-radius: {borderRadius};
    border-color: {borderColor};
    margin: {margin};
  "
  on:click={onClick}
>
  {text}  
</button>

