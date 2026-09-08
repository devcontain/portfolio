import { Component, OnInit } from '@angular/core';
import { ProjectCartComponent } from './project-cart/project-cart.component';
import { Carts } from '../global/carts';
import { Language } from '../global/language';
import { ToggleScroll } from '../global/togglescroll';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCartComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  arrowOutward = '../../assets/img/arrow_outward.png';

  joinPreview = '../../assets/img/joinPreview.png';
  polloLocoPreview = '../../assets/img/pollo-locoPreview.png';
  glueckPreview = '../../assets/img/racoon_CSM.png';
  devnextPreview = '../../assets/img/racoon_CSM.png';
  deVaultPreview = '../../assets/img/racoon_CSM.png';

  singleProjectBackground = '../../assets/img/single-project-back-ground.png';

  constructor(
    public carts: Carts,
    public languageService: Language,
    public scrollbarService: ToggleScroll
  ) { }

  /**
   * Lifecycle hook: no initialization logic required
   */
  ngOnInit(): void { }

  /**
   * Set hover state for a project preview on mouse enter
   * @param {string} enterproject - project identifier
   * ('preJoin' | 'preElPollo' | 'preGlueck' | 'preDevnext' | 'preDeVault')
   */
  mouseEnter(enterproject: string): void {
    this.carts.hoverJoin = enterproject === 'preJoin' ? true : this.carts.hoverJoin;
    this.carts.hoverElPollo = enterproject === 'preElPollo' ? true : this.carts.hoverElPollo;
    this.carts.hoverGlueck = enterproject === 'preGlueck' ? true : this.carts.hoverGlueck;
    this.carts.hoverDevnext = enterproject === 'preDevnext' ? true : this.carts.hoverDevnext;
    this.carts.hoverDeVault = enterproject === 'preDeVault' ? true : this.carts.hoverDeVault;
  }

  /**
   * Reset hover state for a project preview on mouse leave
   * @param {string} leaveproject - project identifier
   * ('leaveJoin' | 'leaveElPollo' | 'leaveGlueck' | 'leaveDevnext' | 'leaveDeVault')
   */
  mouseLeave(leaveproject: string): void {
    this.carts.hoverJoin = leaveproject === 'leaveJoin' ? false : this.carts.hoverJoin;
    this.carts.hoverElPollo = leaveproject === 'leaveElPollo' ? false : this.carts.hoverElPollo;
    this.carts.hoverGlueck = leaveproject === 'leaveGlueck' ? false : this.carts.hoverGlueck;
    this.carts.hoverDevnext = leaveproject === 'leaveDevnext' ? false : this.carts.hoverDevnext;
    this.carts.hoverDeVault = leaveproject === 'leaveDeVault' ? false : this.carts.hoverDeVault;
  }

  /**
   * Handle project selection: disable page scroll, set the selected project
   * flag, and open the project modal
   * @param {string} ele - project identifier
   * ('Join' | 'ElPolloLoco' | 'Glueck' | 'Devnext' | 'DeVault')
   */
  choosenProject(ele: string): void {
    const html = document.documentElement;
    html.classList.add('no-scroll');

    this.getSingleProject(ele);
    this.carts.toggleModal();
  }

  /**
   * Activate the selected project flag in the carts service
   * @param {string} ele - project identifier
   * ('Join' | 'ElPolloLoco' | 'Glueck' | 'Devnext' | 'DeVault')
   * @returns {boolean | null} true if a matching project flag was set,
   * otherwise null
   */
  getSingleProject(ele: string): boolean | null {
    return ele === 'Join' ? this.carts.setJoin = true :
      ele === 'ElPolloLoco' ? this.carts.setElPolloLoco = true :
        ele === 'Glueck' ? this.carts.setGlueck = true :
          ele === 'Devnext' ? this.carts.setDevnext = true :
            ele === 'DeVault' ? this.carts.setDeVault = true :
              null;
  }
}