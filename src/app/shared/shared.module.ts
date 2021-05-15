import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ThemeModule.forRoot()],
  exports: [HeaderComponent],
})
export class SharedModule {}
