function videoTransition(element){
	var name = "amigosratinhos/" + element.innerText + ".mp4";
	var video = document.getElementById("video-area")
	var source = document.getElementById("video-source")
	source.src = name;
	video.load();
}