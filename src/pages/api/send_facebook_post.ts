import type { NextApiRequest, NextApiResponse } from "next";
import api from "services/axios";

interface MyRequest extends NextApiRequest {
  body: {
    message: string;
    photo?: string;
  };
}

export default async function handler(req: MyRequest, res: NextApiResponse) {
  console.log(req.body);

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "METHOD NOT ALLOWED!" });
    }

    if (!req.body.message) {
      return res.status(400).json({ error: "A MESSAGE IS REQUIRED!" });
    }

    if (req.body.photo) {
      const result = await api.post(
        `https://graph.facebook.com/v15.0/${
          process.env.NEXT_PUBLIC_FACEBOOK_API
        }/photos/?message=${encodeURIComponent(req.body.message)}&url=${
          req.body.photo
        }&access_token=${process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN}`,
      );
      if (result.data?.data?.id) {
        return res.status(500).json({ error: "ERROR POSTING TO FACEBOOK!" });
      }
      return res.status(200);
    }

    const result = await api.post(
      `https://graph.facebook.com/v15.0/${
        process.env.NEXT_PUBLIC_FACEBOOK_API
      }/feed/?message=${encodeURIComponent(req.body.message)}&access_token=${
        process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN
      }`,
    );
    if (result.data?.data?.id) {
      return res.status(500).json({ error: "ERROR POSTING TO FACEBOOK!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }

  return res.status(200);
}
