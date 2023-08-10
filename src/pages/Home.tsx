/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { useRef, useEffect, useState } from 'react';
import { TiArrowUpOutline } from 'react-icons/ti';
import { TbTriangleInverted } from 'react-icons/tb';
import { HiOutlineMenu } from 'react-icons/hi';
import Gallery from '../components/Gallery/Gallery';
import signature from '../assets/signature.png';
import './Home.css';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }, []);

  const handleScroll = () => { const scrollTop = window.pageYOffset || document.documentElement.scrollTop; setShowButton(scrollTop > 0); };
  window.addEventListener('scroll', handleScroll);

  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="app_home">
        <img src={signature} alt="Fabio Guerreiro Signature" />
        <div>
          <p>Hello there!</p>
          <p>
            I invite you to join me on a visual journey, to witness the world through my eyes and experience the beauty that surrounds us every day.
            <br />
            <br />
            <br />
            So, step inside, take your time...
            <br />
            <br />
            <br />
            and let my photography transport you to different places, evoke emotions, and inspire your own appreciation for the art of capturing moments.
          </p>

          <p />
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
            <br />
            <br />
            <br />
            Welcome to my Photography Gallery.
          </p>
        </div>
        <a role="button" onClick={handleClick}>
          <div className="icon_flex button_start bounce ">
            <div style={{ marginBottom: '-12px' }}>
              <HiOutlineMenu size={42} />
            </div>
            <div>
              <TbTriangleInverted size={38} />
            </div>
          </div>

        </a>
      </div>
      <div ref={ref}>
        <Gallery />
      </div>
      <div className="app_home_button">
        { showButton
          ? (
            <a role="button" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}>
              <div className="button_gotop bounce">
                <TiArrowUpOutline size={38} />
              </div>

            </a>
          )
          : null}
      </div>
    </>
  );
}
export default Home;
