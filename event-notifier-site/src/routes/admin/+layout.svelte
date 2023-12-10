<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Search from '../../component/search.svelte';

	function logout() {
		localStorage.clear();
		goto('/login');
		console.log('ok');
	}

	let isAuthenticated = false;

	onMount(() => {
		const token = localStorage.getItem('token');
		if (token) {
			isAuthenticated = true;
		} else {
			goto('/login');
		}
	});
</script>

<main>
	<!----------- t0pbar------------------>

		{#if isAuthenticated}
			<div class="navigation" style="margin-left:20px;">
				<ul style="border:1px solid white">
					<li>
						<a href="/admin">
							<h5 style="margin-top:10px;margin-right:6px">
								<span style="color:red;">A</span>dmin
								<span style="color:red">P</span>anel
							</h5>
						</a>
					</li>

					<li>
						<a href="/admin">
							<span class="icon">
								<ion-icon name="home-outline" />
							</span>
							<span class="title">داشبورد</span>
						</a>
					</li>

					<li>
						<a href="/admin/event">
							<span class="icon">
								<ion-icon name="newspaper-outline" style="direction: rtl;" />
							</span>
							<span class="title">مناسبت </span>
						</a>
					</li>
					<li>
						<a href="/admin/laible">
							<span class="icon">
								<ion-icon name="people-outline" />
							</span>
							<span class="title">مسولین</span>
						</a>
					</li>

					<li>
						<a href="/admin/crime">
							<span class="icon">
								<ion-icon name="send-outline" />
							</span>
							<span class="title">جرایم</span>
						</a>
					</li>

					<li>
						<a href="/admin/announcement">
							<span class="icon">
								<ion-icon name="megaphone-outline" />
							</span>
							<span class="title">آگهی</span>
						</a>
					</li>

					<li>
						<a href="/admin/message">
							<span class="icon">
								<ion-icon name="mail-outline" />
							</span>
							<span class="title">پیغام</span>
						</a>
					</li>

					<li>
						<a href="/admin/users">
							<span class="icon">
								<ion-icon name="people-outline" />
							</span>
							<span class="title">ادمین ها</span>
						</a>
					</li>

					<!-- <li>
						<a href="/admin/setting">
							<span class="icon">
								<ion-icon name="settings-outline" />
							</span>
							<span class="title">تنظیمات</span>
						</a>
					</li> -->
				</ul>
				<div class="logout" style="border-top:2px solid white;margin-top:-10px">
					<div class="row">
						<div class="col" style="border:2px solid gre">
							<button
								on:click={() => {
									logout();
								}}
								class="btn btn-outline"
								style="color:white;margin-right:10px;"
							>
								<ion-icon name="log-out-outline" style="font-size:30px;" />
							</button>
						</div>
						
					</div>
				</div>
			</div>
		{:else}{/if}
		<div class="first">
			{#if isAuthenticated}
				<div class="topbar">
					<div class="add" style="margin-left:20px;">
						<a href="./register">
							<button class="btn btn-outline-primary">اضافه نمودن کاربر</button>
						</a>
					</div>

					<div class="add" style="margin-left:20px;">
						<a href="./laible/createL">
							<button class="btn btn-outline-primary">اضافه نمودن مسول</button>
						</a>
					</div>
				</div>
				<slot />
			{:else}{/if}
		</div>
</main>

<style>

main{
		direction: rtl;
		display: flex;
		height:100%;
		
	}
	
	.navigation {
		height: 100vh;
		background: rgb(29, 29, 60);
		overflow: visible;
		width: 12%;

		
	}
	ul{
		width:180px;
		margin-right:-22px;
	}

	.navigation ul li {
		width: 180px;
		height:100[x];
		list-style: none;
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
		
	}
	.navigation ul li:hover {
		background-color: white;
	}
	.navigation ul li:nth-child(1) {
		margin-bottom: 20px;
		pointer-events: none;
	}
	.navigation ul li a {
		display: flex;
		text-decoration: none;
		width: 100%;
		color: white;
	}
	.navigation ul li:hover span ion-icon {
		color: rgb(7, 7, 26);
	}
	.navigation ul li:hover span {
		color: rgb(7, 7, 66);
	}
	.navigation ul li:hover #logout {
		color: rgb(7, 7, 66);
	}
	.navigation ul li a .icon {
		position: relative;
		display: block;
		min-width: 60px;
		height: 65px;
		line-height: 60px;
		text-align: center;
	}

	.navigation ul li a .icon ion-icon {
		font-size: 1.65em;
	}
	.navigation ul li a .title {
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		white-space: nowrap;
	}

	.navigation ul li:hover a::before {
		content: '';
		position: absolute;
		top: -20px;
		height: -50px;
		background-color: transparent;
		border-radius: 50%;
		box-shadow: 35px 35px 0 10px white;
	}
	.navigation ul li:hover a::after {
		position: absolute;
		right: 300px;
		bottom: 100px;
		width: -50px;
		height: 50px;
		background-color: transparent;
		border-radius: 50%;
		pointer-events: none;
	}
	

	.first {
		width:85%;
		height: 100%;
		position: relative;
	}
	.topbar {
		display: flex;
		width:100%;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		box-shadow: 4px 8px 8 3px;
		background-color: rgb(250, 247, 247);
		border-radius: 3px;
	}
	.toggle {
		width: 60px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.5rem;
		cursor: pointer;
	}

	.search {
		position: relative;
		width: 250px;
	}
	.search label {
		position: relative;
	}
	.search label input {
		width: 100%;
		height: 30px;
		border-radius: 40px;
		padding: 5px 20px;
		padding-left: 35px;
		font-size: 18px;
		border: 1px solid black;
		outline: none;
	}
	.search label ion-icon {
		position: absolute;
		top: 7px;
		left: 10px;
		font-size: 1.2rem;
	}

	:global(ion-icon) {
		visibility: visible !important;
	}
</style>
