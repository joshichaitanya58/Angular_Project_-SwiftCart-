import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service'; // Injectable Service

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class ServiceComponent implements OnInit {
  users: any;

  constructor(private dataService: Service) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log('Users fetched in ServiceComponent:', this.users);
    });
  }
}
