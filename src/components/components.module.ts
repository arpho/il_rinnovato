import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';
import { ProfileComponent } from './profile/profile';
@NgModule({
	declarations: [,
    DynamicFormComponent,
    ProfileComponent],
	imports: [],
	exports: [
    DynamicFormComponent,
    ProfileComponent]
})
export class ComponentsModule {}
