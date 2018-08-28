import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectmapListPage } from './projectmap-list';

@NgModule({
  declarations: [
    ProjectmapListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectmapListPage),
  ],
})
export class ProjectmapListPageModule {}
