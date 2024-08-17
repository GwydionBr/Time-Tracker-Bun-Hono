CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_name" text NOT NULL,
	"project_description" text,
	"project_salary" numeric(12, 2) NOT NULL
);
