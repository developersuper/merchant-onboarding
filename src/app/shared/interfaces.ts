export interface IMerchant {
  id: string,
  title: string,
  subtitle: string,
  contactEmail: string,
  contactPhone: string,
  contactAddressLine1: string,
  contactAddressLine2: string,
  contactCity: string,
  contactState: string,
  contactCountry: string,
  contactPostalCode: string,
  shortName: string,
  allowedPaymentTypes: Array<string>,
  termsAndConditions: string,
}

export interface ICredentials {
  PwPass: string,
  PwClientId: string,
  PwUser: string,
  PwKey: string,
  Status: number
}