from pymongo import MongoClient
import os


class MongoDB:
    def __init__(self, data):
        self.mongohost = os.environ.get("MONGO_HOST") or "127.0.0.1"
        self.mongourl = "mongodb://" + self.mongohost + ":27017/"
        self.client = MongoClient(self.mongourl)

        database = "myDB"
        collection = "notes"
        cursor = self.client[database]
        self.collection = cursor[collection]
        self.data = data

    def get(self):
        documents = self.collection.find()
        output = [
            {item: data[item] for item in data if item != "_id"} for data in documents
        ]
        return output

    def post(self, data):
        new_document = data["Document"]
        response = self.collection.insert_one(new_document)
        output = {
            "Status": "Note added!",
            "Document_ID": str(response.inserted_id),
        }
        return output
