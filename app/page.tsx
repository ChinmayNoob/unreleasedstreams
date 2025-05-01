import KanyeWest from "@/components/artists/kanye-west";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { TextScramble } from "@/components/ui/text-scramble";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="font-courier w-full md:w-1/2">
          <TextScramble className="text-2xl font-bold mb-4">Welcome to unreleased streams</TextScramble>
          <p className="mb-6">
            Explore unreleased songs and albums from top Hip Hop artists like Kanye West, Frank Ocean, Tyler, The Creator, Kendrick Lamar, Drake, and Playboi Carti. All links lead to <strong>[untitled]</strong> — a fan-made, decentralized platform archiving unreleased creator&apos;s projects.
          </p>
        </div>
        <Separator className="bg-black h-2"/>
        <KanyeWest/>
      </div>
    </main>
  );
}