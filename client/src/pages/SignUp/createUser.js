export const handleUserSubmit = async (data, validateEmail, setError, setUser, setIsLoading, navigate) => {
  try {
    setIsLoading(true);

    if (data.email) {
      await validateEmail(data.email);
    }

    const dataJSON = JSON.stringify(data);

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataJSON,
    });

    if (!response.ok) {
        console.error('Error al registrar usuario');
        setUser(prevUser => ({
          ...prevUser,
          logged: false,
          admin: false,
        }));
      } else {
        setUser(prevUser => ({
          ...prevUser,
          logged: true,
          admin: false,
        }));
  
        localStorage.setItem("userChallengeMunicipalidad", JSON.stringify({
          logged: true,
          admin: false,
        }));
        navigate('/home');
    }
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const validateEmail = async (value, setError) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: value }),
    });

    if (!response.ok) {
      throw new Error('Error al verificar el correo electrónico existente');
    }

    const result = await response.json();

    if (result.exists) {
      setError('email', {
        type: 'manual',
        message: 'El correo electrónico ya está registrado',
      });
    }
  } catch (error) {
    console.error(error);
  }
};