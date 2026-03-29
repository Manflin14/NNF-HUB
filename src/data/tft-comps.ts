import type { TFTComp } from '@/types/tft'

// Board: col 0-6 (left→right), row 0-3 (front→back)
// row 0 = frontline (tanques), row 3 = backline (carries)

export const comps: TFTComp[] = [
  // ─── S TIER ──────────────────────────────────────────────────────────────────
  {
    id: 'ionia-yone-ahri',
    name: 'Ionia Yone & Ahri',
    tier: 'S',
    difficulty: 'Médio',
    playstyle: 'Reroll',
    description:
      'A composição mais consistente do patch 16.6. Yone e Ahri como carries duplos com 7 Ionia ativo. O Path of Blades agora concede AP, tornando Jeweled Gauntlet e Rabadon muito mais fortes.',
    when: 'Quando pegar 2+ itens de ataque físico cedo ou ter augment de Ionia.',
    champions: [
      { name: 'Shen',    cost: 2, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Kennen',  cost: 2, role: 'tank',    position: { col: 2, row: 0 }, items: ['Ionic Spark', 'Sunfire Cape'] },
      { name: 'Wukong',  cost: 3, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Sett',    cost: 4, role: 'tank',    position: { col: 6, row: 0 } },
      { name: 'Yasuo',   cost: 2, role: 'support', position: { col: 1, row: 1 } },
      { name: 'Yone',    cost: 4, role: 'carry',   position: { col: 3, row: 2 }, items: ['Bloodthirster', "Guinsoo's Rageblade", 'Edge of Night'] },
      { name: 'Ahri',    cost: 3, role: 'carry',   position: { col: 5, row: 3 }, items: ["Nashor's Tooth", 'Jeweled Gauntlet', 'Void Staff'] },
      { name: 'Irelia',  cost: 5, role: 'flex',    position: { col: 1, row: 3 } },
    ],
    traits: [
      { name: 'Iônia',     count: 7, color: '#a78bfa' },
      { name: 'Arcanista', count: 2, color: '#818cf8' },
      { name: 'Destruidor',count: 2, color: '#fb923c' },
      { name: 'Guerreiro', count: 2, color: '#f87171' },
    ],
    tips: [
      'Yasuo 2★ + 3 itens no Lv7 destrava o Yone — muito mais fácil que antes.',
      'Path of Blades agora dá AP — Jeweled Gauntlet e Rabadon em Ahri são BiS.',
      'Coloque os itens do Yone no Yasuo como holder no early game.',
      'Slow roll no Lv7 para Ahri 3★ e Kennen 3★ antes de empurrar nível.',
    ],
  },
  {
    id: 'annie-sylas-arcanist',
    name: 'Annie & Sylas Arcanista',
    tier: 'S',
    difficulty: 'Difícil',
    playstyle: 'Fast 9',
    description:
      'Annie recebeu buffs diretos de Attack Speed e Tibbers ganhou shield massivo. Com 3 Arcanistas + Sylas + Sett, o board causa dano explosivo de área com sustain elevado.',
    when: 'Quando pegar Shojin ou Adaptive Helm cedo, ou augment de Arcanista/Annie.',
    champions: [
      { name: 'Kobuko & Yuumi', cost: 1, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Kennen',         cost: 2, role: 'tank',    position: { col: 2, row: 0 }, items: ['Ionic Spark'] },
      { name: 'Wukong',         cost: 3, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Sett',           cost: 4, role: 'tank',    position: { col: 6, row: 0 }, items: ["Titan's Resolve", 'Jeweled Gauntlet'] },
      { name: 'Zilean',         cost: 3, role: 'support', position: { col: 0, row: 2 } },
      { name: 'Tibbers',        cost: 4, role: 'tank',    position: { col: 3, row: 1 }, items: ['Steadfast Heart', 'Bramble Vest'] },
      { name: 'Annie',          cost: 4, role: 'carry',   position: { col: 3, row: 2 }, items: ['Adaptive Helm', 'Void Staff', 'Spear of Shojin'] },
      { name: 'Sylas',          cost: 4, role: 'carry',   position: { col: 5, row: 3 }, items: ['Hand of Justice', 'Hextech Gunblade', 'Jeweled Gauntlet'] },
    ],
    traits: [
      { name: 'Arcanista', count: 3, color: '#818cf8' },
      { name: 'Iônia',     count: 3, color: '#a78bfa' },
      { name: 'Yordle',    count: 2, color: '#34d399' },
      { name: 'Defensor',  count: 2, color: '#60a5fa' },
    ],
    tips: [
      'Annie NÃO quer itens de dano puro — Shojin e Adaptive Helm para mana primeiro.',
      'Tibbers entra no mesmo hex que Annie e herda os itens de tanque.',
      'Sylas copia as habilidades inimigas — posicione contra carries AP.',
      'Fast 9 para garantir Sylas 2★ e Annie 2★ no board capeado.',
    ],
  },

  // ─── A TIER ──────────────────────────────────────────────────────────────────
  {
    id: 'shadow-spears',
    name: 'Lanças das Ilhas das Sombras',
    tier: 'A',
    difficulty: 'Médio',
    playstyle: 'Flex',
    description:
      'Kalista agora desbloqueia com apenas 30 Souls (antes eram 70). Yorick + Thresh como carries com suporte de Gwen e Kalista formam um board difícil de matar com farms de Souls acelerado.',
    when: 'Quando pegar Blue Buff ou Tear cedo, ou augment de Shadow Isles.',
    champions: [
      { name: 'Braum',       cost: 2, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Yorick',      cost: 4, role: 'tank',    position: { col: 2, row: 0 }, items: ['Steadfast Heart', "Warmog's Armor"] },
      { name: 'Ornn',        cost: 5, role: 'tank',    position: { col: 4, row: 0 }, items: ['Spirit Visage', 'Bramble Vest'] },
      { name: 'Seraphine',   cost: 2, role: 'support', position: { col: 6, row: 1 } },
      { name: 'Gwen',        cost: 3, role: 'flex',    position: { col: 1, row: 1 } },
      { name: 'Thresh',      cost: 4, role: 'carry',   position: { col: 3, row: 2 }, items: ['Morellonomicon', 'Edge of Night', 'Ionic Spark'] },
      { name: 'Kalista',     cost: 3, role: 'carry',   position: { col: 5, row: 3 }, items: ["Blue Buff", 'Last Whisper', "Guinsoo's Rageblade"] },
      { name: 'Fiddlesticks', cost: 5, role: 'flex',   position: { col: 1, row: 3 } },
    ],
    traits: [
      { name: 'Ilhas das Sombras', count: 4, color: '#7c3aed' },
      { name: 'Sentinela',         count: 5, color: '#60a5fa' },
      { name: 'Piltover',          count: 2, color: '#fbbf24' },
      { name: 'Destruidor',        count: 2, color: '#fb923c' },
    ],
    tips: [
      'Coloca Viego com 2 itens no Lv5 para destrave automático do Yorick.',
      'Kalista agora destrava em 30 Souls — muito mais fácil no Lv7.',
      'Thresh requer Lv8 + farm de Souls — empurre nível assim que tiver 50+ HP.',
      'Pivot: se Thresh fraco, troca por Azir + Mel no late para capar o board.',
    ],
  },
  {
    id: 'mel-fast9',
    name: 'Mel Fast 9',
    tier: 'A',
    difficulty: 'Difícil',
    playstyle: 'Fast 9',
    description:
      'Mel agora destrava com apenas 1 estrela (antes precisava de 2). Com Sylas ao lado, cria dano mágico explosivo de área. O orbe de Mel deve girar devagar — nunca coloque item de mana nela.',
    when: 'Quando ter boa economia (50g+ no 3-5) e augment de dano mágico ou Noxus.',
    champions: [
      { name: 'Neeko',        cost: 3, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Shyvana',      cost: 4, role: 'tank',    position: { col: 2, row: 0 }, items: ['Sunfire Cape', 'Spirit Visage'] },
      { name: 'Swain',        cost: 4, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Ambessa',      cost: 4, role: 'flex',    position: { col: 6, row: 0 } },
      { name: 'Taric',        cost: 3, role: 'support', position: { col: 0, row: 2 } },
      { name: 'Fiddlesticks', cost: 5, role: 'flex',    position: { col: 2, row: 2 } },
      { name: 'Sylas',        cost: 4, role: 'carry',   position: { col: 4, row: 3 }, items: ['Hand of Justice', 'Hextech Gunblade', 'Jeweled Gauntlet'] },
      { name: 'Mel',          cost: 5, role: 'carry',   position: { col: 6, row: 3 }, items: ["Rabadon's Deathcap", 'Void Staff', 'Jeweled Gauntlet'] },
    ],
    traits: [
      { name: 'Noxus',      count: 3, color: '#ef4444' },
      { name: 'Arcanista',  count: 2, color: '#818cf8' },
      { name: 'Defensor',   count: 2, color: '#60a5fa' },
      { name: 'Destruidor', count: 2, color: '#fb923c' },
    ],
    tips: [
      'NUNCA coloque item de mana em Mel — o orbe dela precisa girar devagar.',
      'LeBlanc como item holder para Mel no early game.',
      'Mel unlock facilitado: agora só precisa de 1★ no Lv9.',
      'Posicione Mel nos cantos para acertar carries adversários.',
    ],
  },
  {
    id: 'ryze-demacia',
    name: 'Ryze Fast 9',
    tier: 'A',
    difficulty: 'Médio',
    playstyle: 'Fast 9',
    description:
      "Ryze agora requer apenas 3 traits de regiões diferentes (antes eram 4). Com Nashor's Tooth + Jeweled Gauntlet, ele casta com frequência alta e drena a linha inimiga inteira.",
    when: "Quando pegar Nashor's Tooth ou Gauntlet cedo, ou augment de Demácia/Região.",
    champions: [
      { name: 'Jarvan',  cost: 2, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Shyvana', cost: 4, role: 'tank',    position: { col: 2, row: 0 }, items: ['Bramble Vest', "Warmog's Armor"] },
      { name: 'Sett',    cost: 4, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Taric',   cost: 3, role: 'support', position: { col: 6, row: 1 } },
      { name: 'Lux',     cost: 3, role: 'flex',    position: { col: 1, row: 1 } },
      { name: 'Kennen',  cost: 2, role: 'flex',    position: { col: 3, row: 1 }, items: ['Ionic Spark'] },
      { name: 'Sylas',   cost: 4, role: 'carry',   position: { col: 2, row: 3 }, items: ['Hand of Justice', 'Hextech Gunblade'] },
      { name: 'Ryze',    cost: 5, role: 'carry',   position: { col: 5, row: 3 }, items: ["Nashor's Tooth", 'Jeweled Gauntlet', 'Void Staff'] },
    ],
    traits: [
      { name: 'Demácia',  count: 5, color: '#60a5fa' },
      { name: 'Targon',   count: 2, color: '#c084fc' },
      { name: 'Iônia',    count: 2, color: '#a78bfa' },
      { name: 'Defensor', count: 2, color: '#60a5fa' },
    ],
    tips: [
      'Ryze ativa no Lv9 com 3 traits de regiões diferentes — bem mais fácil agora.',
      'Combinação ideal de regiões: Iônia + Demácia + Targon.',
      "Ryze casta frequentemente com Nashor's — maximize AP.",
      'Mantenha 10g de interesse e 50g de econ até o 3-5 para empurrar Lv9.',
    ],
  },

  // ─── B TIER ──────────────────────────────────────────────────────────────────
  {
    id: 'draven-bilgewater',
    name: 'Draven Bilgewater',
    tier: 'B',
    difficulty: 'Médio',
    playstyle: 'Reroll',
    description:
      'Draven e Gangplank receberam buffs expressivos de AD neste patch. Com Bilgewater + Noxus + Destruidor, o board gera Silver Serpents por takedown para comprar itens no Black Market.',
    when: "Quando pegar Guinsoo's ou Kraken Slayer cedo, ou augment de Bilgewater.",
    champions: [
      { name: 'Briar',        cost: 1, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Nautilus',     cost: 2, role: 'tank',    position: { col: 2, row: 0 } },
      { name: 'Braum',        cost: 2, role: 'tank',    position: { col: 4, row: 0 }, items: ['Sunfire Cape'] },
      { name: 'Ambessa',      cost: 4, role: 'flex',    position: { col: 6, row: 0 } },
      { name: 'Twisted Fate', cost: 2, role: 'support', position: { col: 1, row: 2 } },
      { name: 'Fiddlesticks', cost: 5, role: 'flex',    position: { col: 3, row: 2 } },
      { name: 'Gangplank',    cost: 3, role: 'carry',   position: { col: 2, row: 3 }, items: ['QSS', 'Hand of Justice', "Sterak's Gage"] },
      { name: 'Draven',       cost: 3, role: 'carry',   position: { col: 5, row: 3 }, items: ["Guinsoo's Rageblade", 'Kraken Slayer', 'Last Whisper'] },
    ],
    traits: [
      { name: 'Bilgewater',  count: 3, color: '#2dd4bf' },
      { name: 'Noxus',       count: 3, color: '#ef4444' },
      { name: 'Destruidor',  count: 3, color: '#fb923c' },
      { name: 'Guerreiro',   count: 2, color: '#f87171' },
    ],
    tips: [
      'Draven buffado: AD agora 120/180/350 — reroll para 3★ no 4-1.',
      'Gangplank buffado: AD 205/310/500 — ideal como segundo carry.',
      'Graves agora destrava com qualquer Bilgewater com 2 itens — muito fácil.',
      'Rola até Gangplank 2★ + Draven 2★ antes de empurrar nível.',
    ],
  },
  {
    id: 'warwick-freljord',
    name: 'Warwick Freljord',
    tier: 'B',
    difficulty: 'Médio',
    playstyle: 'Flex',
    description:
      'Warwick teve mana reduzida de 90 para 70 — casta muito mais rápido agora. Com Jinx como carry de AD e Freljord + Zaun ativo, o board tem alto sustain e dano consistente.',
    when: "Quando pegar Guinsoo's ou Titan's cedo, ou augment de Freljord/Zaun.",
    champions: [
      { name: 'Braum',   cost: 2, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Sejuani', cost: 3, role: 'tank',    position: { col: 2, row: 0 }, items: ['Sunfire Cape', 'Spirit Visage', 'Evenshroud'] },
      { name: 'Loris',   cost: 3, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Vi',      cost: 3, role: 'flex',    position: { col: 6, row: 0 } },
      { name: 'Senna',   cost: 3, role: 'support', position: { col: 0, row: 2 } },
      { name: 'Ashe',    cost: 2, role: 'flex',    position: { col: 2, row: 2 } },
      { name: 'Warwick', cost: 4, role: 'carry',   position: { col: 4, row: 2 }, items: ["Titan's Resolve", "Sterak's Gage", 'Bloodthirster'] },
      { name: 'Jinx',    cost: 2, role: 'carry',   position: { col: 6, row: 3 }, items: ["Guinsoo's Rageblade", 'Last Whisper', 'Kraken Slayer'] },
    ],
    traits: [
      { name: 'Freljord', count: 3, color: '#93c5fd' },
      { name: 'Zaun',     count: 3, color: '#a3e635' },
      { name: 'Piltover', count: 2, color: '#fbbf24' },
      { name: 'Defensor', count: 2, color: '#60a5fa' },
    ],
    tips: [
      'Warwick agora tem mana 0/70 (era 0/90) — casta 22% mais rápido.',
      'Para destrave: coloca Jinx E Vi com 1 item cada no Lv7.',
      'Rola Jinx 3★ / Sejuani 3★ se rico, senão empurra Lv8 direto.',
      "Com o augment 'Death's Defiance' essa comp sobe para A-tier facilmente.",
    ],
  },
  {
    id: 'veigar-yordle',
    name: 'Veigar 8 Yordles',
    tier: 'B',
    difficulty: 'Fácil',
    playstyle: 'Slow Roll',
    description:
      "Veigar agora destrava com apenas 1 Rabadon's Deathcap (antes eram 2). Com 8 Yordles no board, os grab bags por rodada geram loot extra contínuo. Comp acessível para quem está aprendendo.",
    when: "Quando pegar Rabadon's Deathcap cedo, ou múltiplos Yordles no carrossel.",
    champions: [
      { name: 'Kobuko & Yuumi', cost: 1, role: 'tank',    position: { col: 0, row: 0 } },
      { name: 'Kennen',         cost: 2, role: 'flex',    position: { col: 2, row: 0 }, items: ['Ionic Spark'] },
      { name: 'Rumble',         cost: 3, role: 'tank',    position: { col: 4, row: 0 } },
      { name: 'Fizz',           cost: 2, role: 'flex',    position: { col: 6, row: 0 } },
      { name: 'Teemo',          cost: 2, role: 'flex',    position: { col: 1, row: 2 } },
      { name: 'Lulu',           cost: 3, role: 'support', position: { col: 3, row: 2 } },
      { name: 'Veigar',         cost: 4, role: 'carry',   position: { col: 2, row: 3 }, items: ["Rabadon's Deathcap", 'Morellonomicon', 'Spear of Shojin'] },
      { name: 'Ziggs',          cost: 3, role: 'carry',   position: { col: 5, row: 3 }, items: ["Rabadon's Deathcap", 'Void Staff', 'Jeweled Gauntlet'] },
    ],
    traits: [
      { name: 'Yordle',    count: 8, color: '#34d399' },
      { name: 'Arcanista', count: 2, color: '#818cf8' },
      { name: 'Defensor',  count: 2, color: '#60a5fa' },
    ],
    tips: [
      'Veigar agora destrava com apenas 1 Rabadon — muito mais acessível.',
      'Recomendado: Fast 8 para grab bags mais cedo em vez de Slow Roll no Lv6.',
      'Lv6: 6 Yordles para 1 reroll grátis por rodada — agiliza encontrar 3★.',
      'Lulu buffada neste patch: considere como terceiro carry com AP.',
    ],
  },
]

export function getCompById(id: string): TFTComp | undefined {
  return comps.find((c) => c.id === id)
}
