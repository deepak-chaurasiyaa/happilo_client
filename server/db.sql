-- Adminer 4.8.1 PostgreSQL 15.0 dump

DROP TABLE IF EXISTS "tbl_admin";
DROP SEQUENCE IF EXISTS tbl_admin_id_seq;
CREATE SEQUENCE tbl_admin_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_admin" (
    "id" integer DEFAULT nextval('tbl_admin_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "email" character varying(255) NOT NULL,
    "password" character varying(555) NOT NULL,
    "status" integer DEFAULT '0' NOT NULL,
    CONSTRAINT "tbl_admin_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_collection";
DROP SEQUENCE IF EXISTS tbl_collection_id_seq;
CREATE SEQUENCE tbl_collection_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_collection" (
    "id" integer DEFAULT nextval('tbl_collection_id_seq') NOT NULL,
    "product_id" integer NOT NULL,
    "collection_name" character varying(500),
    "sub_collection_name" character varying(500),
    "date_added" timestamp,
    "date_updated" timestamp,
    CONSTRAINT "tbl_collection_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_collection"."id" IS 'collection id';


DROP TABLE IF EXISTS "tbl_customer";
DROP SEQUENCE IF EXISTS tbl_customer_id_seq;
CREATE SEQUENCE tbl_customer_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer" (
    "id" integer DEFAULT nextval('tbl_customer_id_seq') NOT NULL,
    "first_name" character varying(255) NOT NULL,
    "email" character varying NOT NULL,
    "middle_name" character varying,
    "last_name" character varying NOT NULL,
    "password" character varying,
    "status" smallint DEFAULT '0',
    "phone_number" character varying,
    CONSTRAINT "tbl_customer_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_customer"."status" IS '1active, 0 inactive,2 banned, 3 blocked, 5. activation_pending';


DROP TABLE IF EXISTS "tbl_customer_address";
DROP SEQUENCE IF EXISTS tbl_customer_address_id_seq;
CREATE SEQUENCE tbl_customer_address_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer_address" (
    "id" integer DEFAULT nextval('tbl_customer_address_id_seq') NOT NULL,
    "customer_id" integer NOT NULL,
    "address" text NOT NULL,
    "street" text NOT NULL,
    "pincode" character varying NOT NULL,
    "state" character varying NOT NULL,
    "city" character varying NOT NULL,
    "status" integer NOT NULL,
    CONSTRAINT "tbl_customer_address_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_customer_cart";
DROP SEQUENCE IF EXISTS tbl_customer_cart_id_seq;
CREATE SEQUENCE tbl_customer_cart_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer_cart" (
    "id" integer DEFAULT nextval('tbl_customer_cart_id_seq') NOT NULL,
    "product_id" integer NOT NULL,
    "customer_id" integer NOT NULL,
    CONSTRAINT "tbl_customer_cart_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_customer_order_status";
DROP SEQUENCE IF EXISTS tbl_customer_order_status_id_seq;
CREATE SEQUENCE tbl_customer_order_status_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer_order_status" (
    "id" integer DEFAULT nextval('tbl_customer_order_status_id_seq') NOT NULL,
    "order_id" integer NOT NULL,
    "order_status" integer NOT NULL,
    "date_added" integer NOT NULL,
    CONSTRAINT "tbl_customer_order_status_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_customer_order_status"."order_status" IS '// 1. Delivered 2. Returned 3. Cancelled 4. Exchange 5. Shipping 6. In-transit 7. Order Placed 8. Order Failed';


DROP TABLE IF EXISTS "tbl_customer_orders";
DROP SEQUENCE IF EXISTS tbl_customer_orders_id_seq;
CREATE SEQUENCE tbl_customer_orders_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer_orders" (
    "id" integer DEFAULT nextval('tbl_customer_orders_id_seq') NOT NULL,
    "product_id" smallint NOT NULL,
    "customer_id" integer NOT NULL,
    "price" integer NOT NULL,
    "currency" integer NOT NULL,
    "payment_method" character varying(500) NOT NULL,
    "payment_status" smallint NOT NULL,
    "address" text NOT NULL,
    "rating" integer,
    "date_added" timestamp NOT NULL,
    CONSTRAINT "tbl_customer_orders_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_customer_wishlist";
DROP SEQUENCE IF EXISTS tbl_customer_wishlist_id_seq;
CREATE SEQUENCE tbl_customer_wishlist_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_customer_wishlist" (
    "id" integer DEFAULT nextval('tbl_customer_wishlist_id_seq') NOT NULL,
    "customer_id" integer NOT NULL,
    "product_id" integer NOT NULL,
    CONSTRAINT "tbl_customer_wishlist_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_product_images";
DROP SEQUENCE IF EXISTS tbl_product_images_id_seq;
CREATE SEQUENCE tbl_product_images_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_product_images" (
    "id" integer DEFAULT nextval('tbl_product_images_id_seq') NOT NULL,
    "product_id" integer NOT NULL,
    "name" character varying(999),
    "original_name" integer NOT NULL,
    "status" smallint DEFAULT '0' NOT NULL,
    "date_added" timestamp NOT NULL,
    "date_updated" timestamp NOT NULL,
    CONSTRAINT "tbl_product_images_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_quantity";
DROP SEQUENCE IF EXISTS tbl_quantity_id_seq;
CREATE SEQUENCE tbl_quantity_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_quantity" (
    "id" integer DEFAULT nextval('tbl_quantity_id_seq') NOT NULL,
    "product_id" integer NOT NULL,
    "quantity" integer NOT NULL,
    "unit" character varying(255),
    "date_added" timestamp,
    "date_updated" timestamp,
    CONSTRAINT "tbl_quantity_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_quantity"."id" IS 'quantity id';


DROP TABLE IF EXISTS "tbl_reasons_to_buy";
DROP SEQUENCE IF EXISTS tbl_reasons_to_buy_id_seq;
CREATE SEQUENCE tbl_reasons_to_buy_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_reasons_to_buy" (
    "id" integer DEFAULT nextval('tbl_reasons_to_buy_id_seq') NOT NULL,
    "product_id" integer NOT NULL,
    "title" character varying(1000),
    "reason" text,
    "date_added" timestamp,
    "date_updated" timestamp,
    CONSTRAINT "tbl_reasons_to_buy_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_user_login_logs";
DROP SEQUENCE IF EXISTS tbl_user_login_logs_id_seq;
CREATE SEQUENCE tbl_user_login_logs_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_user_login_logs" (
    "id" integer DEFAULT nextval('tbl_user_login_logs_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "user_type" integer NOT NULL,
    "login_date" integer NOT NULL,
    "login_token" integer NOT NULL,
    "refresh_token" integer NOT NULL,
    "result" integer NOT NULL,
    CONSTRAINT "tbl_user_login_logs_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_user_login_logs"."user_type" IS ' // 1. Admin, 2. Customer, 3. Vendor, ';

COMMENT ON COLUMN "public"."tbl_user_login_logs"."result" IS '// login_success, login_failed';


DROP TABLE IF EXISTS "tbl_vendor";
DROP SEQUENCE IF EXISTS tbl_vendor_id_seq;
CREATE SEQUENCE tbl_vendor_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tbl_vendor" (
    "id" integer DEFAULT nextval('tbl_vendor_id_seq') NOT NULL,
    "first_name" character varying NOT NULL,
    "middle_name" character varying,
    "last_name" character varying NOT NULL,
    "age" character varying NOT NULL,
    "phone" integer NOT NULL,
    "email" character varying NOT NULL,
    "address" text NOT NULL,
    "pincode" integer NOT NULL,
    "locality" character varying,
    CONSTRAINT "tbl_vendor_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "tbl_vendor_products";
DROP SEQUENCE IF EXISTS "tbl_vendor_products ---_id_seq";
CREATE SEQUENCE "tbl_vendor_products ---_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."tbl_vendor_products" (
    "id" integer DEFAULT nextval('"tbl_vendor_products ---_id_seq"') NOT NULL,
    "product_id" integer NOT NULL,
    "product_title" character varying(999),
    "avilability" character varying(999) NOT NULL,
    "short_discription" text NOT NULL,
    "long_description" text NOT NULL,
    "product_selling_price" integer NOT NULL,
    "product_discounted_price" integer NOT NULL,
    "currency" character varying(255) NOT NULL,
    "status" integer NOT NULL,
    CONSTRAINT "tbl_vendor_products ---_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON COLUMN "public"."tbl_vendor_products"."status" IS 'pending_approval, approved, rejected, justification_needed';


-- 2023-06-26 16:39:48.908912+05:30