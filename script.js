/* navigator.serviceWorker?.register('service-worker.js')
navigator.serviceWorker.onmessage = m => {
	console.info('Update found!')
	if (m?.data == 'update') location.reload(true)
} */

refreshPageSize = () => {
	let isStandalone = window.matchMedia('(display-mode: standalone)').matches
	document.documentElement.style.setProperty('--vh', `${isStandalone ? window.outerHeight : window.innerHeight}px`)
}

document.onreadystatechange = () => {
	if (document.readyState != 'complete') return
	refreshPageSize()
	let contaienr = document.querySelector('header section')
	contaienr.onmousewheel = e => {
		contaienr.scrollBy({left: (e.wheelDelta * -1)})
	}
}

window.onresize = () => {
	refreshPageSize()
}