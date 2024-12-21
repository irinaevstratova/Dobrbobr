---
title: Элементы диаграммы C4
sidebar_position: 1
---



# Диаграмма контейнеров
``` plantuml
@startuml
!define C4_COMPONENT
!includeurl https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

' Legend for the diagram

LAYOUT_TOP_DOWN()

' Actors

Person(volunteer, "Волонтер", "Ищет заявки, чтобы участвовать в волонтерской деятельности.")

Person(fund, "Фонд", "Создает заявки для волонтеров, управляет ими.")

Person(moderator, "Модератор", "Может вносить, изменять и удалять данные о заявках.")

' System boundary

System_Boundary(system, "Система") {

' Components

Component(web_app_volunteers, "Веб-приложение для волонтеров", "React", "Пользовательский интерфейс для волонтеров.")

Component(web_app_funds, "Веб-приложение для фондов", "React", "Пользовательский интерфейс для фондов.")

Component(admin_panel, "Админ-панель", "React", "Интерфейс для модераторов.")

Component(backend, "Бэкенд", "Spring Boot", "Обеспечивает бизнес-логику и доступ к данным.")


ComponentDb(main_database, "База данных", "PostgreSQL", "Хранение данных о волонтерах, фондах и заявках.")
ComponentDb(auth_database, "База данных авторизации", "PostgreSQL", "Хранение логинов и паролей пользователей.")

}

' External service

Component_Ext(queue, "Брокер сообщений", "RabbitMQ", "Обеспечивает асинхронное взаимодействие между компонентами.")

' Relationships between components

Rel(web_app_volunteers, backend, "REST API")

Rel(web_app_funds, backend, "REST API")

Rel(admin_panel, backend, "REST API")

Rel(backend, auth_database, "Проверка прав доступа")

Rel(backend, queue, "Публикация сообщений")

Rel(queue, backend, "Получение сообщений")

' Relationships with actors

Rel(volunteer, web_app_volunteers, "Взаимодействует через браузер")

Rel(fund, web_app_funds, "Взаимодействует через браузер")

Rel(moderator, admin_panel, "Взаимодействует через интерфейс")

Rel(backend, main_database, "Чтение, запись и удаление данных")

@enduml

```


# Диаграмма компонентов

``` plantuml
@startuml
!define C4_COMPONENT
!includeurl https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

' Legend for the diagram

LAYOUT_TOP_DOWN()

' Actors

Person(volunteer, "Волонтер", "Ищет заявки, чтобы участвовать в волонтерской деятельности.")

Person(fund, "Фонд", "Создает заявки для волонтеров, управляет ими.")

Person(moderator, "Модератор", "Может вносить, изменять и удалять данные о заявках.")

' System boundary

System_Boundary(system, "Система") {

' Components

Component(web_app_volunteers, "Веб-приложение для волонтеров", "React", "Пользовательский интерфейс для волонтеров.")

Component(web_app_funds, "Веб-приложение для фондов", "React", "Пользовательский интерфейс для фондов.")

Component(admin_panel, "Админ-панель", "React", "Интерфейс для модераторов.")

Component(service_registration, "Сервис регистрации", "Spring Boot", "Управляет регистрацией новых пользователей.")

Component(service_authentication, "Сервис аутентификации", "Spring Boot", "Обеспечивает проверку логинов и паролей.")

Component(service_authorization, "Сервис авторизации", "Spring Boot", "Обеспечивает проверку прав доступа.")

Component(service_task_management_volunteer, "Сервис отклика на заявки", "Spring Boot", "Обрабатывает отклик на заявки, становление в лист ожидания.")

Component(service_task_management_fund, "Сервис управления заявками", "Spring Boot", "Обрабатывает создание, редактирование, удаление заявок.")

Component(service_notifications, "Сервис уведомлений", "Spring Boot", "Управляет отправкой уведомлений пользователям.")

Component(service_edit_db, "Сервис редактирования БД", "Spring Boot", "Позволяет редактировать БД: настраивать права доступа, удалять фонды.")

ComponentDb(main_database, "База данных", "PostgreSQL", "Хранение данных о волонтерах, фондах и заявках.")
ComponentDb(auth_database, "База данных авторизации", "PostgreSQL", "Хранение логинов и паролей пользователей.")

}

' External service

Component_Ext(queue, "Брокер сообщений", "RabbitMQ", "Обеспечивает асинхронное взаимодействие между компонентами.")

' Relationships between components

Rel(web_app_volunteers, service_registration, "")

Rel(web_app_volunteers, service_authentication,"")

Rel(web_app_volunteers, service_task_management_volunteer, "")

Rel(web_app_volunteers, service_authorization,"")

Rel(web_app_funds, service_authorization, "")

Rel(admin_panel, service_authorization,"")

Rel(admin_panel, service_edit_db,"")

Rel(service_edit_db, main_database,"")

Rel(web_app_funds, service_registration, "")

Rel(web_app_funds, service_authentication, "")

Rel(web_app_funds, service_task_management_fund, "")

Rel(service_registration, auth_database, "Запись новых пользователей")

Rel(service_authentication, auth_database, "Проверка логинов и паролей")

Rel(service_authorization, auth_database, "Проверка прав доступа")

Rel(service_task_management_fund, main_database, "Чтение, запись и удаление данных")

Rel(service_task_management_volunteer, main_database, "Чтение, запись и удаление данных")

Rel(queue, service_notifications, "Получение уведомлений")

Rel(queue, service_task_management_volunteer, "Обработка очередей заявок")

Rel(service_task_management_volunteer, queue,  "Обработка очередей заявок")

Rel(service_notifications,web_app_volunteers, "Рассылка уведомлений")

' Relationships with actors

Rel(volunteer, web_app_volunteers, "Взаимодействует через браузер")

Rel(fund, web_app_funds, "Взаимодействует через браузер")

Rel(moderator, admin_panel, "Взаимодействует через интерфейс")

@enduml


```