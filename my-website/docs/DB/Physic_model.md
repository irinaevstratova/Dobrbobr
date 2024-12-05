---
title: Физическая модель БД
sidebar_position: 1
---

# Физическая модель данных

Представлена Физическая модель:

``` plantuml
@startuml

entity "organization" {
* organization_id : INT <<PK>> <<NOT NULL>>
* name : VARCHAR(255) <<NOT NULL>>
* description : VARCHAR(2500)
* website : VARCHAR(255)
* email : VARCHAR(255) <<NOT NULL>>
* phone_number : VARCHAR(10) <<NOT NULL>>
}

entity "volunteer" {
* volunteer_id : INT <<PK>> <<NOT NULL>>
* last_name : VARCHAR(255) <<NOT NULL>>
* first_name : VARCHAR(255) <<NOT NULL>>
* middle_name : VARCHAR(255)
* email : VARCHAR(255)
* phone_number : VARCHAR(10) <<NOT NULL>>
}

entity "application" {
* application_id : INT <<PK>> <<NOT NULL>>
* title : VARCHAR(255) <<NOT NULL>>
* organization_id : INT <<FK>> <<NOT NULL>>
* responsibilities : VARCHAR(2500)
* start_datetime : DATETIME <<NOT NULL>>
* end_datetime : DATETIME <<NOT NULL>>
* max_volunteers : INT <<NOT NULL>>
* application_status_id : INT <<FK>> <<NOT NULL>>
* current_volunteer_count : INT
}

entity "application_status" {
* application_status_id : INT <<PK>> <<NOT NULL>>
* name : VARCHAR(100) <<NOT NULL>>
}

entity "activities" {
* activitiy_id : INT <<PK>> <<NOT NULL>>
* name : VARCHAR(100) <<NOT NULL>>
}

entity "activity_users" {
* id : INT <<PK>> <<NOT NULL>>
* object_type : VARCHAR(20) <<NOT NULL>>
* object_id : INT <<FK>><<NOT NULL>>
* activitiy_id : INT <<FK>>
}

entity "address_users" {
* id : INT <<PK>> <<NOT NULL>>
* object_type : VARCHAR(20) <<NOT NULL>>
* object_id : INT <<FK>> <<NOT NULL>>
* address : VARCHAR(255) <<NOT NULL>>
}

entity "volunteer_time_slots" {
* id : INT <<PK>> <<NOT NULL>>
* volunteer_id : INT <<FK>> <<NOT NULL>>
* start_time : TIME <<NOT NULL>>
* end_time : TIME <<NOT NULL>>
* weekday : VARCHAR(100) <<NOT NULL>>
}

entity "application_volunteers" {
* app_vol_id : INT <<PK>> <<NOT NULL>>
* application_id : INT <<FK>> <<NOT NULL>>
* volunteer_id : INT <<FK>> <<NOT NULL>>
* volunteer_status_id : INT <<NOT NULL>>
* attendance : INT
}

entity "volunteer_status" {
* volunteer_status_id : INT <<PK>> <<NOT NULL>>
* name : VARCHAR(100) <<NOT NULL>>
}

entity "change_history" {
* id : INT <<PK>> <<NOT NULL>>
* app_vol_id : INT <<FK>> <<NOT NULL>>
* old_status : INT <<FK>> <<NOT NULL>>
* new_status : INT <<FK>> <<NOT NULL>>
* change_time : TIME <<NOT NULL>>
}

' Define relationships between entities

"organization" ||--o{ "application" : "creates"

"volunteer"||--o{ "application_volunteers" : "participates in"

"application" ||--o{ "application_volunteers" : "has"

"volunteer" ||--o{ "volunteer_time_slots" : "has"

"volunteer" ||--o{ "activity_users" : " has"

"organization" ||--o{ "activity_users" : "has"

"activities" ||--o{ "activity_users" : ""

"volunteer" ||--o{ "address_users" : "has"

"organization" ||--o{ "address_users" : "has"

"application" ||--o{ "application_status" : "has"

"application_volunteers" ||--o{ "volunteer_status" : "has"

"application_volunteers" ||--o{ "change_history" : "has"

"change_history" ||--o{ "volunteer_status" : "has"

@enduml

```