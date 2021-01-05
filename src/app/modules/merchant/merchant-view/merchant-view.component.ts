import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';

import { IMerchant } from '../../../shared/interfaces';
import { MerchantService } from '../../../core/http';
import * as jsonData from '../../../../assets/data.json';

@Component({
  selector: 'app-merchant-view',
  templateUrl: './merchant-view.component.html',
  styleUrls: ['./merchant-view.component.scss']
})
export class MerchantViewComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'subtitle',
    'contactEmail',
    'contactPhone',
    'contactAddressLine1',
    'contactAddressLine2',
    'contactCity',
    'contactState',
    'contactCountry',
    'contactPostalCode',
    'shortName',
    'termsAndConditions',
    'action'
  ];

  dataSource: MatTableDataSource<IMerchant>;
  sampleData: any = { a: '123' };
  search: string = '';
  constructor( 
    private service: MerchantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sampleData = jsonData;
    this.sampleData = { ... this.sampleData.default };
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IMerchant>([]);
  }

  ngAfterViewInit() {
    this.service.currentMerchants.subscribe(merchants => {
      console.log("first", merchants);
      if(merchants.length > 0){
        this.dataSource = new MatTableDataSource<IMerchant>(merchants);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }else{
        this.service.getMerchants().subscribe(data => {
          const newMerchants = JSON.parse(data).map((merchant: any) => {
            return {
              id: merchant.id,
              title: merchant.title,
              subtitle: merchant.subtitle,
              contactEmail: merchant.contactEmail,
              contactPhone: merchant.contactPhone,
              contactAddressLine1: merchant.contactAddressLine1,
              contactAddressLine2: merchant.contactAddressLine2,
              contactCity: merchant.contactCity,
              contactState: merchant.contactState,
              contactCountry: merchant.contactCountry,
              contactPostalCode: merchant.contactPostalCode,
              shortName: merchant.shortName,
              allowedPaymentTypes: merchant.allowedPaymentTypes,
              termsAndConditions: merchant.termsAndConditions
            }
          });
          this.dataSource = new MatTableDataSource<IMerchant>(newMerchants);
          this.service.updateMerchants(newMerchants);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          if (error.status === 404 || error.status === 400) {
            console.log(error);
          }
        });
      }
    });
  }

  addNewMerchant() {
    this.router.navigate(['merchants/add-paypage']);
  }
  onEdit(merchant: IMerchant) {
    console.log(merchant);
    this.service.updateEditingMerchant(merchant);
    this.router.navigate([`merchants/edit-paypage/${merchant.id}/info`]);
  }
  doFilter(event: any) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.id.toLowerCase().includes(filter) || data.title.toLowerCase().includes(filter) || data.shortName.toString().includes(filter);
    };
    const value: string = event.currentTarget.value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}