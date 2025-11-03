ALTER TABLE "updates" ALTER COLUMN "color" SET DEFAULT 'from-blue-500 to-cyan-500';--> statement-breakpoint
ALTER TABLE "updates" ADD COLUMN "slug" varchar(300) NOT NULL;--> statement-breakpoint
ALTER TABLE "updates" ADD COLUMN "published" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "updates" ADD CONSTRAINT "updates_slug_unique" UNIQUE("slug");