-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/RRnvdy
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "ca_wildfire" (
    "ID" int   NOT NULL,
    "incident_name" varchar   NOT NULL,
    "county" varchar   NOT NULL,
    "location" varchar   NOT NULL,
    "longitude" float64   NOT NULL,
    "latitude" float64   NOT NULL,
    "acres_burned" float64   NOT NULL,
    "start_date" date   NOT NULL,
    "extinquished_date" date   NOT NULL,
    "days_duration" int   NOT NULL,
    "month_year" date   NOT NULL,
    CONSTRAINT "pk_ca_wildfire" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "ca_drought" (
    "ID" int   NOT NULL,
    "none_avg_pct" float64   NOT NULL,
    "D0_avg_pct" float64   NOT NULL,
    "D1_avg_pct" float64   NOT NULL,
    "D2_avg_pct" float64   NOT NULL,
    "D3_avg_pct" float64   NOT NULL,
    "D4_avg_pct" float64   NOT NULL,
    "total_acres_burned" int   NOT NULL
);

