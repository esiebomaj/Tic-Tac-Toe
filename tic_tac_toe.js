td=document.querySelectorAll('td')


	td[0].addEventListener('mouseover',function(){
    td[0].style.backgroundColor='lightblue'})
	td[0].addEventListener('mouseout',function(){
    td[0].style.backgroundColor='white'})
	td[0].addEventListener('click', function(){
		if (td[0].textContent=='') {
			td[0].textContent='X'
		}else if (td[0].textContent=='X') {
			td[0].textContent='O'
		}else if (td[0].textContent=='O') {
			td[0].textContent=''
		}
	
	})
	

	td[1].addEventListener('mouseover',function(){
    td[1].style.backgroundColor='lightblue'})
	td[1].addEventListener('mouseout',function(){
    td[1].style.backgroundColor='white'})
	td[1].addEventListener('click', function(){
		if (td[1].textContent=='') {
			td[1].textContent='X'
		}else if (td[1].textContent=='X') {
			td[1].textContent='O'
		}else if (td[1].textContent=='O') {
			td[1].textContent=''
		}
	
	})

		td[2].addEventListener('mouseover',function(){
    td[2].style.backgroundColor='lightblue'})
	td[2].addEventListener('mouseout',function(){
    td[2].style.backgroundColor='white'})
	td[2].addEventListener('click', function(){
		if (td[2].textContent=='') {
			td[2].textContent='X'
		}else if (td[2].textContent=='X') {
			td[2].textContent='O'
		}else if (td[2].textContent=='O') {
			td[2].textContent=''
		}
	
	})

		td[3].addEventListener('mouseover',function(){
    td[3].style.backgroundColor='lightblue'})
	td[3].addEventListener('mouseout',function(){
    td[3].style.backgroundColor='white'})
	td[3].addEventListener('click', function(){
		if (td[3].textContent=='') {
			td[3].textContent='X'
		}else if (td[3].textContent=='X') {
			td[3].textContent='O'
		}else if (td[3].textContent=='O') {
			td[3].textContent=''
		}
	
	})

		td[4].addEventListener('mouseover',function(){
    td[4].style.backgroundColor='lightblue'})
	td[4].addEventListener('mouseout',function(){
    td[4].style.backgroundColor='white'})
	td[4].addEventListener('click', function(){
		if (td[4].textContent=='') {
			td[4].textContent='X'
		}else if (td[4].textContent=='X') {
			td[4].textContent='O'
		}else if (td[4].textContent=='O') {
			td[4].textContent=''
		}
	
	})

		td[5].addEventListener('mouseover',function(){
    td[5].style.backgroundColor='lightblue'})
	td[5].addEventListener('mouseout',function(){
    td[5].style.backgroundColor='white'})
	td[5].addEventListener('click', function(){
		if (td[5].textContent=='') {
			td[5].textContent='X'
		}else if (td[5].textContent=='X') {
			td[5].textContent='O'
		}else if (td[5].textContent=='O') {
			td[5].textContent=''
		}
	
	})

		td[6].addEventListener('mouseover',function(){
    td[6].style.backgroundColor='lightblue'})
	td[6].addEventListener('mouseout',function(){
    td[6].style.backgroundColor='white'})
	td[6].addEventListener('click', function(){
		if (td[6].textContent=='') {
			td[6].textContent='X'
		}else if (td[6].textContent=='X') {
			td[6].textContent='O'
		}else if (td[6].textContent=='O') {
			td[6].textContent=''
		}
	
	})

		td[7].addEventListener('mouseover',function(){
    td[7].style.backgroundColor='lightblue'})
	td[7].addEventListener('mouseout',function(){
    td[7].style.backgroundColor='white'})
	td[7].addEventListener('click', function(){
		if (td[7].textContent=='') {
			td[7].textContent='X'
		}else if (td[7].textContent=='X') {
			td[7].textContent='O'
		}else if (td[7].textContent=='O') {
			td[7].textContent=''
		}
	
	})

		td[8].addEventListener('mouseover',function(){
    td[8].style.backgroundColor='lightblue'})
	td[8].addEventListener('mouseout',function(){
    td[8].style.backgroundColor='white'})
	td[8].addEventListener('click', function(){
		if (td[8].textContent=='') {
			td[8].textContent='X'
		}else if (td[8].textContent=='X') {
			td[8].textContent='O'
		}else if (td[8].textContent=='O') {
			td[8].textContent=''
		}
	
	})







btn=document.querySelector('a')
btn.addEventListener('click', clear)
function clear(){
	for(i of td){
	i.textContent=''
}
}
