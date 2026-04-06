import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <span className="text-lg font-black">
              <span className="text-gradient">NNF</span>
              <span className="text-[var(--color-text-muted)]"> HUB</span>
            </span>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
              Hub profissional de builds e estratégias para jogos competitivos.
              Feito pela comunidade, para a comunidade.
            </p>
          </div>

          {/* GAMES */}
          <div>
            <h4 className="mb-3 font-semibold text-[var(--color-text-primary)]">Jogos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ea-fc" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
                  EA FC 26 Pro Clubs
                </Link>
              </li>
              <li>
                <Link href="/tft" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
                  Teamfight Tactics
                </Link>
              </li>
            </ul>
          </div>

          {/* MISC */}
          <div>
            <h4 className="mb-3 font-semibold text-[var(--color-text-primary)]">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ea-fc/busca" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
                  Busca Global
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
                  Entrar / Cadastrar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border-primary)] pt-6 flex items-center justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 NNF HUB. Projeto não oficial — não afiliado à EA Sports ou Riot Games.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Versão 1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
