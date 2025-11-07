"use client";
import React from "react";
import { motion } from "framer-motion";
import RetroButton from "@/components/RetroButton";
import RetroCounter from "@/components/RetroCounter";
import SnakeGame from "@/components/SnakeGame";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-purple via-win95-blue to-retro-black text-white">
      {/* Animated Marquee */}
      <div className="bg-retro-yellow text-retro-black py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-lg font-bold mx-8">★ WELCOME TO MY RETRO PORTFOLIO ★</span>
          <span className="text-lg font-bold mx-8">🌟 FULL-STACK DEV · SEO WIZARD · AI AUTOMATION ★</span>
          <span className="text-lg font-bold mx-8">⚡ BUILDING THE FUTURE WITH NOSTALGIA ★</span>
          <span className="text-lg font-bold mx-8">★ WELCOME TO MY RETRO PORTFOLIO ★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold animate-rainbow mb-4">
              FRANCOIS BEYERS
            </h1>
            <div className="inline-block bg-retro-cyan text-retro-black px-6 py-2 border-4 border-retro-blue shadow-retro transform -rotate-1">
              <p className="font-bold text-xl md:text-2xl">
                🚀 WEBMASTER · CODER · DIGITAL ALCHEMIST 🚀
              </p>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="my-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-retro-cyan mb-4">
              ⚡ TRANSFORMING IDEAS INTO REALITY SINCE 2020 ⚡
            </p>
            <p className="text-lg md:text-xl text-retro-yellow max-w-3xl mx-auto leading-relaxed">
              From <span className="text-retro-lime font-bold">SEO magic</span> to{' '}
              <span className="text-retro-magenta font-bold">AI automation</span>,
              I craft digital experiences that work as hard as they look cool.
              Let's build something awesome together! 🎮
            </p>
          </motion.div>

          {/* Visitor Counter */}
          <div className="flex justify-center my-6">
            <RetroCounter />
          </div>
        </motion.div>

        {/* Services Grid - Retro Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-retro-cyan">
            ⚡ SERVICES I OFFER ⚡
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '🎯 SEO & MARKETING',
                desc: 'Boost your rankings and dominate search results',
                color: 'bg-retro-lime',
                border: 'border-retro-cyan',
              },
              {
                title: '💻 WORDPRESS DEV',
                desc: 'Custom themes that make your site POP',
                color: 'bg-retro-magenta',
                border: 'border-retro-purple',
              },
              {
                title: '✍️ AI CONTENT',
                desc: 'Scale your content with AI superpowers',
                color: 'bg-retro-yellow',
                border: 'border-retro-red',
              },
              {
                title: '🤖 AI AUTOMATION',
                desc: 'Automate boring stuff, focus on awesome',
                color: 'bg-retro-cyan',
                border: 'border-retro-blue',
              },
              {
                title: '🚀 WEB DEVELOPMENT',
                desc: 'Modern apps with retro soul',
                color: 'bg-retro-red',
                border: 'border-retro-yellow',
              },
              {
                title: '📚 CONSULTING',
                desc: 'Expert advice when you need it most',
                color: 'bg-retro-purple',
                border: 'border-retro-magenta',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`${service.color} text-retro-black p-6 border-4 ${service.border} shadow-retro hover:shadow-retro-hover hover:scale-105 transition-all cursor-pointer`}
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-lg font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <RetroButton href="/services" variant="primary" className="text-xl">
              ⚡ SEE ALL SERVICES ⚡
            </RetroButton>
          </div>
        </motion.div>

        {/* Snake Game Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <div className="bg-retro-darkgray border-4 border-retro-cyan p-6 md:p-8 shadow-retro">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-retro-lime">
              🎮 TAKE A BREAK · PLAY SOME SNAKE! 🎮
            </h2>
            <p className="text-center text-retro-cyan mb-6 text-lg">
              Remember the good old days? Let's relive them!
            </p>
            <div className="flex justify-center">
              <SnakeGame />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-gradient-to-r from-retro-magenta to-retro-purple p-8 md:p-12 border-4 border-retro-cyan shadow-retro-hover mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-blink text-retro-yellow">
            🌟 READY TO BUILD SOMETHING AWESOME? 🌟
          </h2>
          <p className="text-xl md:text-2xl mb-6 text-white">
            Let's turn your ideas into reality (with a touch of retro magic)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RetroButton href="/contact" variant="primary" className="text-xl">
              ✉️ CONTACT ME
            </RetroButton>
            <RetroButton href="/projects" variant="secondary" className="text-xl">
              👀 VIEW PROJECTS
            </RetroButton>
          </div>
        </motion.div>

        {/* Retro Badges Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-retro-cyan mb-4">
            ⭐ CERTIFIED COOL BADGES ⭐
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-retro-blue text-white px-4 py-2 border-2 border-retro-cyan font-bold text-sm">
              ✓ NEXT.JS EXPERT
            </div>
            <div className="bg-retro-red text-white px-4 py-2 border-2 border-retro-yellow font-bold text-sm">
              ✓ SEO WIZARD
            </div>
            <div className="bg-retro-lime text-retro-black px-4 py-2 border-2 border-retro-cyan font-bold text-sm">
              ✓ AI POWERED
            </div>
            <div className="bg-retro-magenta text-white px-4 py-2 border-2 border-retro-purple font-bold text-sm">
              ✓ 24/7 SUPPORT
            </div>
            <div className="bg-retro-yellow text-retro-black px-4 py-2 border-2 border-retro-red font-bold text-sm">
              ✓ FAST DELIVERY
            </div>
          </div>

          {/* Best Viewed In */}
          <div className="text-retro-gray text-sm font-mono">
            <p>💻 Best viewed in: Any browser (unlike the 90s!)</p>
            <p className="mt-2">Made with ❤️ and a healthy dose of nostalgia</p>
          </div>
        </motion.div>
      </div>

      {/* Floating GIF-style animation */}
      <div className="fixed bottom-4 right-4 animate-float">
        <div className="bg-retro-yellow text-retro-black px-4 py-2 border-4 border-retro-black shadow-retro transform rotate-12">
          <p className="font-bold">🔥 UNDER CONSTRUCTION 🔥</p>
          <p className="text-sm">...just kidding, it works!</p>
        </div>
      </div>
    </div>
  );
}
