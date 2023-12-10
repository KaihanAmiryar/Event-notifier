<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	// @ts-nocheck

	import axios from 'axios';
	import { onMount } from 'svelte';
	import SearchC from '../../../component/searchC.svelte';

	let showMessage = false;
	let data = [];

	let deleteConfirmation = false;
    let deleteId = "";

	let startIndex = 0;
  let endIndex = 13;

	onMount(async () => {
		// @ts-ignore
		data = await axios
			.get('http://localhost:3000/api/crime/list')
			.then((res) => res.data.response)
			.catch((err) => console.log(err));

			// مرتب‌سازی ردیف‌ها بر اساس تاریخ
		data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	});

	// let alert = $page.query
	
    async function deleteRow(id) {
        deleteId = id;
        deleteConfirmation = true;
    }

    function deleteConfirmed() {
        axios
            .post("http://localhost:3000/api/crime/delete", { crime_Id: deleteId })
            .then((res) => {
                showMessage = true;
                deleteConfirmation = false;
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
	
	function deleteCanceled() {
		deleteConfirmation = false;
	}


	
	function showNextRows() {
    startIndex += 13;
    endIndex += 13;
  }

  function showPreviousRows() {
    startIndex -= 13;
    endIndex -= 13;
  }



</script>

<svelte:head>
	<title>Crimes</title>
</svelte:head>

{#if deleteConfirmation}
<div class="confirmation-modal">
	<div class="confirmation-message">
		آیا میخواهید حذف کنید؟
	</div>
	<div class="confirmation-buttons">
		<button class="btn btn-outline-primary ms-4" on:click={deleteConfirmed}>بلی</button>
		<button class="btn btn-outline-danger me-4" on:click={deleteCanceled}>نخیر</button>
	</div>
</div>
{/if}


<div class="details" style="direction: rtl;">
	<div style="display: flex;">
		<p style="margin-right:25px;font-size:18px;margin-left:30px">جرایم</p>
		<SearchC />
	</div>
	<div class="recentEvents">
	  <div class="cardHeader" />
  
	  <table>
		<thead style="border-bottom:1px solid black;">
		  <tr>
			<td>No.</td>
			<td>موضوع</td>
			<td>ولایت</td>
			<td>ولسوالی</td>
			<td>تاریخ</td>
			<td>ساعت</td>
			<td>وضعیت</td>
			<td>نمایش</td>
			<td>تغییر</td>
			<td>حذف</td>
		  </tr>
		</thead>
  
		<tbody>
		  {#each data.slice(startIndex, endIndex) as row, index}
			<tr>
			  <td>{index + 1 + startIndex}</td>
			  <td>{row.subject}</td>
			  <td>{row.province}</td>
			  <td>{row.district}</td>
			  <td>{row.date}</td>
			  <td>{row.time}</td>
			  <td>
				<span
				  class="badge"
				  style="width:65px;" 
				  class:bg-primary={row.status === 'pending'}
				  class:bg-secondary={row.status === 'Checking'}
				  class:bg-success = {row.status === 'Done'}
				  class:bg-danger={row.status === 'Rejected'}
				  class:bg-warning={row.status==='Closed'}
				  >{row.status}</span>
			  </td>
			  <td>
				<a href="/admin/crime/{row._id}/show" class="btn-sm btn-primary">
				  <ion-icon name="eye-outline" />
				</a>
			  </td>
			  <td>
				<a href="/admin/crime/{row._id}/edit" class=" btn-sm btn-success">
				  <ion-icon name="pencil-outline" />
				</a>
			  </td>
			  <td>
				<button
				  on:click={() => deleteRow(row._id)}
				  class=" btn-sm btn-danger"
				  style="border:none">
				  <ion-icon name="trash-outline" />
				</button>
			  </td>
			</tr>
		  {/each}
		</tbody>
	  </table>
  
	  <div>
		{#if startIndex > 0}
		  <button on:click={showPreviousRows}  class="btn btn-outline-primary" style="width:100px;">قبلی</button>
		{/if}
		{#if endIndex < data.length}
		  <button on:click={showNextRows} class="btn btn-outline-primary" style="width:100px;">بعدی...</button>
		{/if}
	  </div>
	</div>
  </div>

<style>
	.details {
		position: relative;
		width: 100%;
		display: grid;
		margin-top: 10px;
	}
	.details .recentEvents {
		position: relative;
		display: grid;
		background: white;
		box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		padding: 10px;
	}
	tr td {
		border-radius: 2px;
		text-align: center;
	}
	.recentEvents thead tr td {
		font-size: 15px;
		font-weight: bolder;
	}
	.recentEvents tbody tr:hover {
		box-shadow: 10px 9px 45px rgba(0, 0, 0, 0.08);
		background: rgb(181, 181, 201);
		border-radius: 20px;
	}
	.details .cardHeader {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.details .recentEvents table tr td:last-child {
		text-align: end;
	}

	.confirmation-modal {
    top:10%;
    left:44%;
    transform: translate(-50%, -50%);
    width:200px;
    height: auto;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.confirmation-message {
    margin-bottom: 8px;
    text-align: center;
}

.confirmation-buttons {
    display: flex;
    justify-content: center;
    margin-top: 8px;
}

	/* .success-message {
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
  } */
</style>
