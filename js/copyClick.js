
function id(name) {
	return document.getElementById(name);
}

function fetchClipboard(destination_id) {
		// fill in clipboard
	var clipTxt = localStorage.getItem("clipboard") || "";
	
	if( clipTxt != "" && confirm("Confirm paste: \n\n" + clipTxt) ) {
		id(destination_id).value = clipTxt;
	}
}

function handleClick(name) {
		// Save to browser storage
	var txt = id("commandOutput-ta").value;
	
	localStorage.setItem("clipboard", txt);
	
	
		// Animation
	name.innerHTML = "Copied!";
	
	setTimeout(function() {
		name.innerHTML = "Copy";
	}, 1000);
}


window.addEventListener("load", function() {
	
		// add "paste from cb" button
			// command output
	var pasteBtn1 = document.createElement("span");
	
	pasteBtn1.innerHTML = "Paste";
	pasteBtn1.classList.add("greenPlus");
	pasteBtn1.onclick = function() {
		fetchClipboard("commandOutput-ta");
	};
	
	id("commandOutput").appendChild(pasteBtn1);
	
	
			// command input
	var pasteBtn2 = document.createElement("span");
	
	pasteBtn2.innerHTML = "Paste";
	pasteBtn2.classList.add("greenPlus");
	pasteBtn2.onclick = function() {
		fetchClipboard("commandInput-ta");
	};
	
	id("commandInput").appendChild(pasteBtn2);
	
	
			// internal clipboard
	var pasteBtn3 = document.createElement("span");
	
	pasteBtn3.innerHTML = "Paste";
	pasteBtn3.classList.add("greenPlus");
	pasteBtn3.onclick = function() {
		fetchClipboard("clipBoard-ta");
	};
	
	id("clipBoard").appendChild(pasteBtn3);
	
	
		// attach event listener
	document.getElementById("toClipBoard").addEventListener("click", function() {
		handleClick(id('toClipBoard'));
	});
	
});
