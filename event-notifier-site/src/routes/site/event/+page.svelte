<script>
// @ts-nocheck

	import axios, { all } from 'axios';
	import { onMount } from 'svelte';

	let showMessage = false;
	

    
	let event = {
		username:'',
		password:'',
		title: null,
		province:'',
		districts:'',
		location: '',
		file: '',
		startT:'',
		endT:'',
		startD:'',
		endD:'',
		description: ''
	};



  let valid = false;
  let latitude;
  let longitude;
  let error;

  function loadprovince() {
	  if (event.province === "کابل") {
		event.districts = [
			'کابل',
			'استالبف',
			'پغمان',
			'ده سبز',
			'شکر دره',
			'کابل',
			'کلگان',
			'گل دره',
			'میر بچه کود',
			'فرز شکر دره',
			
			
	
		];
	  } else if (event.province === "بلخ") {
		event.districts = [
			'شهرمزار شریف',
			'بلخ',
			'چهار بولک',
			'دهدادی',
			'شولگره',
			'کشنده بالا',
			'کشنده پایین',
			'چهار کنت',
			'چمتال',
			'خلم',
			'دولت اباد',
			'شورتپه',
			'زارع',
			'کلدار',
			'مارمل',
			'نهرشاهی'
		  
		];
	  } else if(event.province === 'هرات') {
		event.districts = [
			'شهر هرات',
			'انجیل',
			'اوبه',
			'ادرسکن',
			'چشت هرات',
			'پشت زیرغان',
			'زنده جان',
			'پشت کوه',
			'زیرکوه',
			'کوه زور',
			'زاوول',
			'غوریان',
			'فارسی',
			'زرخ',
			'کشک رباط سنگی',
			'کشک کهنه',
			'کهسان',
		];
	  } else if(event.province ==='قندهار'){
		event.districts = [
			'ارغستان',
			'ارغنداب',
			'پنجوایی',
			'خاکریز',
			'دامان',
			'ریگستان',
			'ریژی',
			'سپین بولدک',
			'شاه ولی کوت',
			'شورابک',
			'غورک',
			'قندهار',
			'معروف',
			'میانشین',
			'میوند',
			'نیش',
		]
	  }

	  else if(event.province ==='بامیان'){
	  event.districts =[
		'بامیان',
		'یکاولنگ',
		'یکاولنگ دو',
		'پنجاب',
		'کهمرد',
		'سیغان',
		'شیبر',
		'ورس'
	  ]
	  }

	  else if(event.province ==='پروان'){
	  event.districts =[
		'بگرام',
		'جبل الاسراج',
		'سالنگ',
		'سید خیل',
		'شیخ علی',
		'غوربند',
		'سرخ ولسوالی',
		'شینواری',
	  ]
	  }

	  else if(event.province === 'سمنگان'){
		event.districts = [
			'ایبک','دره صوف بالا','دره صوف پایین','روی دو آب','فیروز نخچیر','حضرت سلطان','خرم وسرباغ'
		]
	  }
	   else if(event.province === 'ننگرهار'){
		event.districts = [
			'آچین','بتنی کوت','بهسود','پچیرواگام','جلال اباد','حصارک','چپرهار','خوگیانی','دربابا','دره نور','دره بالا','رودات','سرخ رود','شیرزاد','شینوار','لعل پور','گوشته','کوز کنر','کوت','کامه','مهمند دره','نازیان'
		]
	  }
	   else if(event.province === 'سرپل'){
		event.districts = [
			'سرپل','بلخاب','سانجارک','سوزمه قلعه','صیاد','گوسفندی','کوهستانات'
		]
	  }
	   else if(event.province === 'بغلان'){
		event.districts = [
			'پل خمری','خوست و فرنگ','گذرگاه نور','اندراب','ده صلاح','پل حصار','نهرین','جلگه','برکه','خنجان','دوشی','بغلان جدید','تاله و برفک','دهانه غوری'
		]
	  }
	   else if(event.province === 'دایکندی'){
		event.districts = [
			'نیلی','شهرستان','میرامور','گیزاب','اشترلی','کجران','سنگ تخت بندر','کیتی','خدیر','پاتو'
		]
	  }
	   else if(event.province === 'فراه'){
		event.districts = [
			'انار دره','بالابلوک','بکواه','پرچمن','پشت رود','خاک سفید','شیب کوه','فراه','قلعه کاه','گلستان','لاش و جوین'
		]
	  }
	   else if(event.province === 'فاریاب'){
		event.districts = [
			'میمنه','اندخوی','ولسوالی بلچرخ','دولت آباد','غورماچ','گرزیوان','خان پارچاغ','خواجه سبز پوش','کوهستان','پشتون کوت','قرم قل','قیصار','قرغان','شیرین تگاب'
		]
	  }
	   else if(event.province === 'غزنی'){
		event.districts = [
			'غرنی','جاغوری','مالستان','قره باغ','اب بند','اجرستان','گلیلان','گیرو','اندر','خوگیانی','ناوه','واغز','زنه جان','رشیدان','مقر','ده بک','جغتو','خواجه عمری','ناور'
		]
	  }
	   else if(event.province === 'غور'){
		event.districts = [
			'فیروز کوه','مرغاب','جارسده','دولت اباد','دولینه','لعل سرجنگل','پسابند','ساغر','شهرک','تیوره','تولک'
		]
	  }
	   else if(event.province === 'هلمند'){
		event.districts = [
			'لشکرگاه','بغران','دیشو','ریگ خاک نشین','سنگین','گرمسیر','موسی قلعه','نادعلی','کجکی','ناوه بارکزی','نوزاد','نهر سراج','واشیر'
		]
	  }

	  else if(event.province === 'جوزجان'){
		event.districts = [
			'شبرغان','اقچه','خانقاه','خم آب','درزاب','فیض آباد','قرقین','قوش تیپه','مردیان','منگجگ'
		]
	  } 
	  else if(event.province === 'خوست'){
		event.districts = [
			'خوست','باک','تنی','تیر یزایثی','جاجی میدان','سپیره','شمل','صبری یعقوبی','قلندر','گربز','مندوزی','موسی خیل','نادرشاه کوت'
		]
	  } 
	  else if(event.province === 'کندز'){
		event.districts = [
			'کندز','آغتش','ارچی','چهارده','امام صاحب','خان آباد','قلعه ذال'
		]
	  } 
	  else if(event.province === 'کنر'){
		event.districts = [
			'اسعد آباد','برکنر','خاص کنر','دانگام','دره پیچ','چپه دره','چوکی','سرکانی','شیگل و شلتن','غازی آباد','مروره','ناری','نرنگ','نورگل','وته پور'
		]
	  } 
	  else if(event.province === 'لغمان'){
		event.districts = [
			'مهترلام','دولت شاه','قرغه یی','علیشینگ','علینگار','بادپش'
		]
	  } 
	  else if(event.province === 'لوگر'){
		event.districts = [
			'پل علم','ازره','برکی برک','چرخ','خروار','خوشی','محمدآغه'
		]
	  }
	  else if(event.province === 'نیمروز'){
		event.districts = [
			'زرنج','چهاربرجک','چخانسوز','کنگ','خاش رود'
		]
	  }
	  else if(event.province === 'نورستان'){
		event.districts = [
			'پارون','برگ منال','دوآب','کامدیش','مندول','نورگرام','واما','وایگل'
		]
	  }
	  else if(event.province === 'بدخشان'){
		event.districts = [
			'فیض آباد','کشم','درواز بالا','جرم','اشکاشم','واخان','بهارک','شغنان','خواهان','شهربزرگ','تشکان','درایم','شکی','ارگو','یاوان','زاغستان','یفتل سفلی','کران منجان','زیباک','خاش','یمگان','کوف آب','تگاب','کوهستان','درواز پایین','وردوج','ارغنج خواه','شهداه'
		]
	  }
	  else if(event.province === 'ارزگان'){
		event.districts = [
			'ترین کوت','شهید حساس','چوره','دهراوود','گیزاب','خاص ارزگان'
		]
	  }
	  else if(event.province === 'پکتیا'){
		event.districts = [
			'گردیز','احمدآباد','جاجی','جانی خیل','چمکنی','دند پتان','پشتون زدران','زرمت','سیدکرم','شواک','گرده ثیری','لجه احمدخیل','لحه منگل','میرزکه'
		]
	  }
	  else if(event.province === 'پکتیکا'){
		event.districts = [
			'شرنه','ارگون','اومته','برمل','تروو','جانی خیل','دیله و خوشامند','زرغون شهر','زیروک','سرروضه','سروبی','گومل','گیان','متاخان','نکه','وازه خواه','ورممی','یحیی خبل','یوسف خیل'
		]
	  }
	  else if(event.province === 'پنجشیر'){
		event.districts = [
			'بازارک','انابه','ابشار','دره','خنج','پریان','روخه','شتل'
		]
	  }
	  else if(event.province === 'تخار'){
		event.districts = [
			'تالقان','بهارک','بنگی','اشکمش','چال','چاه آب','خواجه بهاّالدین','خواجه غار','درقد','دشت قلعه','روستاق','فرخار','گل افغان','نمک اب','ورسج','هزارسموچ','ینگی قلعه'
		]
	  }

	  else if(event.province === 'کاپیسا'){
		event.districts = [
			'محمود راقی','اله سایی','تگاب','حصه اول کوهستان','حصه دوم کوهستان','کوه بند','نجراب'
		]
	  }
	  else if(event.province === 'وردک'){
		event.districts = [
			'میدان شهر','بهسود','حصه اول بهسود','دایمیرداد','چک','نرخ','سیدآباد','جلریز','جغتو'
		]
	  }

	
	  
	}
	
	  
	


	let message = false;
  async function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
		message = true;
      });
    } else {
      alert('مرورگر شما از موقعیت جغرافیایی پشتیبانی نمی‌کند.');
	  
    }
  }




 
    
	let hundleEvent = async () => {
		if(event.username=='ali@gmail.com' || event.username=='ahmad@gmail.com' || event.username=='kayhan@gmail.com' || event.username=='amirkuror@gmail.com'){
			if(event.password =='1233' || event.password=='12345' || event.password =='1234'){
				await axios.post('http://localhost:3000/api/event/store',event)
		.then((res) =>{
			event.location= `${latitude},${longitude}`
			showMessage = true
			valid = true;
		})
			}
			else{
				alert('پسورد ویا نام اشتباه است')
			}
		}
		else {
			alert('کاربر وجود ندارد');
			valid = false;
		}

		
	}
		
		
		
		


	// 	if (user.firstname.trim().length < 3) {
	// 		ErrorMessage.firstname = 'your firstname is short!';
	// 		valid = false;
	// 	} else if (user.lastname.trim().length < 3) {
	// 		ErrorMessage.lastname = 'your last name is short!';
	// 		valid = false;
	// 	} else {
	// 		valid = true;
	// 	}

	// 	if (valid) {
	// 		console.log('valid', user);
	// 	}
	// };
	function hideSuccessMessage (){
    showMessage = false;
  
}

