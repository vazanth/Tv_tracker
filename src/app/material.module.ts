import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule }from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from'@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports:[MatButtonModule,MatIconModule,MatInputModule,MatSidenavModule,MatListModule,MatTabsModule,
        MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatToolbarModule,
        MatCardModule, MatSelectModule,MatExpansionModule,MatProgressSpinnerModule],
    exports:[MatButtonModule,MatIconModule,MatInputModule,MatSidenavModule,MatListModule,MatTabsModule,
        MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatToolbarModule,
        MatCardModule,MatSelectModule,MatExpansionModule,MatProgressSpinnerModule]
})

export class MaterialModule{}