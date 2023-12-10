<script>
    // @ts-nocheck
  
    import axios from "axios";
      import { onMount } from "svelte";
      let showMessage =false;
      let ann = []

      let deleteConfirmation = false;
    let deleteId = "";

  onMount(async ()=>{
      // @ts-ignore
      ann = await axios.get("http://localhost:3000/api/announcement/list")
      .then(response =>response.data.response)
      .catch(err =>{
          console.log("error: " +err)
      })
      
  })
  
  async function deleteRow(id) {
        deleteId = id;
        deleteConfirmation = true;
    }

    function deleteConfirmed() {
        axios
            .post("http://localhost:3000/api/announcement/delete", { ann_Id: deleteId })
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
      
  
  </script>
  <svelte:head>
      <title>Announcements</title>
  </svelte:head>


  {#if deleteConfirmation}
    <div class="confirmation-modal">
        <div class="confirmation-message">
            آیا میخواهید حذف کنید؟
        </div>
        <div class="confirmation-buttons">
            <button class="btn btn-outline-primary ms-4" on:click={deleteConfirmed}>OK</button>
            <button class="btn btn-outline-danger me-4" on:click={deleteCanceled}>Cancel</button>
        </div>
    </div>
{/if}

  <div class="details" style="direction: rtl;">
    <div class="cardHeader">
        <p style="margin-right:25px;font-size:18px">آگهی ها</p>
        <a href="./announcement/createAnnouncement" class="btn btn-outline-secondary" style="margin-left:25px">ایجاد کنید</a>
    </div>
      <div class="recentNews">
          <table >
              <thead>
                  <tr>
                      <td>No.</td>
                      <td>موضوع</td>
                      <td>تاریخ</td>
                      <td>وضعیت</td>
                      <td>نمایش</td>
                      <td>تغییر</td>
                      <td>حذف</td>
                  </tr>
              </thead>
  
              <tbody>
                {#each ann as row,index }
                  <tr>
                      <td>{index + 1}</td>
                      <td>{row.title}</td>
                      <td>{row.date}</td>
                      <td>
                        <span style="width:55px"  class="badge" class:bg-primary={row.status==='pending'} class:bg-success={row.status==='done'} class:bg-danger={row.status==='rejected'}>{row.status}</span>

                      </td>
                      
                      <td>
                          <a href="/admin/announcement/{row._id}/show" class=" btn-sm btn-primary">
                            <ion-icon name="eye-outline"></ion-icon>
                          </a>
                      </td>
                      <td>
                          <a href="/admin/announcement/{row._id}/edit"  class="btn-sm btn-success">
                            <ion-icon name="pencil-outline"></ion-icon>
                          </a>
                      </td>
                      <td>
                          <button on:click={()=> deleteRow(row._id)} class="btn-sm btn-danger" style="border:none">
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
          display: grid;
          /* grid-template-columns: 2fr 1fr; */
          margin-top:10px;
       }
       .details .recentNews{
          position: relative;
          display: grid;
          background: white;
          box-shadow: 0 7px 25px rgba(0,0,0,0.08);
          border-radius:10px;
       }
       tr td{
          padding-left:10px;
          border-radius:2px;
          text-align: center;
  
       }
       .recentNews thead tr td{
          font-size:15px;
          font-weight:bolder;
          padding-bottom:12px;
          border-bottom:1px solid black;
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