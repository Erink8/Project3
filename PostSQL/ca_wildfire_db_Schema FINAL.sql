---- SCHEMA: california_fire_data

DROP SCHEMA IF EXISTS california_fire_data ;

CREATE SCHEMA IF NOT EXISTS california_fire_data
    AUTHORIZATION climate_change_user;
-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

DROP TABLE IF EXISTS ca_wildfire;
DROP TABLE IF EXISTS ca_drought;

CREATE TABLE "ca_wildfire" (
    "ID" int   NOT NULL,
    "incident_name" varchar   NOT NULL,
    "county" varchar   NOT NULL,
    "location" varchar   NOT NULL,
    "longitude" decimal   NOT NULL,
    "latitude" decimal   NOT NULL,
    "acres_burned" decimal   NOT NULL,
    "start_date" date   NOT NULL,
    "extinquished_date" date   NOT NULL,
    "days_duration" int   NOT NULL,
    "month_year" varchar   NOT NULL,
    CONSTRAINT "pk_ca_wildfire" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "ca_drought" (
    "drought_id" int   NOT NULL,
    "none_avg_pct" double precision ,
    "D0_avg_pct" double precision  ,
    "D1_avg_pct" double precision  ,
    "D2_avg_pct" double precision  ,
    "D3_avg_pct" double precision  ,
    "D4_avg_pct" double precision  ,
    "total_acres_burned" double precision ,
    "month_year" varchar
    CONSTRAINT "pk_ca_drought" PRIMARY KEY (
        "drought_id"
     )
);

