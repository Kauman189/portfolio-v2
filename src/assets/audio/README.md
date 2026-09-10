# Audio Files for Music Player

## Instructions

To make the music player work with your own audio, add your audio file here with the name:

**`demo-track.mp3`**

## Supported Formats

- MP3 (recommended)
- WAV
- OGG

## Recommendations

- **File size:** Keep under 10MB for better loading performance
- **Duration:** 2-5 minutes works best for a portfolio
- **Quality:** 128-320 kbps for good quality without large file size

## Free Music Sources

If you need royalty-free music, try:

- [Freesound.org](https://freesound.org)
- [Pixabay Music](https://pixabay.com/music/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [ccMixter](http://ccmixter.org/)

## Current Fallback

The player currently uses a fallback audio file from W3Schools that will work for testing purposes.

## To Update Track Info

Edit the track name and artist in:
`src/app/views/main-info/main-info.component.html`

Look for:
```html
<h4 class="track-title text-uppercase fw-bold mb-1">Demo Track</h4>
<p class="artist-name mb-4">Portfolio Music Player</p>
```