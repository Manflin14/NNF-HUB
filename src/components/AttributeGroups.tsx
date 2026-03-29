import type { BuildAttributes } from '@/types'

function valueColor(v: number) {
  if (v >= 90) return '#00d4aa'
  if (v >= 80) return '#4ade80'
  if (v >= 70) return '#facc15'
  if (v >= 60) return '#fb923c'
  return '#f87171'
}

function Bar({ label, value, isKey }: { label: string; value: number; isKey: boolean }) {
  const color = valueColor(value)
  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-[10px] w-28 shrink-0 leading-tight truncate ${
          isKey ? 'text-[var(--gold)] font-bold' : 'text-[var(--text-secondary)]'
        }`}
      >
        {isKey && <span className="mr-1 text-[var(--gold)]">●</span>}
        {label}
      </span>
      <div className="flex-1 h-1 rounded-full bg-[var(--border)]">
        <div
          className="h-full rounded-full"
          style={{ width: `${(value / 99) * 100}%`, background: isKey ? 'var(--gold)' : color }}
        />
      </div>
      <span className="text-[10px] font-bold w-6 text-right tabular-nums" style={{ color: isKey ? 'var(--gold)' : color }}>
        {value}
      </span>
    </div>
  )
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5 mt-3 first:mt-0">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

interface Props {
  attributes: BuildAttributes
  keyAttributes: string[]
}

export default function AttributeGroups({ attributes, keyAttributes }: Props) {
  const key = (k: string) => keyAttributes.includes(k)

  if (attributes.kind === 'gk') {
    const a = attributes
    return (
      <div>
        <Group title="Ritmo">
          <Bar label="Aceleração"  value={a.acceleration} isKey={key('acceleration')} />
          <Bar label="Vel. Sprint" value={a.sprintSpeed}  isKey={key('sprintSpeed')} />
        </Group>
        <Group title="Goleiro">
          <Bar label="GK Diving"   value={a.gkDiving}      isKey={key('gkDiving')} />
          <Bar label="GK Manuseio" value={a.gkHandling}    isKey={key('gkHandling')} />
          <Bar label="GK Chute"    value={a.gkKicking}     isKey={key('gkKicking')} />
          <Bar label="GK Posição"  value={a.gkPositioning} isKey={key('gkPositioning')} />
          <Bar label="GK Reflexos" value={a.gkReflexes}    isKey={key('gkReflexes')} />
        </Group>
        <Group title="Físico">
          <Bar label="Salto"         value={a.jumping}    isKey={key('jumping')} />
          <Bar label="Força"         value={a.strength}   isKey={key('strength')} />
          <Bar label="Resistência"   value={a.stamina}    isKey={key('stamina')} />
          <Bar label="Agressividade" value={a.aggression} isKey={key('aggression')} />
        </Group>
      </div>
    )
  }

  const a = attributes
  return (
    <div>
      <Group title="Ritmo">
        <Bar label="Aceleração"  value={a.acceleration} isKey={key('acceleration')} />
        <Bar label="Vel. Sprint" value={a.sprintSpeed}  isKey={key('sprintSpeed')} />
      </Group>
      <Group title="Controle de Bola">
        <Bar label="Agilidade"  value={a.agility}     isKey={key('agility')} />
        <Bar label="Equilíbrio" value={a.balance}     isKey={key('balance')} />
        <Bar label="Reações"    value={a.reactions}   isKey={key('reactions')} />
        <Bar label="Controle"   value={a.ballControl} isKey={key('ballControl')} />
        <Bar label="Dribles"    value={a.dribbling}   isKey={key('dribbling')} />
        <Bar label="Compostura" value={a.composure}   isKey={key('composure')} />
      </Group>
      <Group title="Finalização">
        <Bar label="Pos. Ataque"  value={a.attPosition} isKey={key('attPosition')} />
        <Bar label="Finalização"  value={a.finishing}   isKey={key('finishing')} />
        <Bar label="Força Chute"  value={a.shotPower}   isKey={key('shotPower')} />
        <Bar label="Chute Longo"  value={a.longShots}   isKey={key('longShots')} />
        <Bar label="Voleio"       value={a.volleys}     isKey={key('volleys')} />
        <Bar label="Pênaltis"     value={a.penalties}   isKey={key('penalties')} />
      </Group>
      <Group title="Passe">
        <Bar label="Visão"       value={a.vision}      isKey={key('vision')} />
        <Bar label="Cruzamento"  value={a.crossing}    isKey={key('crossing')} />
        <Bar label="Precisão FK" value={a.fkAccuracy}  isKey={key('fkAccuracy')} />
        <Bar label="Passe Curto" value={a.shortPass}   isKey={key('shortPass')} />
        <Bar label="Passe Longo" value={a.longPass}    isKey={key('longPass')} />
        <Bar label="Curva"       value={a.curve}       isKey={key('curve')} />
      </Group>
      <Group title="Defesa">
        <Bar label="Interceptações" value={a.interceptions}   isKey={key('interceptions')} />
        <Bar label="Cabecear"       value={a.headingAccuracy} isKey={key('headingAccuracy')} />
        <Bar label="Consciência"    value={a.defAwareness}    isKey={key('defAwareness')} />
        <Bar label="Carrinho Pé"    value={a.standTackle}     isKey={key('standTackle')} />
        <Bar label="Carrinho Chão"  value={a.slideTackle}     isKey={key('slideTackle')} />
      </Group>
      <Group title="Físico">
        <Bar label="Salto"         value={a.jumping}    isKey={key('jumping')} />
        <Bar label="Força"         value={a.strength}   isKey={key('strength')} />
        <Bar label="Resistência"   value={a.stamina}    isKey={key('stamina')} />
        <Bar label="Agressividade" value={a.aggression} isKey={key('aggression')} />
      </Group>
    </div>
  )
}
