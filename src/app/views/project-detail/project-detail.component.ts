import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROJECTS, SELECTED_PROJECTS, Project } from '../../data/projects';
import { CASE_STUDIES, CaseStudy } from '../../data/case-studies';
import { Localized } from '../../i18n/locale.service';
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [IconComponent, RouterLink, NgTemplateOutlet],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent extends Localized {
  project: Project | undefined;
  study: CaseStudy | undefined;
  nextProject = SELECTED_PROJECTS[0];
  @ViewChild('imageDialog') imageDialog?: ElementRef<HTMLDialogElement>;
  selectedImage = 0;
  posTheme: 'light' | 'dark' = 'light';
  get activeImage() { return this.project?.processImages[this.selectedImage]; }
  openImage(index: number) {
    this.selectedImage = index;
    this.imageDialog?.nativeElement.showModal();
  }
  moveImage(direction: number) {
    const count = this.project?.processImages.length ?? 0;
    if (count) this.selectedImage = (this.selectedImage + direction + count) % count;
  }
  onGalleryKey(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.moveImage(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
  closeOnBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) this.imageDialog?.nativeElement.close();
  }
  get toolsLabel() {
    const names: Record<string, string> = {
      'Print Design': 'Diseño impreso',
      'Interface Design': 'Diseño de interfaces',
      'Team Leadership': 'Dirección de equipo',
    };
    return this.project?.tools
      .map((tool) => this.t(names[tool] ?? tool, tool))
      .join(' · ');
  }
  constructor() {
    super();
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const index = PROJECTS.findIndex((p) => p.slug === params.get('slug'));
        this.imageDialog?.nativeElement.close();
        this.selectedImage = 0;
        this.posTheme = 'light';
        this.project = PROJECTS[index];
        this.study = this.project ? CASE_STUDIES[this.project.slug] : undefined;
        const selectedIndex = SELECTED_PROJECTS.findIndex((p) => p.slug === this.project?.slug);
        this.nextProject = selectedIndex >= 0
          ? SELECTED_PROJECTS[(selectedIndex + 1) % SELECTED_PROJECTS.length]
          : SELECTED_PROJECTS[0];
      });
  }
}
