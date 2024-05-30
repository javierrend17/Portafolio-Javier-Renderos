const navBarIcon = document.querySelector('.navIcon')
const header = document.querySelector('.header')
const background = document.querySelector('.background')
const hero = document.querySelector('.hero')
const proyectsButton = document.querySelector('.proyects-button')
const backButton = document.querySelector('.back-button')
const proyects = document.querySelector('.proyects')

background.innerHTML = `
	<div class="particles-container">
		<div class="particle-box"><div class="particle" style="--i: 58;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 16;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 34;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 26;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 60;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 36;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 49;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 10;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 50;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 42;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 19;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 33;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 24;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 70;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 53;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 32;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 25;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 20;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 52;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 38;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 13;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 47;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 56;"></div></div>
		<div class="particle-box"><div class="particle" style="--i: 72;"></div></div>
	</div>
`


const hideHero = () =>{
	hero.classList.add('hide');
}
const showHero = () =>{
	hero.classList.remove('hide');
}
const hideProyects = () =>{
	proyects.classList.add('hide')
}
const showProyects = () =>{
	proyects.classList.remove('hide')
}



navBarIcon.addEventListener('click', () => {
	header.classList.toggle('openHeader');
})

proyectsButton.addEventListener('click', () => {
	hideHero()
	showProyects()
})

backButton.addEventListener('click', () => {
	hideProyects()
	showHero()
})

