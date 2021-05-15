import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ApiModule} from './api/api.module';
import {EnsureModuleLoadedOnce} from './ensure-module-loaded-once';
export * from './api/commands';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ApiModule,
    RouterModule,
  ],
  exports: [ApiModule],
})
export class CoreModule extends EnsureModuleLoadedOnce {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