</script>

<main>
	{#if showMessage}
	<div class="success-message">
	  موفقانه اضافه شد
	  <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
	  
	</div>
	{/if}

	<div class="container-fluid px-1 py-4 mx-auto" dir="rtl" >
	
		<div class="row d-flex justify-content-end">
			<div class="col-xl-7 col-lg-8 col-md-9 col-11 " >
				
				<div class="card">
					<h5 class="text-center mb-4">مناسبت ها را اطلاع دهید</h5>
					<form class="form-card" on:submit|preventDefault={hundleEvent}>
						

						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>کابر<span class="text-danger"> *</span></label
								>
								<input
									bind:value={event.username}
									placeholder="ایمیل ویا شماره خود را وارد کنید"
									required
								/>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>رمز<span class="text-danger"> *</span></label
								>
								<input
								type="password"
									bind:value={event.password}
									placeholder="رمز خود را وارد کنید"
									required
								/>
							</div>
						</div>


						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3" style="padding-top:10px;"
									>ولایت<span class="text-danger"> *</span></label
								>
								<select name="province" id="province" bind:value={event.province} on:change={loadprovince} style="height:40px">
									<option value="" disabled selected>ولایت خود را انتخاب کنید</option>
									<option value="کابل">کابل</option>
									<option value="بلخ">بلخ</option>
									<option value="قندهار">قندهار</option>
									<option value="بامیان">بامیان</option>
									<option value="هرات">هرات</option>
									<option value="پروان">پروان</option>
									<option value="ننگرهار">ننگرهار</option>
									<option value="بغلان">بغلان</option>
									<option value="سمنگان">سمنگان</option>
									<option value="دایکندی">دایکندی</option>
									<option value="فراه">فراه</option>
									<option value="فاریاب">فاریاب</option>
									<option value="غزنی">غزنی</option>
									<option value="غور">غور</option>
									<option value="هلمند">هلمند</option>
									<option value="جوزجان">جوزجان</option>
									<option value="خوست">خوست</option>
									<option value="کنر">کنر</option>
									<option value="کندز">کندز</option>
									<option value="لغمان">لغمان</option>
									<option value="لوگر">لوگر</option>
									<option value="نیمروز">نیمروز</option>
									<option value="نورستان">نورستان</option>
									<option value="ارزگان">ارزگان</option>
									<option value="پکتیا">پکتیا</option>
									<option value="پکتیکا">پکتیکا</option>
									<option value="پنجشیر">پنجشیر</option>
									<option value="تخار">تخار</option>
									<option value="بدخشان">بدخشان</option>
									<option value="کاپیسا">کاپیسا</option>
									<option value="سرپل">سرپل</option>
									<option value="وردک">وردک</option>
								</select>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex ">
								<label class="form-control-label px-3" style="padding-top:10px"
									>ولسوالی<span class="text-danger"> *</span></label
								>
								<select name="district" bind:value={event.district} on:change={loadprovince} style='height:40px'>
									{#each event.districts as district }
									<option value={district} >{district}</option>
										
									{/each}
								</select>
							</div>
						</div>



						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex " style="padding-top:10px">
								<label class="form-control-label px-3"
									>نوعیت رویداد<span class="text-danger"> *</span></label
								>
								<select required name="title" bind:value={event.title} style="height:40px;">
									<option value={null} selected disabled> نوعیت مناسبت را تعیین کیند</option>
									<option value="عروسی">عروسی</option>
									<option value="جشن فراغت">جشن فراغت</option>
									<option value="کمک های بشردوستانه">کمک های بشردوستانه</option>
									<option value="سیمینار علمی">سیمینار علمی</option>
									<option value="جشن استقلال">جشن استقلال</option>
									<option value="لویه جرگه">لویه جرگه</option>
									<option value="تظاهرات">تظاهرات</option>
									<option value="دیگر">دیگر</option>
								</select>
							</div>

							<div class="form-group col-sm-6 flex-column d-flex"> 
								{#if message}
								<div class="success-message">
								  موفقعیت گرفته شد
								</div>
								<!-- {:else}
								<div class="err-message">
									موقعیت گرفته نشد
								</div> -->
								
							  {/if}
								<label class="form-control-label px-3"
									>مکان<span class="text-danger"> *</span> 
									</label
								>
								<button on:click={getLocation} type="button" >تعیین موقعیت</button>
							</div>
						</div>


					



						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>شروع(ساعت)<span class="text-danger"> *</span></label
								>
								<input type="time" bind:value={event.startT}>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>پایان(ساعت)<span class="text-danger"> *</span></label
								>
								<input type="time" bind:value={event.endT}>
							</div>
						</div>




						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-4 flex-column d-flex">
								<label class="form-control-label px-3"
									>شروع(روز)<span class="text-danger"> *</span></label
								>
								<input type="date" bind:value={event.startD} required>
							</div>
							<div class="form-group col-sm-4 flex-column d-flex">
								<label class="form-control-label px-3"
									>پایان(روز)<span class="text-danger"> *</span></label
								>
								<input type="date" bind:value={event.endD} required>
							</div>
							<div class="form-group col-sm-4 flex-column d-flex">
								<label class="form-control-label px-3"
									>فایل<span class="text-danger"> *</span></label
								>
								<input type="file" bind:value={event.file} >
							</div>
						</div>





						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-12 flex-column d-flex">
								<label class="form-control-label px-3"
									>توضیحات<span class="text-danger"> *</span></label
								>
								<textarea
									bind:value={event.description}
									placeholder="بیشتر توضیح دهید"
									required
								/> 
							</div>
						</div>





						<div class="row">
							<div class="form-group col-lg-12">
								<button type="submit" class=" btn-primary" style="width:99%;">ارسال</button>
							</div>
						</div>
						
					</form>
				</div>
			</div>
			<div class="col-xl-5 col-lg-4 col-md-3">
				<img src="/inform.jpg" style="margin-right:-150px;height:80%">
			</div>
		</div>
	</div>
</main>
<style>
	
	.card {
		padding: 30px 40px;
		margin-top:30px;
		margin-bottom: 60px;
		border: none !important;
		box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
	}

	.form-control-label {
		margin-bottom: 0;
	}
	input,
	textarea,
	button {
		padding: 8px 15px;
		border-radius: 5px !important;
		margin: 5px 0px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		font-size: 18px !important;
		font-weight: 300;
	}
	input:focus,
	textarea:focus {
		-moz-box-shadow: none !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
		border: 1px solid #00bcd4;
		outline-width: 0;
		font-weight: 400;
	}
	.btn-block {
		text-transform: uppercase;
		font-size: 15px !important;
		font-weight: 400;
		height: 43px;
		cursor: pointer;
	}
	.btn-block:hover {
		color: #fff !important;
	}
	button:focus {
		-moz-box-shadow: none !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
		outline-width: 0;
	}


		
	.success-message {
		direction: rtl;
    background:rgb(28, 155, 28);
	margin-left:64%;
	margin-top:5%;
    border-radius:10px;
    position: fixed;
    width:13%;
    height:7%;
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
	height:35px;
	margin-right:5px;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size:12px;
    cursor: pointer;
    border-radius: 5px;
  }
</style>


<!-- 

<script>
  let latitude = null;
  let longitude = null;

  async function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });
    } else {
      alert('مرورگر شما از موقعیت جغرافیایی پشتیبانی نمی‌کند.');
    }
  }
</script>

<main>
  <h1>موقعیت جغرافیایی شما:</h1>
  <p>عرض جغرافیایی: {latitude}</p>
  <p>طول جغرافیایی: {longitude}</p>
  <button on:click={getLocation}>دریافت موقعیت جغرافیایی</button>
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style> -->