﻿-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/RRnvdy
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "ca_wildfire" (
    "incident_name" varchar   NOT NULL,
    "county" varchar   NOT NULL,
    "location" varchar   NOT NULL,
    "longitude" float   NOT NULL,
    "latitude" float   NOT NULL,
    "acres_burned" float   NOT NULL,
    "start_date" date   NOT NULL,
    "extinquished_date" date   NOT NULL,
    "days_duration" int   NOT NULL
);
