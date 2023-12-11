import '../pages/Login/_login.scss';
import '../pages/SignUp/_registroDesktop.scss';
import '../pages/SignUp/_registroIpad.scss';
import '../pages/SignUp/_registroMobile.scss';

export default function EmailInput(props) {
  const { label, register, errors } = props;

  return (
    <div className='nameInputContainer'>
      <label className='labelNombre'>
        {label}
      </label>
      <div className="inputName">
        <div className="text">
          <input name='email' type="email" placeholder="email@address.com" {...register} />
        </div>
      </div>
      <div className='errorContainer'>
        <span> {errors.email && errors.email.message} </span>
      </div>
    </div>
  );
}