// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {MongoClient} from 'mongodb'


type Data = {
  message:string
};

const user = "HadesGod4"
const pass = "HadesGod4"
const dbname = "nextjs_learn"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body as {
      name: string;
      email: string;
      message: string;
    };

    if (
        !email || 
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message ||
        message.trim() === ""
    ) {
        res.status(422).json({message: "Invalid input"})
    }
    const newMessage = {
        name,
        email,
        message,
        id:""
    }

    let client: MongoClient;

    try {
        client = await MongoClient.connect(`mongodb+srv://${user}:${pass}@hdgcluster.xmgsx.mongodb.net/${dbname}?retryWrites=true&w=majority`)
        const db = client.db(dbname)
        const collection = db.collection("messages")
        const result = await collection.insertOne(newMessage)
        newMessage.id = result.insertedId.toString()
    } catch (error) {
        client!.close()
        res.status(500).json({message: "Could not connect to database"})
    } finally {
        client!.close()
    }

    


    res.status(201).json({message: "message stored into database successfully"})
    return
  }

//   res.status(200).json({message: "abc"});
}
