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
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { QuizzypopProvider } from '../providers/quizzypop/quizzypop';
import {Network} from "@ionic-native/network";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";
import {HeaderColor} from "@ionic-native/header-color";
import {FormsModule} from "@angular/forms";
import {EventsProvider} from "../providers/events/events";
import {RecentPage} from "../pages/events/recent/recent";
import {UpcomingPage} from "../pages/events/upcoming/upcoming";
import {ViewRecentPage} from "../pages/events/view-recent/view-recent";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizzypopPage,
    ProjectmapPage,
    QuizzypopAnswerPage,
    QuizzypopQuestionPage,
    QuizzypopWinnerPage,
    ProjectmapPage,
    ProjectmapMapPage,
    ProjectmapListPage,
    ItsusPage,
    ItsusOldPage,
    ItsusLatestPage,
    EventsPage,
    RecentPage,
    UpcomingPage,
    ViewRecentPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizzypopPage,
    QuizzypopAnswerPage,
    QuizzypopWinnerPage,
    QuizzypopQuestionPage,
    ProjectmapPage,
    ProjectmapMapPage,
    ProjectmapListPage,
    ItsusPage,
    ItsusOldPage,
    ItsusLatestPage,
    EventsPage,
    RecentPage,
    UpcomingPage,
    ViewRecentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectMapProvider,
    LaunchNavigator,
    InAppBrowser,
    QuizzypopProvider,
    Network,
    OpenNativeSettings,
    HeaderColor,
    EventsProvider
  ]
})
export class AppModule {}
