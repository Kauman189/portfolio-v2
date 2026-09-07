import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Localized } from '../../i18n/locale.service';
@Component({
  selector: 'app-music-player',
  standalone: true,
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css',
})
export class MusicPlayerComponent extends Localized implements OnDestroy {
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLAudioElement>;
  playing = false;
  waiting = false;
  failed = false;
  current = 0;
  duration = 0;
  muted = false;
  volume = 0.8;
  bars = [
    22, 44, 31, 65, 80, 49, 95, 67, 42, 82, 53, 98, 69, 38, 74, 92, 56, 30, 62,
    85, 41, 72, 52, 27, 64, 84, 48, 35,
  ];
  time(value: number) {
    const n = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
    return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
  }
  get progress() {
    return this.duration ? (this.current / this.duration) * 100 : 0;
  }
  sync() {
    const audio = this.track.nativeElement;
    this.current = audio.currentTime || 0;
    this.duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    this.playing = !audio.paused && !audio.ended;
    this.muted = audio.muted;
  }
  async toggle() {
    const audio = this.track.nativeElement;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    this.failed = false;
    this.waiting = true;
    if (audio.ended) audio.currentTime = 0;
    try {
      audio.volume = this.volume;
      await audio.play();
    } catch {
      this.failed = true;
      this.waiting = false;
      this.playing = false;
    }
  }
  started() {
    this.playing = true;
    this.waiting = false;
    this.failed = false;
  }
  paused() {
    this.playing = false;
    this.waiting = false;
  }
  error() {
    this.failed = true;
    this.playing = false;
    this.waiting = false;
  }
  seek(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (this.duration && Number.isFinite(value)) {
      this.track.nativeElement.currentTime = Math.max(
        0,
        Math.min(this.duration, value),
      );
      this.sync();
    }
  }
  changeVolume(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) {
      this.volume = Math.max(0, Math.min(1, value));
      this.track.nativeElement.volume = this.volume;
      this.track.nativeElement.muted = false;
      this.muted = false;
    }
  }
  mute() {
    this.track.nativeElement.muted = !this.track.nativeElement.muted;
    this.muted = this.track.nativeElement.muted;
  }
  ngOnDestroy() {
    this.track?.nativeElement.pause();
  }
}
