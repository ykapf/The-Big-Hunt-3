import Image from "next/image";
import RoomCreationForm from "src/app/components/RoomCreationForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">The Big Hunt 3.0</div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <RoomCreationForm />
      </div>
    </main>
  );
}
