import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { IonicStorageModule } from '@ionic/storage';
import { FIREBASE_CONF } from "./app.firebase.config";
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { SplashPage } from "../pages/splash/splash";
import { Spending } from "../components/spending/spending";
import { NewSpendingModalPage } from "../pages/new-spending-modal/new-spending-modal";
import { PopoverPage } from '../models/Popover';
import { AuthProvider } from '../providers/auth/auth';
import { SpendingProvider } from '../providers/spending/spending';
import { NewSpendingComponent } from "../components/new-spending/new-spending";

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    HomePage,
    LoginPage,
    PopoverPage,
    SplashPage,
    NewSpendingModalPage,
    Spending,
    NewSpendingComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireModule.initializeApp(FIREBASE_CONF),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage,
    LoginPage,
    PopoverPage,
    SplashPage,
    NewSpendingModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpendingProvider
  ]
})
export class AppModule {

}
