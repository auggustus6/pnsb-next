import type { NextApiRequest, NextApiResponse } from "next";
import api from "services/axios";

// interface MyRequest extends NextApiRequest {
//   body: {
//     message: string;
//     photo?: string;
//   };
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);

  try {
    if (
      req.headers["authorization"] !==
      process.env.NEXT_PUBLIC_POST_WEBHOOK_TOKEN
    ) {
      return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const { Titulo, Imagem, Slug } = req.body.entry;

    console.log(Titulo, Imagem);

    console.log("1");

    if (req.method !== "POST") {
      return res.status(405).json({ error: "METHOD NOT ALLOWED!" });
    }

    if (!Titulo) {
      return res.status(400).json({ error: "A MESSAGE IS REQUIRED!" });
    }

    console.log("2");

    if (Imagem) {
      console.log("3");

      const result = await api.post(
        `https://graph.facebook.com/v15.0/${
          process.env.NEXT_PUBLIC_FACEBOOK_API
        }/photos/?message=${encodeURIComponent(Titulo)} 
        %0A%0Ahttps://pnsb-next-qyl8pbs98-auggustus6.vercel.app/noticias/${Slug}
        &url=${
          Imagem.url
        }
        &access_token=${process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN}`,
      );

      console.log(result);
      if (result.data?.data?.id) {
        return res.status(500).json({ error: "ERROR POSTING TO FACEBOOK!" });
      }
      return res.status(200).send("");
    }

    console.log("4");

    const result = await api.post(
      `https://graph.facebook.com/v15.0/${
        process.env.NEXT_PUBLIC_FACEBOOK_API
      }/feed/?message=${encodeURIComponent(Titulo)}&access_token=${
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
