
function modifyDraggableUI(el) {
	if(el.classList.contains("ui-draggable")) {
		el.classList.toggle("visible");
	}
	else if(el.parentNode.classList.contains("ui-draggable")) {
		el.parentNode.classList.toggle("visible");
	}
}


window.addEventListener("click", function(event) {
	modifyDraggableUI(event.target);
});
