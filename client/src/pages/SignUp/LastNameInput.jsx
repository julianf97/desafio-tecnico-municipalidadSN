import './_registroDesktop.scss'
import './_registroIpad.scss'
import './_registroMobile.scss'

export default function LastNameInput( props ) {

  const { label, register, errors } = props

  return (
    <div className='nameInputContainer'>
      <label className='labelNombre'>
        { label }
      </label>
    <div className="inputName">
      <div className="text">
        <input type="text" placeholder="Apellido" name='lastName' {...register}/>
      </div>
    </div>
    <div className='errorContainer'>
      <span> { errors.lastName && errors.lastName.message } </span>
    </div>
  </div>
  )
}
