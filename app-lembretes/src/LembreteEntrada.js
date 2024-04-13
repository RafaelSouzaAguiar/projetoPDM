import React from 'react'

const LembreteEntrada = () => {
  return (
    <div className="row text-center">
        <div className="col-12">
            <input type="text" placeholder='Digite seu novo lembrete' 
                className='form-control mt-2 mb-2 w-100' id='campo'/>
            <button type="button" className="btn btn-primary w-100 mb-2" 
                onClick={() => alert("Lembrete cadastrado!")}>OK</button>
        </div>
    </div>
  )
}

export default LembreteEntrada