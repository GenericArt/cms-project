CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"active" boolean DEFAULT true,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"roles" text[] DEFAULT '{}',
	"permissions" text[] DEFAULT '{}',
	"is_staff" boolean DEFAULT false,
	"is_admin" boolean DEFAULT false,
	"password" varchar NOT NULL,
	"refresh_token_list" jsonb[] DEFAULT '{}',
	"max_concurrent_tokens" integer DEFAULT 10,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
