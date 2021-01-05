import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.scss']
})
export class MerchantEditComponent implements OnInit {
  id: any ='';
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.id = route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit():void {
  }
  toRoute(path: string):string {
    return `../${this.id}/${path}`;
  }
  onBack():void {
    this.router.navigate(['merchants/view']);
  }
}
