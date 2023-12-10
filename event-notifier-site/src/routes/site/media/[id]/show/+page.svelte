<script>
	// @ts-nocheck
	
		import { page } from '$app/stores';
		import axios from "axios";
		import { onMount } from "svelte";
	
		let news = {}
	onMount(async ()=>{
		// @ts-ignore
		news = await axios.post("http://localhost:3000/api/news/show", {news_Id: $page.params.id})
		.then(res=> res.data.response)
		.catch(err=> console.log(err.data.message))
	})
	</script>
	
	<svelte:head>
		<title>News</title>
	</svelte:head>
	
	<div class="details">
		<div class="event">
			<div class="cardHeader">
				<h4>{news.title}</h4>
			</div>
			
			<div class="cardHeader">
				<p>{news.description}</p>
			</div>
			<div class="cardHeader">
				<p>{news.file}</p>
			</div>

			
			<div>
				date: {news.createdAt}
			</div>
				<span class="mt-2 badge bg-success">{news.status ?? "pending"}</span>
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
	