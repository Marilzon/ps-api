- The "entities" folder usually contains the classes or interfaces that represent the system's business objects, that is, the domain entities. These entities usually have attributes and behaviors that reflect the application's business rules.

- The "factories" folder contains the classes responsible for creating instances of complex objects, such as those that require the initialization of several other objects.

- The "repositories" folder contains the classes responsible for persisting entity data in some data source, such as a relational database. They provide methods for saving, searching, deleting, and updating this information.

- The "services" folder contains the classes that implement the application's specific business logic. For example, they can be responsible for data validation, calculations, and other operations that affect the state of the system.