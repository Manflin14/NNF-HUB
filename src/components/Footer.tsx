import Link from 'next/link'

const APP_VERSION = '2.0.0'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
              <span className="text-[var(--accent)]">NNF</span> HUB
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Guia não oficial de builds meta, estratégias e composições competitivas.
            </p>
          </div>

          {/* Jogos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              Jogos
            </h3>
            <div className="space-y-2">
              <Link href="/ea-fc" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                EA FC 26 — Pro Clubs
              </Link>
              <Link href="/tft" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                TFT — Set 16
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              Informações
            </h3>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>Conteúdo atualizado para os patches mais recentes.</p>
              <p>
                Versão do app:{' '}
                <span className="font-mono text-[var(--accent)]">{APP_VERSION}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
          <span>NNF HUB &copy; 2026 — Projeto comunitário sem afiliação com EA Sports ou Riot Games.</span>
          <span className="font-mono">v{APP_VERSION}</span>
        </div>
      </div>
    </footer>
  )
}
