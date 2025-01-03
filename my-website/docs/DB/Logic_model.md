---
title: Логическая модель БД
sidebar_position: 1
---

# Логическая модель данных

Представлена логическая модель:

``` plantuml
@startuml

@startuml

entity "Организация" {
- id_организации <<PK>>
- название
- описание
- вебсайт
- электронная_почта
- телефон
- аватар
}

entity "Волонтер" {
- id_волонтера <<PK>>
- фамилия
- имя
- отчество
- электронная_почта
- телефон
- аватар
}

entity "Заявка" {
- id_заявки <<PK>>
- название
- id_организации <<FK>>
- функционал
- дата_начала
- дата_окончания
- макс_количество_волонтеров
- id_статуса_заявки <<FK>>
- текущее_количество_волонтеров
}

entity "Статус заявки" {
- id_статуса_заявки <<PK>>
- название
}

entity "Активности" {
- id_активности <<PK>>
- название
}

entity "Активность-Волонтер" {
- id <<PK>>
- id_волонтера <<FK>>
- id_активности <<FK>>
}

entity "Активность-Организация" {
- id <<PK>>
- id_организации <<FK>>
- id_активности <<FK>>
}

entity "Адрес-Волонтер" {
- id <<PK>>
- id_волонтера <<FK>>
- адрес
}

entity "Адрес-Организация" {
- id <<PK>>
- id_организации <<FK>>
- адрес
}

entity "Свободные слоты волонтера" {
- id <<PK>>
- id_волонтера <<FK>>
- время_начала
- время_окончания
- день_недели
}

entity "Волонтеры по заявкам" {
- id_участия <<PK>>
- id_заявки <<FK>>
- id_волонтера <<FK>>
- id_статуса_волонтера
- посещаемость
}

entity "Статус волонтера" {
- id_статуса_волонтера <<PK>>
- название
}

entity "История изменений" {
- id <<PK>>
- id_участия <<FK>>
- старый_статус <<FK>>
- новый_статус <<FK>>
- время_изменения
}

' Определяем связи между сущностями

"Организация" --o{ "Заявка" : "создает"

"Волонтер" --o{ "Волонтеры по заявкам" : "участвует в"

"Заявка" --o{ "Волонтеры по заявкам" : "имеет"

"Волонтер" --o{ "Время волонтера" : "имеет"

"Волонтер" --o{ "Активность-Волонтер" : "имеет"

"Организация" --o{ "Активность-Организация" : "имеет"

"Активности" --o{ "Активность-Организация" : ""

"Активности" --o{ "Активность-Волонтер" : ""

"Волонтер" --o{ "Адрес-Волонтер" : "имеет"

"Организация" --o{ "Адрес-Организация" : "имеет"

"Заявка" --o{ "Статус заявки" : "имеет"

"Волонтеры по заявкам" --o{ "Статус волонтера" : "имеет"

"Волонтеры по заявкам" --o{ "История изменений" : "имеет"

"История изменений" --o{ "Статус волонтера" : "имеет"

@enduml



```