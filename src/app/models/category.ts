export class Category
{
    id?: number;
    name: string;
    description:string;
    link?:string;


constructor(
     name: string,
     description:string,
      id?: number,
      link?:string
){
    this.name = name;
    this.description = description;
    this.id = id;
    this.link = link;
}
}