import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  
  isPlaying: boolean = false;
  audioElement: HTMLAudioElement | null = null;
  quotesInterval: any; // Para guardar referencia al intervalo
  currentQuoteIndex: number = 0;
  
  ngOnInit() {
    // Inicializar AOS con un pequeño retraso para asegurar que los elementos estén cargados
    setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false
      });
    }, 100);
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.initVisualEffects();
    }, 500);
  }
  
  ngOnDestroy() {
    // Limpiar intervalo cuando se destruye el componente
    if (this.quotesInterval) {
      clearInterval(this.quotesInterval);
    }
  }
  
  // Función para inicializar efectos visuales sin funcionalidad de audio
  initVisualEffects() {
    // Configuración del carrusel de citas
    this.initQuotesCarousel();
    
    // Configuración de las pestañas de referencias
    this.initReferenceTabs();
    
    // Configuración del efecto parallax
    this.initParallaxEffect();
  }
  
  // Inicializar el carrusel de citas con rotación automática
  initQuotesCarousel() {
    const indicators = document.querySelectorAll('.indicator');
    const quotes = document.querySelectorAll('.quote-container');
    
    // Configurar clic manual en los indicadores
    indicators.forEach((indicator, index) => {
      if (indicator instanceof HTMLElement) {
        indicator.addEventListener('click', () => {
          this.changeQuote(index);
        });
      }
    });
    
    // Configurar rotación automática
    this.quotesInterval = setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % quotes.length;
      this.changeQuote(this.currentQuoteIndex);
    }, 8000); // Cambiar cada 8 segundos
    
    // Pausa la rotación automática al pasar el ratón sobre el carrusel
    const quotesCarousel = document.querySelector('.quotes-carousel');
    if (quotesCarousel) {
      quotesCarousel.addEventListener('mouseenter', () => {
        if (this.quotesInterval) {
          clearInterval(this.quotesInterval);
        }
      });
      
      quotesCarousel.addEventListener('mouseleave', () => {
        // Reiniciar rotación automática
        this.quotesInterval = setInterval(() => {
          this.currentQuoteIndex = (this.currentQuoteIndex + 1) % quotes.length;
          this.changeQuote(this.currentQuoteIndex);
        }, 8000);
      });
    }
  }
  
  // Función auxiliar para cambiar la cita activa
  changeQuote(index: number) {
    const indicators = document.querySelectorAll('.indicator');
    const quotes = document.querySelectorAll('.quote-container');
    
    // Eliminar la clase active de todos los indicadores y citas
    indicators.forEach(ind => ind.classList.remove('active'));
    quotes.forEach(quote => quote.classList.remove('active'));
    
    // Añadir la clase active al indicador y cita correspondientes
    if (indicators[index]) indicators[index].classList.add('active');
    if (quotes[index]) quotes[index].classList.add('active');
    
    // Actualizar el índice actual
    this.currentQuoteIndex = index;
  }
  
  // Inicializar las pestañas de referencias
  initReferenceTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
      if (btn instanceof HTMLElement) {
        btn.addEventListener('click', () => {
          // Eliminar la clase active de todos los botones y paneles
          document.querySelectorAll('.tab-btn').forEach(tabBtn => {
            tabBtn.classList.remove('active');
          });
          
          document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
          });
          
          // Añadir la clase active al botón clickeado
          btn.classList.add('active');
          
          // Activar el panel correspondiente
          const targetId = btn.getAttribute('data-tab');
          if (targetId) {
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
              targetPane.classList.add('active');
            }
          }
        });
      }
    });
  }
  
  // Inicializar el efecto parallax
  initParallaxEffect() {
    const parallaxContainer = document.querySelector('.parallax-container');
    
    if (parallaxContainer instanceof HTMLElement) {
      const layers = document.querySelectorAll('.parallax-layer');
      
      // Efecto al mover el ratón
      parallaxContainer.addEventListener('mousemove', (e: MouseEvent) => {
        const containerRect = parallaxContainer.getBoundingClientRect();
        const mouseX = (e.clientX - containerRect.left) / containerRect.width - 0.5;
        const mouseY = (e.clientY - containerRect.top) / containerRect.height - 0.5;
        
        layers.forEach(layer => {
          if (layer instanceof HTMLElement) {
            const speed = parseFloat(layer.getAttribute('data-speed') || '1');
            const x = -mouseX * 20 * speed;
            const y = -mouseY * 20 * speed;
            
            layer.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${50 * speed}px)`;
          }
        });
      });
      
      // Restaurar posición al salir
      parallaxContainer.addEventListener('mouseleave', () => {
        layers.forEach(layer => {
          if (layer instanceof HTMLElement) {
            const speed = parseFloat(layer.getAttribute('data-speed') || '1');
            layer.style.transform = `translateZ(${50 * speed}px)`;
          }
        });
      });
    }
    
    // Añadir efecto visual al reproductor de música (solo estético)
    this.initMusicPlayerVisuals();
  }
  
  // Efectos visuales para el reproductor de música (sin funcionalidad real)
  initMusicPlayerVisuals() {
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const progressBar = document.getElementById('song-progress');
    const volumeLevel = document.getElementById('volume-level');
    
    // Añadir interactividad visual al botón de reproducción
    if (playBtn && playIcon) {
      playBtn.addEventListener('click', () => {
        this.isPlaying = !this.isPlaying;
        
        if (this.isPlaying) {
          playIcon.className = 'bi bi-pause-fill';
          document.querySelectorAll('.vinyl-grooves').forEach((el) => {
            if (el instanceof HTMLElement) {
              el.style.animationPlayState = 'running';
            }
          });
        } else {
          playIcon.className = 'bi bi-play-fill';
          document.querySelectorAll('.vinyl-grooves').forEach((el) => {
            if (el instanceof HTMLElement) {
              el.style.animationPlayState = 'paused';
            }
          });
        }
      });
    }
    
    // Interacción visual con la barra de progreso
    if (progressBar && progressBar.parentElement) {
      progressBar.parentElement.addEventListener('click', (e) => {
        if (progressBar.parentElement) {
          const rect = progressBar.parentElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const width = rect.width;
          const percentage = Math.min(Math.max(x / width, 0), 1) * 100;
          
          progressBar.style.width = `${percentage}%`;
          
          // Actualizar el tiempo mostrado
          const currentTime = document.querySelector('.current-time');
          if (currentTime) {
            const totalDuration = 221; // 3:41 en segundos
            const currentSeconds = Math.floor((percentage / 100) * totalDuration);
            const minutes = Math.floor(currentSeconds / 60);
            const seconds = currentSeconds % 60;
            currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
          }
        }
      });
    }
    
    // Interacción visual con el control de volumen
    const volumeContainer = document.getElementById('volume-container');
    const volumeIcon = document.getElementById('volume-icon');
    
    if (volumeContainer && volumeLevel && volumeIcon) {
      volumeContainer.addEventListener('click', (e) => {
        const rect = volumeContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.min(Math.max(x / width, 0), 1) * 100;
        
        volumeLevel.style.width = `${percentage}%`;
        
        // Cambiar el icono según el volumen
        if (percentage === 0) {
          volumeIcon.className = 'bi bi-volume-mute';
        } else if (percentage < 50) {
          volumeIcon.className = 'bi bi-volume-down';
        } else {
          volumeIcon.className = 'bi bi-volume-up';
        }
      });
      
      // Mute/unmute al hacer clic en el icono
      volumeIcon.addEventListener('click', () => {
        if (volumeIcon.className.includes('mute')) {
          volumeIcon.className = 'bi bi-volume-up';
          if (volumeLevel) volumeLevel.style.width = '70%';
        } else {
          volumeIcon.className = 'bi bi-volume-mute';
          if (volumeLevel) volumeLevel.style.width = '0%';
        }
      });
    }
    
    // Botones de anterior y siguiente (solo visuales)
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        // Efecto visual solo para mostrar interactividad
        if (progressBar) progressBar.style.width = '0%';
        const currentTime = document.querySelector('.current-time');
        if (currentTime) currentTime.textContent = '0:00';
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        // Efecto visual solo para mostrar interactividad
        if (progressBar) progressBar.style.width = '100%';
        const currentTime = document.querySelector('.current-time');
        if (currentTime) currentTime.textContent = '3:41';
      });
    }
  }
}