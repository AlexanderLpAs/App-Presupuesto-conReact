import React, { useState } from 'react'

const Pregunta = () => {
	const [cantidad, setCantidad] = useState(0)
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		setCantidad(parseInt(e.target.value, 10))
	}

	const addPresupuesto = (e) => {
		e.preventDefault()

		// Validar
		if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }
        
        setError(false)


		// si se pasa la validacion
	}

	return (
		<div>
			<h2>Coloca tu Presupuesto</h2>

            {error ? : null}

			<form onSubmit={addPresupuesto}>
				<input
					type='number'
					className='u-full-width'
					placeholder='Coloca tu presupuesto'
					onChange={handleChange}
				/>

				<input
					type='submit'
					className='button-primary u-full-width'
					value='Definir Presupuesto'
				/>
			</form>
		</div>
	)
}

export default Pregunta
