export default {
    "$id": "http://example.com/example.json",
    "type": "object",
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "users": {
        "$id": "/properties/users",
        "type": "array",
        "items": {
          "$id": "/properties/users/items",
          "type": "object",
          "properties": {
            "id": {
              "$id": "/properties/users/items/properties/id",
              "type": "integer",
              "title": "The Id Schema ",
              "default": 0,
              "examples": [
                1
              ]
            },
            "name": {
              "$id": "/properties/users/items/properties/name",
              "type": "string",
              "title": "The Name Schema ",
              "default": "",
              "examples": [
                "Leanne Graham"
              ]
            },
            "username": {
              "$id": "/properties/users/items/properties/username",
              "type": "string",
              "title": "The Username Schema ",
              "default": "",
              "examples": [
                "Bret"
              ]
            },
            "email": {
              "$id": "/properties/users/items/properties/email",
              "type": "string",
              "title": "The Email Schema ",
              "default": "",
              "examples": [
                "Sincere@april.biz"
              ]
            },
            "address": {
              "$id": "/properties/users/items/properties/address",
              "type": "object",
              "required": true,
              "properties": {
                "street": {
                  "$id": "/properties/users/items/properties/address/properties/street",
                  "type": "string",
                  "title": "The Street Schema ",
                  "default": "",
                  "examples": [
                    "Kulas Light"
                  ]
                },
                "suite": {
                  "$id": "/properties/users/items/properties/address/properties/suite",
                  "type": "string",
                  "title": "The Suite Schema ",
                  "default": "",
                  "examples": [
                    "Apt. 556"
                  ]
                },
                "city": {
                  "$id": "/properties/users/items/properties/address/properties/city",
                  "type": "string",
                  "title": "The City Schema ",
                  "default": "",
                  "examples": [
                    "Gwenborough"
                  ]
                },
                "zipcode": {
                  "$id": "/properties/users/items/properties/address/properties/zipcode",
                  "type": "string",
                  "title": "The Zipcode Schema ",
                  "default": "",
                  "examples": [
                    "92998-3874"
                  ]
                },
                "geo": {
                  "$id": "/properties/users/items/properties/address/properties/geo",
                  "type": "object",
                  "properties": {
                    "lat": {
                      "$id": "/properties/users/items/properties/address/properties/geo/properties/lat",
                      "type": "string",
                      "title": "The Lat Schema ",
                      "default": "",
                      "examples": [
                        "-37.3159"
                      ]
                    },
                    "lng": {
                      "$id": "/properties/users/items/properties/address/properties/geo/properties/lng",
                      "type": "string",
                      "title": "The Lng Schema ",
                      "default": "",
                      "examples": [
                        "81.1496"
                      ]
                    }
                  }
                }
              }
            },
            "phone": {
              "$id": "/properties/users/items/properties/phone",
              "type": "string",
              "title": "The Phone Schema ",
              "default": "",
              "examples": [
                "1-770-736-8031 x56442"
              ]
            },
            "website": {
              "$id": "/properties/users/items/properties/website",
              "type": "string",
              "title": "The Website Schema ",
              "default": "",
              "examples": [
                "hildegard.org"
              ]
            },
            "company": {
              "$id": "/properties/users/items/properties/company",
              "type": "object",
              "properties": {
                "name": {
                  "$id": "/properties/users/items/properties/company/properties/name",
                  "type": "string",
                  "title": "The Name Schema ",
                  "default": "",
                  "examples": [
                    "Romaguera-Crona"
                  ]
                },
                "catchPhrase": {
                  "$id": "/properties/users/items/properties/company/properties/catchPhrase",
                  "type": "string",
                  "title": "The Catchphrase Schema ",
                  "default": "",
                  "examples": [
                    "Multi-layered client-server neural-net"
                  ]
                },
                "bs": {
                  "$id": "/properties/users/items/properties/company/properties/bs",
                  "type": "string",
                  "title": "The Bs Schema ",
                  "default": "",
                  "examples": [
                    "harness real-time e-markets"
                  ]
                }
              }
            }
          },
          "required": ["address"]
        }
      }
    }
  }
  