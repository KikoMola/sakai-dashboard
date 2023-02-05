import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
    declarations: [SigninComponent],
    imports: [
        CommonModule,
        SigninRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
    ],
})
export class SigninModule {}
