import { AfterViewInit, ChangeDetectorRef, Directive, inject } from '@angular/core';
import { ContentFeatureHandler } from '../../shared/feature/content-feature-handler';
import { EventFeatureHandler } from '../../shared/feature/event-feature-handler';

@Directive()
export abstract class BaseView implements AfterViewInit {

    protected contentHandler: ContentFeatureHandler;
    protected eventHandler: EventFeatureHandler;

    private cd: ChangeDetectorRef = inject(ChangeDetectorRef);

    constructor() {
        this.contentHandler = new ContentFeatureHandler();
        this.eventHandler = new EventFeatureHandler();
    }

    ngAfterViewInit(): void {
        this.createComponents();
        this.loadContent();
        this.listenEvents();
        this.cd.detectChanges();
    }

    abstract createComponents(): void;
    abstract loadContent(): void;
    abstract listenEvents(): void;

}