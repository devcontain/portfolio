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


    public glueckenglish = {
        cardnumber: '03',
        headercard: 'Glück Selbermachen',
        descriptcard: 'Hosted and live internet site.'
    }

    public glueckgerman = {
        cardnumber: '03',
        headercard: 'Glück Selbermachen',
        descriptcard: 'Gehosted and live Internetseite.'
    }

    public devnextenglish = {
        cardnumber: '04',
        headercard: 'devnext',
        descriptcard: 'Docker, CI/CD and security.'
    }

    public devnextgerman = {
        cardnumber: '04',
        headercard: 'devnext',
        descriptcard: 'Docker, CI/CD und Sicherheit'
    }

    public devaultenglish = {
        cardnumber: '05',
        headercard: 'devnext Vault',
        descriptcard: 'Centralized structure for storing all projects on the home server, allowing the PC to serve exclusively as a workstation.'
    }

    public devaultgerman = {
        cardnumber: '05',
        headercard: 'devnext Vault',
        descriptcard: 'Zentrale Struktur zur Speicherung aller Projekte auf dem Home Server, sodass der PC ausschließlich als Arbeitsstation dient.'
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

