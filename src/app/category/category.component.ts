import { Component, OnInit } from '@angular/core';
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

    constructor(
        private categoriesService: CategoriesService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        let id: number = this.activatedRoute.snapshot.params["id"];
        
        this.categoriesService.getCategoryById(id).subscribe(
            data => this.category = data,
            err => {
                console.error(err)
            })
    }
}
