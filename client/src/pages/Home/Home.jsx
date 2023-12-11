import "./_home.scss"
import Swal from 'sweetalert2'
import { useEffect } from "react"
import logoAlert from "../../assets/sn-logo.png"
import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react"
import { bienvenido } from "../../constants/homeConstants"

export default function Home() {

  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    const hasAlertBeenShown = localStorage.getItem('homeAlertShown') === 'true';

    if (!hasAlertBeenShown) {
      showAlert();

      localStorage.setItem('homeAlertShown', 'true');

      setAlertShown(true);
    }
  }, []);


  const showAlert = () => {

    let timerInterval

    Swal.fire({
      html: `<div class="contenedor-logo-alert"><img src="${logoAlert}"></div>` + 
      `<div class="contenedor-titulo-alert"><h2 class="titulo-alert">¡  Bienvenido  ! </h2></div> ` +
      `<div class="contenedor-btn-alert"><button class="buttonAlert"><h5><a href="https://www.sannicolasciudad.gob.ar/">SN CIUDAD</a></h5></button></div>` +
      `<div class="contenedor-titulo-alert"><h3 class="titulo">¡Mirá las últimas noticias de SN Ciudad!</h3></div>` ,
      background: '#101010',
      timerProgressBar: true,
      showCloseButton: true, 
      timer: 4000,
      didOpen: () => {
        timerInterval = setInterval(() => {
        }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
  }

  return (
    <main className='principalContainer'>
      <Navbar/>
      <div className="tituloContainer">
        <h1>{ bienvenido }</h1>
      </div>
    </main>
    
  )
}
