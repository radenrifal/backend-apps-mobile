import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Platform } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  apiURL : string = 'https://elevendigital.id/api_bitas-idc/membera';

  domainUrl: string = 'elevendigital.id'
  language = null;

  DATA_USER_KEY = 'dataUser';
  DATA_UNIT_KEY = 'dataUnits';
  DATA_CLASS_TYPE_KEY = 'dataClassType';
  DATA_PREVIOUS_SCHOOL_TYPE_KEY = 'datapPreviousSchoolType';

  HAS_LOGGED_IN = '0';

  SELECTED_LANG = 'id';
  DATA_LANGUAGE_KEY = 'dataLanguage';

  fcm_tokey_key:string='';
  getDataUser: any;

  constructor(
    public http: HttpClient,
    private storage: StorageService,
    private plt: Platform    
  ) { }

  login(value: { device_token_fcm: string; }){
    if (this.plt.is('cordova'))
      value.device_token_fcm = this.fcm_tokey_key;

    return this.httpPostServer('login', value);    
  }

  async logout(){
    await this.storage.remove(this.DATA_USER_KEY);
    await this.storage.set(this.HAS_LOGGED_IN, '0');
    return '';
  }
  
  register(value: any){
    return this.httpPostServer('register',  value);    
  }

  async httpPostServer(url: string, params: any){
    return await new Promise((resolve, reject) => {
      this.http.post(this.apiURL+url, params, httpOptions).pipe(
        timeout(30000)
      )
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });     
  }
}
