<script>
    let modenight = false;

    function darknight (){
        modenight = true;
    }
</script>


<main>
    <button on:click={darknight}>dark</button>

    {#if modenight}
    <div class="dark">
        <p>kdfjsdakfjasfsajf</p>
        <p>kdfjsdakfjasfsajf</p>
        <p>kdfjsdakfjasfsajf</p>
        <p>kdfjsdakfjasfsajf</p>
        <p>kdfjsdakfjasfsajf</p>
    </div>
    {:else}
    <div class="light">
        <p>dfjsadkjf</p>
        <p>dfjsadkjf</p>
        <p>dfjsadkjf</p>
        <p>dfjsadkjf</p>
        <p>dfjsadkjf</p>
        <p>dfjsadkjf</p>
    </div>
    {/if}
    
</main>

<style>
    .dark{
        background-color:darkgray;
    }

    .light{
        background-color: blue;
    }

</style>