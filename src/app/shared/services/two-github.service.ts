import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoGithubService {
  public isOpen = signal(false);

  public open(): void {
    this.isOpen.set(true);
  }

  public close(): void {
    this.isOpen.set(false);
  }
}