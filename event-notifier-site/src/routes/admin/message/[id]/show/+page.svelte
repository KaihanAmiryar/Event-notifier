<script>
	// @ts-nocheck
	
		import { page } from '$app/stores';
		import axios from "axios";
		import { onMount } from "svelte";
	
		let message = {}
	onMount(async ()=>{
		// @ts-ignore
		message = await axios.post("http://localhost:3000/api/message/show", {message_Id: $page.params.id})
		.then(res=> res.data.response)
		.catch(err=> console.log(err.data.message))
	})
	</script>
	
	<svelte:head>
		<title>نمایش پیغام</title>
	</svelte:head>
	
	<div class="details" style="direction: rtl;">
		<div class="event">
			<div class="cardHeader">
				<h6 class="me-4">نام:</h6>
				<p class="me-2">{message.name}</p>
			</div>
			<div class="cardHeader">
				<h6 class="me-4">ایمیل:</h6>
				<p class="me-2">{message.email}</p>
			</div>
			<div class="cardHeader">
				<h6 class="me-4">پیغام:</h6>
				<p class="me-2">{message.message}</p>
			</div>
			
			<div class="cardHeader">
				<h6 class="me-4">تاریخ: </h6>
				<p class="me-2">{message.date}</p>
			</div>
			<div class="cardHeader">
				<h6 class="me-4">وضعیت</h6>
				<span  class="mt-2 badge bg-success me-2">{message.status ?? "pending"}</span>
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
	