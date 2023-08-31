import { SiteModel } from "./site";

export class CategoryModel {
  name: string;
  sites: SiteModel[];

  constructor(name: string, sites: SiteModel[]) {
    this.name = name;
    this.sites = sites;
  }
}
