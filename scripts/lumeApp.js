// import * as lume from "lume";
gsap.registerPlugin(ScrollTrigger);

var vpWidth = window.matchMedia("(max-width: 800px)")

if (vpWidth.matches){
	console.log("screen is small")
	appRainScene.perspective = 1000;
} else {console.log("sceen is big enough")}

let appsTimeline = new gsap.timeline({
	scrollTrigger: {
		trigger: "#appsStart",
		start: "top bottom",
		endTrigger: "#appsEnd",
		end: "center top",
		scrub: 0,
	}
});

appsTimeline.fromTo(premiere.rotation, {
	x: -70,
	y: 30,
}, {
	x: 10,
	y: -45,
})

appsTimeline.fromTo(resolve.rotation, {
 	x: 90,
    y: -10,
    ease: "none",
}, {
	x: 0,
	y: -30,
}, "<");

appsTimeline.fromTo(fcpx.rotation, {
	x: -30,
	y: -90,
}, {
	x: 45,
	y: 45,
}, "<")

