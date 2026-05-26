import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    const savedUser = localStorage.getItem('userData');

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      if (parsedUser.email === this.user.email && parsedUser.password === this.user.password) {
        alert('Login successful!');
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No user found. Please register first.');
    }
  }
}
  
