import { Component, inject  } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng/message';
import {InputText} from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import {Auth} from '../../../core/services/auth';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    Message,
    InputText,
    ToastModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true,
})
export class Register {
  messageService = inject(MessageService);
  registerForm: FormGroup;
  fb = inject(FormBuilder);
  formSubmitted: boolean = false;
  isLoading = false;

  onSubmit() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      this.isLoading = true;
      const calientData = this.registerForm.value;
      this.authService.register(calientData).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Registration successful!',
            life: 3000
          });
          this.registerForm.reset();
          this.formSubmitted = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error?.message || 'Registration failed',
            life: 3000
          });
        }
      });

    }
  }

  isInvalid(controlName: string) {
    const control = this.registerForm.get(controlName);
    return control?.invalid && control.touched;
  }

  constructor(private authService: Auth) {
    this.registerForm = this.fb.group({
      userName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      number: ['',[Validators.required, Validators.minLength(5)]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    });
  }
}
