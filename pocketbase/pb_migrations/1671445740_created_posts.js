migrate((db) => {
  const collection = new Collection({
    "id": "uker8pyci6maeqa",
    "created": "2022-12-19 10:29:00.480Z",
    "updated": "2022-12-19 10:29:00.480Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3c1nz6ep",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uker8pyci6maeqa");

  return dao.deleteCollection(collection);
})
