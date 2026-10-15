import { Component, inject } from '@angular/core';
import { TwoGithubService } from '../services/two-github.service';

@Component({
  selector: 'app-two-github',
  standalone: true,
  imports: [],
  templateUrl: './two-github.component.html',
  styleUrl: './two-github.component.scss'
})
export class TwoGithubComponent {
  private githubService = inject(TwoGithubService);

  public close(): void {
    this.githubService.close();
  }

  public isOpen(): boolean {
    return this.githubService.isOpen();
  }
}