export const Permissions = {
    ACCESS_PROTECTED_ROUTE: 'access_protected_route',
    ADMIN_ACCESS: 'admin_access',
    MANAGE_USERS: 'manage_users',
    VIEW_REPORTS: 'view_reports',
    EDIT_CONTENT: 'edit_content',
    // Add more permissions as needed
  } as const;
  
  export type PermissionType = (typeof Permissions)[keyof typeof Permissions];
  