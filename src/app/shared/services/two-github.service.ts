import { Injectable, signal } from '@angular/core';

export type HubType = 'portfolio' | 'join' | 'pollo';

@Injectable({
  providedIn: 'root'
})
export class TwoGithubService {
  public isOpen = signal(false);
  public hubType = signal<HubType>('portfolio');

  public open(type: HubType = 'portfolio'): void {
    document.documentElement.classList.add('no-scroll');
    this.hubType.set(type);
    this.isOpen.set(true);
  }

  public close(): void {
    this.isOpen.set(false);
  }
}