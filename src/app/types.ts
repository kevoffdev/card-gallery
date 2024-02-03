export interface Card {
  case_studies: CardItem[];
}

export interface CardItem {
  id: number;
  client: string;
  teaser: string;
  vertical: string;
  is_enterprise: boolean;
  title: string;
  hero_image: string;
  sections: Section[];
}

export interface Section {
  title: null | string;
  body_elements: (BodyElementClass | string)[];
}

export interface BodyElementClass {
  image_url: string;
}
