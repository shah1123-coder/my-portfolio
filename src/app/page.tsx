import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hi, I&apos;m Archeet</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Computer Engineer at Purdue exploring how intelligence can be built, taught, and scaled — through AI, robotics, and machine learning.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I build systems that learn, adapt, and act — from humanoid agents that walk to AI assistants that automate human workflows.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
