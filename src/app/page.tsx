import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import HeroVideoSection from "./sections/HeroVideoSection";
import AboutUs from "./sections/AboutUs";
import SectionsMap from "./sections/SectionsMap";
import BePart from "./sections/BePart";
import PhotoGallery from "./sections/PhotoGallery";
import Contact from "./sections/Contact/Contact";

export default function Home() {
  return (
    <main className="w-screen min-h-screen overflow-y-visible">
      <Suspense fallback={<Spinner size="lg" color="secondary" />}>
        <HeroVideoSection />
      </Suspense>
      <AboutUs />
      <SectionsMap />
      <BePart />
      <PhotoGallery />
      <Contact />
    </main>
  );
}
