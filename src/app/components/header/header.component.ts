import { Component, HostListener, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface Technology {
  name: string;
  logo: string;
  color?: string;
  id?: number;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  // Eliminadas todas las animaciones
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  isHeaderVisible = true;
  lastScrollPosition = 0;
  allTechnologies: Technology[] = [
    // Desarrollo
    { name: 'Angular', logo: 'devicon-angular-plain', color: '#dd0031' },
    { name: 'JavaScript', logo: 'devicon-javascript-plain', color: '#f7df1e' },
    { name: 'Node.js', logo: 'devicon-nodejs-plain', color: '#339933' },
    
    // Herramientas de diseño
    { name: 'Figma', logo: 'devicon-figma-plain', color: '#f24e1e' },
    { name: 'TypeScript', logo: 'devicon-typescript-plain', color: '#007acc' },
    
    // Frameworks CSS y herramientas complementarias
    { name: 'Bootstrap', logo: 'devicon-bootstrap-plain', color: '#7952b3' },
    
    // Otras herramientas
    { name: 'Git', logo: 'devicon-git-plain', color: '#f05032' },
    { name: 'Docker', logo: 'devicon-docker-plain', color: '#2496ed' },
  ];
  
  visibleTechnologies: Technology[] = [];
  currentIndex = 0;
  readonly VISIBLE_COUNT = 3; // Mostramos 3 elementos a la vez
  rotationInterval: any;

  constructor(private cdr: ChangeDetectorRef) {
    // Asignar IDs únicos a cada tecnología
    this.allTechnologies = this.allTechnologies.map((tech, index) => {
      return {...tech, id: index};
    });
  }

  ngOnInit() {
    this.updateVisibleTechnologies();
  }

  ngAfterViewInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      this.rotateNext();
    }, 3000); // Cambiar cada 3 segundos
  }

  updateVisibleTechnologies() {
    const newVisible: Technology[] = [];
    
    // Seleccionar solo los elementos que queremos mostrar
    for (let i = 0; i < this.VISIBLE_COUNT; i++) {
      const index = (this.currentIndex + i) % this.allTechnologies.length;
      newVisible.push({...this.allTechnologies[index]});
    }
    
    this.visibleTechnologies = newVisible;
  }
  
  rotateNext() {
    this.currentIndex = (this.currentIndex + 1) % this.allTechnologies.length;
    this.updateVisibleTechnologies();
    this.cdr.detectChanges();
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    
    if (currentScrollPosition < 50) {
      this.isHeaderVisible = true;
    } else {
      this.isHeaderVisible = currentScrollPosition < this.lastScrollPosition;
    }
    
    this.lastScrollPosition = currentScrollPosition;
  }
  
  trackByFn(index: number, item: Technology) {
    return item.id ?? index;
  }
}