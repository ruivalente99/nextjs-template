import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '@/components/ui/button';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center sm:text-left">Next.js Template</h1>
        <div className="flex flex-center items-center gap-2 justify-center">
          <RiNextjsFill size={36}/>
          <RiTailwindCssFill size={36} />
          <SiShadcnui size={36} />
          <SiTypescript size={36} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link className={buttonVariants({ variant: "outline" })}
          href="https://github.com/ruivalente99"
        >
          <GitHubLogoIcon className="h-6 w-6" /> /ruivalente99
        </Link>

      </footer>
    </div>
  );
}
