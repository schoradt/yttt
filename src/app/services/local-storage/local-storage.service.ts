import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-ts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  encryptionKey = 'yttt_storage_key_yttt';

  public saveData(key: string, value: string): void {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string): string {
    const data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  public clearData(): void {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return AES.encrypt(txt, this.encryptionKey).toString();
  }

  private decrypt(txtToDecrypt: string): string {
    return AES.decrypt(txtToDecrypt, this.encryptionKey).toString(enc.Utf8);
  }
}
