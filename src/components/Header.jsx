import React from 'react';
import { motion } from 'framer-motion';
import json from "../assets/profile.png";

export default function Header() {
  return (
    <header className="text-center mb-16 flex flex-col items-center">
      <div className="relative mb-4" style={{ width: '170px', height: '170px' }}>
        <div
          className="absolute inset-0 rounded-full border-4 border-primary"
        />
        <div className="relative rounded-full overflow-hidden" style={{ padding: '10px' }}>
          <img src={json} alt="Jayson Dorilag" width={150} height={150} className="rounded-full object-cover" />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-2">
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
        >
          👋
        </motion.span>
        Hi, I’m <span className="text-primary">Jayson Dorilag</span>!
      </h1>
      <p className="text-sm flex items-center">
        Aspiring Developer
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        Taguig, Philippines <img src="https://img.icons8.com/?size=100&id=15530&format=png&color=000000" alt="Philippines Flag" width={20} height={20} /> | 23 years old
      </p>
    </header>
  );
}