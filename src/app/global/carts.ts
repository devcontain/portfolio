import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Carts {
    modalOpen = false;

    public hideModal = false;

    public hoverJoin = false;
    public hoverElPollo = false;
    public hoverGlueck = false;
    public hoverDevnext = false;
    public hoverDeVault = false;

    public setJoin = false;
    public setElPolloLoco = false;
    public setGlueck = false;
    public setDevnext = false;
    public setDeVault = false;

    public join: string = '';
    public elpolloloco: string = '';
    public glueck: string = '';
    public devnext: string = '';
    public deVault: string = '';

    /**
     * Toggle modal visibility flag
     */
    toggleModal(): void {
        this.hideModal = !this.hideModal;
    }

    /**
     * Reset all project selection flags to false
     */
    setFalse(): void {
        this.setJoin = false;
        this.setElPolloLoco = false;
        this.setGlueck = false;
        this.setDevnext = false;
        this.setDeVault = false;
    }
}
