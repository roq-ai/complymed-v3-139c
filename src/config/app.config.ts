interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Admin'],
  customerRoles: [],
  tenantRoles: ['Organization Admin'],
  tenantName: 'Organization',
  applicationName: 'ComplyMED v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
