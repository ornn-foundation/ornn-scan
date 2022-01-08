import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Handle any other HTTP method
  if (_req.method === "POST") {
    // Process a POST request
    res.json({ message: "Hello Testing POST Api!" });
  } else if (_req.method === "GET") {
    res.json({ message: "Hello Testing GET Api!" });
  } else {
    res.status(500).send({ error: `failed to method ${_req.method}` });
  }
}
