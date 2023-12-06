// app/api/checkRoom/route.ts
import { prisma } from "../../../lib/prismaClient";

export async function POST(request: any) {
  const { roomName } = await request.json();

  // Check if the room exists
  const existingRoom = await prisma.room.findUnique({
    where: { name: roomName },
  });

  if (existingRoom) {
    return new Response(JSON.stringify({ exists: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ exists: false }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
