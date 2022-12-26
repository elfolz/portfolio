navigator.serviceWorker?.register('service-worker.js')

document.onreadystatechange = () => {
	if (document.readyState != 'complete') return
	let contaienr = document.querySelector('header section')
	contaienr.onmousewheel = e => {
		contaienr.scrollBy({left: (e.wheelDelta * -1)})
	}
}