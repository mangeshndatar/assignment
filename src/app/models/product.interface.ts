import { ReviewsI } from "./reviews.interface";

export interface ProductI {
  id: number;
  title: string;
  picture: string;
  name: string;
  price: number;
  customerRating: string;
  rating: number;
  longDescription: string;
  category: string;
  reviews: ReviewsI[];
  inCart?: boolean;
}
