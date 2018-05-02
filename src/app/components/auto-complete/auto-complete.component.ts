import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  @Input() Items: Array<any>;
  @Input() field: string;
  @Input() field2: string;
  @Input() Placeholder: string;


  val: FormControl;
  filterItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.Items = [{ a: 1, b: 'qwe' }, { a: 2, b: 'qwsww' }, { a: 3, b: '12w' }, { a: 4, b: '1w112' }, { a: 5, b: 'qdqww12' }, { a: 6, b: '12s2sq' }];
    this.field = 'a';
    this.field2 = 'b';



    this.val = new FormControl();
    this.val.valueChanges.subscribe(data => {
      this.filterItems = this.Items.filter(p => p.b.indexOf(this.val.value) !== -1);
    });
  }

}
