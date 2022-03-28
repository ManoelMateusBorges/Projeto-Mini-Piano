const keys = document.querySelectorAll(".key");

function pressTeclas(event){

	const keyCode = getKeyCode(event);
	
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
	

	const cantFoundAnyKey = key;
	
	if(!cantFoundAnyKey){
		return;
	}
	
	playSong(keyCode)

}


function getKeyCode(event){
	let keyCode;

	const isKeyboard = event.type === "keydown";
	if(isKeyboard){
		keyCode = event.keyCode;
	}else{
		keyCode = event.target.dataset.key;
	}

	return keyCode;
}

function playSong(event){
	const playSong = document.querySelector(`audio[data-key="${event}"]`);
	playSong.currentTime = 0;
	playSong.play();
}

keys.forEach(function(key){
	key.addEventListener("click", pressTeclas)
})

window.addEventListener("keydown", pressTeclas);