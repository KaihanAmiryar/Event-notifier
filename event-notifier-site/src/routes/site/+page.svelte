<script>
</script>

.<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main>
	<div class="first">
		<div class="wraper" >
			<img src="police.jpeg" alt="" >
			<img src="backgroundMinistry.jpeg" alt="">
			<img src="ministry.jpeg" alt="" >
			<img src="monar.jpg" alt="" >
			
		</div>
		
	</div>
	<!-- End Hero -->
	<div class="row d-flex justify-content-end" style="direction: rtl;background-color:hsl(224, 44%, 95%)">
		<div class="col 6">
			<h5 style="margin-right:100px;color:black">پیام وزیر</h5>
			<p style="margin-right: 70px;font-size:15px">
				کوشش کنید که برای مردم مسلمان و مجاهد افغانستان با کمال صداقت وتعهد خدمات ارایه کنید تا باشد
				رضایت مردم و خداوند متعال را بدست بیاورید!
			</p>
		</div>
		<div class="col-4 d-flex justify-content-center">
			<img src="/6_0.jpg" alt="" />
		</div>
	</div>
</main>

<style>
	.first{
		width:100vw;
		overflow: hidden;
		margin-top:40px;
		overflow: hidden;
		

	}
	.wraper{
		width:99%;
		display: flex;
		animation: slide 20s linear infinite;
	}

	@keyframes slide {
		0%{
			transform:translateX(0);
		}
		25%{
			transform:translateX(0);
		}
		30%{
			transform:translateX(-100%);
		}
		50%{
			transform:translateX(-100%);
		}
		55%{
			transform:translateX(-200%);
		}
		75%{
			transform:translateX(-200%);
		}
		80%{
			transform: translateX(-300%);
		}
		100%{
			transform: translateX(-300%);
		}

	}
	img{
		width:100%;
		
	}
	

	
	a {
		color: white;
		text-decoration: none;
	}
</style>
