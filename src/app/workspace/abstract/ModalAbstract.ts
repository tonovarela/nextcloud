import { Component, EffectRef, OnDestroy, inject } from '@angular/core';
import { Modal } from 'bootstrap';
import { ModalService } from '../services';
declare var window: any;
@Component({
    template: ''
})
export abstract class ModalAbstractComponent implements OnDestroy {
    protected collectionRef: EffectRef[] = [];
    protected modalComponent: Modal | undefined;
    public modalService = inject(ModalService);
    ngOnDestroy(): void {
        this.collectionRef.forEach(ref => ref.destroy());
    }

    inicializarModal(idModal:string) {
        this.modalComponent = new window.bootstrap.Modal(document.getElementById(idModal));        

    }

}