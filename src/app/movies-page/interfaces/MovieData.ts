import {Results} from "./Results";

export interface MovieData {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}
