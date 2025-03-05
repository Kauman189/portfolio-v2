import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  activeModal: string | null = null;
  private _cleanupFns: Function[] = [];

  constructor() { }

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-out',
          once: false
        });
      }, 100);
    }
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initGalaxyCanvas();
      this.initScrollToTop();
    }, 500);
  }
  
  // Modal functions
  openModal(modalId: string, event?: Event): void {
    if (event) event.preventDefault();
    this.activeModal = modalId;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.activeModal = null;
    document.body.classList.remove('modal-open');
  }
  
  // Inicializar el botón de volver arriba
  initScrollToTop(): void {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    
    const scrollHandler = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    scrollTopBtn.addEventListener('click', scrollHandler);
    
    // Almacenar para limpieza
    this._cleanupFns.push(() => {
      if (scrollTopBtn) {
        scrollTopBtn.removeEventListener('click', scrollHandler);
      }
    });
  }
  
  // Inicializar el canvas con efecto galaxia sutil
  initGalaxyCanvas(): void {
    const canvas = document.getElementById('noiseCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajustar tamaño inicial
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Manejar resize con throttling
    let resizeTimeout: any;
    const resizeCanvas = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // Regenerar estrellas cuando cambie el tamaño
        stars = generateStars();
      }, 200);
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    // Control de visibilidad y animación
    let animationFrameId: number;
    let isCanvasVisible = true;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isCanvasVisible = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    
    observer.observe(canvas);
    
    // Generar estrellas para la galaxia
    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      phase: number;
    }
    
    const generateStars = (): Star[] => {
      const stars: Star[] = [];
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200); // Limitar número de estrellas
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.2, // Radio más pequeño para efecto sutil
          opacity: Math.random() * 0.7 + 0.1, // Opacidad reducida
          speed: Math.random() * 0.002 + 0.0005, // Velocidad de parpadeo
          phase: Math.random() * Math.PI * 2 // Fase inicial aleatoria
        });
      }
      
      return stars;
    };
    
    let stars = generateStars();
    
    // Dibujar efecto de galaxia
    const drawGalaxy = (timestamp: number) => {
      if (!isCanvasVisible) return;
      
      // Limpiar el canvas completamente
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fondo negro con un toque azulado muy sutil
      ctx.fillStyle = 'rgba(2, 4, 10, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar neblina de galaxia muy sutil
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      
      gradient.addColorStop(0, 'rgba(20, 30, 60, 0.05)');
      gradient.addColorStop(0.5, 'rgba(15, 20, 40, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 10, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar cada estrella
      stars.forEach(star => {
        // Calcular pulsación suave basada en tiempo
        const flickerAmount = Math.sin(timestamp * star.speed + star.phase);
        const currentOpacity = star.opacity + flickerAmount * 0.1;
        
        // Dibujar la estrella
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Color azulado sutil
        const starColor = `rgba(180, 190, 255, ${currentOpacity})`;
        ctx.fillStyle = starColor;
        ctx.fill();
        
        // Brillo para algunas estrellas más grandes
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 190, 255, ${currentOpacity * 0.1})`;
          ctx.fill();
        }
      });
      
      // Añadir un toque sutil de polvo estelar
      if (Math.random() > 0.98) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 210, 255, 0.3)';
        ctx.fill();
      }
    };
    
    // Animación con límite de FPS para rendimiento
    let lastTime = 0;
    const fpsInterval = 1000 / 12; // 12 FPS para mejor rendimiento, suficiente para este efecto
    
    const animate = (timestamp: number = 0) => {
      if (!isCanvasVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      animationFrameId = requestAnimationFrame(animate);
      
      // Control de framerate
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      
      lastTime = timestamp - (elapsed % fpsInterval);
      drawGalaxy(timestamp);
    };
    
    // Iniciar animación
    animate();
    
    // Función de limpieza
    const cleanupFn = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
    
    this._cleanupFns.push(cleanupFn);
  }
  
  ngOnDestroy(): void {
    // Ejecutar todas las funciones de limpieza
    this._cleanupFns.forEach(fn => fn());
    this._cleanupFns = [];
  }
}