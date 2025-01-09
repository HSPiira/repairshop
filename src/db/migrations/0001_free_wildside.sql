ALTER TABLE "customers" ADD COLUMN "address1" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "address2" varchar;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "city" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "state" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "zip" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "notes" varchar;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "address";--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "status";--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "priority";