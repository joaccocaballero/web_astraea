"use client";
import React from 'react';
import Nosotros from '../../components/nosotros';
import Inicio from '../../components/inicio';

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <Inicio/>
      <Nosotros/>

    </main>
  );
}
