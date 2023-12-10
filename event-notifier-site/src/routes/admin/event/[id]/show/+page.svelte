<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	let laible = []
	let event = {};

	
	onMount(async () => {
		// @ts-ignore
		event = await axios
			.post('http://localhost:3000/api/event/show', { event_Id: $page.params.id })
			.then((res) => res.data.response)
			.catch((err) => console.log(err.data.message));

			laible = await axios
			.post('http://localhost:3000/api/laible/show', { laible_Id: $page.params.id })
			.then((res) => res.data.response)
			.catch((err) => console.log(err.data.message));
	});
</script>

<svelte:head>
	<title>نمایش مناسبت</title>
</svelte:head>

<div class="details" style="direction: rtl;">
	<div class="event">
		<div class="cardHeader">
			<h6 class="me-4">مسول:</h6>
			<p style="margin-right:10px;">
				
				{event.username}
			
			</p>
		</div>

		<div class="cardHeader">
			<h6 class="me-4">موضوع:</h6>
			<p style="margin-right:10px;">{event.title}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">ولایت: </h6>
			<p style="margin-right:10px;">{event.province}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">ولسوالی: </h6>
			<p style="margin-right:10px;">{event.district}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">موقعیت:</h6>
			<p style="margin-right:10px;">
				<a href="https://www.google.com/maps/search/?api=1&query{event.location}">موقعین جغرافیایی</a> </p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">توضیحات:</h6>
			<p style="margin-right:10px;">{event.description}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">فایل:</h6>
			<p style="margin-right:10px;">{event.file}</p>
		</div>

		<div class="cardHeader">
			<h6 class="me-4">شروع(زمان):</h6>
			<p style="margin-right:10px;">{event.startT}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">ختم(زمان):</h6>
			<p style="margin-right:10px;">{event.endT}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">شروع (روز): </h6>
			<p style="margin-right:10px;">{event.startD}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">پایان(روز): </h6>
			<p style="margin-right:10px;">{event.endD}</p>
		</div>
		<div class="cardHeader">
			<h6 class="me-4">Status: </h6>
			<span class="mt-2 badge bg-success" style="margin-right:10px;">{event.status ?? 'pending'}</span>
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
