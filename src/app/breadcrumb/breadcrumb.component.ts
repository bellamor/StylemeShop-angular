import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";

export class Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.styl']
})

export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      //alert(this.breadcrumbs );
    });
  }

 
  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    let children: ActivatedRoute[] = route.children;
   
    if (children.length === 0) {
       return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      let routingURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      let label: string = `/${child.snapshot.url[child.snapshot.url.length -1].path}`;

      url += `/${routingURL}`;

      let breadcrumb: Breadcrumb = {
        label:label,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}