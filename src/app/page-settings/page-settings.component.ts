import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Settings } from '../model/settings';
import { StorageService } from '../services/interfaces/storage';
import { Subscription } from 'rxjs';
import { SheetsService } from '../services/sheets.service';
import { Category } from '../model/category';

@Component({
    selector: 'app-page-settings',
    templateUrl: './page-settings.component.html',
    styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit, OnDestroy {

    public mainForm = this.fb.group({
        sheetId: ['']
    });

    public categories: Category[] = [];

    private subscription: Subscription;

    constructor(
        private storage: StorageService,
        private sheets: SheetsService,
        private fb: FormBuilder
    ) { }

    public ngOnInit(): void {
        const settings = this.storage.get(Settings);
        if (settings)
            this.mainForm.patchValue(settings);

        this.subscription = this.mainForm.valueChanges
            .subscribe(settings => this.storage.put(Settings, settings));

        this.sheets.getCategories().then(categories => {
            console.log('PageSettingsComponent', categories);

            this.categories = categories;
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

