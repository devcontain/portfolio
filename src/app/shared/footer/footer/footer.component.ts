import { Component } from '@angular/core';
import { Language } from '../../../global/language';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TwoGithubService } from '../../services/two-github.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    public languageService: Language,
    public githubService: TwoGithubService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }

  /**
   * Scroll to bottom of page
   */
  back(): void {
    const isHome = this.router.url === '/';

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } 

    this.router.navigate(['/'], { replaceUrl: true }).then(() => {
      setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  }

}
