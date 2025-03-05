import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isHeaderHidden = false;
  lastScrollPosition = 0;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    
    // Mostrar logo en la navbar solo cuando el header está oculto
    this.isHeaderHidden = currentScrollPosition > 100;
    
    this.lastScrollPosition = currentScrollPosition;
  }
}