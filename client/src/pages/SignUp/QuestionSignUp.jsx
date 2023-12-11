import { Link } from "react-router-dom";
import { loginSignUp, questionSignUp } from "../../constants/signUpConstants";

export default function QuestionSignUp() {
  return (
    <div className='yaTienesCuentaContainer'>
      <p>
        {questionSignUp}
        <Link className='hipervinculo' to={'/'}>
          <span> {loginSignUp} </span>
        </Link>
      </p>
    </div>
  );
}