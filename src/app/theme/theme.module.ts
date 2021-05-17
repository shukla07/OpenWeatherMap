import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  imports: [...BASE_MODULES, ...MaterialModules],
  exports: [...BASE_MODULES, ...MaterialModules],
  declarations: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ThemeModule,
      providers: [],
    } as ModuleWithProviders<any>;
  }
}
