import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Research } from "@/components/Research";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Archeet Shah",
  description:
    "Research projects and publications in robotics, AI, and sustainable technology.",
};

export default function ResearchPage() {
  return (
    <Container>
      <span className="text-4xl">🔬</span>
      <Heading className="font-black mb-10">
        Research & Publications
      </Heading>

      <Research />
    </Container>
  );
}