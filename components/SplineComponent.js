import Spline from "@splinetool/react-spline/next";

export default function SplineComponent() {
  return (
    <main className="w-full h-screen relative">
      <div className="w-full h-full relative" >
        <Spline scene="https://prod.spline.design/HGCj2nmyrV-zURI5/scene.splinecode" />
      </div>
      <div className="absolute top-0 w-full h-full left-0 bg-black bg-opacity-20">
      </div>
    </main>
  );
}
