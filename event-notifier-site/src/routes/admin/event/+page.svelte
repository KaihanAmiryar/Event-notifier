<script>
    // @ts-nocheck
    
        import { page } from "$app/stores";
    
    // @ts-nocheck
    
        import axios from "axios";
        import { onMount } from "svelte";
	import Search from "../../../component/search.svelte";
        let showMessage = false;
        let event = []

        let deleteConfirmation = false;
        let deleteId = "";

        let startIndex = 0;
  let endIndex = 12;

  onMount(async () => {
		// @ts-ignore
		event = await axios
			.get('http://localhost:3000/api/event/list')
			.then((res) => res.data.response)
			.catch((err) => console.log(err));

			// مرتب‌سازی ردیف‌ها بر اساس تاریخ
            event.sort((a, b) => new Date(b.startD) - new Date(a.startD));
	});
    
    // let alert = $page.query
    
  
    async function deleteRow(id) {
        deleteId = id;
        deleteConfirmation = true;
    }

    function deleteConfirmed() {
        axios
            .post("http://localhost:3000/api/event/delete", { event_Id: deleteId })
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
    startIndex += 12;
    endIndex += 12;
  }

  function showPreviousRows() {
    startIndex -= 12;
    endIndex -= 12;
  }

        
    </script>
    <svelte:head>
        <title>Events</title>
    </svelte:head>
    <search />

    
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
            <p style="margin-right:25px;font-size:18px;margin-left:30px">مناسبت ها</p>
            <Search />
        </div>
        
        <div class="recentEvents" >
            
            <table >
                <thead style="border-bottom:1px solid black;">
                    <tr>
                        <td>No.</td>
                        <td>مسول</td>
                        <td>موضوع</td>
                        <td>ولایت</td>
                        <td>ولسوالی</td>
                        <td>شروع</td>
                        <td>پایان</td>
                        <td>وضعیت</td>
                        <td>نمایش</td>
                        <td>تغییر</td>
                        <td>حذف</td>
                    </tr>
                </thead>
    
                <tbody>
                    
                    {#each event.slice(startIndex, endIndex) as row,index}
                    <tr>
                        <td>{index + 1 +startIndex}</td>
                        <td>{row.username}</td>
                        <td>{row.title}</td>
                        <td>{row.province}</td>
                        <td>{row.district}</td>
                        <td>{row.startD}<span style="font-size:20px;color:blue;margin-right:3px">|</span> {row.startT}</td>
                        <td>{row.endD}<span style="font-size:20px;color:blue;margin-right:3px">|</span> {row.endT}</td>
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
                            <a href="/admin/event/{row._id}/show" class="btn-sm btn-primary">
                                <ion-icon name="eye-outline"></ion-icon>
                            </a>
                        </td>
                        <td>
                            <a href="/admin/event/{row._id}/edit" class=" btn-sm btn-success">
                                <ion-icon name="pencil-outline"></ion-icon>
                            </a>
                        </td>
                        <td>
                            <button on:click={()=> deleteRow(row._id)} class=" btn-sm btn-danger" style="border:none">
                                <ion-icon name="trash-outline"></ion-icon>
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
                {#if endIndex < event.length}
                  <button on:click={showNextRows} class="btn btn-outline-primary" style="width:100px;">بعدی...</button>
                {/if}
              </div>
        </div>
    </div>
    
    <style>
        
         .details{
            position: relative;
            width:100%;
            padding-top: 10px;
            display: grid;
            /* grid-template-columns: 2fr 1fr; */
         }
         .details .recentEvents{
            position: relative;
            display: grid;
            background: white;
            padding: 10px;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            border-radius: 20px;
         }
         tr td{
            border-radius:2px;
            text-align: center;
    
         }
         .recentEvents thead tr td{
            font-size:15px;
            font-weight:bolder;
            margin-right:25px;
         }
         .recentEvents tbody tr:hover{
           
            box-shadow: 10px 9px 45px rgba(0,0,0,0.08);
            background: rgb(181, 181, 201);
            border-radius:20px;
           
    
         }
         .details .cardHeader{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
         }
         .details .recentEvents table tr td:last-child{
            text-align:end;
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