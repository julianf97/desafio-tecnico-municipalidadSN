import './_registroDesktop.scss'
import './_registroIpad.scss'
import './_registroMobile.scss'

export default function NameInput( props ) {

  const { label, register, errors } = props
  
  return (
    <div className='nameInputContainer'>
      <label className='labelNombre'>
        { label }
      </label>
    <div className="inputName">
      <div className="text">
        <input type="text" placeholder="Nombre" name='name' {...register}/>
      </div>
    </div>
    <div className='errorContainer'>
      <span> { errors.name && errors.name.message } </span>
    </div>
  </div>
  )
}
