window.onload = function() {
	document.body.addEventListener("mousemove", mouseControl);

	DOMhandler();
}

function mouseControl(e) {
	var x = e.clientX;
	var y = e.clientY;
	var xy_offset = 100;

	x -= xy_offset;
	y -= xy_offset;

	var semi_blur_1 = document.getElementById("semi_blur_1");
	var semi_blur_2 = document.getElementById("semi_blur_2");
	var no_blur = document.getElementById("no_blur");

	semi_blur_1.style.top = y + "px";
	semi_blur_1.style.left = x + "px";
	semi_blur_1.style.backgroundPositionX = (-x + "px");
	semi_blur_1.style.backgroundPositionY = (-y + "px");

	var offset = 12;
	semi_blur_2.style.top = (y + offset) + "px";
	semi_blur_2.style.left = (x + offset) + "px";
	semi_blur_2.style.backgroundPositionX = (-x - offset) + "px"; 
	semi_blur_2.style.backgroundPositionY = (-y - offset) + "px";

	offset = 25;
	no_blur.style.top = (y + offset) + "px";
	no_blur.style.left = (x + offset) + "px";
	no_blur.style.backgroundPositionX = (-x - offset) + "px"; 
	no_blur.style.backgroundPositionY = (-y - offset) + "px";
}

function DOMhandler() {
	var reg_btn = document.getElementById("register");
	var log_btn = document.getElementById("login");
	var log_form = document.getElementById("login_form");
	var reg_form = document.getElementById("register_form");

	reg_btn.onclick = function() {
		log_form.style.transformPosition = "50% 50%";
		log_form.style.transform = "scaleY(0)";

		setTimeout(function() {
			reg_form.style.transformPosition = "50% 50%";
			reg_form.style.transform = "scaleY(1)";
		}, 500);
	}

	log_btn.onclick = function() {
		reg_form.style.transformPosition = "50% 50%";
		reg_form.style.transform = "scaleY(0)";

		setTimeout(function() {
			log_form.style.transformPosition = "50% 50%";
			log_form.style.transform = "scaleY(1)";
		}, 500);
	}
}