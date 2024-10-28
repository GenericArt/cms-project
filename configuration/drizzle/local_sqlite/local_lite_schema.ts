import { RoleType } from '../../constants/roles';
import { PermissionType } from '../../constants/permissions';

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const UsersTable = sqliteTable('users', {
  id: integer('id').primaryKey(),
  active: integer('active', { mode: 'boolean' }).default(true),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  roles: text('roles', { mode: 'json' }).$type<RoleType[]>().default([]),
  permissions: text('permissions', { mode: 'json' }).$type<PermissionType[]>().default([]),
  is_staff: integer('is_staff', { mode: 'boolean' }).default(false),
  is_admin: integer('is_admin', { mode: 'boolean' }).default(false),
  password: text('password').notNull(),
  refresh_token_list: text('refresh_token_list', { mode: 'json' }).default('[]'),
  max_concurrent_tokens: integer('max_concurrent_tokens').default(10),
  created_at: text('created_at').notNull(),
  updated_at: text('updated_at').notNull(),
});
