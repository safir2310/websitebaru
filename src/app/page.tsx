export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">My App</h1>
            <nav className="flex gap-4">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="/about" className="hover:text-primary">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to My App</h2>
            <p className="text-xl text-muted-foreground mb-8">
              This is a fresh Next.js application built from scratch
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Fast</h3>
              <p className="text-muted-foreground">
                Built with Next.js 16 for optimal performance
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Modern</h3>
              <p className="text-muted-foreground">
                Using TypeScript, Tailwind CSS 4, and shadcn/ui components
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Clean</h3>
              <p className="text-muted-foreground">
                Fresh start with clean code structure
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 My App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
