import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.styl']
})

export class CategoryComponent implements OnInit {
    category: Category;
    editCategory: Category;
    editForm: FormGroup;

    constructor(
        private categoriesService: CategoriesService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        let id: number = this.activatedRoute.snapshot.params["id"];

        this.categoriesService.getCategoryById(id).subscribe(
            data => {this.category = data;
            this.editCategory =data},
            err => {
                console.error(err)
            })

        this.editForm = this.formBuilder.group({
            id: [null],
            name: [null],
            description: [null]
        })
    }

    canDeactivate() {
        if (!this.category || this.category.name === this.editCategory.name) {
            return true;
        }

        return confirm('Discard changes?');
    }

    edit(cat: Category) {
        this.editCategory = cat
        this.editForm.controls['id'].setValue
            (this.editCategory.id);
        this.editForm.controls['name'].setValue
            (this.editCategory.name);
        this.editForm.controls['description'].setValue
            (this.editCategory.description);
    }
    onSubmit(e: Event, form: FormGroup) {
        e.preventDefault();
        this.editForm.controls['id'].markAsUntouched();
        this.editForm.controls['name'].markAsUntouched();
        this.editForm.controls['description'].markAsUntouched();

    }
}
