#!/usr/bin/env bash
use jssparkui-dev
db.createUser({
  user: "js-spark",
  pwd: "js-spark1",
  roles: [
    { role: "readWrite", db: "jssparkui-dev" }
  ]
})
