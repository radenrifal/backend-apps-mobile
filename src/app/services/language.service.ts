import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/x-www-form-urlencoded',
  })
};
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage: string = 'en';
  arrDataLang: any = null;
  DATA_LANG_KEY = 'psbgps_bdg_language';
  apiURL : string = 'https://onlinereg.globalprestasi.sch.id/admin/api/client_api/';
  
  constructor(
    private storage: StorageService,
    public http: HttpClient,
  ) { 
    this.getLanguageFromStorage();
  }

  /*
  async getLanguageFromServer() {
    var params = {'lang_id' : this.selectedLanguage};

    this.http.post(this.apiURL+'get_language', params, httpOptions)
    .subscribe(async res => {
      this.arrDataLang = res['data'];
      await this.storage.set(this.DATA_LANG_KEY, JSON.stringify(this.arrDataLang));
    }, err => {
    
    });
  }
  */

  async getLanguageFromStorage() {
    return await this.storage.get(this.DATA_LANG_KEY).then((value) => {
      if (value != null) {
        this.arrDataLang = JSON.parse(value);
      }
    });
  }


  translate(strLang: string) {
    if (this.arrDataLang == null)
     return '['+strLang+']';
    else {
      if (this.arrDataLang.hasOwnProperty(strLang)) {
        return this.arrDataLang[strLang];
      }
      else {
        return '['+strLang+']';
      }
    }
  }

  /*
  changeLanguage(strLangID: string) {
    this.selectedLanguage = strLangID.toLowerCase();
    this.getLanguageFromServer();
  }
  */
}
