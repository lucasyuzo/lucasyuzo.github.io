import { Component, ComponentRef, inject, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BaseView } from '../base-view/base.view';
import { HeaderContent } from './features/contents/header-content.feature';

@Component({
    template: ""
})
export class HomeView extends BaseView {

    private viewContainer = inject(ViewContainerRef);

    private headerComponentRef!: ComponentRef<HeaderComponent>;

    override createComponents(): void {
        this.headerComponentRef = this.viewContainer.createComponent(HeaderComponent);
    }

    override loadContent(): void {
        this.contentHandler
            .add(new HeaderContent(this.headerComponentRef))
            .populate();
    }

    override listenEvents(): void {

    }

}