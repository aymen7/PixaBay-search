import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageService} from '../shared/image.service';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../search result/search-result.model';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter <boolean> = new EventEmitter <boolean>();
  @Output() results: EventEmitter <SearchResult> = new EventEmitter <SearchResult>();
  constructor(private _imgService: ImageService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(500)
      .map((q: string) => this._imgService.getImage(q, 10))
      .switch()
      .subscribe(
        (results) => {// on success
          this.loading.emit(false);
          this.results.emit(results);
          console.log('the first image id: ' + results);
        },
        (err: any) => {
          console.log('error : ' + err);
        }
      );
  }

}
