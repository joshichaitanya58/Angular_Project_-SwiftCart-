import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    country: '',
    message: ''
  };

  country: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/country.json').subscribe((data) => {
      this.country = data;
    });
  }

  onSubmit() {
    localStorage.setItem('userData', JSON.stringify(this.user));
    alert('Form submitted successfully!');
    // this.router.navigate(['/home']);
  }
}
