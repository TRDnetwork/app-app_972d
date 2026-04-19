export const BrandKit = () => (
  <div className="container mx-auto py-16 px-6 max-w-4xl">
    <h1 className="font-display text-4xl text-primary mb-12">Brand Kit</h1>

    {/* Logo */}
    <section className="mb-12">
      <h2 className="font-display text-2xl text-primary mb-4">Logo</h2>
      <div className="flex items-center space-x-4">
        <svg width="64" height="64" viewBox="0 0 100 100" className="text-primary">
          <rect width="100" height="100" fill="#1a2e1a" rx="12"/>
          <text x="50" y="70" font-family="Satoshi, sans-serif" font-size="60" fill="#faf8f5" text-anchor="middle">P</text>
        </svg>
        <span className="text-lg text-dim">Portfolio Pro</span>
      </div>
    </section>

    {/* Colors */}
    <section className="mb-12">
      <h2 className="font-display text-2xl text-primary mb-6">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { name: 'Background', color: '#faf8f5', var: 'bg' },
          { name: 'Surface', color: '#ffffff', var: 'surface' },
          { name: 'Text', color: '#1a2e1a', var: 'primary' },
          { name: 'Text Dim', color: '#6b5e53', var: 'secondary' },
          { name: 'Accent', color: '#e66000', var: 'accent' },
          { name: 'Accent Alt', color: '#ff8c42', var: 'accent-alt' }
        ].map(({ name, color, var: cssVar }) => (
          <div key={cssVar} className="text-center">
            <div
              className="w-full h-16 rounded shadow-inner mb-2"
              style={{ backgroundColor: color }}
            />
            <div className="text-xs text-dim">{name}</div>
            <div className="text-xs font-mono">{color}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Typography */}
    <section>
      <h2 className="font-display text-2xl text-primary mb-6">Typography</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-dim text-sm uppercase tracking-wider mb-1">Display Font</h3>
          <h1 className="font-display text-3xl text-primary">Satoshi (Headings)</h1>
        </div>
        <div>
          <h3 className="text-dim text-sm uppercase tracking-wider mb-1">Body Font</h3>
          <p className="text-primary text-lg leading-relaxed max-w-prose">
            Fraunces is used for body text with medium weight, 1.6 line height, and max width of 65ch.
          </p>
        </div>
      </div>
    </section>
  </div>
);