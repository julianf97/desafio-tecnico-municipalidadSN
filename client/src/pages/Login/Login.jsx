import '../SignUp/_registroMobile.scss';
import '../SignUp/_registroIpad.scss';
import '../SignUp/_registroDesktop.scss';
import './_login.scss';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { titleLogin, emailLabel, passwordLabel, buttonText } from '../../constants/loginConstants';
import Title from "../../components/Title";
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import QuestionLogin from "./QuestionLogin";
import { emptyEmailError, emptyPasswordError } from '../../constants/errorsConstants';

export default function Login() {
  const { handleSubmit, register, setError, formState: {errors} } = useForm();
  const { tryLogin, errorEmailPassword } = useContext(LoginContext);

  const onSubmit = handleSubmit(async (data) => {
    await tryLogin(data);
    
    if (!errorEmailPassword) {
      setError('email', {
        type: 'manual',
        message: 'El correo electrónico o la contraseña no es válida',
      });
      setError('password', {
        type: 'manual',
        message: 'El correo electrónico o la contraseña no es válida',
      });
    }
  });

  return (
    <main className='principalContainer'>
      <article className='formContainer'>
        <form onSubmit={onSubmit} className='formContent'>
          <Title title={titleLogin}/>
          <EmailInput
            label={emailLabel}
            register={{
              ...register("email", {
                required: {
                  value: true,
                  message: emptyEmailError,
                },
              }),
            }}
            errors={errors}
          />
          <PasswordInput
            label={passwordLabel}
            register={{
              ...register("password", {
                required: {
                  value: true,
                  message: emptyPasswordError,
                },
              }),
            }}
            errors={errors}
          />
          <Button buttonText={buttonText}/>
          <QuestionLogin/>
        </form>
      </article>
    </main>
  );
}