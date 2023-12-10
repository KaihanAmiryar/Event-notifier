<script>
// @ts-nocheck

	import { page } from '$app/stores';
	import axios from "axios";
	import { onMount } from "svelte";

	let laible = {}
onMount(async ()=>{
	// @ts-ignore
	laible = await axios.post("http://localhost:3000/api/laible/show", {laible_Id: $page.params.id})
	.then(res=> res.data.response)
	.catch(err=> console.log(err.data.message))
})
</script>

<svelte:head>
	<title>laible Show</title>
</svelte:head>

<div class="details">
	<div class="event">
        <div class="cardHeader">
            <h4 class="me-4">نام:</h4>
            <p>{laible.firstname}</p>
        </div>
        <div class="cardHeader">
            <h4 class="me-4">تخلص:</h4>
            <p class="me-2">{laible.lastname}</p>
        </div>
        <div class="cardHeader">
            <h4 class="me-4">ایمیل:</h4>
            <p>{laible.email}</p>
        </div>
		<div class="cardHeader">
            <h4 class="me-4">شماره</h4>
            <p>{laible.phone}</p>
        </div>
        <div>
            date: {laible.createdAt}
        </div>
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
