"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RoomPage() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const roomName = pathSegments[pathSegments.length - 1];
  const [roomExists, setRoomExists] = useState(false);

  useEffect(() => {
    if (roomName) {
      fetch(`/api/checkRoom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomName }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.exists) {
            setRoomExists(true);
          }
        })
        .catch((error) => {
          console.error("Error checking room:", error);
        });
    }
  }, [roomName]);

  if (!roomName) {
    return <p>Room name not provided or loading...</p>;
  }

  if (!roomExists) {
    return <p>Room does not exist.</p>;
  }

  return (
    <div>
      <h1>Room: {roomName}</h1>
      {/* Display the room's content here */}
    </div>
  );
}
