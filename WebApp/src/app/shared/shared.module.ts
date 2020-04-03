import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStoreService } from './services';
import { ToastsComponent } from './containers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [ToastsComponent],
    providers: [LocalStoreService],
    imports: [CommonModule, NgbModule],
    exports: [ToastsComponent],
})
export class SharedModule {}
