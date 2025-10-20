import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const research = [
  {
    href: "https://www.ijshre.org/papers/2023/agri-rover-archeet-shah",
    title: "Autonomous Agricultural Rover",
    description:
      "A solar-powered, self-navigating rover designed to automate planting and irrigation for small farms. Published in IJSHRE for sustainability innovation.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Embedded Systems", "Arduino", "IoT", "Sensors", "Control Systems", "Sustainability"],
    slug: "agri-rover",
    content: (
      <div>
        <p>
          The Autonomous Agricultural Rover represents a sustainable approach to farm automation, specifically designed for small-scale agricultural operations. Powered entirely by solar energy, this self-navigating robot autonomously handles planting and irrigation tasks, reducing manual labor while promoting environmental sustainability.
        </p>
        <p>
          This project has been recognized for its innovation in sustainable agriculture, with research findings published in the International Journal of Science and Healthcare Research (IJSHRE). The rover combines GPS navigation, soil sensors, and intelligent path planning to optimize agricultural operations while minimizing environmental impact through renewable energy usage.
        </p>
      </div>
    ),
  },
];