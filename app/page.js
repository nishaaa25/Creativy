import AboutPage from "@/components/AboutPage";
import SplineComponent from "@/components/SplineComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative">
      <SplineComponent/>
      <AboutPage/>
    </div>
  );
}
 