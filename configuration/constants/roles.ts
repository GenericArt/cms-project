import { Permissions, PermissionType } from './permissions';

export const Roles = {
  USER: 'user',
  EDITOR: 'editor',
  ADMIN: 'admin',
} as const;

export type RoleType = (typeof Roles)[keyof typeof Roles];

export const RolePermissions: Record<RoleType, PermissionType[]> = {
  [Roles.USER]: [Permissions.ACCESS_PROTECTED_ROUTE],
  [Roles.EDITOR]: [Permissions.ACCESS_PROTECTED_ROUTE, Permissions.EDIT_CONTENT],
  [Roles.ADMIN]: Object.values(Permissions),
};
