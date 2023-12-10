<script>
	import axios from 'axios';
	import {onMount} from "svelte"

	
	let values = { firstname: '', lastname: '', email: '',file:'', password: '', confirmPasswrod: '' };
	let ErrorMessage = {
		firstname: 'firstname',
		lastname: 'lastname',
		password: '',
		confirmP: '',
		email: '',
	};

	let hundleUser = async () => {
		await axios.post('http://localhost:3000/api/user/register', values)
		.then(res=> alert('موفقانه کاربر ثبت شد!'))
		.catch(err =>alert('ثبت شد!'))
	};
</script>

<main>
	<section  id="registering"  >
		<div class="container" >
			<div class="row d-flex justify-content-center align-items-center" style="margin-left:120px;margin-right:120px" >
				<div class="col-xl-6 col-xl-6">
					<div class="card text-black" style="border-radius:10px;">
						<div class="card-body">
							<p class="text-center h1 fw-bold mx-1">Registeration</p>

							<form class="mx-2" on:submit|preventDefault={hundleUser} style="padding:10px">
								<div class="row">
									<div class="col-md-6">
										<div class="form-outline">
											<label class="form-label" for="firstName">First Name</label>

											<input
												type="text"
												id="firstName"
												class="form-control form-control"
												bind:value={values.firstname}
												required
											/>
										</div>
									</div>
									<div class="col-md-6 mb-4">
										<div class="form-outline">
											<label class="form-label" for="lastName">Last Name</label>

											<input
												type="text"
												id="lastName"
												class="form-control form-control"
												bind:value={values.lastname}
												required
											/>
										</div>
									</div>

									<div class="d-flex flex-row align-items-center mb-4">
										<div class="form-outline flex-fill me-5">
											<label class="form-label" for="email">Your Emali</label>
											<input
												type="email"
												class="form-control"
												name="email"
												bind:value={values.email}
												required
											/>
										</div>
										<div class="form-outline flex-fill ms-5">
											<label class="form-label" for="email">choose your photo</label>
											<input
												type="file"
												class="form-control"
												name="photo"
												bind:value={values.file}
											/>
										</div>
									</div>

									<div class="row">
										<div class="col-md-6 mb-4">
											<div class="form-outline">
												<label class="form-label" for="password">password</label>

												<input
													type="text"
													name="password"
													class="form-control"
													bind:value={values.password}
													required
												/>
											</div>
										</div>
										<div class="col-md-6 mb-4">
											<div class="form-outline">
												<label class="form-label" for="confirmPassword">Confirm password</label>

												<input
													type="text"
													name="confirmPassword"
													class="form-control"
													bind:value={values.confirmPasswrod}
													required
												/>
											</div>
										</div>
										<div class="d-flex justify-content-center mb-5">
											<button type="submit" class="btn btn-primary w-100">Register</button>
										</div>

										<div class="form-check d-flex justify-content-center">
											<label class="form-check-label" for="statemaent">
												I have already acount? <a href="./login">Login</a>
											</label>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Popup Modal -->

	<!-- <div class="modal fade modal-xl" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">Log In</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    
            <div class="modal-body " >
              
                   
                    
                  </div>
                </div>
             
            </div>
      </div> -->
</main>

<style>
	main {
		background-image: url('pictures/ministry.jpeg');
		background-position: center;
		height: 80vh;
	}
</style>
