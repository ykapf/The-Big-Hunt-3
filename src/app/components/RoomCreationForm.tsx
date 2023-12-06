"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

export default function RoomCreationForm() {
  const [roomName, setRoomName] = useState("");
  const router = useRouter(); // Use the useRouter hook

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch("/api/createRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomName }),
    });

    if (response.ok) {
      const data = await response.json();
      // Use router.push to navigate
      router.push(`/rooms/${encodeURIComponent(data.name)}`);
    } else {
      console.error("Failed to create room");
      const errorData = await response.json();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="text-black" type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="Enter room name" />
      <button className="text-black bg-gray-300" type="submit">
        Create Room
      </button>
    </form>
  );
}
