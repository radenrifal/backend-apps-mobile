import { Injectable } from '@angular/core';
import { ServerApiService } from './server-api.service';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { LanguageService } from './language.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(
    private serverApi : ServerApiService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private lang: LanguageService,
    public menuCtrl: MenuController,
    private router : Router,
  ) { }

  
}
