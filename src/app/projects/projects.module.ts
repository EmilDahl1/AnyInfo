import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: ProjectsComponent },
];
@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {}
