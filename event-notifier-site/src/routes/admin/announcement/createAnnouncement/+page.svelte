<script>
    import axios from "axios";
    import { goto } from '$app/navigation';

    let showMessage = false;


    let ann = {
        title:"",
        description:"",
        date:"",
        status:"",
        file:""
        
    }
    async function Addann(){
        await axios.post("http://localhost:3000/api/announcement/store",ann)
        .then((res) => showMessage = true)
        
    }


function hideSuccessMessage (){
    showMessage = false;
    goto('/admin/announcement')
}
</script>

<svelte:head>
    <title>Add Announcement</title>
</svelte:head>

{#if showMessage}
  <div class="success-message">
    موفقانه اضافه شد
    <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
    
  </div>
{/if}

<div class="details" style="direction: rtl;">
	<div class="news">
        <form class="form" on:submit|preventDefault={Addann}>
            <div class="form-group m-1">
                <label class="m-2">موضوع</label>
                <input type="text" class="form-control"
                bind:value={ann.title}>
            </div>
            
            <div class="form-group m-1 ">
                <label class="m-2">توضیحات</label>
                <textarea class="form-control"
                bind:value={ann.description} />
            </div>
            <div class="form-group m-1">
				<label>وضعیت</label>
				<select bind:value={ann.status} class="form-control">
					{#each ['pending', 'done', 'rejected'] as item}
						<option value={item}>{item}</option>
					{/each}
				</select>
			</div>
            <div class="form-group m-1 ">
                <label class="m-2">تاریخ</label>
                <input type="date" class="form-control" 
                bind:value={ann.date} />
            </div>

            <div class="form-group m-1 ">
                <label class="m-2">فایل</label>
                <input type="file" class="form-control" 
                bind:value={ann.file} />
            </div>
            

            <div class="form-group m-1">
                <button class="btn btn-primary col-lg-12" type="submit">submit</button>
            </div>
          
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
	.details .news {
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
