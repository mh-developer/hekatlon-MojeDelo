import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../../services';

@Component({
    selector: 'app-toasts',
    templateUrl: './toasts.component.html',
    styleUrls: ['./toasts.component.scss'],
})
export class ToastsComponent {
    constructor(public toastService: ToastService) {}

    isTemplate(toast) {
        return toast.textOrTpl instanceof TemplateRef;
    }
}
