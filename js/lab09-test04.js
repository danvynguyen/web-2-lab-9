/* add code after this comment */

document.addEventListener('DOMContentLoaded', function () {
	let largeImage = document.getElementById("manipulatedImage");
	//console.log(largeImage.getAttribute("src"));
	let smallImages = document.querySelectorAll(".image");
	
	for (let img of smallImages) {
 	img.addEventListener('click', function () {
		
		
		newsrc= img.getAttribute("src").replace("small", "medium");
		
    	largeImage.setAttribute("src", newsrc);
    	largeImage.setAttribute("alt", img.getAttribute("alt"));
    	largeImage.setAttribute("title", img.getAttribute("title"));
		
		let em = document.querySelector("em");
		em.innerHTML=img.getAttribute("alt");
		
		let span = document.querySelector("#title");
		span.innerHTML=img.getAttribute("title");
		
 		}); 
	}
	
	let sliderOpacity = document.getElementById("sliderOpacity");
	sliderOpacity.addEventListener('click', function () {
		let opacity = Number(sliderOpacity.value);
		console.log(opacity);
		largeImage.style.filter="opacity("+opacity/100+")";
		let num = document.getElementById("numOpacity");
		num.innerHTML = sliderOpacity.value;
	});
	
	let sliderSaturation = document.getElementById("sliderSaturation");
	sliderSaturation.addEventListener('click', function () {
		let saturation = Number(sliderSaturation.value);
		console.log(saturation);
		largeImage.style.filter="saturate("+(saturation/300)*100+"%)";
		let num = document.getElementById("numSaturation");
		num.innerHTML = sliderSaturation.value;
	});
	
	let sliderBrightness = document.getElementById("sliderBrightness");
	sliderBrightness.addEventListener('click', function () {
		let brightness = Number(sliderBrightness.value);
		console.log(brightness);
		largeImage.style.filter="brightness("+brightness/300+")";
		let num = document.getElementById("sliderBrightness");
		num.innerHTML = sliderBrightness.value;
	});
	
	let sliderHue = document.getElementById("sliderHue");
	sliderHue.addEventListener('click', function () {
		let hue = Number(sliderHue.value);
		console.log(hue);
		largeImage.style.filter="hue-rotate("+(hue/360)*100+"deg)";
		let num = document.getElementById("sliderHue");
		num.innerHTML = sliderHue.value;
	});
	
	let sliderGray = document.getElementById("sliderGray");
	sliderGray.addEventListener('click', function () {
		let grayscale = Number(sliderGray.value);
		console.log(grayscale);
		largeImage.style.filter="grayscale("+(grayscale/100)*100+"%)";
		let num = document.getElementById("sliderGray");
		num.innerHTML = sliderGray.value;
	});
	
	let sliderBlur = document.getElementById("sliderBlur");
	sliderBlur.addEventListener('click', function () {
		let blur = Number(sliderBlur.value);
		console.log(blur);
		largeImage.style.filter="blur("+(blur/100)*100+"px)";
		let num = document.getElementById("sliderBlur");
		num.innerHTML = sliderBlur.value;
	});
	
	let resetButton = document.getElementById("resetFilters");
	resetButton.addEventListener('click', function() {
		largeImage.style.filter="none";
	})
});

/*$('#saturate').on "input change", ->
  val = $(this).val()
  saturate = 'saturate(' + val + '%)' 
  $('#saturateAmount').text(val)
  $('#cat').css('-webkit-filter', saturate)*/