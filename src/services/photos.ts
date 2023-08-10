/* eslint-disable import/prefer-default-export */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Photo } from '../types/Photo';
import storage from '../firebase';

export async function getAll() {
  const list: Photo[] = [];
  const imagesFolder = ref(storage, 'images');
  const photoList = await listAll(imagesFolder);
  for (const i in photoList.items) {
    const photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }
  return list;
}
