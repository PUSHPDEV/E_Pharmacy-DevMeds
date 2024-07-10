import { Injectable } from '@angular/core';
import { Medicine } from './_model/medicine.model';
import { FileHandle } from './_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(medicine: Medicine) {
    const medicineImages: any[] = medicine.medicineImages;

    const medicineImagesToFileHandle: FileHandle[] = [];

    for (let i = 0; i < medicineImages.length; i++) {
      const imageFileData = medicineImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData });

      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      medicineImagesToFileHandle.push(finalFileHandle);
    }
    medicine.medicineImages = medicineImagesToFileHandle;
    return medicine;
  }


  public dataURItoBlob(picByte: string, imageType: any) {

    const byteString = window.atob(picByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intBArray = new Uint8Array(arrayBuffer);


    for (let i = 0; i < byteString.length; i++) {
      intBArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([intBArray], { type: imageType });
    return blob;
  }
}
