import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';
import { ProfileComponent } from './profile/profile';
@NgModule({
	declarations: [LoginComponent,
    DynamicFormComponent,
    ProfileComponent],
	imports: [],
	exports: [LoginComponent,
    DynamicFormComponent,
    ProfileComponent]
})
export class ComponentsModule {}
