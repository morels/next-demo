import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type Error = {
  text: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
  if (req.method === "GET") {
    res.status(200).json({ name: "Jhon Doe" });
  } else {
    res.status(400).json({ text: "Error. Unsupported method." });
  }
};
