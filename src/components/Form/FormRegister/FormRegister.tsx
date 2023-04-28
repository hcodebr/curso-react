import React from 'react'
import "./FormRegister.css"
export const FormRegister = () => {
    const labelStyle = {
        fontSize: '16px',
        color: 'yellow'
    }
  return (
    <div className='container-register'>
        <h2>Cadastro</h2>

        <div className="form-register">
            <label htmlFor="nome" style={labelStyle}>Nome</label>
            <input type="text" id="nome" />
        </div>
    </div>
  )
}
