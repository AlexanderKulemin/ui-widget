//= current-device.min.js
//= simplebar.min.js

var widget = document.querySelector('.widget__box');
var wgt = document.querySelector('.widget ');
var btns = document.querySelectorAll('.js-open-widget');
var nextBtn = document.querySelectorAll('.js-next-step');
var backBtn = document.querySelectorAll('.widget-header__back-btn');
var manageLinks = document.querySelectorAll('.widget-list__link');
var currentStep = 1;

function showWidget() {
	document.body.classList.add('_widget-visible');
	widget.classList.add('widget__box_visible');
}

for(var i=0; i<btns.length; i++) {
	btns[i].addEventListener('click', function() {
		showWidget();
	});
}

function hideWidget() {
	document.body.classList.remove('_widget-visible');
	widget.classList.remove('widget__box_visible');
}

document.querySelector('.widget-header__close-btn').addEventListener('click', function() {
	hideWidget();
});

function openStep(step) {
	wgt.classList.remove('widget_slide_1');
	wgt.classList.remove('widget_slide_2');
	wgt.classList.remove('widget_slide_3');
	wgt.classList.add('widget_slide_' + step);
	currentStep = step;

	if (step === 3 && reDrawChart) {
		reDrawChart(350);
	}
}

function reDrawChart(time) {
	for(var i=0; i<charts.length; i++) {
		document.querySelector(charts[i].query + ' .round-chart_top-right .round-chart__progress').style.transform = 'rotateZ(-90deg)';
		document.querySelector(charts[i].query + ' .round-chart_bottom-right .round-chart__progress').style.transform = 'rotateZ(0deg)';
		document.querySelector(charts[i].query + ' .round-chart_bottom-left .round-chart__progress').style.transform = 'rotateZ(0deg)';
		document.querySelector(charts[i].query + ' .round-chart_top-left .round-chart__progress').style.transform = 'rotateZ(90deg)';
	}
	setTimeout(function() {
		for(var i=0; i<charts.length; i++) {
			document.querySelector(charts[i].query + ' .round-chart_top-right .round-chart__progress').style.transform = 'rotateZ(' + charts[i].a1 + 'deg)';
			document.querySelector(charts[i].query + ' .round-chart_bottom-right .round-chart__progress').style.transform = 'rotateZ(' + charts[i].a2 + 'deg)';
			document.querySelector(charts[i].query + ' .round-chart_bottom-left .round-chart__progress').style.transform = 'rotateZ(' + charts[i].a3 + 'deg)';
			document.querySelector(charts[i].query + ' .round-chart_top-left .round-chart__progress').style.transform = 'rotateZ(' + charts[i].a4 + 'deg)';
		}
	}, time)
};


for(var j=0; j<nextBtn.length; j++) {
	nextBtn[j].addEventListener('click', function() {
		openStep(2);
	});
}

for(var k=0; k<backBtn.length; k++) {
	backBtn[k].addEventListener('click', function() {
		openStep(--currentStep);
	});
}

for(var m=0; m<manageLinks.length; m++) {
	manageLinks[m].addEventListener('click', function() {
		openStep(3);
	});
}


var themeToggle = document.querySelector('.js-theme-switch .toggle__checkbox');
var rtlToggle = document.querySelector('.js-rtl-switch .toggle__checkbox');

themeToggle.addEventListener('change', function() {
	if (themeToggle.checked) {
		wgt.classList.add('widget_dark');
	} else {
		wgt.classList.remove('widget_dark');
	}
});

rtlToggle.addEventListener('change', function() {
	if (widget.classList.contains('widget__box_visible')) {
		hideWidget();

		setTimeout(function() {
			if (rtlToggle.checked) {
				widget.classList.remove('widget__box_left');
			} else {
				widget.classList.add('widget__box_left');
			}
		}, 400);

		setTimeout(function() {
			showWidget();
		}, 800);
	} else {

		if (rtlToggle.checked) {
			widget.classList.remove('widget__box_left');
		} else {
			widget.classList.add('widget__box_left');
		}
	}
	
});