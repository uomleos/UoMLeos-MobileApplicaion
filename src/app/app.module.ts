import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {QuizzypopPage} from "../pages/quizzypop/quizzypop";
import {ProjectmapPage} from "../pages/projectmap/projectmap";
import {EventsPage} from "../pages/events/events";
import {ItsusPage} from "../pages/itsus/itsus";
import {QuizzypopAnswerPage} from "../pages/quizzypop/quizzypop-answer/quizzypop-answer";
import {QuizzypopWinnerPage} from "../pages/quizzypop/quizzypop-winner/quizzypop-winner";
import {QuizzypopQuestionPage} from "../pages/quizzypop/quizzypop-question/quizzypop-question";
import {ProjectmapMapPage} from "../pages/projectmap/projectmap-map/projectmap-map";
import {ProjectmapListPage} from "../pages/projectmap/projectmap-list/projectmap-list";
import {ItsusOldPage} from "../pages/itsus/itsus-old/itsus-old";
import {ItsusLatestPage} from "../pages/itsus/itsus-latest/itsus-latest";
import { ProjectMapProvider } from '../providers/project-map/project-map';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizzypopPage,
    ProjectmapPage,
    EventsPage,
    QuizzypopAnswerPage,
    QuizzypopQuestionPage,
    QuizzypopWinnerPage,
    ProjectmapPage,
    ProjectmapMapPage,
    ProjectmapListPage,
    ItsusPage,
    ItsusOldPage,
    ItsusLatestPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    QuizzypopPage,
    QuizzypopAnswerPage,
    QuizzypopWinnerPage,
    QuizzypopQuestionPage,
    ProjectmapPage,
    ProjectmapMapPage,
    ProjectmapListPage,
    ItsusPage,
    ItsusOldPage,
    ItsusLatestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectMapProvider
  ]
})
export class AppModule {}
