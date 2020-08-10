import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAccountPage } from './edit-account.page';

const routes: Routes = [
  {
    path: '',
    component: EditAccountPage
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../gallery/gallery.module').then( m => m.GalleryPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAccountPageRoutingModule {}
