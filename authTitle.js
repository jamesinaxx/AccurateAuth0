let old0text = 'everyone';
let old1text = 'just anyone';

window.addEventListener('load', function () {
	window.setInterval(function () {
		let items = document.getElementsByClassName('slide-enter-done');
		let text = document.querySelector('title').innerText;
		text = text.replace(old0text, items[0].innerText);
		text = text.replace(old1text, items[1].innerText);
		document.querySelector('title').innerText = text;
		old0text = items[0].innerText;
		old1text = items[1].innerText;
	}, 1000);
});
