import '../pages/Login/_login.scss';
import '../pages/SignUp/_registroDesktop.scss';
import '../pages/SignUp/_registroIpad.scss';
import '../pages/SignUp/_registroMobile.scss';

export default function PasswordInput(props) {
  const { label, register, errors } = props;

  return (
    <div className='nameInputContainer'>
      <label className='labelNombre'>
        {label}
      </label>
      <div className="inputName">
        <div className="text">
          <input name='password' type="password" {...register} />
        </div>
      </div>
      <div className='errorContainer'>
        <span> {errors.password && errors.password.message} </span>
      </div>
    </div>
  );
}
