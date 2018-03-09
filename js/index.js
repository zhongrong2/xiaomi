// banner效果
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add('active');
			imgs[index].classList.add('active');
			n=index;
		}
		
	});

	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
		imgs[n].classList.add('active');
		pagers[n].classList.add('active');
	}

	banner.onmouseenter=function (){
		clearInterval(t);
	}
	banner.onmouseleave=function (){
		t=setInterval(move,3000);
	}

	var flag=true;
	next.onclick=function (){
		if (flag) {
			flag=false;
			move();
		}
		
	}
	prev.onclick=function (){
		if (flag) {
			flag=false;
			n-=2;//n++ n--
			move();
		}
		
	}
	imgs.forEach(function(ele,index){		//检测flag执行完给它赋值true
		ele.addEventListener("transitionend", function(){	//整张图片过渡完之后
			flag=true;
		})
	}
	);
}

// 闪购效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".buy-inner");

	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove('display');
		if(n===2){
			this.classList.add('display');
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove('display');
		if(n===0){
			this.classList.add('display');
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";

	}
}

//内容区域
{
	function content(parent){
		const types=parent.querySelectorAll(".type");
		const goodslists=parent.querySelectorAll(".goodslist");
		// console.log(types,goodslists)

		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("dapei_rightwenzi1");
					goodslists[i].classList.remove("goodslist_active");
				}
			ele.classList.add("dapei_rightwenzi1");
			goodslists[index].classList.add("goodslist_active");
		}
		
	})
	}

	const contentlist=document.querySelectorAll(".content");
	contentlist.forEach(function(ele){
		content(ele);
	})
	
}

//内容
{
	function neirong(every){
		// let pagers=document.querySelectorAll(".neirong_pagerbox li");
		// let imgs=document.querySelectorAll(".image_item");
		// let btns=document.querySelectorAll(".content_btn div");
		let lbtn=every.querySelector(".neirong_item_lbtn");
		let rbtn=every.querySelector(".neirong_item_rbtn");
		let imgbox=every.querySelector(".imagebox")
		// console.log(pagers,imgs,rbtn,lbtn,imgbox);


	// pagers.forEach(function(ele,index){
	// 	ele.onclick=function(){
	// 		for(let i=0;i<imgs.length;i++){
	// 			// imgs[i].classList.remove("active");
	// 			pagers[i].classList.remove("active");

	// 		}
	// 		// this/ele/pagers[]
			
	// 		this.classList.add('active');
	// 		// imgs[index].classList.add('active');
	// 		imagebox.style.marginLeft=-296*n+"px";
	// 	}
	// });


		let n=0;
			rbtn.onclick=function(){
				n++;
				// pagers.classList.remove('active');
				if(n===2){
					// this.classList.add('active');
				}
				if(n===3){
					n=2;
					return;
				}
				imgbox.style.marginLeft=-296*n+"px";
			}
			lbtn.onclick=function(){
				n--;
				// pagers.classList.remove('active');
				if(n===0){
					// this.classList.add('active');
				}
				if(n===-1){
					n=0;
					return;
				}
				imgbox.style.marginLeft=-296*n+"px";

			}
	}
	const neirong_items=document.querySelectorAll(".neirong_item");
	neirong_items.forEach(function(ele,index){
		neirong(ele);
	})
}
