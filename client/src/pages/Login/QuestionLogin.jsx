import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import { questionLogin, signUpLogin } from '../../constants/loginConstants';
import './_login.scss'

export default function QuestionLogin() {
  return (
    <div className='yaTienesCuentaContainer'>
      <p>
        { questionLogin }
        <Link className='hipervinculo' to={'/signup'} element={ <SignUp/> }>
          <span> { signUpLogin } </span>
        </Link>
      </p>
    </div>
  )
}
