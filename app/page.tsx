import { FloatingNav } from "@/components/ui/floating-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Cases } from "@/components/sections/cases";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconBulb,
  IconCode,
  IconSchool,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  {
    name: "Главная",
    link: "#top",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Обо мне",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Опыт",
    link: "#experience",
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Кейсы",
    link: "#cases",
    icon: <IconBulb className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Навыки",
    link: "#skills",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Учёба",
    link: "#education",
    icon: <IconSchool className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
  {
    name: "Контакты",
    link: "#contact",
    icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />,
  },
];

export default function Home() {
  return (
    <main className="relative w-full bg-background">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Experience />
      <Cases />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
