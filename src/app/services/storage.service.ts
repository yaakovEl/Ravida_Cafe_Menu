import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {}

  uploadImage(file: File, path: string): Promise<string> {
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file)
      .then(() => getDownloadURL(storageRef));
  }
}
