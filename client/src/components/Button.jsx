import '../pages/Login/_login.scss';
import '../pages/SignUp/_registroDesktop.scss';
import '../pages/SignUp/_registroIpad.scss';
import '../pages/SignUp/_registroMobile.scss';

export default function Button(text) {
  const { buttonText } = text;

  return (
    <div className='buttonContainer'>
      <button type='submit' className="button-5" role='button'>
        { buttonText }
      </button>
    </div>
  );
}