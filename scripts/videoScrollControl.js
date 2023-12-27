gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin()

var lengths = 2;

let editScroll = gsap.timeline({
	scrollTrigger: {
		trigger: '#edit-trigger',
		start: 'bottom center',
		end: 6000,
		scrub: true,
		onComplete: terminar,
	}
})

editScroll.to('#edit-video', {
	pause: true,
	currentTime: 6,
}, 0)

editScroll.to('#edit-title-01', {
	y: 0,
	opacity: 1,
	duration: 0,
}, 0)

editScroll.to('#edit-title-02', {
	y: 0,
	opacity: 1,
	duration: 0.07,
}, ">")

editScroll.to('#edit-title-03', {
	y: 0,
	opacity: 1,
	duration: 0.07,
	delay: 0.05
}, ">")

editScroll.to('#edit-title-04', {
	y: 0,
	opacity: 1,
	duration: 0.07,
	delay: 0.1
}, ">")

editScroll.to('#edit-video', {
	play: true,
}, ">")

function terminar() {
	console.log("animation has ended")
}

