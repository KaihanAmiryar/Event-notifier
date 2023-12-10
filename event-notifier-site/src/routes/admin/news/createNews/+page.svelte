<script>
    	import { goto } from '$app/navigation';

    import axios from "axios";
    let news = {
        title:"",
        description:"",
        location:"",
        file:"",
        date:""
    }
    async function Addnews(){
        await axios.post("http://localhost:3000/api/news/store",news)
        .then((res) => goto('/admin/news?alert=success'))
			.catch((err) => console.log(err));
        console.log('this is :'+ news)
        
    }
 
</script>

<svelte:head>
    <title>Add News</title>
</svelte:head>

<div class="details">
	<div class="news">
        <form class="form" on:submit|preventDefault={Addnews}>
            <div class="form-group m-1">
                <label class="m-2">Title</label>
                <input type="text" class="form-control"
                bind:value={news.title}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">location</label>
                <input type="text" class="form-control"
                bind:value={news.location}>
            </div>
            <div class="form-group m-1 ">
                <label class="m-2">Description</label>
                <textarea class="form-control"
                bind:value={news.description} />
            </div>
            <div class="form-group m-1">
                <label class="m-2">file</label>
                <input type="file" class="form-control"
                bind:value={news.file}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">date</label>
                <input type="date" class="form-control"
                bind:value={news.date}>
            </div>

            <div class="form-group m-1">
                <button class="btn btn-primary col-lg-12" type="submit" >Add news</button>
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
</style>
