<script>
// @ts-nocheck

	import axios from 'axios';
	let hide = false;
	let showMessage = false

	let crime = {
		firstname: '',
		lastname: '',
		email: '',
		phoneN: '',
		subject: null,
		location: '',
		province: '',
		districts: '',
		date: '',
		time: '',
		file: '',
		description: ''
	};

	let ErrorMessage = {
		firstname: 'firstname',
		lastname: 'lastname',
		provence: '',
		district: '',
		email: '',
		PhoneN: ''
	};

	function loadprovince() {
	  if (crime.province === "کابل") {
		crime.districts = [
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
	  } else if (crime.province === "بلخ") {
		crime.districts = [
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
	  } else if(crime.province === 'هرات') {
		crime.districts = [
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
	  } else if(crime.province ==='قندهار'){
		crime.districts = [
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

	  else if(crime.province ==='بامیان'){
	  crime.districts =[
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

	  else if(crime.province ==='پروان'){
	  crime.districts =[
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
	  else if(crime.province === 'سمنگان'){
		crime.districts = [
			'ایبک','دره صوف بالا','دره صوف پایین','روی دو آب','فیروز نخچیر','حضرت سلطان','خرم وسرباغ'
		]
	  }
	   else if(crime.province === 'ننگرهار'){
		crime.districts = [
			'آچین','بتنی کوت','بهسود','پچیرواگام','جلال اباد','حصارک','چپرهار','خوگیانی','دربابا','دره نور','دره بالا','رودات','سرخ رود','شیرزاد','شینوار','لعل پور','گوشته','کوز کنر','کوت','کامه','مهمند دره','نازیان'
		]
	  }
	   else if(crime.province === 'سرپل'){
		crime.districts = [
			'سرپل','بلخاب','سانجارک','سوزمه قلعه','صیاد','گوسفندی','کوهستانات'
		]
	  }
	   else if(crime.province === 'بغلان'){
		crime.districts = [
			'پل خمری','خوست و فرنگ','گذرگاه نور','اندراب','ده صلاح','پل حصار','نهرین','جلگه','برکه','خنجان','دوشی','بغلان جدید','تاله و برفک','دهانه غوری'
		]
	  }
	   else if(crime.province === 'دایکندی'){
		crime.districts = [
			'نیلی','شهرستان','میرامور','گیزاب','اشترلی','کجران','سنگ تخت بندر','کیتی','خدیر','پاتو'
		]
	  }
	   else if(crime.province === 'فراه'){
		crime.districts = [
			'انار دره','بالابلوک','بکواه','پرچمن','پشت رود','خاک سفید','شیب کوه','فراه','قلعه کاه','گلستان','لاش و جوین'
		]
	  }
	   else if(crime.province === 'فاریاب'){
		crime.districts = [
			'میمنه','اندخوی','ولسوالی بلچرخ','دولت آباد','غورماچ','گرزیوان','خان پارچاغ','خواجه سبز پوش','کوهستان','پشتون کوت','قرم قل','قیصار','قرغان','شیرین تگاب'
		]
	  }
	   else if(crime.province === 'غزنی'){
		crime.districts = [
			'غرنی','جاغوری','مالستان','قره باغ','اب بند','اجرستان','گلیلان','گیرو','اندر','خوگیانی','ناوه','واغز','زنه جان','رشیدان','مقر','ده بک','جغتو','خواجه عمری','ناور'
		]
	  }
	   else if(crime.province === 'غور'){
		crime.districts = [
			'فیروز کوه','مرغاب','جارسده','دولت اباد','دولینه','لعل سرجنگل','پسابند','ساغر','شهرک','تیوره','تولک'
		]
	  }
	   else if(crime.province === 'هلمند'){
		crime.districts = [
			'لشکرگاه','بغران','دیشو','ریگ خاک نشین','سنگین','گرمسیر','موسی قلعه','نادعلی','کجکی','ناوه بارکزی','نوزاد','نهر سراج','واشیر'
		]
	  }

	  else if(crime.province === 'جوزجان'){
		crime.districts = [
			'شبرغان','اقچه','خانقاه','خم آب','درزاب','فیض آباد','قرقین','قوش تیپه','مردیان','منگجگ'
		]
	  } 
	  else if(crime.province === 'خوست'){
		crime.districts = [
			'خوست','باک','تنی','تیر یزایثی','جاجی میدان','سپیره','شمل','صبری یعقوبی','قلندر','گربز','مندوزی','موسی خیل','نادرشاه کوت'
		]
	  } 
	  else if(crime.province === 'کندز'){
		crime.districts = [
			'کندز','آغتش','ارچی','چهارده','امام صاحب','خان آباد','قلعه ذال'
		]
	  } 
	  else if(crime.province === 'کنر'){
		crime.districts = [
			'اسعد آباد','برکنر','خاص کنر','دانگام','دره پیچ','چپه دره','چوکی','سرکانی','شیگل و شلتن','غازی آباد','مروره','ناری','نرنگ','نورگل','وته پور'
		]
	  } 
	  else if(crime.province === 'لغمان'){
		crime.districts = [
			'مهترلام','دولت شاه','قرغه یی','علیشینگ','علینگار','بادپش'
		]
	  } 
	  else if(crime.province === 'لوگر'){
		crime.districts = [
			'پل علم','ازره','برکی برک','چرخ','خروار','خوشی','محمدآغه'
		]
	  }
	  else if(crime.province === 'نیمروز'){
		crime.districts = [
			'زرنج','چهاربرجک','چخانسوز','کنگ','خاش رود'
		]
	  }
	  else if(crime.province === 'نورستان'){
		crime.districts = [
			'پارون','برگ منال','دوآب','کامدیش','مندول','نورگرام','واما','وایگل'
		]
	  }
	  else if(crime.province === 'بدخشان'){
		crime.districts = [
			'فیض آباد','کشم','درواز بالا','جرم','اشکاشم','واخان','بهارک','شغنان','خواهان','شهربزرگ','تشکان','درایم','شکی','ارگو','یاوان','زاغستان','یفتل سفلی','کران منجان','زیباک','خاش','یمگان','کوف آب','تگاب','کوهستان','درواز پایین','وردوج','ارغنج خواه','شهداه'
		]
	  }
	  else if(crime.province === 'ارزگان'){
		crime.districts = [
			'ترین کوت','شهید حساس','چوره','دهراوود','گیزاب','خاص ارزگان'
		]
	  }
	  else if(crime.province === 'پکتیا'){
		crime.districts = [
			'گردیز','احمدآباد','جاجی','جانی خیل','چمکنی','دند پتان','پشتون زدران','زرمت','سیدکرم','شواک','گرده ثیری','لجه احمدخیل','لحه منگل','میرزکه'
		]
	  }
	  else if(crime.province === 'پکتیکا'){
		crime.districts = [
			'شرنه','ارگون','اومته','برمل','تروو','جانی خیل','دیله و خوشامند','زرغون شهر','زیروک','سرروضه','سروبی','گومل','گیان','متاخان','نکه','وازه خواه','ورممی','یحیی خبل','یوسف خیل'
		]
	  }
	  else if(crime.province === 'پنجشیر'){
		crime.districts = [
			'بازارک','انابه','ابشار','دره','خنج','پریان','روخه','شتل'
		]
	  }
	  else if(crime.province === 'تخار'){
		crime.districts = [
			'تالقان','بهارک','بنگی','اشکمش','چال','چاه آب','خواجه بهاّالدین','خواجه غار','درقد','دشت قلعه','روستاق','فرخار','گل افغان','نمک اب','ورسج','هزارسموچ','ینگی قلعه'
		]
	  }

	  else if(crime.province === 'کاپیسا'){
		crime.districts = [
			'محمود راقی','اله سایی','تگاب','حصه اول کوهستان','حصه دوم کوهستان','کوه بند','نجراب'
		]
	  }
	  else if(crime.province === 'وردک'){
		crime.districts = [
			'میدان شهر','بهسود','حصه اول بهسود','دایمیرداد','چک','نرخ','سیدآباد','جلریز','جغتو'
		]
	  }

	  
	  
	}

	let latitude;
  let longitude;
 
	async function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
		alert('موقعیت شما موفقانه گرفته شد: '+ latitude + longitude)
      });
    } else {
      alert('مرورگر شما از موقعیت جغرافیایی پشتیبانی نمی‌کند.');
	  
    }
  }
	function hideclick ()  {
		hide = !hide
	}
	let hundleCrime = async () => {
		//@ts-ignore
		if (hide) {
			(crime.firstname = ''), (crime.lastname = ''), (crime.phoneN = ''), (crime.email = '');
		}
		
		crime.location = `${latitude},${longitude}`
		await axios.post('http://localhost:3000/api/crime/store', crime)
		.then(res => showMessage = true)

		let valid = true;

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
	};

	$: console.log('hide', hide);


	function hideSuccessMessage (){
    showMessage = false;
    // window.location.reload()
}
</script>




<main>
	{#if showMessage}
<div class="success-message">
  موفقانه اضافه شد
  <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
  
</div>
{/if}

	<div class="container-fluid px-1 py-3 mx-auto" dir="rtl" >
		<!-- <a href="https://www.google.com/maps/search/?api=1&query={latitude},{longitude}">go to</a> -->
		<div class="row d-flex justify-content-center" >
			<div class="col-xl-7 col-lg-8 col-md-9 col-11" >
				<div class="card"style="background-color:white;" >
					<h5 class="text-center mb-3" >جرایم را اطلاع دهید</h5>
					<form class="form-card" on:submit|preventDefault={hundleCrime} >

						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3" style="padding-top:10px;"
									>ولایت<span class="text-danger"> *</span></label
								>
								<select name="province" id="province" bind:value={crime.province} on:change={loadprovince} style="height:40px">
									<option value="" disabled selected>ولایت خود را انتخاب کنید</option>
									<option value="کابل">کابل</option>
									<option value="بلخ">بلخ</option>
									<option value="قندهار">قندهار</option>
									<option value="پروان">پروان</option>
									<option value="بامیان">بامیان</option>
									<option value="هرات">هرات</option>
									<option value="سمنگان">سمنگان</option>
									<option value="ننگرهار">ننگرهار</option>
									<option value="بغلان">بغلان</option>
									<option value="دایکندی">دایکندی</option>
									<option value="فراه">فراه</option>
									<option value="فاریاب">فاریاب</option>
									<option value="غزنی">غزنی</option>
									<option value="غور">غور</option>
									<option value="هلمند">هلمند</option>
									<option value="جوزجان">جوزجان</option>
									<option value="خوست">خوست</option>
									<option value="بدخشان">بدخشان</option>
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
									<option value="کاپیسا">کاپیسا</option>
									<option value="سرپل">سرپل</option>
									<option value="وردک">وردک</option>
								</select>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex ">
								<label class="form-control-label px-3" style="padding-top:10px"
									>ولسوالی<span class="text-danger"> *</span></label
								>
								<select name="district" bind:value={crime.district} on:change={loadprovince} style='height:40px'>
									{#each crime.districts as district }
									<option value={district} >{district}</option>
									{/each}
								</select>
							</div>
						</div>
						<div class="row justify-content-between text-left">
							<div class="form-group col-sm-6 flex-column d-flex" style="padding-top:5px;">
								<label class="form-control-label px-3"
									>نوعیت جرم:<span class="text-danger"> *</span></label
								>
								<select required name="title" bind:value={crime.subject} style="height: 30px;">
									<option value={null} selected disabled>لطفا نوعیت جرم را انتخاب کیند</option>
									<option value="کلاهبرداری">کلاهبرداری</option>
									<option value="کودک آزاری">کودک آزاری</option>
									<option value="جعل">جعل ودزدی(کالا)</option>
									<option value="خشونت خانوادگی">خشونت خانوادگی</option>
									<option value="زورگویی">زورگویی</option>
									<option value="زندان">زندان</option>
									<option value="مواد مخدر">مواد مخدر</option>
									<option value="قتل">قتل</option>
									<option value="داشتن صلاح">داشتن صلاح</option>
									<option value="تحت تعقیب">تحت تقیب</option>
									<option value="تروریسم">تروریسم</option>
									<option value="جرایم محیط زیست">جرایم محیط زیست</option>
									<option value="معضلات روستایی">معضلات روستایی</option>
									<option value="تجاوز جنسی">تجاوز جنسی</option>
									<option value="دیگر">دیگر</option>
								</select>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>مکان<span class="text-danger"> *</span></label
								>
								<button on:click={getLocation} type="button">تعیین موقعیت </button>
							</div>
						</div>
						

						


						<div class="row justify-content-between text-left mt-2">
							<div class="form-group col-sm-6 flex-column d-flex" >
								<label class="form-control-label px-3"
									>زمان <span class="text-danger"> *</span></label
								>
								<input type="time" bind:value={crime.time} required>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>تاریخ<span class="text-danger"> *</span></label
								>
								<input
									type="date"
									bind:value={crime.date}
									required
								
								/>
							</div>
						</div>





						<div class="row justify-content-between text-left mt-2">
							<div class="form-group col-sm-12 flex-column d-flex">
								<label class="form-control-label px-3"
									>توضیحات<span class="text-danger"> *</span></label
								>
								<textarea
									bind:value={crime.description}
									placeholder="بیشتر توضیح دهید"
									required
								/> 
							</div>
						</div>



						<div style="margin-left:400px;mt-2">
							بصورت ناشناس اطلاع دهید 
							<input type="checkbox" on:click={()=>{hideclick()} } > 
						</div>
						{#if !hide}
						<div class="row justify-content-between text-left mt-2">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>نام<span class="text-danger"> *</span></label
								>
								<input
									bind:value={crime.firstname}
									placeholder="نام خود را وارد کنید"
								/>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>تخلص<span class="text-danger"> *</span></label
								>
								<input
									bind:value={crime.lastname}
									placeholder="تخلص خود را وارد کنید"
								/>
							</div>
						</div>
						<div class="row justify-content-between text-left mt-2">
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>ایمیل<span class="text-danger"> *</span></label
								> <input type="email"
								bind:value={crime.email}
								placeholder="ایمیل خود را وادر کنید"/>
							</div>
							<div class="form-group col-sm-6 flex-column d-flex">
								<label class="form-control-label px-3"
									>نمبر مبایل<span class="text-danger"> *</span></label
								> <input type="number"
								bind:value={crime.phoneN}
								  placeholder="شماره خود را وارد کنید"/>
							</div>
						</div>
							
						{/if}
						<div class="row">
							<div class="form-group col-lg-12">
								<button type="submit" class=" btn-primary" style="width:99%;">ارسال</button>
							</div>
						</div>
						
					</form>
				</div>
			</div>
			<div class="col-xl-5 col-lg-4 col-md-3" style="margin-right:-30px">
				<img src="/about2.jpg" style="height:85%;width:105%" >
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
