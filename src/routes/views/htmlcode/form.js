const machineHTMLForm = `
	<!DOCTYPE html>
	<html lang="es">
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario HTML - No recomendado juntar frontend y backend</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			margin: 0;
			width: 40%;
			height: 70vh;
			display: grid;
		}
		.content {
			width: 40%;
			display: grid;
			justify-self: center;
			padding: 3rem 4rem;
			border: 1px solid #000;
		}
	</style>
</head>
<body>
	<div class="content">
		<form id="form">
			<input type="text" name="maq_id" placeholder="maq_id">
			<input type="text" name="descripcion" placeholder="descripcion">
			<button 
				type="submit"
			>
				crear tupla
			</button>
		</form>
	</div>
	<script defer>
		async function createMachine(payload) {
			try {
				const r = await fetch('http://127.0.0.1/manufactory/machines/create', {
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				})
				const j = await r.json()
				console.log(j)
			} catch(ex) {
				console.log(ex)
			}

		}

		const formEl = document.getElementById('form')
		formEl.addEventListener('submit', async (e) => {
			e.preventDefault()
			const temp = {
				maq_id: e.target.maq_id.value,
				descripcion: e.target.descripcion.value,
			}
			await createMachine()
		})
	</script>
</body>
</html>
`

const productHTMLForm = `
	<!DOCTYPE html>
	<html lang="es">
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario HTML - No recomendado juntar frontend y backend</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			margin: 0;
			width: 40%;
			height: 70vh;
			display: grid;
		}
		.content {
			width: 40%;
			display: grid;
			justify-self: center;
			padding: 3rem 4rem;
			border: 1px solid #000;
		}
	</style>
</head>
<body>
	<div class="content">
		<form id="form">
			<input type="text" name="maq_id" placeholder="maq_id">
			<input type="text" name="descripcion" placeholder="descripcion">
			<button 
				type="submit"
			>
				crear tupla
			</button>
		</form>
	</div>
	<script defer>
		async function createProd(payload) {
			try {
				const r = await fetch('http://127.0.0.1/manufactory/products/create', {
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				})
				const j = await r.json()
				console.log(j)
			} catch(ex) {
				console.log(ex)
			}

		}

		const formEl = document.getElementById('form')
		formEl.addEventListener('submit', async (e) => {
			e.preventDefault()
			const temp = {
				maq_id: e.target.maq_id.value,
				descripcion: e.target.descripcion.value,
			}
			await createProd(temp)
		})
	</script>
</body>
</html>
`


module.exports = {
	machineHTMLForm,
	productHTMLForm,
}
