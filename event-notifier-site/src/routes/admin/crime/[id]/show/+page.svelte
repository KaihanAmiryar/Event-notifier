<script>
// @ts-nocheck

	import { page } from '$app/stores';
	import axios from "axios";
	import { onMount } from "svelte";

	let data = {}
onMount(async ()=>{
	// @ts-ignore
	data = await axios.post("http://localhost:3000/api/crime/show", {crime_Id: $page.params.id})
	.then(res=> res.data.response)
	.catch(err=> console.log(err.data.message))
})

</script>

<svelte:head>
	<title>نمایش جرم</title>
</svelte:head>

<div class="details" style="direction: rtl;">
	<div class="event">
		<div class="cardHeader">
            <h6 class="me-4">ولایت:</h6>
            <p style="margin-right: 10px;">{data.province}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">ولسوالی:</h6>
            <p style="margin-right: 10px;">{data.district}</p>
        </div>
        <div class="cardHeader">
            <h6 class="me-4">وضعیت:</h6>
			<p>{data.status}</p>
        </div>
        <div class="cardHeader">
            <h6 class="me-4">موقعیت:</h6>
            <p><a href="https://www.google.com/maps/search/?api=1&query={data.location}">موقعیت جغرافیایی</a></p>
        </div>
        <div class="cardHeader">
            <h6 class="me-4">توضیحات:</h6>
            <p style="margin-right: 10px;">{data.description}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">فایل:</h6>
            <p style="margin-right: 10px;">{data.file}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">نام:</h6>
            <p style="margin-right: 10px;">{data.firstname}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">تخلص:</h6>
            <p style="margin-right: 10px;">{data.lastname}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">ایمیل:</h6>
            <p style="margin-right: 10px;">{data.email}</p>
        </div>
		<div class="cardHeader">
            <h6 class="me-4">نمبر مبایل:</h6>
            <p style="margin-right: 10px;">{data.phoneN}</p>
        </div>
		
        <div class="cardHeader">
            <h6 class="me-4">زمان: </h6>
			<p style="margin-right: 10px;"> {data.date}</p> 
        </div>
		<div class="cardHeader">
			<h6 class="me-4">تاریخ: </h6>	
			<p style="margin-right: 10px;">{data.time}</p> 
		</div>
		<div class="cardHeader">
			<h6 class="me-4">وضعیت: </h6>
            <span class="mt-2 badge bg-success">{data.status ?? "pending"}</span>
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
