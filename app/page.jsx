import ParticlesBg from "@/app/ui/particles";
import LoginCard from "@/app/ui/login-card";
import DownArrow from "@/app/ui/down-arrow";
import SlateToRose from "@/app/ui/gradient";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-slate-800">
        <ParticlesBg />
        <LoginCard />
        <DownArrow />
      </div>
      <SlateToRose />
      <Footer />
    </main>
  );
}