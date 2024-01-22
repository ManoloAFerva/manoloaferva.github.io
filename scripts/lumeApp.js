// import * as lume from "lume";
gsap.registerPlugin(ScrollTrigger);

var vpWidth = window.matchMedia("(max-width: 800px)")

if (vpWidth.matches){
	console.log("screen is small")
	appRainScene.perspective = 1000;
	mographRainScene.perspective = 1000;
} else {console.log("sceen is big enough")}

let appsTimeline = new gsap.timeline({
	scrollTrigger: {
		trigger: "#editStart",
		start: "top bottom",
		endTrigger: "#editEnd",
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
});

appsTimeline.fromTo(resolve.rotation, {
 	x: 90,
    y: -10,
    ease: "none",
}, {
	x: -45,
	y: -30,
}, "<");

appsTimeline.fromTo(fcpx.rotation, {
	x: -30,
	y: -90,
}, {
	x: 45,
	y: 45,
}, "<");

// Motion Graphics App Rain Animation:

let mographTimeline = new gsap.timeline({
	scrollTrigger: {
		trigger: "#mographRainStart",
		start: "top bottom",
		endTrigger: "#mographRainEnd",
		end: "top top",
		scrub: 0,
	}
});

mographTimeline.fromTo(mographFollowLight.position, {
	y: -400,
}, {
	y: 300,
});

mographTimeline.fromTo(after.rotation, {
	x: 80,
	y: -45,
}, {
	x: -80,
	y: 45,
}, "<");

mographTimeline.fromTo(motn.rotation, {
	x: 45,
	y: -10,
}, {
	x: -15,
	y: 10,
}, "<")

mographTimeline.fromTo(blender.rotation, {
	x: -45,
	y: 60,
}, {
	x: 15,
	y: -30,
}, "<");

mographTimeline.fromTo(davinci.rotation, {
	x: 140,
	y: 30,
}, {
	x: -20,
	y: -30,
}, "<");

