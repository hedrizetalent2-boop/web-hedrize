export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center p-8 rounded-2xl border-2 border-border bg-gradient-to-b from-muted/40 to-background shadow-sm">
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-3xl text-primary">🚧</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">We’re Building Something Great</h1>
        <p className="mt-3 text-muted-foreground">
          Our site is currently under construction. Please check back soon. If you need assistance, contact us at
          <span className="font-semibold text-primary"> info@hedrize.com</span>.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <a href="/" className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
            Go to Home
          </a>
          <a href="/contact" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Set UNDERCONSTRUCTION=0 in .env to disable this mode.</p>
      </div>
    </main>
  )
}
