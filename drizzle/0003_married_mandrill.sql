CREATE TYPE "public"."eventStatus" AS ENUM('AVAILABLE', 'UNAVAILABLE');--> statement-breakpoint
CREATE TYPE "public"."paymentStatus" AS ENUM('SUCCESS', 'ERROR', 'REVERSAL');--> statement-breakpoint
CREATE TABLE "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"start_date" timestamp,
	"end_date" timestamp,
	"eventStatus" "eventStatus",
	"total_capacity" integer NOT NULL,
	"local_id" integer,
	"category_id" integer
);
--> statement-breakpoint
CREATE TABLE "local" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"city" text NOT NULL,
	"street" text NOT NULL,
	"neighborhood" text NOT NULL,
	"number" text NOT NULL,
	"event_id" integer
);
--> statement-breakpoint
CREATE TABLE "purchase" (
	"id" serial NOT NULL,
	"purchase_date" timestamp DEFAULT now(),
	"price" integer NOT NULL,
	"status" text,
	"payment_method" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tickets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"creation_date" timestamp DEFAULT now(),
	"qtd" integer NOT NULL,
	"event_id" integer
);
--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "event_local_id_local_id_fk" FOREIGN KEY ("local_id") REFERENCES "public"."local"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "event_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "local" ADD CONSTRAINT "local_event_id_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."event"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."event"("id") ON DELETE no action ON UPDATE no action;