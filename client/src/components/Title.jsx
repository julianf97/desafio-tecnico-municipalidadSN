
import '../pages/Login/_login.scss'
import '../pages/SignUp/_registroDesktop.scss'
import '../pages/SignUp/_registroIpad.scss'
import '../pages/SignUp/_registroMobile.scss'

export default function Title( text ) {

  const { title } = text

  return (
    <div className='titleRegistro'>
      <h3> { title } </h3>
    </div>
  )
}
