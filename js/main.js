document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	const contentToggle = document.querySelector('#contenido')
	const btnToggle = document.querySelector('#btnToggle')

	const inputAddTask = document.querySelector('#inputAddTask')
	const btnAddTask = document.querySelector('#btnAddTask')
	const tasks = document.querySelector('#tasks')

	const greetingContainer = document.querySelector('#saludo')

	const changeContainer = document.querySelector('#changeContainer')
	const btnChange1 = document.querySelector('#btnChange1')
	const btnChangeReset = document.querySelector('#btnChangeReset')

	const formContainer = document.querySelector('#formContainer')

	btnToggle.addEventListener('click', () => contentToggle.classList.toggle('d-none'))

	btnAddTask.addEventListener('click', () => {
		const value = inputAddTask.value
		const li = document.createElement('LI')
		if (value.trim() === '') return alert('Ingresá una tarea válida')
		li.innerHTML = `${value} <i class="fas fa-times pointer deleteTask" title="Borrar tarea"></i>`
		li.classList.add('showitem')
		tasks.appendChild(li)
		inputAddTask.value = ''
	})

	document.addEventListener('click', e => {
		const { target: { tagName, classList, parentElement: liChild } } = e
		if (tagName === 'I') {
			if (Array.from(classList).includes('deleteTask')) {
				liChild.classList.add('hideitem')
				setTimeout(() => liChild.parentElement.removeChild(liChild), 2000)
			}
		}
	})

	greetingContainer.innerHTML = `<h3>Hola. Saludos en este año ${new Date().getFullYear()}</h3>`

	btnChange1.addEventListener('click', () => changeContainer.style.backgroundColor = 'rgba(200, 50, 50, 1)')
	btnChangeReset.addEventListener('click', () => changeContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')

	formContainer.innerHTML = `
		<form id="formUserData">
			<input class="input" type="text" placeholder="Nombre" id="nombre">
			<input class="input" type="text" placeholder="Apellido" id="apellido">
			<input class="input" type="email" placeholder="Email" id="email">
			<br>
			<button class="btn" type="submit" id="btnSubmitData">Enviar datos</button>
		</form>
	`
	document.querySelector('#formUserData').addEventListener('submit', e => e.preventDefault())

	window.addEventListener('scroll', controlScroll)

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

})
