<script>
    	import { goto } from '$app/navigation';

    import axios from "axios";

    let showMessage = false
    
    let laible = {
      firstname:"",
      lastname:'',
      email:'',
      phone:'',
      password:'',
      province:'',
      districts:'',
      locationL:'',
      file:'',
      date:''
      
    }

    function loadprovince() {
	  if (laible.province === "کابل") {
		laible.districts = [
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
	  } else if (laible.province === "بلخ") {
		laible.districts = [
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
	  } else if(laible.province === 'هرات') {
		laible.districts = [
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
	  } else if(laible.province ==='قندهار'){
		laible.districts = [
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

	  else if(laible.province ==='بامیان'){
	  laible.districts =[
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

	  else if(laible.province ==='پروان'){
	  laible.districts =[
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
	  else {
		event.districts =='none'
	  }
	  
	}
	

    async function Adduser(){
        await axios.post("http://localhost:3000/api/laible/register",laible)
        .then((res) => {showMessage=true})
        
		.catch((err) => console.log(err));
        
    }
  ;


function hideSuccessMessage (){
    showMessage = false;
    goto('/admin/laible')
}
 
</script>

<svelte:head>
    <title>Add user</title>
</svelte:head>


{#if showMessage}
  <div class="success-message">
    موفقانه اضافه شد
    <button class="ok-button" on:click={hideSuccessMessage}>OK</button>
    
  </div>
{/if}

<div class="details">
    <p style="font-size:20px;margin:-20px auto;border-bottom:2px solid black;">ثبت و راجستر نمودن مسول</p>
	<div class="news">
        <form class="form" on:submit|preventDefault={Adduser}>
            <div class="form-group m-1">
                <label class="m-2">نام:</label>
                <input type="text" class="form-control"
                bind:value={laible.firstname}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">تخلص:</label>
                <input type="text" class="form-control"
                bind:value={laible.lastname}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">ایمیل:</label>
                <input type="email" class="form-control"
                bind:value={laible.email}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">مبایل:</label>
                <input type="phone" class="form-control"
                bind:value={laible.phone}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">پسورد</label>
                <input type="text" class="form-control"
                bind:value={laible.password}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">ولایت:</label>
                <select name="province" id="province" bind:value={laible.province} on:change={loadprovince} style="height:40px">
                    <option value="" disabled selected>ولایت خود را انتخاب کنید</option>
                    <option value="کابل">کابل</option>
                    <option value="بلخ">بلخ</option>
                    <option value="قندهار">قندهار</option>
                    <option value="بامیان">بامیان</option>
                    <option value="هرات">هرات</option>
                    <option value="پروان">پروان</option>
                    
                    <!-- <option value="ننگرهار">ننگرهار</option>
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
                    <option value="کاپیسا">کاپیسا</option>
                    <option value="سرپل">سرپل</option>
                    <option value="وردک">وردک</option> -->
                </select>
            </div>
            <div class="form-group m-1">
                <label class="m-2">ولسوالی:</label>
                <select name="district" bind:value={laible.districts} on:change={loadprovince} style='height:40px'>
                    {#each laible.districts as district }
                    <option value={district} >{district}</option>
                        
                    {/each}
                </select>
            </div>
            <div class="form-group m-1">
                <label class="m-2">مسولیت:</label>
                <input type="text" class="form-control"
                bind:value={laible.locationL}>
            </div>
            
            <div class="form-group m-1">
                <label class="m-2">file</label>
                <input type="file" class="form-control"
                bind:value={laible.file}>
            </div>
            <div class="form-group m-1">
                <label class="m-2">date</label>
                <input type="date" class="form-control"
                bind:value={laible.date}>
            </div>

            <div class="form-group m-1">
                <button class="btn btn-primary col-lg-12" type="submit" >Add user</button>
            </div>
          
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
	.details .news {
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

    .success-message {
    background:green;
    border-radius:10px;
    position: fixed;
    margin-right:25%;
    width:20%;
    height:10%;
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
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
</style>
