<script>
    // @ts-nocheck
    
        import { goto } from '$app/navigation';
    
        // @ts-nocheck
        import { page } from '$app/stores';
        import axios from 'axios';
        import { onMount } from 'svelte';
    
        let news = {};
        let news_Id = $page.params.id;
        onMount(async () => {
            news = await axios
                .post('http://localhost:3000/api/news/show', { news_Id })
                .then((res) => res.data.response)
                .catch((err) => console.log(err.data.message));
        });
    
        async function handleSubmit() {
            await axios
                .post('http://localhost:3000/api/news/update', { news_Id, ...news })
                .then((res) => goto('/admin/news?alert=success'),alert('موفقانه تغییر داده شد'))
                .catch((err) => console.log(err));
        }
    </script>
    
    <svelte:head>
        <title>Edit News</title>
    </svelte:head>
    
    <div class="details" style="direction: rtl;">
        <div class="event">
            <form class="form" on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <label>موضوع</label>
                    <input type="text" bind:value={news.title} class="form-control m-2" />
                </div>
                <div class="form-group">
                    <label>موقعیت</label>
                    <input type="text" bind:value={news.location} class="form-control m-2" />
                </div>
                <div class="form-group">
                    <label>توضیحات</label>
                    <textarea bind:value={news.description} class="form-control m-2" />
                </div>
               
                <button type="submit" class="btn mt-3 btn-primary">Update</button>
            </form>
        </div>
    </div>
    
    <style>
        .details {
            position: relative;
            width: 100%;
            padding: 20px;
            display: grid;
            /* grid-template-columns: 2fr 1fr; */
            grid-gap: 30px;
            margin-top: 20px;
        }
        .details .event {
            position: relative;
            min-height: 300px;
            background: white;
            padding: 20px;
            box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
            border-radius: 20px;
        }
        .details .cardHeader {
            display: flex;
            align-items: baseline;
        }
    </style>
    