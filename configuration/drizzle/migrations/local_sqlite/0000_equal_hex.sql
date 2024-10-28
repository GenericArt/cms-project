CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`active` integer DEFAULT true,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`roles` text DEFAULT '[]',
	`permissions` text DEFAULT '[]',
	`is_staff` integer DEFAULT false,
	`is_admin` integer DEFAULT false,
	`password` text NOT NULL,
	`refresh_token_list` text DEFAULT '[]',
	`max_concurrent_tokens` integer DEFAULT 10,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);