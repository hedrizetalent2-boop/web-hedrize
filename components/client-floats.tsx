"use client"

import dynamic from "next/dynamic"

// Lazy load float components for better performance
const WhatsappFloat = dynamic(() => import("@/components/whatsapp-float").then(mod => ({ default: mod.WhatsappFloat })), {
    ssr: false,
})

const ScrollTopFloat = dynamic(() => import("@/components/scroll-top-float").then(mod => ({ default: mod.ScrollTopFloat })), {
    ssr: false,
})

export function ClientFloats() {
    return (
        <>
            <ScrollTopFloat />
            <WhatsappFloat />
        </>
    )
}
