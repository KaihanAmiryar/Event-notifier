<script>
// @ts-nocheck
 import { isAuthenticated } from "../../auth";
	
	// if (!isAuthenticated()) {
	// 	goto("/login?alert=unAuthorized")
  	// }


	import axios from "axios";
	import { onMount } from "svelte";
    let data = []
	let ann = []
	let event = []
	let startIndex = 0;
	let endIndex = 10;
onMount(async ()=>{
    // @ts-ignore


	ann = await axios.get("http://localhost:3000/api/announcement/list")
	.then(res=>res.data.response)
	.catch(err=>console.log(err))

	event = await axios.get("http://localhost:3000/api/event/list")
	.then(res => res.data.response)
	.catch(err =>console.log(err))

	event.sort((a,b)=>new Date(b.startD) - new Date(a.startD))
})
</script>
<svelte:head>
	<title>Admin dashboard</title>
</svelte:head>
		<!------------- card-------------------------------->
		<div class="cardbox" style="direction: rtl;">
			<div class="card">
				<div>
					<div class="numbers">{event.length}</div>
					<div class="cardname"> daily event records   </div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="numbers">{event.length}</div>
					<div class="cardname">monthly event records </div>
				</div>
			</div>

			<div class="card">
				<div>
					<div class="numbers">{data.length}</div>
					<div class="cardname">daily crime records  </div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="numbers">{data.length}</div>
					<div class="cardname" >  monthly crime records  </div>
				</div>
			</div>
		</div>
		<!-- order Deails list------------------>

		<div class="details" style="direction: rtl;">
			<div class="recentOrders">
				<div class="cardHeader">
					<h6>اخرین اتفاقات</h6>
					<a href="admin/crime" class="btn btn-outline-primary ">نمایش همه</a>
				</div>
				<table>
					<thead>
						<tr>
							<td>NO.</td>
							<td>موضوع</td>
							<td>ولایت</td>
							<td>ولسوالی</td>
							<td>تاریخ</td>
						</tr>
					</thead>

					<tbody>
						{#each event.slice(startIndex, endIndex) as row,index}
						<tr>
							<td>{index + 1}</td>
							<td>{row.title}</td>
							<td>{row.province}</td>
							<td>{row.district}</td>
							<td>{row.startD}</td>
						</tr>
						{/each}
						

					</tbody>
				</table>
			</div>
			<!------new user ---------------------->
			<div class="recentUsers">
				<div class="cardHeader">
					<h6>آخرین آگهی</h6>
				</div>
				<table>
					<thead>
						<tr>
							<td>No</td>
							<td>موضوع</td>
							<td>تاریخ</td>
							<td>وضعیت</td>
						
						</tr>
					</thead>

					<tbody>
						{#each ann as row,index}
						<tr>
							<td>{index + 1}</td>
							<td>{row.title} </td>
							<td>{row.date}</td>
							<td>
								<span style="width:55px;" class="badge" class:bg-primary={row.status==='pending'} class:bg-success={row.status==='done'} class:bg-danger={row.status==='rejected'}>{row.status}</span>
							</td>
						</tr>
						{/each}
						

					</tbody>
				</table>
			</div>
		</div>	
<style>
	/* topbar style ----------- */

	/* card style ------- */

	 .cardbox{
		width:100%;
		padding:5px;
		display:grid;
		grid-template-columns: repeat(4,1fr);
		grid-gap:30px;
	

	 }
	 .cardbox .card{
		position:relative;
		background:white;
		border-radius:20px;
		display:flex;
		justify-content: space-between;
		cursor: pointer;
		box-shadow:0 7px 25px rgba(0, 0, 0, 0.08);
		height:80px;
		text-align: center;
	 }
	 .cardbox .card .numbers{
		position:relative;
		font-size:2rem;
		color:rgb(5, 5, 58);

	 }
	 .cardbox .card .cardname{
		color:black;
		font-size:1rem;
		 
	 }
	
	 
	 ion-icon {
			font-size:1.6em;
			
		}
	 .cardbox .card:hover{
		background:rgb(3, 3, 57);
	 }
	 .cardbox .card:hover .numbers,
	 .cardbox .card:hover .cardname,
	 .cardbox .card:hover .iconBx{
		color:white;
	 }
	 /*-----recent style -----*/

	 .details{
		position: relative;
		width:100%;
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		grid-gap:10px;
		
	 }
	 .details .recentOrders{
	
		background: white;
		padding:20px;
		box-shadow: 0 7px 25px rgba(0,0,0,0.08);
		border-radius: 10px;
	 }
	 .details .cardHeader{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		
	 }
	 .cardHeader h6{
		margin-right:20px;
	 }
	 .cardHeader .btn{
		position: relative;
		padding:5px 10px;
		border-radius: 6px;
	 }
	 .details table{
		width:100%;
		border-collapse: collapse;
		
	 }


	 .details .recentOrders tbody tr:hover{
		background: rgb(6, 6, 82);
		color:white; 
	 }
	 .details .recentOrders table tr td:last-child{
		text-align: end;
	 }
	


	/*recent User style */
	.details .recentUsers {
		background: white;
		box-shadow: 0 7px 25px rgba(0,0,0,0.08);
		border-radius: 10px;
		padding:10px;
	}
	.details table thead td{
		font-weight: 550;
		border-bottom: 1px solid black;

	 }
	 .details .recentUsers table tr{
		color:blcak;
		border-bottom:1px solid rgba(0,0,0,0.1);
		;
	 }
	 .details .recentUsers table tr:last-child{
		border-bottom: none;
	 }
	 .details .recentUsers tbody tr:hover{
		background: rgb(6, 6, 82);
		color:white; 
		;
	 }
	 .details .recentUsers table tr td:last-child{
		text-align: end;
	 }
	 .details .recentUsers table tr :nth-child(2){
		text-align:center;
	 }
	
</style>