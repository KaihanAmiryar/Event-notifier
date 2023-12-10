<script>
	import axios from "axios";
	let message = {
		name:'',
		email:'',
		message:''
	}

	let hundleMessage = async() =>{
		await axios.post("http://localhost:3000/api/message/store",message)
		window.location.reload()

	}
	

</script>

<main>
	<section id="contact" class="contact" style="padding-top:63px;">
		<div class="container" >
			<div class="row" style="direction: rtl; width:100%" >
				<div class="col-sm-4" >
					<form on:submit|preventDefault ={hundleMessage} style="padding:20px; width:300px; box-shadow:1px 5px 10px 4px #888888;border-radius:10px">
						
							<h6 style="text-align: center;">پیغام خود را وارد کنید</h6>
								<div class="form-outline col-sm-12">
									<span class="m-3">نام: </span> 
									<input type="text"
									required
									bind:value={message.name}
									 class="form-control form-control xl">
								</div>
								<div class="form-outline col-sm-12">
									<span class="m-3">ایمیل: </span> 
									<input type="email"
									required
									bind:value={message.email} 
									class="form-control form-control xl">
								</div>
								<div class="form-outline col-sm-12 mb-2">
									<span class="m-3">پیغام: </span> 
									
									<textarea 
									bind:value={message.message}
									required
									 class="form-control form-control-xl mt-2"  rows="2"/>
								</div>
								<div class="form-outline col-sm-12">
									<button type="submit" class="btn btn-primary col-lg-12">ارسال</button>
								</div>
					</form>
				  </div>
			  <div class="col-sm">
				<div class="row" id="t" >
					<div style="margin-top:42%;margin-right:40px">
						<div class="row" 
						style="text-align:center;;
						border-top:2px solid black;
						width:100%;">
							<div class="col-4 mt-2" >
								<div><ion-icon  name="call-outline"></ion-icon></div>
								<p>+93-4444444</p>
							</div>
							<div class="col-4 mt-2">
								<h6><ion-icon name="mail-outline"></ion-icon></h6>
								<a href="#">evetnnotifier@gamil.com</a>
							</div>
							<div class="col-4 mt-2">
								<h6><ion-icon name="location-outline"></ion-icon></h6>
								<p style="margin-bottom:0px">کابل</p>
								<p style="margin-bottom:0px">سرک هشتاد متره</p>
								<p style="margin-bottom:0px">مقابل شهرک آریانا</p>
							</div>
						</div>
					</div>
			  </div>
			  
			</div>
		</div>
	</section>
	<!-- End Contact Section -->
</main>

<style>
	ion-icon{
		font-size:24px;
	}
	.contact{
		
		
	}
	.container{
		border-radius:10px;
		margin-top:24px;
	}
	#t{
		background-image: url('/ارتباط-با-ما-300x259.jpg');
		background-repeat: no-repeat;
		height:400px;
		border-radius:10px;
		margin-left:100px;
	}
	.row{
		width:99%;
		height: 99%;
	}
	
</style>
