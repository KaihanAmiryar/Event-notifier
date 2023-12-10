<script>
	import { goto } from '$app/navigation';
	import axios from 'axios';
	let values = { username: '', email: '', password: '' };
	let ErrorMessage = {
		username: 'firstname',
		password: '',
		email: ''
	};

	let login = async () => {
		await axios.post('http://localhost:3000/api/user/login', values)
		.then((res) =>{
			if(res.data.status == 200){
				localStorage.setItem("token", res.data.token)
				goto("/admin?login=success")
			}else if(res.data.status == 404){
				goto("/login?alert=userNotfound")
			}else if(res.data.status == 401){
				goto("/login?alert=invalidPassword")
			}
		})
	};
</script>

<main>
	<section >
		<div class="container">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-xl-6 col-xl-6">
					<div class="card text-black" style="border-radius: 20px;">
						<div class="card-body">
							<p class="text-center h1 fw-bold mb-5 mx-1 mt-4">login</p>

							<form class="mx-2" on:submit|preventDefault={login}>
								<div class="row">
									<div class="d-flex flex-row align-items-center mb-4">
										<div class="form-outline flex-fill mb-0">
											<label class="form-label" for="firstName">email / phone</label>
											<input
												type="text"
												id="firstName"
												class="form-control form-control"
												bind:value={values.username}
											/>

										</div>
									</div>
								

									<div class="d-flex flex-row align-items-center mb-4">
										<div class="form-outline flex-fill mb-0">
											<label class="form-label" for="password">password</label>
											<input
												type="password"
												name="password"
												class="form-control"
												bind:value={values.password}
											/>
										
										</div>


									</div>
								</div>
                                <div class="row">
                                    <div class="d-flex justify-content-center mb-5">
                                        <button class="btn btn-primary w-100">Login</button>
                                    </div>
                                    
										<div class="form-check d-flex justify-content-center ">
											<label class="form-check-label" for="statemaent">
												Don't have acount? <a href="./register">Register</a>
											</label>
										</div>

										
                                </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	 
</main>

<style>
	main {
		background-image: url('pictures/ministry.jpeg');
		background-position: center;
		height: 80vh;
		width:60vw;
		margin-left:20%;
	}
</style>
