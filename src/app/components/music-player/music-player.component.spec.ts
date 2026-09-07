import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MusicPlayerComponent } from './music-player.component';
describe('Music player', () => {
  let fixture: ComponentFixture<MusicPlayerComponent>;
  let player: MusicPlayerComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlayerComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MusicPlayerComponent);
    player = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('handles a rejected play request without showing a false playing state', async () => {
    spyOn(player.track.nativeElement, 'play').and.returnValue(
      Promise.reject(new Error('blocked')),
    );
    await player.toggle();
    expect(player.failed).toBeTrue();
    expect(player.playing).toBeFalse();
    expect(player.waiting).toBeFalse();
  });
  it('does not report a playback error when a play request is cancelled', async () => {
    spyOn(player.track.nativeElement, 'play').and.returnValue(
      Promise.reject(new DOMException('Playback cancelled', 'AbortError')),
    );
    await player.toggle();
    expect(player.failed).toBeFalse();
    expect(player.playing).toBeFalse();
    expect(player.waiting).toBeFalse();
  });
  it('uses media events as the source for playing and paused states', () => {
    player.started();
    expect(player.playing).toBeTrue();
    player.paused();
    expect(player.playing).toBeFalse();
    player.error();
    expect(player.failed).toBeTrue();
  });
  it('stops playback when leaving the page', () => {
    const pause = spyOn(player.track.nativeElement, 'pause');
    fixture.destroy();
    expect(pause).toHaveBeenCalled();
  });
});
