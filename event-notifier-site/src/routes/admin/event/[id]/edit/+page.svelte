<script>
// @ts-nocheck

	import { goto } from '$app/navigation';

	// @ts-nocheck
	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	
	let showMessage = false;
	let event = {};
	let event_Id = $page.params.id;
	onMount(async () => {
		event = await axios
			.post('http://localhost:3000/api/event/show', { event_Id })
			.then((res) => res.data.response)
			.catch((err) => console.log(err.data.message));
	});

	async function handleSubmit() {
		await axios
			.post('http://localhost:3000/api/event/update', { event_Id, ...event})
			.then((res) => showMessage = true)
			.catch((err) => console.log(err));
	}

	function hideSuccessMessage (){
    showMessage = false;
    goto('/admin/event')
}

</script>

<svelte:head>
	<title> مناسبت</title>
</svelte:head>

{#if showMessage}
<div class="success-message">
  موفقانه تغییر داده شد
  <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
  
</div>
{/if}


<div class="details" style="direction: rtl;">
	<div class="event">
		<form class="form" on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label>موضوع</label>
				<input type="text" bind:value={event.title} class="form-control m-2" />
			</div>
			<div class="form-group">
				<label>موقعیت</label>
				<input type="text" bind:value={event.location} class="form-control m-2" />
			</div>
			<div class="form-group">
				<label>توضیحات</label>
				<textarea bind:value={event.description} class="form-control m-2" />
			</div>
			<div class="form-group m-2">
				<label>وضعیت</label>
				<select bind:value={event.status} class="form-control">
					{#each ['pending','Checking', 'Rejected','Done','Closed'] as item}
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
