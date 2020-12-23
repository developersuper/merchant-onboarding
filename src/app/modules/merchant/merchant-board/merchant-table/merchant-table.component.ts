import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

import { IMerchant } from '../../../../shared/interfaces';
import { MerchantService } from '../../../../core/http';

import { MerchantDialogBoxComponent } from './merchant-dialog-box/merchant-dialog-box.component';
import * as jsonData from '../../../../../assets/data.json';

@Component({
  selector: 'app-merchant-table',
  templateUrl: './merchant-table.component.html',
  styleUrls: ['./merchant-table.component.scss']
})

export class MerchantTableComponent implements AfterViewInit {
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

  // dataSource = new MatTableDataSource<IMerchant>(ELEMENT_DATA);
  dataSource: MatTableDataSource<IMerchant>;
  sampleData: any = { a: '123' };
  constructor(
    public dialog: MatDialog,  
    private service: MerchantService
  ) {
    this.sampleData = jsonData;
    this.sampleData = { ... this.sampleData.default };
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.service.getMerchants().subscribe(data => {
      // console.log("data", data);
      this.dataSource = new MatTableDataSource<IMerchant>(JSON.parse(data).map((merchant: any) => {
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
      }));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error => {
      if (error.status === 404 || error.status === 400) {
        console.log(error);
      }
    });
    console.log(this.dataSource);
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(MerchantDialogBoxComponent, {
      width: '60vw',
      minWidth: '360px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("results", result);
      if(!result || !result.event){

      }else if(result.event == 'AddNewMerchant'){
        this.addNewMerchant(result.data);
      }
    });
  } 

  addNewMerchant(merchant: IMerchant) {
    const data = this.dataSource.data;
    data.push(merchant);
    this.dataSource.data = data;
  }

}


// const ELEMENT_DATA: IMerchant[] = [
//   {
//     id: "string",
//     title: "American Collectors",
//     subtitle: "Place your debt payment here!",
//     contactEmail: "americancollectors@example.com",
//     contactPhone: "3185159831",
//     contactAddressLine1: "1, The Street",
//     contactAddressLine2: "Unit 10",
//     contactCity: "Los Angeles",
//     contactState: "California",
//     contactCountry: "USA",
//     contactPostalCode: "12345",
//     shortName: "american-coll",
//     allowedPaymentTypes: ["All"],
//     termsAndConditions: "Lorem ipsum dolor sit amet __consectetur adipiscing elit.__ \n \n \n #### Fusce egestas ante id ex rhoncus pellentesque. \n Phasellus eget venenatis lectus. Ut fringilla feugiat mauris nec auctor. Ut vel purus tellus. Nam vitae ornare quam. \n ##### Proin justo ex, sagittis ac turpis in, ultrices porttitor lectus. \n  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer mollis finibus ipsum eu pulvinar. Mauris ac elit ac velit dictum rutrum id in ligula. Curabitur elementum, nunc ac ultricies vulputate, libero justo luctus dolor, vitae malesuada sapien tortor at quam. Fusce placerat sem vel sem blandit tristique sed sed nisl. Sed sed laoreet ante, in sagittis sapien. Proin ac ligula nec massa interdum accumsan. Morbi vehicula diam quis magna porttitor, a ornare felis laoreet. Praesent id sapien at metus ullamcorper mollis. Nulla dictum magna ac ipsum vehicula, a suscipit velit tincidunt. Quisque arcu tellus, sagittis rhoncus tristique id, tincidunt ac ipsum. Praesent tincidunt, elit id iaculis finibus, odio libero euismod nulla, vehicula pretium magna sapien ac metus. Vestibulum id dui eu ipsum bibendum venenatis et a libero. Donec nec nunc dolor. Phasellus interdum id sapien quis commodo. Maecenas dapibus mauris at tristique facilisis. Cras eget accumsan mi. Fusce vel hendrerit urna. Phasellus id ullamcorper metus, vel placerat libero. Quisque aliquet fermentum enim. Nulla eget auctor elit. Nam dapibus ante vitae ligula rutrum, sit amet ultrices nulla tincidunt. Phasellus tempus magna nec urna interdum elementum. Quisque ligula nisl, scelerisque id lacus at, aliquet elementum turpis. Mauris maximus ex ante. Nulla facilisi. Etiam vulputate fringilla lectus, vitae tempus ante facilisis eget. Maecenas suscipit risus orci, quis vehicula velit porta ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed est non neque accumsan vulputate id a lorem. Nullam turpis quam, fermentum quis eleifend vel, gravida nec libero. Vestibulum a pharetra erat. Nulla facilisi. Donec eu lectus metus. Nullam eget elementum lorem, ut tincidunt neque.",
//   },
//   {
//     id: "string",
//     title: "string",
//     subtitle: "string",
//     contactEmail: "string",
//     contactPhone: "string",
//     contactAddressLine1: "string",
//     contactAddressLine2: "string",
//     contactCity: "string",
//     contactState: "string",
//     contactCountry: "string",
//     contactPostalCode: "string",
//     shortName: "string",
//     allowedPaymentTypes: ["All"],
//     termsAndConditions: "string",
//   }
// ];