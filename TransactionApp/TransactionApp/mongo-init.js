
db = db.getSiblingDB("local");
db.createCollection("transaction");

db.transaction.insertOne({ _id: "20d397e5-6121-4421-a7fe-68890cba8e66" });