<script>
	// @ts-nocheck
	
		import axios from "axios";
		import { onMount } from "svelte";
		let user = []
	onMount(async ()=>{
		// @ts-ignore
		user = await axios.get("http://localhost:3000/api/user/list")
		.then(res=> res.data.response)
		.catch(err=> console.log(err))
	})
	
	async function deleteRow(id){
		await axios.post("http://localhost:3000/api/user/delete", {userId: id})
		.then(res=> console.log(res.data.message))
		.catch(err=> console.log(err))
	}
		
	</script>
	<svelte:head>
		<title>Users</title>
	</svelte:head>
	<div class="details" style="direction: rtl;">
		<p style="margin-right:35px;font-size:18px">کاربران</p>
		<div class="cardHeader">
		</div>
		<div class="Users">
			
			<table>
				<thead>
					<tr>
						<td>No.</td>
						<td>نام کاربری</td>
						<td>ایمیل</td>
						<td>مبایل نمبر</td>
						<td>نمایش</td>
						<td>تغیر</td>
						<td>حذف</td>
					</tr>
				</thead>
	
				<tbody>
					
					{#each user as row,index}
					<tr>
						<td>{index + 1}</td>
						<td>{row.firstname}  {row.lastname}</td>
						<td>{row.email}</td>
						<td>{row.phone}</td>
						<td>
							<a href="/admin/users/{row._id}/show" class="btn btn-primary btn-sm">
								<ion-icon name="eye-outline"></ion-icon>
							</a>
						</td>
						<td>
							<a href="/admin/users/{row._id}/edit" class="btn btn-success btn-sm">
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
			padding:10px;
			display: grid;
			/* grid-template-columns: 2fr 1fr; */
			grid-gap:10px;
			margin-top: 20px;
		 }
		 .details .Users{
			position: relative;
			display: grid;
			background: white;
			box-shadow: 0 7px 25px rgba(0,0,0,0.08);
			border-radius: 20px;
		 }
		 tr td{
			padding-left:30px;
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
			background: rgb(6, 6, 86);
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