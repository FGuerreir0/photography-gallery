/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import * as Photos from '../../services/photos';
import { Photo } from '../../types/Photo';
import './Gallery.css';

function Gallery() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Photo[]>([]);
  useEffect(() => {
    const getAllPhotos = async () => {
      setLoading(true);
      setData(await Photos.getAll());
      setLoading(false);
    };
    getAllPhotos();
  }, []);

  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const getModal = (img:string) => {
    setModalImage(img);
    setModal(true);
  };

  const invertModal = (visibility:boolean) => {
    setModal(!visibility);
    if (visibility === false) {
      setModalImage('');
    }
  };
  return (
    <>
      <div className={modal ? 'modal open' : 'modal'} onClick={() => { invertModal(modal); }}>
        <img src={modalImage} alt="on Modal" />
        <div className="exitModal_button">
          <ImCross />
        </div>
      </div>
      <div className="gallery">
        {!loading && data.length > 0 && (
          data.map((item) => (
            <div key={item.name} onClick={() => getModal(item.url)}>
              <img src={item.url} alt={`${item.name}`} />
            </div>
          )))}
      </div>
    </>
  );
}
export default Gallery;
