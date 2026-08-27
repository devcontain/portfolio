import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Carts {
    modalOpen = false;

    public hideModal = false;

    public hoverJoin = false;
    public hoverElPollo = false;
    public hoverDevnext = false;
    public hoverGlueck = false;

    public setJoin = false;
    public setElPolloLoco = false;
    public setDevnext = false;
    public setGlueck = false;

    public join: string = '';
    public elpolloloco: string = '';
    public devnext: string = '';
    public glueck: string = '';

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
        this.setDevnext = false;
        this.setGlueck = false;
    }
}
