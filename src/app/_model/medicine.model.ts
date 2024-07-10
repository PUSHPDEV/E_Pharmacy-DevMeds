import { FileHandle } from "./file-handle.model";

export interface Medicine {
    medicineId:number;
    medicineName: string;
    medicineDescription: string;
    medicineDiscountedPrice: number;
    medicineActualPrice: number;
    medicineImages: FileHandle[];


}