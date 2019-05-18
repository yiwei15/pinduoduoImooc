import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandChildComponent,
  HomeAuxComponent
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandChildComponent,
    HomeAuxComponent
  ],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
