/**
 * Created by Aymen Bennour on 12/04/2018.
 */
export class SearchResult {
  id: string;
  pageURL: string;
  previewURL: string;
 // this means that the parameter we pass into the constructor is optional
 constructor(obj?: any) {
   this.id = obj && obj.hits.id || null;
   this.pageURL = obj && obj.hits.pageURL || null;
   this.previewURL = obj && obj.hits.previewURL || null;
 }
}
