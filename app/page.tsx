import { Button } from "@/components/ui/button";
import { Book, Github, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-full bg-gray-500 h-screen overflow-hidden flex justify-center items-center p-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1726931467680-713bb3f432f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <main>
        {/* <div className="flex justify-end container p-5 md:max-w-[70vw]">
          <Button className="bg-white text-black hover:text-white">
            Visit Now
          </Button>
        </div> */}

        <div className="flex items-center min-h-[60vh] flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Image
                src={"/images/profile.png"}
                width={300}
                height={300}
                alt="profile"
                className="rounded-full md:w-[15vw] w-[60vw]"
              />
            </div>
            <div
              className="flex flex-col text-white
            "
            >
              <span className="text-center mt-5 text-xl font-semibold leading-relaxed">
                Siddhartha Singh
              </span>
              {/* <span className="leading-relaxed">
                Next.js Enthusiast and Innovation Sorcerer
              </span> */}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-white leading-relaxed font-semibold text-center">
              Connect with me: Follow me on all platforms
            </span>
            <div className="flex flex-col justify-center items-center gap-3 mt-4 w-full">
              <span className="w-full">
                <Link
                  href={"https://linkedin.com/in/siddhartha-singh-work"}
                  target="_blank"
                >
                  {" "}
                  <Button className="w-full bg-white text-black hover:text-white flex gap-2 items-center">
                    <LinkedinIcon />
                    LinkedIn
                  </Button>
                </Link>
              </span>
              <span className="w-full">
                <Link
                  href={"https://siddharthasingh.me"}
                  target="_blank"
                >
                  <Button className="w-full bg-white text-black hover:text-white flex gap-2 items-center">
                    <Book />
                    Portfolio
                  </Button>
                </Link>
              </span>

              <span className="w-full">
                <Link
                  href={"https://github.com/siddhartha-up80"}
                  target="_blank"
                >
                  {" "}
                  <Button className="w-full bg-white text-black hover:text-white flex gap-2 items-center">
                    <Github />
                    GitHub
                  </Button>
                </Link>
              </span>
              <span className="w-full">
                <Link
                  href={"https://twitter.com/siddhartha_up80"}
                  target="_blank"
                >
                  {" "}
                  <Button className="w-full bg-white text-black hover:text-white flex gap-2 items-center">
                    <Twitter />
                    Twitter
                  </Button>
                </Link>
              </span>
              <span className="w-full">
                <Link href={"https://instagram.com/sid_up80"} target="_blank">
                  {" "}
                  <Button className="w-full bg-white text-black hover:text-white flex gap-2 items-center">
                    <Instagram />
                    Instagram
                  </Button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
