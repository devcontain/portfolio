import { Component, inject } from '@angular/core';
import { TwoGithubService, HubType } from '../services/two-github.service';

@Component({
  selector: 'app-two-github',
  standalone: true,
  imports: [],
  templateUrl: './two-github.component.html',
  styleUrl: './two-github.component.scss'
})
export class TwoGithubComponent {
  private githubService = inject(TwoGithubService);

  githubHover = 'assets/img/github_white.png';

  public getGithubUrl(version: 'old' | 'new'): string {
    const links = {
      portfolio: {
        old: 'https://github.com/beekeepaz/portfolio',
        new: 'https://github.com/devcontain/portfolio'
      },
      join: {
        old: 'https://github.com/Simon-Kral/join',
        new: 'https://github.com/devcontain/join'
      },
      pollo: {
        old: 'https://github.com/beekeepaz/El-pollo-loco',
        new: 'https://github.com/devcontain/El-pollo-loco'
      }
    };

    return links[this.getHubType()][version];
  }

  public close(): void {
    this.githubService.close();
  }

  public isOpen(): boolean {
    return this.githubService.isOpen();
  }

  public getHubType(): HubType {
    return this.githubService.hubType();
  }
}