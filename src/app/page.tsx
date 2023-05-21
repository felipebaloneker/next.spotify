import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10"> Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/album.jpeg"
                alt="Capa album Wasting light"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/album.jpeg"
                alt="Capa album Wasting light"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/album.jpeg"
                alt="Capa album Wasting light"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/album.jpeg"
                alt="Capa album Wasting light"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">
            {" "}
            Made for Felipe Baloneker
          </h1>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/18">
              <Image
                src="/album.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
