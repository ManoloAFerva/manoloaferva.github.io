gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin()

var video = document.getElementById('edit-video');

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video.play();
  video.pause();
});

let editScroll = gsap.timeline({
	scrollTrigger: {
		trigger: '#edit-trigger',
		start: 'bottom center',
		end: 6000,
		scrub: true,
		onComplete: terminar,
	}
})

editScroll.fromTo('#edit-video', 
	{
		currentTime: 0,
	},
	{
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

