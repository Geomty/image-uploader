"use client";

import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { particles } from "@/particles.config.js";

export default function ParticlesBg() {
  initParticlesEngine(async engine => {
    await loadFull(engine);
  });

  return <Particles className="w-full h-screen md:block hidden" options={particles} />
}