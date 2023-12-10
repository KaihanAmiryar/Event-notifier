<script>
	// @ts-nocheck

	import axios from 'axios';
	import { onMount } from 'svelte';
	let news = [];
	let ann = [];
	onMount(async () => {
		// @ts-ignore
		ann = await axios
			.get('http://localhost:3000/api/announcement/list')
			.then((response) => response.data.response)
			.catch((err) => {
				console.log('error: ' + err);
			});
	});
</script>

<main>
	<section class="news" id="news" style="direction: rtl;">
		<div
			style="border-bottom:2px solid black;margin-bottom: 20px;padding-right:50px;padding-bottom:-20px;margin-top:66px"
		>
			<p style="font-size:20px;">اخرین اطلاعیه ها</p>
		</div>
		<ul class="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0">
			{#each ann as row, index}
				<li class="col-lg-4 col-md-5 image-block;">
					<div class="card-deck" style="display: flex;justify-content:center">
						<div class="card" style="width:300px;margin:20px;margin-top:0px;">
							<div class="card-body">
								<h4 class="card-title" />
								<h5>{row.date}</h5>
								<h6>{row.title}</h6>
								<p class="card-text" style="height: 140px;overflow:hidden">{row.description}</p>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.jumbotron.hurricane {
		background: url(https://grist.files.wordpress.com/2018/09/hurricanes-florence-hugo.jpg?w=1024&h=576&crop=1)
			no-repeat;
		background-size: 100%;
	}

	.title {
		background-color: white;
		padding: 30px 40px 30px 20px;
		background: rgba(256, 256, 256, 0.5);
		display: inline-block;
		font-family: Orbitron;
	}

	@media screen and (min-width: 576px) {
		.title h3 {
			font-size: 3rem;
		}
		.title p {
			font-size: 2rem;
		}
	}
	.card:hover {
		background-color: rgb(181, 181, 201);
	}
</style>
