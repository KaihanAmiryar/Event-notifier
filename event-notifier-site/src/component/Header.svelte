<script>
// @ts-nocheck

	  let activeLanguage = 'fa';

const data = {
  'pa': {
	'home': 'اصلی پانه',
	'announcement':'خبرتیا',
	"crime":"جرایم",
	'event': "پیښه",
	"contact":"اړیکه",
	"about":"زمونگ په اړه"
  },
  'fa': {
	'home':"اصلی" ,
	'announcement':"اگهی",
	"crime":"جرایم",
	'event': ' مناسبت ها',
	'contact': "ارتباط",
	"about":'در باره ما'
  }
};

function changeLanguage(lang) {
  activeLanguage = lang;
}
</script>

<div id="#header" class="fixed-top">
	<nav class="navbar navbar-expand-md navbar-light " id="nav">
		<div class="container-fluid">
			<a href="#hero" style="text-decoration: none;"
				><h2 style="color:white;">
					<span style="color: red;">E</span>vent <span style="color: red;">N</span>otifier
				</h2></a
			>

			<div >
				<div class="LanguageSection" style="color:white;margin-left:20px">
					<a language="english" class:active={activeLanguage === 'pa'} on:click={() => changeLanguage('pa')} >پشتو</a>
					<span>|</span>
					<a  language="parsi" class:active={activeLanguage === 'fa'} on:click={() => changeLanguage('fa')}>دری</a>
				</div>
			</div>

			<button
				class="navbar-toggler bg-light"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="#navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav">
					<li>
						<a href="/site/about" class="about">{data[activeLanguage].about}</a>
					</li>
					<li>
						<a href="/site/contact" class="contact">{data[activeLanguage].contact}</a>
					</li>
					
					<li>
						<a href="/site/event" class="event"> {data[activeLanguage].event}</a>
					</li>

					<li>
						<a href="/site/crime" class="crime">{data[activeLanguage].crime}</a>
					</li>
					<li>
						<a href="/site/media" class="announcement">{data[activeLanguage].announcement}</a>
					</li>
					
					<li>
						<a href="/site" class="home" >{data[activeLanguage].home}</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>

<main />

<style>
	nav {
		background:rgb(3, 3, 52);
	}
	ul {
		position: relative;
		margin-right: 3em;
		display: flex;
		justify-content: right;
		align-items: center;
		list-style: none;
	}

	li {
		font-size:2em;
		height: 100%;
	}

	li a {
		font-size: 20px;
		font-family: sans-serif;
		width: 20px;
		margin: 10px;
		color: white;
		text-decoration: none;
		padding-left:10px;
	}

	a:hover {
		color: #73ed0f;
		cursor: pointer;
	}
	a{
		color:white;
		text-decoration:none;
	}
</style>


