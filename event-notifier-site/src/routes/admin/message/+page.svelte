<script>
// @ts-nocheck

    import axios from "axios";
    import { onMount } from "svelte";

    let showMessage = false;
    let message = [];

    let deleteConfirmation = false;
    let deleteId = "";

    onMount(async () => {
        message = await axios
            .get("http://localhost:3000/api/message/list")
            .then((response) => response.data.response)
            .catch((err) => {
                console.log("error: " + err);
            });
    });

    async function deleteRow(id) {
        deleteId = id;
        deleteConfirmation = true;
    }

    function deleteConfirmed() {
        axios
            .post("http://localhost:3000/api/message/delete", { message_Id: deleteId })
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
    <title>Event message</title>
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
    <p style="margin-right:35px;font-size:20px">پیغامها</p>
    <div class="cardHeader"></div>
    <div class="recentMessage">
        <table>
            <thead style="border-bottom: 1px solid black;">
                <tr>
                    <td>No.</td>
                    <td>نام</td>
                    <td>ایمیل</td>
                    <td>پیغام</td>
                    <td>وضعیت</td>
                    <td>نمایش</td>
                    <td>حذف</td>
                </tr>
            </thead>
            <tbody>
                {#each message as row, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.message}</td>
                        <td>
                            <span
                                style="width:55px;"
                                class="badge"
                                class:bg-primary={row.status === 'pinding'}
                                class:bg-success={row.status === 'done'}
                                class:bg-danger={row.status === 'done'}
                            >{row.status}</span>
                        </td>
                        <td>
                            <a href="/admin/message/{row._id}/show" class=" btn-sm btn-primary">
                                <ion-icon name="eye-outline"></ion-icon>
                            </a>
                        </td>
                        <td>
                            <button on:click={() => deleteRow(row._id)} style="border:none" class=" btn-sm btn-danger">
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
    .details {
        position: relative;
        width: 100%;
        display: grid;
    }

    .details .recentMessage {
        position: relative;
        display: grid;
        background: white;
        padding: 10px;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
        border-radius: 20px;
    }

    tr td {
        border-radius: 2px;
        text-align: center;
    }

    .recentMessage thead tr td {
        font-size: 14px;
        font-weight: bolder;
        border-bottom: 1px solid black;
        margin-bottom: 5px;
    }

    .recentMessage tbody tr:hover {
        box-shadow: 10px 9px 45px rgba(0, 0, 0, 0.08);
        background: rgb(181, 181, 201);
        border-radius: 20px;
    }

    .details .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .details .recentMessage table tr td:last-child {
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

</style>