import React from 'react';
import { useForm } from 'react-hook-form';
import {
  regularExpressionEmail,
  regularExpressionPassword,
  regularExpressionName,
} from '../../constants/regularExpressions';
import {
  emailLabel,
  lastNameLabel,
  nameLabel,
  passwordLabel,
  titleSignUp,
  sendButtonText,
} from '../../constants/signUpConstants';
import {
  emptyEmailError,
  emptyLastNameError,
  emptyNameError,
  emptyPasswordError,
  maxLengthLastNameError,
  maxLengthNameError,
  minLengthLastNameError,
  minLengthNameError,
  notValidEmailError,
  notValidPasswordError,
  errorRegisterName,
} from '../../constants/errorsConstants';
import Title from '../../components/Title';
import NameInput from './NameInput';
import LastNameInput from './LastNameInput';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import QuestionSignUp from './QuestionSignUp';
import { LoginContext } from '../../context/LoginContext';
import { handleUserSubmit, validateEmail } from './createUser';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const { setUser } = React.useContext(LoginContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) =>
    handleUserSubmit(data, (email) => validateEmail(email, setError), setError, setUser, setIsLoading, navigate)
  );

  return (
    <main className='principalContainer'>
      <article className='formContainer'>
        <form onSubmit={onSubmit} className='formContent'>
          <Title title={titleSignUp} />
          <NameInput
            label={nameLabel}
            register={{
              ...register('name', {
                required: {
                  value: true,
                  message: emptyNameError,
                },
                minLength: {
                  value: 3,
                  message: minLengthNameError,
                },
                maxLength: {
                  value: 20,
                  message: maxLengthNameError,
                },
                pattern: {
                  value: regularExpressionName,
                  message: errorRegisterName,
                },
              }),
            }}
            errors={errors}
          />
          <LastNameInput
            label={lastNameLabel}
            register={{
              ...register('lastName', {
                required: {
                  value: true,
                  message: emptyLastNameError,
                },
                minLength: {
                  value: 3,
                  message: minLengthLastNameError,
                },
                maxLength: {
                  value: 20,
                  message: maxLengthLastNameError,
                },
                pattern: {
                  value: regularExpressionName,
                  message: errorRegisterName,
                },
              }),
            }}
            errors={errors}
          />
          <EmailInput
            label={emailLabel}
            register={{
              ...register('email', {
                required: {
                  value: true,
                  message: emptyEmailError,
                },
                pattern: {
                  value: regularExpressionEmail,
                  message: notValidEmailError,
                },
              }),
            }}
            errors={errors}
          />
          <PasswordInput
            label={passwordLabel}
            register={{
              ...register('password', {
                required: {
                  value: true,
                  message: emptyPasswordError,
                },
                pattern: {
                  value: regularExpressionPassword,
                  message: notValidPasswordError,
                },
              }),
            }}
            errors={errors}
          />
          <Button buttonText={sendButtonText} disabled={isLoading} />
          <QuestionSignUp />
        </form>
      </article>
    </main>
  );
}