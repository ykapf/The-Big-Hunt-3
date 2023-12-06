// app/api/createRoom/route.ts
import { prisma } from "../../../lib/prismaClient";

export async function POST(request: any) {
  const { roomName } = await request.json();

  // Check if the room already exists
  const existingRoom = await prisma.room.findUnique({
    where: { name: roomName },
  });

  if (existingRoom) {
    return new Response(JSON.stringify({ message: "Room already exists" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Generate a unique room key
  const roomKey = Math.random().toString(36).substr(2, 9);

  // Create a new room
  const room = await prisma.room.create({
    data: {
      name: roomName,
      key: roomKey,
    },
  });

  return new Response(JSON.stringify(room), { status: 200 });
}
