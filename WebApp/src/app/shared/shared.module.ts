import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStoreService } from './services';

@NgModule({
    declarations: [],
    providers: [
        LocalStoreService
    ],
    imports: [CommonModule]
})
export class SharedModule {}
