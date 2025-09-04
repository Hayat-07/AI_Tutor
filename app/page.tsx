import { Button } from "@/components/ui/button";
import Image from "next/image";
import SpeachAnimation from "@/components/ui/SpeachAnimation"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] bg-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-600">
          This is a simple starter template using Next.js with Tailwind CSS.
        </p>
      </div>
      <SpeachAnimation></SpeachAnimation>
      <Button className=" bg-blue-200 text-gray-950 ">SADCN BTN</Button>


    </div>
  );
}
