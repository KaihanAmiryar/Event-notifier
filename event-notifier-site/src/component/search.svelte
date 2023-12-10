<script>
    // @ts-nocheck
	import axios from "axios";
let searchresult = false;
let query = ''
let data = []

async function search() {
    if(query){
        let res = await axios.get(`http://localhost:3000/api/event/search?query=${query}` )
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
    
<div class="result">
        {#if query}
        <table >
            <thead style="border-bottom:1px solid black;">
                <tr>
                    <!-- <td>No.</td> -->
                    <td>مسول</td>
                    <td>موضوع</td>
                    <td>ولایت</td>
                    <td>ولسوالی</td>
                    <td>تاریخ</td>
                    <!-- <td>وضعیت</td> -->
                    <td>نمایش</td>
                    <!-- <td>تغییر</td>
                    <td>حذف</td> -->
                </tr>
            </thead>

            <tbody>
                
                {#each data as row,index}
                <tr>
                    <!-- <td>{index + 1}</td> -->
                    <td>{row.username}</td>
                    <td>{row.title}</td>
                    <td>{row.province}</td>
                    <td>{row.district}</td>
                    <td>{row.startD}</td>
                    <!-- <td>
                        <span style="width:55px;"  class="badge" class:bg-primary={row.status==='pending'} class:bg-success={row.status==='done'} class:bg-danger={row.status==='rejected'}>{row.status}</span>
                    </td> -->
                    <td>
                        <a href="/admin/event/{row._id}/show" class="btn-sm btn-primary">
                            <ion-icon name="eye-outline"></ion-icon>
                        </a>
                    </td>
                    <!-- <td>
                        <a href="/admin/event/{row._id}/edit" class=" btn-sm btn-success">
                            <ion-icon name="pencil-outline"></ion-icon>
                        </a>
                    </td>
                    <td>
                        <button on:click={()=> deleteRow(row._id)} class=" btn-sm btn-danger" style="border:none">
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </td> -->
                </tr>
                {/each}
                

                
            </tbody>
        </table>
        
    {/if}
    </div>
{/if}
  

</main>

<style>

.result {
    color: #000;
    background-color: rgb(235, 240, 240);
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