import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';
@NgModule({
	declarations: [LoginComponent,
    DynamicFormComponent],
	imports: [],
	exports: [LoginComponent,
    DynamicFormComponent]
})
export class ComponentsModule {}
