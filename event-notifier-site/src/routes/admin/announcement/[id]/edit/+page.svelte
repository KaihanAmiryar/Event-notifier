<script>
    // @ts-nocheck
    
        import { goto } from '$app/navigation';
    
        // @ts-nocheck
        import { page } from '$app/stores';
        import axios from 'axios';
        import { onMount } from 'svelte';

        let showMessage = false
        let ann = {};
        let ann_Id = $page.params.id;
        onMount(async () => {
            ann = await axios
                .post('http://localhost:3000/api/announcement/show', { ann_Id })
                .then((res) => res.data.response)
                .catch((err) => console.log(err.data.message));
        });
    
        async function handleSubmit() {
            await axios
                .post('http://localhost:3000/api/announcement/update', { ann_Id, ...ann })
                .then((res) =>{showMessage = true})
                .catch((err) => console.log(err));
        }


    function hideSuccessMessage (){
    showMessage = false;
    goto('/admin/announcement')
}
 

    </script>
    
    <svelte:head>
        <title>Edit Announce</title>
    </svelte:head>


    {#if showMessage}
  <div class="success-message">
    موفقانه اضافه شد
    <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
    
  </div>
{/if}
    
    <div class="details" style="direction: rtl;">
        <div class="event">
            <form class="form" on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <label class="ms-3">موضوع</label>
                    <input type="text" bind:value={ann.title} class="form-control m-2" />
                </div>

                <div class="form-group m-2">
                    <label class="ms-3">توضیحات</label>
                    <textarea bind:value={ann.description} class="form-control m-2" />
                </div>
                
                <div class="form-group m-2">
                    <label class="ms-3">وضعیت</label>
                    <select bind:value={ann.status} class="form-control">
                        {#each ['pending', 'done', 'rejected'] as item}
                            <option value={item}>{item}</option>
                        {/each}
                    </select>
                </div>
                <button type="submit" class="btn mt-3 btn-primary">Update</button>
            </form>
        </div>
    </div>
    
    <style>
        .details {
            position: relative;
            width: 100%;
            padding: 20px;
            display: grid;
            /* grid-template-columns: 2fr 1fr; */
            grid-gap: 30px;
            margin-top: 20px;
        }
        .details .event {
            position: relative;
            min-height: 300px;
            background: white;
            padding: 20px;
            box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
            border-radius: 20px;
        }
        .details .cardHeader {
            display: flex;
            align-items: baseline;
        }


        
    .success-message {
    background:green;
    border-radius:10px;
    position: fixed;
    margin-right:25%;
    width:20%;
    height:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:green(0, 0, 0, 0.5);
    z-index: 9999;

    }

     .ok-button {
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
    </style>
    