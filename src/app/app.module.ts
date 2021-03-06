import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { IonicStorageModule } from '@ionic/storage';
import { ChartsModule } from 'ng2-charts';
import { FIREBASE_CONF } from "./app.firebase.config";
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { SplashPage } from "../pages/splash/splash";
import { ChartsPage } from "../pages/charts/charts";
import { Spending } from "../components/spending/spending";
import { NewSpendingModalPage } from "../pages/new-spending-modal/new-spending-modal";
import { PopoverPage } from '../models/Popover';
import { AuthProvider } from '../providers/auth/auth';
import { SpendingProvider } from '../providers/spending/spending';
import { NewSpendingComponent } from "../components/new-spending/new-spending";
import { FormatterProvider } from '../providers/formatter/formatter';
import { PipesModule } from "../pipes/pipes.module"

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
    TabsPage,
    ChartsPage,
    NewSpendingComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONF),
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    ChartsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage,
    LoginPage,
    PopoverPage,
    SplashPage,
    TabsPage,
    ChartsPage,
    NewSpendingModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpendingProvider,
    Network,
    FormatterProvider
  ]
})
export class AppModule {

}
