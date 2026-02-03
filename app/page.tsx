"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { BuildToast } from "@/components/build-toast"
import { Order } from "@/components/order"
import { Footer } from "@/components/footer"

export interface CartItem {
  name: string
  price: number
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item])
  }

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      <div className="bg-glow" />
      <Header />
      <main className="flex flex-col gap-20 px-[6vw] py-5 pb-20">
        <Hero addToCart={addToCart} />
        <Menu addToCart={addToCart} />
        <About />
        <Gallery />
        <BuildToast />
        <Order cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </main>
      <Footer />
    </>
  )
}
