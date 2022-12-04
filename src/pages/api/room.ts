import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/prismadb";

export default async function room(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { channelId, userCount, isClosed, members } = req.body;

    if (members) {
      const arr = Object.keys(members);
      console.log("Members: ", arr);
    }

    // Update isFull to close the room
    if (userCount === 2) {
      await db.rooms.update({
        data: {
          isFull: true,
        },
        where: {
          pusherId: channelId,
        },
      });
    }

    // Delete the room when someone disconnects
    if (isClosed) {
      await db.rooms.delete({
        where: {
          pusherId: channelId,
        },
      });
    }

    res.json({ everything: "OK" });
  } catch (error) {
    console.error("api/room error", error);
    res.status(500);
  }
}
