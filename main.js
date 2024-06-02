const background = document.querySelector('.background')
const hero = document.querySelector('.hero')
const proyectsButton = document.querySelector('.proyects-button')
const backButton = document.querySelector('.back-button')
const proyects = document.querySelectorAll('.proyect-card')
const contentBox = document.querySelector('.content')

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
	backButton.classList.add('hide')
	contentBox.classList.add('hero-mode')
}

const showProyects = () => {
	contentBox.classList.remove('hero-mode')
	proyects.forEach((proyect, index) => {
		setTimeout(() => {
			proyect.classList.remove('hide')
		}, 100 * index)
	});
	backButton.classList.remove('hide')
}

const hideProyects = () => {
	proyects.forEach((proyect, index) => {
		proyect.classList.add('hide')
	})
}

proyectsButton.addEventListener('click', () => {
	hideHero()
	showProyects()
})

backButton.addEventListener('click', () => {
	setTimeout(()=>{
		contentBox.scrollTo({
			top: 0,
			
		});
	}, 200)
	showHero()
	hideProyects()
})


document.addEventListener('DOMContentLoaded', () =>{
	showHero()
})