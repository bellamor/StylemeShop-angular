import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Category } from "../models/category";
import { CategoriesService } from "../services/categories.service";

@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.styl"]
})
export class CategoryComponent implements OnInit {

    category: Category;
    editCategory: Category;

    constructor(
        private categoriesService: CategoriesService,
        private activatedRoute: ActivatedRoute
    ) { }

    onCategoryEdit(cat: Category) {
        this.editCategory = cat;
    }

    ngOnInit() {
        let id: number = this.activatedRoute.snapshot.params["id"];
        this.categoriesService.getCategoryById(id)
                              .then(
                                  category => this.category = category
                              )
    }

    // canDeactivate() {
    //     if(!this.category || this.category.name === this.editCategory.name) {
    //         return true;
    //     }

    //     return confirm("Discard changes?");
    // }
}
