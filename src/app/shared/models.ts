import { ICredentials, IStylesheet } from './interfaces';

export class Merchant {
  title: string = 'American Collectors';
  subtitle: string = 'Place your debt payment here!';
  contactEmail: string = 'americancollectors@example.com';
  contactPhone: string = '3185159831';
  contactAddressLine1: string = '1, The Street';
  contactAddressLine2: string = 'Unit 10';
  contactCity: string = 'Los Angeles';
  contactState: string = 'California';
  contactCountry: string = 'USA';
  contactPostalCode: string = '12345';
  shortName: string = 'american-coll';
  allowedPaymentTypes: Array<string> = ["All"];
  termsAndConditions: string = `Lorem ipsum dolor sit amet __consectetur adipiscing elit.__ \n \n \n #### Fusce egestas ante id ex rhoncus pellentesque. \n Phasellus eget venenatis lectus. Ut fringilla feugiat mauris nec auctor. Ut vel purus tellus. Nam vitae ornare quam. \n ##### Proin justo ex, sagittis ac turpis in, ultrices porttitor lectus. \n  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer mollis finibus ipsum eu pulvinar. Mauris ac elit ac velit dictum rutrum id in ligula. Curabitur elementum, nunc ac ultricies vulputate, libero justo luctus dolor, vitae malesuada sapien tortor at quam. Fusce placerat sem vel sem blandit tristique sed sed nisl. Sed sed laoreet ante, in sagittis sapien. Proin ac ligula nec massa interdum accumsan. Morbi vehicula diam quis magna porttitor, a ornare felis laoreet. Praesent id sapien at metus ullamcorper mollis. Nulla dictum magna ac ipsum vehicula, a suscipit velit tincidunt. Quisque arcu tellus, sagittis rhoncus tristique id, tincidunt ac ipsum. Praesent tincidunt, elit id iaculis finibus, odio libero euismod nulla, vehicula pretium magna sapien ac metus. Vestibulum id dui eu ipsum bibendum venenatis et a libero. Donec nec nunc dolor. Phasellus interdum id sapien quis commodo. Maecenas dapibus mauris at tristique facilisis. Cras eget accumsan mi. Fusce vel hendrerit urna. Phasellus id ullamcorper metus, vel placerat libero. Quisque aliquet fermentum enim. Nulla eget auctor elit. Nam dapibus ante vitae ligula rutrum, sit amet ultrices nulla tincidunt. Phasellus tempus magna nec urna interdum elementum. Quisque ligula nisl, scelerisque id lacus at, aliquet elementum turpis. Mauris maximus ex ante. Nulla facilisi. Etiam vulputate fringilla lectus, vitae tempus ante facilisis eget. Maecenas suscipit risus orci, quis vehicula velit porta ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed est non neque accumsan vulputate id a lorem. Nullam turpis quam, fermentum quis eleifend vel, gravida nec libero. Vestibulum a pharetra erat. Nulla facilisi. Donec eu lectus metus. Nullam eget elementum lorem, ut tincidunt neque.`;
  returnUrl: string = '';
  constructor() {}
}

export class Credentials implements ICredentials{
  PwPass: string = '';
  PwClientId: string = '';
  PwUser: string = '';
  PwKey: string = '';
  constructor(pwPass='', pwClientId='', pwUser='', pwKey='') {
    this.PwPass = pwPass;
    this.PwClientId = pwClientId;
    this.PwUser = pwUser;
    this.PwKey = pwKey;
  }
} 

export class Stylesheet implements IStylesheet {
  File: string = '';
  Status: string = 'Active';
  constructor(file: string = '', status: string = 'Active') {
    this.File = file;
    this.Status = status;
  }
}