export default function AboutPage() {
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">About This App</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                This is a fresh Next.js application built from scratch using the latest
                technologies and best practices.
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-3">Tech Stack</h3>
              <ul>
                <li><strong>Framework:</strong> Next.js 16 with App Router</li>
                <li><strong>Language:</strong> TypeScript 5</li>
                <li><strong>Styling:</strong> Tailwind CSS 4</li>
                <li><strong>UI Components:</strong> shadcn/ui</li>
                <li><strong>Icons:</strong> Lucide React</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-6 mb-3">Features</h3>
              <ul>
                <li>✅ Server-side rendering</li>
                <li>✅ Static site generation</li>
                <li>✅ API routes</li>
                <li>✅ File-based routing</li>
                <li>✅ Optimized performance</li>
              </ul>
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
