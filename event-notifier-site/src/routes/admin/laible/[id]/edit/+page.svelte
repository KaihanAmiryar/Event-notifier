<script>
// @ts-nocheck
import { page } from '$app/stores';
import axios from "axios";
import { onMount } from "svelte";

let data = {}

onMount(async ()=>{
	data = await axios.post("http://localhost:3000/api/event/show", {eventId: $page.params.id})
	.then(res=> res.data.response)
	.catch(err=> console.log(err.data.message))
})


async function handleSubmit(){
}

</script>

<svelte:head>
	<title>Event Edit</title>
</svelte:head>

<div class="details">
	<div class="event">
        <form class="form" on:submit|preventDefault={handleSubmit}>
            <div class="form-group">
                <label>Subject</label>
                <input type="text" bind:value={data.subject} class="form-control m-2">
            </div>
            <div class="form-group">
                <label>location</label>
                <input type="text" bind:value={data.location} class="form-control m-2">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea bind:value={data.description} class="form-control m-2"></textarea>
            </div>
            <div class="form-group m-2">
                <label>Status</label>
                <select items={["pending", "done", "rejected"]} let:item bind:value={data.status} class="form-control">
                    <option>{item}</option>
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
</style>
