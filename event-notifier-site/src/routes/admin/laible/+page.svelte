<script>
	// @ts-nocheck
	
		import axios from "axios";
		import { onMount } from "svelte";
	import SearchL from "../../../component/searchL.svelte";
		let laible = []
	onMount(async ()=>{
		// @ts-ignore
		laible = await axios.get("http://localhost:3000/api/laible/list")
		.then(res=> res.data.response)
		.catch(err=> console.log(err))
	})
	
	async function deleteRow(id){
		await axios.post("http://localhost:3000/api/laible/delete", {laible_Id: id})
		.then(res=> {alert('موفقانه حذف گردید'),window.location.reload()})
		.catch(err=> console.log(err))
	}
		
	</script>
	<svelte:head>
		<title>laible</title>
	</svelte:head>
	<div class="details" style="direction: rtl;">
		<div style="display: flex;">
			<p style="margin-right:35px;font-size:18px;margin-left:25px">مسولین</p>
			<SearchL />
		</div>
		<div class="cardHeader">
		</div>
		<div class="Users">
			
			<table>
				<thead style="border-bottom:1px solid black;">
					<tr>
						<td>No.</td>
						<td>نام</td>
                        <td>تخلص</td>
						<td>ایمیل</td>
						<td>مبایل نمبر</td>
						<td>ولایت</td>
						<td>ولسوالی</td>
						<td>نمایش</td>
						<td>تغیر</td>
						<td>حذف</td>
					</tr>
				</thead>
	
				<tbody>
					
					{#each laible as row,index}
					<tr>
						<td>{index + 1}</td>
						<td>{row.firstname}</td>
                        <td> {row.lastname}</td>
						<td>{row.email}</td>
						<td>{row.phone}</td>
						<td>{row.province}</td>
						<td>{row.district}</td>
						
						<td>
							<a href="/admin/laible/{row._id}/show" class="btn btn-primary btn-sm">
								<ion-icon name="eye-outline"></ion-icon>
							</a>
						</td>
						<td>
							<a href="/admin/laible/{row._id}/edit" class="btn btn-success btn-sm">
								<ion-icon name="pencil-outline"></ion-icon>
							</a>
						</td>
						<td>
							<button on:click={()=> deleteRow(row._id)} class="btn btn-danger btn-sm">
								<ion-icon name='trash-outline'></ion-icon>
							</button>
						</td>
					</tr>
					{/each}
					
	
					
				</tbody>
			</table>
		</div>
	</div>
	
	<style>
		
		 .details{
			position: relative;
			width:100%;
			display: grid;
			/* grid-template-columns: 2fr 1fr; */
			margin-top: 10px;
		 }
		 .details .Users{
			position: relative;
			display: grid;
			background: white;
			padding: 10px;
			box-shadow: 0 7px 25px rgba(0,0,0,0.08);
			border-radius: 10px;
		 }
		 tr td{
			border-radius:2px;
			text-align: center;
	
		 }
		 .Users thead tr td{
			font-size:15px;
			font-weight:bolder;
			padding-bottom: 12px;
			border-bottom:1px solid black;

		 }
		 .Users tbody tr:hover{
			box-shadow: 10px 9px 45px rgba(0,0,0,0.08);
			background: rgb(119, 119, 132);
			border-radius:20px;
			color:white;
	
		 }
		 .details .cardHeader{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		 }
		 .details .Users table tr td:last-child{
			text-align:end;
		 }
	</style>