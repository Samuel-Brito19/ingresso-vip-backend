CREATE TYPE "public"."userRole" AS ENUM('ADMIN', 'USER');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "userRole" "userRole" DEFAULT 'USER' NOT NULL;