const listita = $(".mograph-list ul")[0]
const elVideo = $("#mograph-video")
// console.log($(listita).attr("href"))

$($(listita).children("li")[0]).addClass("selected")

$(listita).on("click", $("li"), function(target) {
	me = target.target;
	videoPath = String($(me).attr("href"));
	console.log($(elVideo).attr("src"));
	console.log($(me).attr("href"));
	$(elVideo).attr("src", videoPath);
	$(me).addClass("selected");
	$(me).siblings().removeClass("selected");
})