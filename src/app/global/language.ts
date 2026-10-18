import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class Language {

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


    public english = {
        navleft: 'About Me',
        navmid: 'Skills',
        navright: 'Projects',

        buttonleft: 'View My Work',
        buttonright: 'Contact Me',
        bannertxta: 'Frontend Developer',
        bannertxtb: 'Based in Hannover',
        bannertxtc: 'Open to new Opportunities',
        bannertxtd: 'Available for new Projects',

        abouta: 'Who I Am',
        aboutb: 'About Me',
        aboutc: 'My name is Sebastian. I am technically skilled and consistently take a solution-oriented approach. Complex challenges and well-designed applications motivate me. Modern technologies and the opportunity to continuously develop my skills drive me forward.',
        aboutd: 'I am flexible when it comes to my working environment and can work effectively both on-site and remotely.',
        aboute: 'I am open-minded and always looking for new challenges to further develop my knowledge and skills.',
        aboutf: 'For me, programming is not just about writing code. It is a creative form of problem-solving. My strength lies in turning complex technical challenges into simple, user-friendly solutions. This allows me to help you achieve your goals and bring your ideas to life.',

        skillsa: 'Technologies',
        skillsb: 'Skill Set',
        skillsc: 'Throughout my journey, I have worked on a variety of projects, using different frontend technologies and concepts. I am open to exploring new technologies and methods to continuously expand my skills and keep up with developments in web technology.',
        skillsd: 'Looking for',
        skillse: 'a specific skill?',
        skillsf: 'Feel free to contact me. I look forward to expanding my knowledge and taking on new challenges.',
        skillsbutton: "Let's Talk",

        projectsa: 'Featured Projects',
        projectsb: 'Discover a selection of my work. Explore the projects and see my skills in action.',

        headercart: 'What Is This Project About?',
        testbtncard: 'Live Demo',
        nextbtncard: 'Next Project',

        headerrevaluation: 'What My Colleagues Say About Me',

        footerunderlogoa: 'Web Developer',
        footerunderlogob: 'Hannover, Germany',
        footerdat: 'Privacy Policy',
        footerimp: 'Legal Notice'
    };

    public german = {
        navleft: 'Über mich',
        navmid: 'Skills',
        navright: 'Projekte',

        buttonleft: 'Arbeiten',
        buttonright: 'Kontakt',
        bannertxta: 'Frontend-Entwickler',
        bannertxtb: 'Standort Hannover',
        bannertxtc: 'Offen für neue Herausforderungen',
        bannertxtd: 'Verfügbar für neue Projekte',

        abouta: 'Wer ich bin',
        aboutb: 'Über mich',
        aboutc: 'Mein Name ist Sebastian. Ich bin technisch versiert und arbeite konsequent lösungsorientiert. Komplexe Aufgaben und durchdachte Anwendungen motivieren mich. Moderne Technologien und die Möglichkeit, mich kontinuierlich weiterzuentwickeln, treiben mich an.',
        aboutd: 'Ich bin flexibel in der Wahl meiner Arbeitsumgebung und kann sowohl vor Ort als auch im Homeoffice effektiv arbeiten.',
        aboute: 'Ich bin aufgeschlossen und suche stets nach neuen Herausforderungen, um meine Kenntnisse und Fähigkeiten weiterzuentwickeln.',
        aboutf: 'Beim Programmieren geht es für mich nicht nur darum, Code zu schreiben. Es ist eine kreative Form der Problemlösung. Meine Stärke liegt darin, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. So unterstütze ich Sie dabei, Ihre Ziele zu erreichen und Ihre Ideen Wirklichkeit werden zu lassen.',

        skillsa: 'Technologien',
        skillsb: 'Skills',
        skillsc: 'Auf meinem bisherigen Weg habe ich an vielfältigen Projekten gearbeitet und dabei verschiedene Frontend-Technologien und -Konzepte eingesetzt. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu erweitern und mit den Entwicklungen der Webtechnologie Schritt zu halten.',
        skillsd: 'Sie benötigen',
        skillse: 'eine bestimmte Fähigkeit?',
        skillsf: 'Nehmen Sie Kontakt mit mir auf. Ich freue mich darauf, mein Wissen zu erweitern und neue Herausforderungen anzunehmen.',
        skillsbutton: 'Kontakt',

        projectsa: 'Projekte',
        projectsb: 'Entdecken Sie eine Auswahl meiner Arbeiten. Erkunden Sie die Projekte und erleben Sie meine Fähigkeiten in der Praxis.',

        headercart: 'Worum geht es bei diesem Projekt?',
        testbtncard: 'Testen',
        nextbtncard: 'Nächstes Projekt',

        headerrevaluation: 'Was meine Kollegen über mich sagen',

        footerunderlogoa: 'Webentwickler',
        footerunderlogob: 'Hannover, Deutschland',
        footerdat: 'Datenschutz',
        footerimp: 'Impressum'
    };

    public retxtenglish = [
        { text: "Sebastian keeps calm under stress and always finds a solution.", name: "Burkhard, Mechatroniker" },
        { text: "He gladly shares his knowledge and helps new colleagues settle in.", name: "Tobias, Office worker" },
        { text: "He thinks solution-oriented and brings ideas that move us forward.", name: "Nicol, Team Lead" }
    ];

    public retxtgerman = [
        { text: "Sebastian bleibt auch unter Stress ruhig und findet immer Lösungen.", name: "Burkhard, Mechatroniker" },
        { text: "Er teilt sein Wissen gern und hilft neuen Kollegen beim Einstieg.", name: "Tobias, Sachbearbeiter" },
        { text: "Er denkt lösungsorientiert und bringt Ideen, die uns weiterbringen.", name: "Nicol, Teamleiterin" }
    ];

    public contacttxtenglish = {
        headeroverbox: 'Contact me',
        headbefore: 'Let’s work',
        headafter: 'together',
        underhead: 'Got a problem to solve',
        descriptbefore: 'I enjoy turning ideas into results and I’m always curious about new challenges. If you’re looking for someone who brings energy, focus, and reliable value to your projects, I’d be happy to connect.',
        descriptafter: 'your ideas and contributing to your projects with my work.',
        question: 'Need a Frontend developer?',
        reply: 'Let’s talk!',

        name: 'What s your name?',
        mynameis: 'Your name goes here',
        missingname: 'Oops! it seems your name is missing',
        email: 'What s your email?',
        mymailis: 'yourmail@email.com',
        missingmail: 'Hoppla! your email is required',
        message: 'How can I help you?',
        mymassageis: 'Hello Sebastian, I am interested in ...',
        missingmassage: 'What do you need to develop?',

        policytxtbefore: 'I’ve read the',
        policyicealink: 'privacy policy',
        policyafter: 'and agree to the processing of my data as outlined.',
        missingpolicy: 'Please accept the privacy policy',

        button: 'send'
    };

    public contacttxtgerman = {
        headeroverbox: 'Kontaktieren Sie mich',
        headbefore: 'Lassen Sie uns ein',
        headafter: 'Netzwerk bilden',
        underhead: 'Sie haben ein Problem zu lösen',
        descriptbefore: 'Ich habe Freude daran, Ideen in Ergebnisse zu verwandeln und bin immer neugierig auf neue Herausforderungen. Wenn Sie jemanden suchen, der Energie, Fokus und verlässlichen Mehrwert in Ihre Projekte bringt, freue ich mich auf den Austausch.',
        question: 'Brauchen Sie einen Frontend-Entwickler?',
        reply: 'Lassen Sie uns reden!',

        name: 'Wie ist Ihr Name?',
        mynameis: 'Dein Name kommt hier hin',
        missingname: 'Ups! Ihr Name scheint zu fehlen',
        email: 'Wie lautet Ihre E-Mail?',
        mymailis: 'ihremail@email.de',
        missingmail: 'Hoppla! Ihre E-Mail ist erforderlich',
        message: 'Wie kann ich Ihnen helfen?',
        mymassageis: 'Hallo Sebastian, ich bin interessiert an ...',
        missingmassage: 'Was soll Programmiert werden?',

        policytxtbefore: 'Ich habe die',
        policyicealink: 'Datenschutzbestimmungen',
        policyafter: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        missingpolicy: 'Bitte akzeptieren Sie die Datenschutzbestimmungen',

        button: 'Absenden'
    };

    public joinenglish = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'Task manager inspired by the Kanba System. Create and organize tasks using drag and drop functions, assign users and categories.'
    }

    public joingerman = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'Aufgabenmanager nach dem Vorbild des Kanba-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    }

    public locoenglish = {
        cardnumber: '02',
        headercard: 'EL Pollo Loco',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    public locogerman = {
        cardnumber: '02',
        headercard: 'EL Pollo Loco',
        descriptcard: 'Aufgabenmanager nach dem Vorbild des Kanba-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    }

    public bubbleenglish = {
        cardnumber: '03',
        headercard: 'Da Bubble',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    public bubblegerman = {
        cardnumber: '03',
        headercard: 'Da Bubble',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    get currentHeader(): any {
        return this.toggleValue === 'false' ? this.english : this.german;
    }

    get reevaluation(): any {
        return this.toggleValue === 'false' ? this.retxtenglish : this.retxtgerman;
    }

    get contact(): any {
        return this.toggleValue === 'false' ? this.contacttxtenglish : this.contacttxtgerman;
    }

    get join(): any {
        return this.toggleValue === 'false' ? this.joinenglish : this.joingerman;
    }

    get loco(): any {
        return this.toggleValue === 'false' ? this.locoenglish : this.locogerman;
    }

    get bubble(): any {
        return this.toggleValue === 'false' ? this.bubbleenglish : this.bubblegerman;
    }
}