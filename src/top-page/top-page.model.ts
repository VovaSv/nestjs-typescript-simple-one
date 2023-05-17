export enum TopLevelCategory {
  Cources,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstLevelCategoryl: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSlalry: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
