import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class LanguageCards {

    private readonly STORAGE_KEY = 'langToggle';
    private readonly isBrowser: boolean;

    private _toggleValue = new BehaviorSubject<string>('false');
    toggleValue$ = this._toggleValue.asObservable();

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
        const saved = this.safeGet(this.STORAGE_KEY);
        if (saved === 'true' || saved === 'false') {
            this._toggleValue.next(saved);
        }
    }

    get toggleValue(): string {
        return this._toggleValue.getValue();
    }
    set toggleValue(val: string) {
        const normalized = val === 'true' ? 'true' : 'false';
        this._toggleValue.next(normalized);
        this.safeSet(this.STORAGE_KEY, normalized);
    }

    private safeGet(key: string): string | null {
        if (!this.isBrowser) return null;
        try { return localStorage.getItem(key); } catch { return null; }
    }
    private safeSet(key: string, value: string): void {
        if (!this.isBrowser) return;
        try { localStorage.setItem(key, value); } catch { }
    }


    public joinenglish = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'A Kanban-based task management application. Create, organize and assign tasks, manage contacts and track progress using drag and drop.'
    }

    public joingerman = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'Eine Aufgabenverwaltung nach dem Kanban-Prinzip. Erstellen, organisieren und verteilen Sie Aufgaben, verwalten Sie Kontakte und verfolgen Sie den Fortschritt per Drag-and-Drop.'
    }

    public locoenglish = {
        cardnumber: '02',
        headercard: 'El Pollo Loco',
        descriptcard: 'An object-oriented 2D platform game. Help Pepe collect coins and Tabasco bottles, avoid enemies and defeat the final boss.'
    }

    public locogerman = {
        cardnumber: '02',
        headercard: 'El Pollo Loco',
        descriptcard: 'Ein objektorientiertes 2D-Jump-and-Run-Spiel. Helfen Sie Pepe, Münzen und Tabasco-Flaschen zu sammeln, Gegnern auszuweichen und den Endgegner zu besiegen.'
    }

    public glueckenglish = {
        cardnumber: '03',
        headercard: 'Glück Selbermachen',
        descriptcard: 'A fully developed and deployed Angular website with responsive design, hosted online and accessible to visitors.'
    }

    public glueckgerman = {
        cardnumber: '03',
        headercard: 'Glück Selbermachen',
        descriptcard: 'Eine vollständig entwickelte und veröffentlichte Angular-Website mit responsivem Design, eigenem Hosting und öffentlicher Erreichbarkeit.'
    }

    public devnextenglish = {
        cardnumber: '04',
        headercard: 'devnext',
        descriptcard: 'A DevOps project featuring Docker, automated CI/CD pipelines, server deployment, monitoring and security.'
    }

    public devnextgerman = {
        cardnumber: '04',
        headercard: 'devnext',
        descriptcard: 'Ein DevOps-Projekt mit Docker, automatisierten CI/CD-Pipelines, Server-Deployment, Monitoring und Sicherheitsmaßnahmen.'
    }

    public devaultenglish = {
        cardnumber: '05',
        headercard: 'devnext Vault',
        descriptcard: 'A planned centralized project storage solution on a home server, separating development workstations from persistent project storage.'
    }

    public devaultgerman = {
        cardnumber: '05',
        headercard: 'devnext Vault',
        descriptcard: 'Eine geplante zentrale Projektverwaltung auf dem Homeserver, die Entwicklungsarbeitsplätze von der dauerhaften Speicherung der Projektdaten trennt.'
    }


    get join(): any {
        return this.toggleValue === 'false' ? this.joinenglish : this.joingerman;
    }

    get loco(): any {
        return this.toggleValue === 'false' ? this.locoenglish : this.locogerman;
    }

    get glueck(): any {
        return this.toggleValue === 'false' ? this.glueckenglish : this.glueckgerman;
    }

    get devnext(): any {
        return this.toggleValue === 'false' ? this.devnextenglish : this.devnextgerman;
    }

    get devault(): any {
        return this.toggleValue === 'false' ? this.devaultenglish : this.devaultgerman;
    }


}

