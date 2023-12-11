import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import '../EstarBien/_estarBien.scss';
import ReactPlayer from "react-player";

export default function ExpoAgro() {
  const location = useLocation();
  const vidUrl = "https://www.youtube.com/watch?v=5WyQwUxyW30";

  useEffect(() => {
    document.body.classList.toggle('hide-scroll', location.pathname === '/expoagro');
    return () => {
      document.body.classList.remove('hide-scroll');
    };
  }, [location.pathname]);

  return (
    <main className="principalContainer">
      <Navbar/>
        <ReactPlayer
          url={vidUrl}
          className="react-player"
          width={"100%"}
          height={"100%"}
          playing={true} 
          controls={true}
          loop={true}
        />
    </main>
  );
}
