"use client";
import React from 'react';
import Nosotros from '@/components/nosotros';
import Inicio from '@/components/inicio';
import NavBar from '@/components/navbar';
import Actividades from '@/components/actividades';

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <NavBar/>
      <Inicio/>
      <Nosotros/>
      <Actividades  />
    </main>
  );
}
