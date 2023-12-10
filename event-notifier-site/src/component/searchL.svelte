<script>
    // @ts-nocheck
	import axios from "axios";
let searchresult = false;
let query = ''
let data = []

async function search() {
    if(query){
        let res = await axios.get(`http://localhost:3000/api/laible/search?query=${query}` )
        data = res.data
        console.log(data)
        searchresult = true;
    }
    // else{
    //     data = 'not found!'
        
    // }

}

</script>

<main>

    <div class="search" >
        <label>
           <div  style="border:1px solid darkgray;border-radius:5px">
            <input type="text" on:keyup={search} placeholder="جستجو" bind:value={query} class="form-control" style="height: 30px;"/>
           </div>
        </label>
    </div>
    
{#if searchresult}
    
			{#if query}
			<div class="result">
				<table>
					<thead style="border-bottom:1px solid black;">
						<tr>
							<!-- <td>No.</td> -->
							<td>نام</td>
							<td>تخلص</td>
							<td>ایمیل</td>
							<td>مبایل نمبر</td>
							<td>ولایت</td>
							<td>ولسوالی</td>
							<td>نمایش</td>
							<!-- <td>تغیر</td>
							<td>حذف</td> -->
						</tr>
					</thead>
		
					<tbody>
						
						{#each data as row,index}
						<tr>
							<!-- <td>{index + 1}</td> -->
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
							<!-- <td>
								<a href="/admin/laible/{row._id}/edit" class="btn btn-success btn-sm">
									<ion-icon name="pencil-outline"></ion-icon>
								</a>
							</td>
							<td>
								<button on:click={()=> deleteRow(row._id)} class="btn btn-danger btn-sm">
									<ion-icon name='trash-outline'></ion-icon>
								</button>
							</td> -->
						</tr>
						{/each}
						
		
						
					</tbody>
				</table>
			</div>
            {/if}
{/if}
  

</main>

<style>
	
.result {
    color: #000;
    background-color: rgb(96, 145, 94);
    border-radius:5px;
    position: fixed;
    overflow:auto;
    background-color:green(0, 0, 0, 0.5);
    z-index: 9999;
    box-shadow: 1px 5px 5px 1px;
}

    a{
        display: flex;
        text-decoration: none;
        color:darkgrey;
    }
    td{
        padding-right:20px;
    }
</style>