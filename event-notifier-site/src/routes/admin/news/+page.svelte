<script>
  // @ts-nocheck

  import axios from "axios";
	import { onMount } from "svelte";
    let news = []
onMount(async ()=>{
    // @ts-ignore
    news = await axios.get("http://localhost:3000/api/news/list")
    .then(response =>response.data.response)
    .catch(err =>{
        console.log("error: " +err)
    })
    
})

async function deleteRow(id){
    await axios.post("http://localhost:3000/api/news/delete", {news_Id: id})
    .then(res=> {alert('موفقانه حذف شد'), window.location.reload()})
    .catch(err=> console.log(err))
}
    

</script>
<svelte:head>
    <title>Admin News</title>
</svelte:head>
<div class="details" style="direction: rtl;">
    <div class="cardHeader" style="margin-bottom:-20px;">
        <h4 style="margin-right:25px;">News</h4>
        <a href="./news/createNews" class="btn btn-outline-secondary" style="margin-left:30px">ایجاد اخبار</a>
    </div>
    <div class="recentNews">
      
        <table>
            <thead>
                <tr>
                    <td>No.</td>
                    <td>موضوع</td>
                    <td>موقعیت</td>
                    <td>تاریخ</td>
                    <td>نمایش</td>
                    <td>تغییر</td>
                    <td>حذف</td>
                </tr>
            </thead>

            <tbody>
              {#each news as row,index }
                <tr>
                    <td>{index + 1}</td>
                    <td>{row.title}</td>
                    <td>{row.location}</td>
                    <td>{row.date}</td>

                    <td>
                        <a href="/admin/news/{row._id}/show" class=" btn-sm">
                            <ion-icon name="eye-outline"></ion-icon>
                        </a>
                    </td>
                    <td>
                        <a href="/admin/news/{row._id}/edit" class="btn-sm">
                            <ion-icon name="pencil-outline"></ion-icon>

                        </a>
                    </td>
                    <td>
                        <button on:click={()=> deleteRow(row._id)} class="btn-sm " style="border:none">
                            <ion-icon name="trash-outline"></ion-icon>
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
		padding:20px;
		display: grid;
		/* grid-template-columns: 2fr 1fr; */
		grid-gap:30px;
		margin-top: 10px;
	 }
	 .details .recentNews{
		position: relative;
		display: grid;
		background: white;
		padding: 10px;
		box-shadow: 0 7px 25px rgba(0,0,0,0.08);
		border-radius: 20px;
	 }
     tr td{
        padding-left:30px;
        border-radius:2px;
        text-align: center;

     }
     .recentNews thead tr td{
        font-size:15px;
        font-weight:bolder;
        padding-bottom:12px;
        border-bottom: 1px solid black;
     }
     .recentNews tbody tr:hover{
       
        box-shadow: 10px 9px 45px rgba(0,0,0,0.08);
        background: rgb(181, 181, 201);
        border-radius:20px;

     }
	 .details .cardHeader{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	 }
     .details .recentNews table tr td:last-child{
        text-align:end;
     }
</style>