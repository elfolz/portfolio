function onResize(e) {
	document.body.style.setProperty('--vh', `${window.innerHeight}px`)
}
function onScroll(e) {
	let top = e.target.scrollingElement.scrollTop
	let y1 = window.innerWidth >= 414 ? 132 : 92
	if (top >= y1) document.querySelector('header').classList.add('fixed')
	else document.querySelector('header').classList.remove('fixed')
	let y2 = window.innerWidth >= 414 ? 1656 : 1448
	if (top >= y2) document.querySelector('header').classList.add('inverted')
	else document.querySelector('header').classList.remove('inverted')
}
window.onresize = () => onResize()
window.onscroll = (e) => onScroll(e)
onResize()