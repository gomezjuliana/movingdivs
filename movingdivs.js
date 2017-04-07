var toggle = true;

function changeHeight(){
	if (toggle === true){
	document.querySelector('.container').classList.add('smaller');
	console.log(toggle);
	toggle = false;
	console.log(toggle);
    } else {
    	document.querySelector('.container').classList.remove('smaller');
    	toggle = true;
    }
}