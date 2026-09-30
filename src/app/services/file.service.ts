import { Injectable} from '@angular/core';
import { FileParameter, VetConnectService } from './vetconnect.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private vetConnectService: VetConnectService,
    private http: HttpClient) { }

  async uploadFile(file: File): Promise<string> {
    try {
      const response: any = await new Promise((resolve, reject) => {
        this.vetConnectService.upload({
          data: file,
          fileName: file.name
        }).subscribe({
          next: (resp: any) => resolve(resp),
          error: (err: any) => reject(err)
        });
      });
  
      return response;
    } catch (error) {
      console.error('Error al obtener respuesta:', error);
      throw error;
    }
  }

  async downloadFile(code: string) {

    const url = API_URL + `api/Upload/DownloadFile?code=` + code;
    window.open(url,'_blank');
  }
  
}
