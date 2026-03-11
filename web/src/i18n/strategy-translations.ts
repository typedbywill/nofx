// NOFX i18n Consolidation - Translation Keys
// PT-BR Translation Patch

// ============================================================================
// COIN SOURCE TRANSLATIONS
// ============================================================================
export const coinSource = {
  sourceType: { zh: '数据来源类型', en: 'Source Type', es: 'Tipo de Fuente', pt: 'Tipo de Fonte' },
  static: { zh: '静态列表', en: 'Static List', es: 'Lista Estática', pt: 'Lista Estática' },
  ai500: { zh: 'AI500 数据源', en: 'AI500 Data Provider', es: 'Proveedor AI500', pt: 'Provedor AI500' },
  oi_top: { zh: 'OI 持仓增加', en: 'OI Increase', es: 'Aumento OI', pt: 'Aumento de OI' },
  oi_low: { zh: 'OI 持仓减少', en: 'OI Decrease', es: 'Disminución OI', pt: 'Redução de OI' },
  mixed: { zh: '混合模式', en: 'Mixed Mode', es: 'Modo Mixto', pt: 'Modo Misto' },
  staticCoins: { zh: '自定义币种', en: 'Custom Coins', es: 'Monedas Personalizadas', pt: 'Moedas Personalizadas' },
  addCoin: { zh: '添加币种', en: 'Add Coin', es: 'Agregar Moneda', pt: 'Adicionar Moeda' },
  useAI500: { zh: '启用 AI500 数据源', en: 'Enable AI500 Data Provider', es: 'Habilitar AI500', pt: 'Habilitar AI500' },
  ai500Limit: { zh: '数量上限', en: 'Limit', es: 'Límite', pt: 'Limite' },
  useOITop: { zh: '启用 OI 持仓增加榜', en: 'Enable OI Increase', es: 'Habilitar Aumento OI', pt: 'Habilitar Aumento de OI' },
  oiTopLimit: { zh: '数量上限', en: 'Limit', es: 'Límite', pt: 'Limite' },
  useOILow: { zh: '启用 OI 持仓减少榜', en: 'Enable OI Decrease', es: 'Disminución OI', pt: 'Habilitar Redução de OI' },
  oiLowLimit: { zh: '数量上限', en: 'Limit', es: 'Límite', pt: 'Limite' },
  staticDesc: { zh: '手动指定交易币种列表', en: 'Manually specify trading coins', es: 'Especificar monedas manualmente', pt: 'Especificar moedas manualmente' },
  mixedConfig: { zh: '组合数据源配置', en: 'Combined Sources Configuration', es: 'Configuración Combinada', pt: 'Configuração de Fontes Combinadas' },
  mixedSummary: { zh: '已选组合', en: 'Selected Sources', es: 'Fuentes Seleccionadas', pt: 'Fontes Selecionadas' },
  maxCoins: { zh: '最多', en: 'Up to', es: 'Hasta', pt: 'Até' },
  coins: { zh: '个币种', en: 'coins', es: 'monedas', pt: 'moedas' },
  dataSourceConfig: { zh: '数据源配置', en: 'Data Source Configuration', es: 'Configuración de Fuente', pt: 'Configuração de Fonte de Dados' },
  excludedCoins: { zh: '排除币种', en: 'Excluded Coins', es: 'Monedas Excluidas', pt: 'Moedas Excluídas' },
  excludedCoinsDesc: { zh: '这些币种将从所有数据源中排除，不会被交易', en: 'These coins will be excluded from all sources and will not be traded', es: 'Estas monedas serán excluidas', pt: 'Estas moedas serão excluídas de todas as fontes e não serão negociadas' },
  addExcludedCoin: { zh: '添加排除', en: 'Add Excluded', es: 'Agregar Excluida', pt: 'Adicionar Exclusão' },
  nofxosNote: { zh: '使用 NofxOS API Key（在指标配置中设置）', en: 'Uses NofxOS API Key (set in Indicators config)', es: 'Usa API Key de NofxOS', pt: 'Usa API Key do NofxOS (definida em Indicadores)' },
};

// ============================================================================
// GRID CONFIG TRANSLATIONS
// ============================================================================
export const gridConfig = {
  tradingPair: { zh: '交易设置', en: 'Trading Setup', es: 'Configuración de Trading', pt: 'Configuração de Negociação' },
  gridParameters: { zh: '网格参数', en: 'Grid Parameters', es: 'Parámetros de Grid', pt: 'Parâmetros da Grade' },
  priceBounds: { zh: '价格边界', en: 'Price Bounds', es: 'Límites de Precio', pt: 'Limites de Preço' },
  riskControl: { zh: '风险控制', en: 'Risk Control', es: 'Control de Riesgo', pt: 'Controle de Risco' },
  symbol: { zh: '交易对', en: 'Trading Pair', es: 'Par de Trading', pt: 'Par de Negociação' },
  symbolDesc: { zh: '选择要进行网格交易的交易对', en: 'Select trading pair for grid trading', es: 'Seleccionar par', pt: 'Selecione o par para trading em grade' },
  totalInvestment: { zh: '投资金额 (USDT)', en: 'Investment (USDT)', es: 'Inversión (USDT)', pt: 'Investimento (USDT)' },
  totalInvestmentDesc: { zh: '网格策略的总投资金额', en: 'Total investment for grid strategy', es: 'Inversión total', pt: 'Investimento total para a estratégia de grade' },
  leverage: { zh: '杠杆倍数', en: 'Leverage', es: 'Apalancamiento', pt: 'Alavancagem' },
  leverageDesc: { zh: '交易使用的杠杆倍数 (1-5)', en: 'Leverage for trading (1-5)', es: 'Apalancamiento (1-5)', pt: 'Alavancagem para trading (1-5)' },
  gridCount: { zh: '网格数量', en: 'Grid Count', es: 'Cantidad de Grids', pt: 'Número de Grades' },
  gridCountDesc: { zh: '网格层级数量 (5-50)', en: 'Number of grid levels (5-50)', es: 'Niveles (5-50)', pt: 'Número de níveis da grade (5-50)' },
  distribution: { zh: '资金分配方式', en: 'Distribution', es: 'Distribución', pt: 'Distribuição' },
  distributionDesc: { zh: '网格层级的资金分配方式', en: 'Fund allocation across grid levels', es: 'Asignación de fondos', pt: 'Alocação de fundos entre os níveis da grade' },
  uniform: { zh: '均匀分配', en: 'Uniform', es: 'Uniforme', pt: 'Uniforme' },
  gaussian: { zh: '高斯分配 (推荐)', en: 'Gaussian (Recommended)', es: 'Gaussiana (Recomendado)', pt: 'Gaussiana (Recomendado)' },
  pyramid: { zh: '金字塔分配', en: 'Pyramid', es: 'Pirámide', pt: 'Pirâmide' },
  useAtrBounds: { zh: '自动计算边界 (ATR)', en: 'Auto-calculate Bounds (ATR)', es: 'Calcular Límites (ATR)', pt: 'Cálculo Automático de Limites (ATR)' },
  useAtrBoundsDesc: { zh: '基于 ATR 自动计算网格上下边界', en: 'Auto-calculate bounds based on ATR', es: 'Calcular automáticamente', pt: 'Calcular limites automaticamente com base no ATR' },
  atrMultiplier: { zh: 'ATR 倍数', en: 'ATR Multiplier', es: 'Multiplicador ATR', pt: 'Multiplicador ATR' },
  atrMultiplierDesc: { zh: '边界距离当前价格的 ATR 倍数', en: 'ATR multiplier for bounds distance', es: 'Distancia en ATR', pt: 'Multiplicador ATR para distância dos limites' },
  upperPrice: { zh: '上边界价格', en: 'Upper Price', es: 'Precio Superior', pt: 'Preço Limite Superior' },
  upperPriceDesc: { zh: '网格上边界价格 (0=自动计算)', en: 'Grid upper bound (0=auto)', es: 'Límite superior (0=auto)', pt: 'Limite superior da grade (0=auto)' },
  lowerPrice: { zh: '下边界价格', en: 'Lower Price', es: 'Precio Inferior', pt: 'Preço Limite Inferior' },
  lowerPriceDesc: { zh: '网格下边界价格 (0=自动计算)', en: 'Grid lower bound (0=auto)', es: 'Límite inferior (0=auto)', pt: 'Limite inferior da grade (0=auto)' },
  maxDrawdown: { zh: '最大回撤 (%)', en: 'Max Drawdown (%)', es: 'Máximo Drawdown (%)', pt: 'Drawdown Máximo (%)' },
  maxDrawdownDesc: { zh: '触发紧急退出的最大回撤百分比', en: 'Max drawdown before emergency exit', es: 'Drawdown máximo', pt: 'Drawdown máximo antes da saída de emergência' },
  stopLoss: { zh: '止损 (%)', en: 'Stop Loss (%)', es: 'Stop Loss (%)', pt: 'Stop Loss (%)' },
  stopLossDesc: { zh: '单仓位止损百分比', en: 'Stop loss per position', es: 'Stop loss por posición', pt: 'Stop loss por posição' },
  dailyLossLimit: { zh: '日损失限制 (%)', en: 'Daily Loss Limit (%)', es: 'Límite Diario (%)', pt: 'Limite de Perda Diária (%)' },
  dailyLossLimitDesc: { zh: '每日最大亏损百分比', en: 'Maximum daily loss percentage', es: 'Pérdida diaria máxima', pt: 'Porcentagem máxima de perda diária' },
  useMakerOnly: { zh: '仅使用 Maker 订单', en: 'Maker Only Orders', es: 'Solo Maker', pt: 'Apenas Ordens Maker' },
  useMakerOnlyDesc: { zh: '使用限价单以降低手续费', en: 'Use limit orders for lower fees', es: 'Órdenes límite', pt: 'Usar ordens limit para taxas menores' },
  directionAdjust: { zh: '方向自动调整', en: 'Direction Auto-Adjust', es: 'Ajuste Automático', pt: 'Ajuste Automático de Direção' },
  enableDirectionAdjust: { zh: '启用方向调整', en: 'Enable Direction Adjust', es: 'Habilitar Ajuste', pt: 'Habilitar Ajuste de Direção' },
  enableDirectionAdjustDesc: { zh: '根据箱体突破自动调整网格方向', en: 'Auto-adjust grid direction based on box breakouts', es: 'Ajustar según breaks', pt: 'Ajustar direção da grade com base em rompimentos de caixas' },
  directionBiasRatio: { zh: '偏向强度', en: 'Bias Strength', es: 'Intensidad de Sesgo', pt: 'Força do Viés' },
  directionBiasRatioDesc: { zh: '偏多/偏空模式的强度', en: 'Strength for long_bias/short_bias modes', es: 'Fuerza del sesgo', pt: 'Força para os modos viés de alta/baixa' },
  directionBiasExplain: { zh: '偏多模式：X%买 + (100-X)%卖 | 偏空模式：(100-X)%买 + X%卖', en: 'Long bias: X% buy + (100-X)% sell | Short bias: (100-X)% buy + X% sell', es: 'Sesgo largo: X% compra', pt: 'Viés Alta: X% compra + (100-X)% venda | Viés Baixa: (100-X)% compra + X% venda' },
  directionExplain: { zh: '短期箱体突破 → 偏向，中期箱体突破 → 全仓，价格回归 → 逐步恢复中性', en: 'Short box breakout → bias, Mid box breakout → full, Price return → gradually recover to neutral', es: 'Break corto → sesgo', pt: 'Rompimento Curto → viés, Rompimento Médio → cheio, Retorno de Preço → retorno gradual ao neutro' },
  directionModes: { zh: '方向模式说明', en: 'Direction Modes', es: 'Modos', pt: 'Modos de Direção' },
  modeNeutral: { zh: '中性：50%买 + 50%卖（默认）', en: 'Neutral: 50% buy + 50% sell (default)', es: 'Neutral: 50/50', pt: 'Neutro: 50% compra + 50% venda (padrão)' },
  modeLongBias: { zh: '偏多：X%买 + (100-X)%卖', en: 'Long Bias: X% buy + (100-X)% sell', es: 'Sesgo Largo', pt: 'Viés de Alta: X% compra + (100-X)% venda' },
  modeLong: { zh: '全多：100%买 + 0%卖', en: 'Long: 100% buy + 0% sell', es: 'Largo: 100%', pt: 'Alta (Long): 100% compra + 0% venda' },
  modeShortBias: { zh: '偏空：(100-X)%买 + X%卖', en: 'Short Bias: (100-X)% buy + X% sell', es: 'Sesgo Corto', pt: 'Viés de Baixa: (100-X)% compra + X% venda' },
  modeShort: { zh: '全空：0%买 + 100%卖', en: 'Short: 0% buy + 100% sell', es: 'Corto: 100%', pt: 'Baixa (Short): 0% compra + 100% venda' },
};

// ============================================================================
// GRID RISK TRANSLATIONS
// ============================================================================
export const gridRisk = {
  gridRisk: { zh: '网格风控', en: 'Grid Risk', es: 'Riesgo de Grid', pt: 'Risco da Grade' },
  leverageInfo: { zh: '杠杆', en: 'Leverage', es: 'Apalancamiento', pt: 'Alavancagem' },
  positionInfo: { zh: '仓位', en: 'Position', es: 'Posición', pt: 'Posição' },
  liquidationInfo: { zh: '清算', en: 'Liquidation', es: 'Liquidación', pt: 'Liquidação' },
  marketState: { zh: '市场', en: 'Market', es: 'Mercado', pt: 'Mercado' },
  boxState: { zh: '箱体', en: 'Box', es: 'Caja', pt: 'Caixa' },
  currentLeverage: { zh: '当前', en: 'Current', es: 'Actual', pt: 'Atual' },
  effectiveLeverage: { zh: '有效', en: 'Effective', es: 'Efectivo', pt: 'Efetiva' },
  recommendedLeverage: { zh: '建议', en: 'Recommend', es: 'Recomendado', pt: 'Recomendada' },
  currentPosition: { zh: '当前', en: 'Current', es: 'Actual', pt: 'Atual' },
  maxPosition: { zh: '最大', en: 'Max', es: 'Máximo', pt: 'Máximo' },
  positionPercent: { zh: '占比', en: 'Usage', es: 'Uso', pt: 'Uso' },
  liquidationPrice: { zh: '清算价', en: 'Liq Price', es: 'Precio Liquidación', pt: 'Preço de Liq.' },
  liquidationDistance: { zh: '距离', en: 'Distance', es: 'Distancia', pt: 'Distância' },
  regimeLevel: { zh: '波动', en: 'Regime', es: 'Regulación', pt: 'Regime' },
  currentPrice: { zh: '价格', en: 'Price', es: 'Precio', pt: 'Preço' },
  breakoutLevel: { zh: '突破', en: 'Breakout', es: 'Breakout', pt: 'Rompimento' },
  breakoutDirection: { zh: '方向', en: 'Direction', es: 'Dirección', pt: 'Direção' },
  shortBox: { zh: '短期', en: 'Short', es: 'Corto', pt: 'Curto Prazo' },
  midBox: { zh: '中期', en: 'Mid', es: 'Medio', pt: 'Médio Prazo' },
  longBox: { zh: '长期', en: 'Long', es: 'Largo', pt: 'Longo Prazo' },
  narrow: { zh: '窄幅', en: 'Narrow', es: 'Estrecho', pt: 'Estreito' },
  standard: { zh: '标准', en: 'Standard', es: 'Estándar', pt: 'Padrão' },
  wide: { zh: '宽幅', en: 'Wide', es: 'Ancho', pt: 'Largo' },
  volatile: { zh: '剧烈', en: 'Volatile', es: 'Volátil', pt: 'Volátil' },
  trending: { zh: '趋势', en: 'Trending', es: 'Tendencia', pt: 'Tendência' },
  none: { zh: '无', en: 'None', es: 'Ninguno', pt: 'Nenhum' },
  short: { zh: '短期', en: 'Short', es: 'Corto', pt: 'Curto' },
  mid: { zh: '中期', en: 'Mid', es: 'Medio', pt: 'Médio' },
  long: { zh: '长期', en: 'Long', es: 'Largo', pt: 'Longo' },
  up: { zh: '↑', en: '↑', es: '↑', pt: '↑' },
  down: { zh: '↓', en: '↓', es: '↓', pt: '↓' },
  loading: { zh: '加载中...', en: 'Loading...', es: 'Cargando...', pt: 'Carregando...' },
  error: { zh: '加载失败', en: 'Load Failed', es: 'Error al Cargar', pt: 'Erro ao Carregar' },
  noData: { zh: '暂无数据', en: 'No Data', es: 'Sin Datos', pt: 'Sem Dados' },
};

// ============================================================================
// RISK CONTROL TRANSLATIONS
// ============================================================================
export const riskControl = {
  positionLimits: { zh: '仓位限制', en: 'Position Limits', es: 'Límites de Posición', pt: 'Limites de Posição' },
  maxPositions: { zh: '最大持仓数量', en: 'Max Positions', es: 'Máximo de Posiciones', pt: 'Número Máximo de Posições' },
  maxPositionsDesc: { zh: '同时持有的最大币种数量', en: 'Maximum coins held simultaneously', es: 'Monedas máximas', pt: 'Quantidade máxima de moedas mantidas simultaneamente' },
  tradingLeverage: { zh: '交易杠杆（交易所杠杆）', en: 'Trading Leverage (Exchange)', es: 'Apalancamiento', pt: 'Alavancagem de Trading (Exchange)' },
  btcEthLeverage: { zh: 'BTC/ETH 交易杠杆', en: 'BTC/ETH Trading Leverage', es: 'BTC/ETH Apalancamiento', pt: 'Alavancagem BTC/ETH' },
  btcEthLeverageDesc: { zh: '交易所开仓使用的杠杆倍数', en: 'Exchange leverage for opening positions', es: 'Apalancamiento del exchange', pt: 'Alavancagem da exchange para abrir posições' },
  altcoinLeverage: { zh: '山寨币交易杠杆', en: 'Altcoin Trading Leverage', es: 'Apalancamiento Altcoins', pt: 'Alavancagem Altcoins' },
  altcoinLeverageDesc: { zh: '交易所开仓使用的杠杆倍数', en: 'Exchange leverage for opening positions', es: 'Apalancamiento del exchange', pt: 'Alavancagem da exchange para abrir posições' },
  positionValueRatio: { zh: '仓位价值比例（代码强制）', en: 'Position Value Ratio (CODE ENFORCED)', es: 'Ratio de Valor', pt: 'Ratio de Valor da Posição (FORÇADO POR CÓDIGO)' },
  positionValueRatioDesc: { zh: '单仓位名义价值 / 账户净值，由代码强制执行', en: 'Position notional value / equity, enforced by code', es: 'Valor nominal / equity', pt: 'Valor nocional da posição / patrimônio líquido, forçado via código' },
  btcEthPositionValueRatio: { zh: 'BTC/ETH 仓位价值比例', en: 'BTC/ETH Position Value Ratio', es: 'BTC/ETH Ratio', pt: 'Ratio de Valor de Posição BTC/ETH' },
  btcEthPositionValueRatioDesc: { zh: '单仓最大名义价值 = 净值 × 此值（代码强制）', en: 'Max position value = equity × this ratio (CODE ENFORCED)', es: 'Valor máximo = equity × ratio', pt: 'Valor máx. da posição = patrimônio × este ratio (FORÇADO POR CÓDIGO)' },
  altcoinPositionValueRatio: { zh: '山寨币仓位价值比例', en: 'Altcoin Position Value Ratio', es: 'Altcoin Ratio', pt: 'Ratio de Valor de Posição Altcoin' },
  altcoinPositionValueRatioDesc: { zh: '单仓最大名义价值 = 净值 × 此值（代码强制）', en: 'Max position value = equity × this ratio (CODE ENFORCED)', es: 'Valor máximo = equity × ratio', pt: 'Valor máx. da posição = patrimônio × este ratio (FORÇADO POR CÓDIGO)' },
  riskParameters: { zh: '风险参数', en: 'Risk Parameters', es: 'Parámetros', pt: 'Parâmetros de Risco' },
  minRiskReward: { zh: '最小风险回报比', en: 'Min Risk/Reward Ratio', es: 'Ratio Riesgo/Recompensa', pt: 'Ratio Risco/Retorno Mínimo' },
  minRiskRewardDesc: { zh: '开仓要求的最低盈亏比', en: 'Minimum profit ratio for entry', es: 'Ratio mínimo', pt: 'Ratio de lucro mínimo para entrada' },
  maxMarginUsage: { zh: '最大保证金使用率（代码强制）', en: 'Max Margin Usage (CODE ENFORCED)', es: 'Uso Máximo de Margen', pt: 'Uso Máximo de Margem (FORÇADO POR CÓDIGO)' },
  maxMarginUsageDesc: { zh: '保证金使用率上限，由代码强制执行', en: 'Maximum margin utilization, enforced by code', es: 'Límite de margen', pt: 'Limite de utilização de margem, forçado via código' },
  entryRequirements: { zh: '开仓要求', en: 'Entry Requirements', es: 'Requisitos', pt: 'Requisitos de Entrada' },
  minPositionSize: { zh: '最小开仓金额', en: 'Min Position Size', es: 'Tamaño Mínimo', pt: 'Tamanho Mínimo da Posição' },
  minPositionSizeDesc: { zh: 'USDT 最小名义价值', en: 'Minimum notional value in USDT', es: 'Valor mínimo USDT', pt: 'Valor nocional mínimo em USDT' },
  minConfidence: { zh: '最小信心度', en: 'Min Confidence', es: 'Confianza Mínima', pt: 'Confiança Mínima' },
  minConfidenceDesc: { zh: 'AI 开仓信心度阈值', en: 'AI confidence threshold for entry', es: 'Umbral AI', pt: 'Limite de confiança da IA para entrada' },
};

// ============================================================================
// PROMPT SECTIONS TRANSLATIONS
// ============================================================================
export const promptSections = {
  promptSections: { zh: 'System Prompt 自定义', en: 'System Prompt Customization', es: 'Personalización de Prompt', pt: 'Customização do System Prompt' },
  promptSectionsDesc: { zh: '自定义 AI 行为和决策逻辑（输出格式和风控规则不可修改）', en: 'Customize AI behavior and decision logic (output format and risk rules are fixed)', es: 'Personalizar IA', pt: 'Personalize o comportamento e lógica de decisão da IA (formato de saída e regras de risco são fixos)' },
  roleDefinition: { zh: '角色定义', en: 'Role Definition', es: 'Definición de Rol', pt: 'Definição de Papel' },
  roleDefinitionDesc: { zh: '定义 AI 的身份和核心目标', en: 'Define AI identity and core objectives', es: 'Identidad AI', pt: 'Define a identidade e os objetivos centrais da IA' },
  tradingFrequency: { zh: '交易频率', en: 'Trading Frequency', es: 'Frecuencia', pt: 'Frequência de Trading' },
  tradingFrequencyDesc: { zh: '设定交易频率预期和过度交易警告', en: 'Set trading frequency expectations and overtrading warnings', es: 'Frecuencia', pt: 'Define expectativas de frequência e avisos de overtrading' },
  entryStandards: { zh: '开仓标准', en: 'Entry Standards', es: 'Estándares', pt: 'Padrões de Entrada' },
  entryStandardsDesc: { zh: '定义开仓信号条件和避免事项', en: 'Define entry signal conditions and avoidances', es: 'Señales', pt: 'Define condições de sinal de entrada e o que evitar' },
  decisionProcess: { zh: '决策流程', en: 'Decision Process', es: 'Proceso', pt: 'Processo de Decisão' },
  decisionProcessDesc: { zh: '设定决策步骤和思考流程', en: 'Set decision steps and thinking process', es: 'Pasos', pt: 'Define as etapas de decisão e fluxo de pensamento' },
  resetToDefault: { zh: '重置为默认', en: 'Reset to Default', es: 'Restablecer', pt: 'Redefinir para Padrão' },
  chars: { zh: '字符', en: 'chars', es: 'caracteres', pt: 'caracteres' },
};

// ============================================================================
// INDICATOR TRANSLATIONS
// ============================================================================
export const indicator = {
  marketData: { zh: '市场数据', en: 'Market Data', es: 'Datos de Mercado', pt: 'Dados de Mercado' },
  marketDataDesc: { zh: 'AI 分析所需的核心价格数据', en: 'Core price data for AI analysis', es: 'Datos precio', pt: 'Dados de preço essenciais para análise da IA' },
  technicalIndicators: { zh: '技术指标', en: 'Technical Indicators', es: 'Indicadores', pt: 'Indicadores Técnicos' },
  technicalIndicatorsDesc: { zh: '可选的技术分析指标，AI 可自行计算', en: 'Optional indicators, AI can calculate them', es: 'Indicadores opcionales', pt: 'Indicadores opcionais; a IA pode calculá-los por conta própria' },
  marketSentiment: { zh: '市场情绪', en: 'Market Sentiment', es: 'Sentimiento', pt: 'Sentimento de Mercado' },
  marketSentimentDesc: { zh: '持仓量、资金费率等市场情绪数据', en: 'OI, funding rate and market sentiment data', es: 'Sentimiento', pt: 'Dados de OI, taxa de financiamento e sentimento' },
  quantData: { zh: '量化数据', en: 'Quant Data', es: 'Datos Quant', pt: 'Dados Quantitativos' },
  quantDataDesc: { zh: '资金流向、大户动向', en: 'Netflow, whale movements', es: 'Netflow, ballenas', pt: 'Fluxo líquido, movimentação de baleias' },
  timeframes: { zh: '时间周期', en: 'Timeframes', es: 'Marcos', pt: 'Timeframes' },
  timeframesDesc: { zh: '选择 K 线分析周期，★ 为主周期（双击设置）', en: 'Select K-line timeframes, ★ = primary (double-click)', es: 'Timeframes', pt: 'Selecione os períodos das velas, ★ = principal (clique duplo)' },
  klineCount: { zh: 'K 线数量', en: 'K-line Count', es: 'Velas', pt: 'Quantidade de Velas' },
  scalp: { zh: '超短', en: 'Scalp', es: 'Scalp', pt: 'Scalp' },
  intraday: { zh: '日内', en: 'Intraday', es: 'Intradía', pt: 'Intraday' },
  swing: { zh: '波段', en: 'Swing', es: 'Swing', pt: 'Swing' },
  position: { zh: '趋势', en: 'Position', es: 'Posición', pt: 'Posição (Tendência)' },
  rawKlines: { zh: 'OHLCV 原始 K 线', en: 'Raw OHLCV K-lines', es: 'Velas OHLCV', pt: 'Velas OHLCV Brutas' },
  rawKlinesDesc: { zh: '必须 - 开高低收量原始数据，AI 核心分析依据', en: 'Required - Open/High/Low/Close/Volume data for AI', es: 'Datos esenciales', pt: 'Obrigatório - Dados de Abertura/Máxima/Mínima/Fechamento/Volume' },
  required: { zh: '必须', en: 'Required', es: 'Requerido', pt: 'Obrigatório' },
  ema: { zh: 'EMA 均线', en: 'EMA', es: 'EMA', pt: 'EMA' },
  emaDesc: { zh: '指数移动平均线', en: 'Exponential Moving Average', es: 'Media Móvil', pt: 'Média Móvel Exponencial' },
  macd: { zh: 'MACD', en: 'MACD', es: 'MACD', pt: 'MACD' },
  macdDesc: { zh: '异同移动平均线', en: 'Moving Average Convergence Divergence', es: 'MACD', pt: 'Convergência/Divergência de Médias Móveis' },
  rsi: { zh: 'RSI', en: 'RSI', es: 'RSI', pt: 'RSI' },
  rsiDesc: { zh: '相对强弱指标', en: 'Relative Strength Index', es: 'RSI', pt: 'Índice de Força Relativa' },
  atr: { zh: 'ATR', en: 'ATR', es: 'ATR', pt: 'ATR' },
  atrDesc: { zh: '真实波幅均值', en: 'Average True Range', es: 'ATR', pt: 'Média de Intervalo Real' },
  boll: { zh: 'BOLL 布林带', en: 'Bollinger Bands', es: 'Bandas', pt: 'Bandas de Bollinger' },
  bollDesc: { zh: '布林带指标（上中下轨）', en: 'Upper/Middle/Lower Bands', es: 'Bandas', pt: 'Bandas Superior/Média/Inferior' },
  volume: { zh: '成交量', en: 'Volume', es: 'Volumen', pt: 'Volume' },
  volumeDesc: { zh: '交易量分析', en: 'Trading volume analysis', es: 'Volumen', pt: 'Análise de volume de negociação' },
  oi: { zh: '持仓量', en: 'Open Interest', es: 'Interés Abierto', pt: 'Open Interest (OI)' },
  oiDesc: { zh: '合约未平仓量', en: 'Futures open interest', es: 'OI', pt: 'Contratos em aberto em futuros' },
  fundingRate: { zh: '资金费率', en: 'Funding Rate', es: 'Funding Rate', pt: 'Taxa de Financiamento' },
  fundingRateDesc: { zh: '永续合约资金费率', en: 'Perpetual funding rate', es: 'Funding', pt: 'Taxa de financiamento de contratos perpétuos' },
  oiRanking: { zh: 'OI 排行', en: 'OI Ranking', es: 'Ranking OI', pt: 'Ranking de OI' },
  oiRankingDesc: { zh: '持仓量增减排行', en: 'OI change ranking', es: 'Cambios OI', pt: 'Ranking de variação do Open Interest' },
  oiRankingNote: { zh: '显示持仓量增加/减少的币种排行，帮助发现资金流向', en: 'Shows coins with OI increase/decrease, helps identify capital flow', es: 'Flujo capital', pt: 'Mostra moedas com aumento/redução de OI, ajudando a identificar fluxo de capital' },
  netflowRanking: { zh: '资金流向', en: 'NetFlow', es: 'Flujo', pt: 'NetFlow' },
  netflowRankingDesc: { zh: '机构/散户资金流向', en: 'Institution/retail fund flow', es: 'Institucional', pt: 'Fluxo de fundos institucional/varejo' },
  netflowRankingNote: { zh: '显示机构资金流入/流出排行，散户动向对比，发现聪明钱信号', en: 'Shows institution inflow/outflow ranking, retail flow comparison, Smart Money signals', es: 'Smart Money', pt: 'Mostra ranking de entrada/saída institucional e sinais de Smart Money' },
  priceRanking: { zh: '涨跌幅排行', en: 'Price Ranking', es: 'Ranking Precios', pt: 'Ranking de Preços' },
  priceRankingDesc: { zh: '涨跌幅排行榜', en: 'Gainers/losers ranking', es: 'Ganadores', pt: 'Ranking de maiores altas/baixas' },
  priceRankingNote: { zh: '显示涨幅/跌幅排行，结合资金流和持仓变化分析趋势强度', en: 'Shows top gainers/losers, combined with fund flow and OI for trend analysis', es: 'Fuerza tendencia', pt: 'Mostra maiores altas/baixas, combinado com NetFlow e OI para analisar força da tendência' },
  priceRankingMulti: { zh: '多周期', en: 'Multi-period', es: 'Multi-período', pt: 'Multi-período' },
  duration: { zh: '周期', en: 'Duration', es: 'Duración', pt: 'Duração' },
  limit: { zh: '数量', en: 'Limit', es: 'Límite', pt: 'Limite' },
  aiCanCalculate: { zh: '💡 提示：AI 可自行计算这些指标，开启可减少 AI 计算量', en: '💡 Tip: AI can calculate these, enabling reduces AI workload', es: '💡 Tip: AI puede calcularlos', pt: '💡 Dica: A IA pode calcular estes indicadores; habilitá-los reduz a carga de processamento da IA' },
  nofxosTitle: { zh: 'NofxOS 量化数据源', en: 'NofxOS Data Provider', es: 'Proveedor NofxOS', pt: 'Provedor de Dados NofxOS' },
  nofxosDesc: { zh: '专业加密货币量化数据服务', en: 'Professional crypto quant data service', es: 'Servicio quant', pt: 'Serviço profissional de dados quantitativos de cripto' },
  nofxosFeatures: { zh: 'AI500 · OI排行 · 资金流向 · 涨跌榜', en: 'AI500 · OI Ranking · Fund Flow · Price Ranking', es: 'Ranking', pt: 'AI500 · Ranking de OI · NetFlow · Ranking de Preços' },
  viewApiDocs: { zh: 'API 文档', en: 'API Docs', es: 'Docs API', pt: 'Docs da API' },
  apiKey: { zh: 'API Key', en: 'API Key', es: 'API Key', pt: 'Chave API' },
  apiKeyPlaceholder: { zh: '输入 NofxOS API Key', en: 'Enter NofxOS API Key', es: 'Ingresar API Key', pt: 'Digite a API Key do NofxOS' },
  fillDefault: { zh: '填入默认', en: 'Fill Default', es: 'Default', pt: 'Preencher Padrão' },
  connected: { zh: '已配置', en: 'Configured', es: 'Configurado', pt: 'Configurado' },
  notConfigured: { zh: '未配置', en: 'Not Configured', es: 'No Configurado', pt: 'Não Configurado' },
  nofxosDataSources: { zh: 'NofxOS 数据源', en: 'NofxOS Data Sources', es: 'Fuentes', pt: 'Fontes de Dados NofxOS' },
};

// ============================================================================
// PUBLISH SETTINGS TRANSLATIONS
// ============================================================================
export const publishSettings = {
  publishToMarket: { zh: '发布到策略市场', en: 'Publish to Market', es: 'Publicar al Mercado', pt: 'Publicar no Mercado' },
  publishDesc: { zh: '策略将在市场公开展示，其他用户可发现并使用', en: 'Strategy will be publicly visible in the marketplace', es: 'Visible públicamente', pt: 'A estratégia ficará visível publicamente no marketplace' },
  showConfig: { zh: '公开配置参数', en: 'Show Config', es: 'Mostrar Config', pt: 'Mostrar Configuração' },
  showConfigDesc: { zh: '允许他人查看和复制详细配置', en: 'Allow others to view and clone config details', es: 'Permitir clonación', pt: 'Permitir que outros visualizem e clonem os detalhes da configuração' },
  private: { zh: '私有', en: 'PRIVATE', es: 'PRIVADO', pt: 'PRIVADO' },
  public: { zh: '公开', en: 'PUBLIC', es: 'PÚBLICO', pt: 'PÚBLICO' },
  hidden: { zh: '隐藏', en: 'HIDDEN', es: 'OCULTO', pt: 'OCULTO' },
  visible: { zh: '可见', en: 'VISIBLE', es: 'VISIBLE', pt: 'VISÍVEL' },
};

// ============================================================================
// CHART TABS TRANSLATIONS
// ============================================================================
export const chartTabs = {
  crypto: { zh: '加密', en: 'Crypto', es: 'Cripto', pt: 'Cripto' },
  stocks: { zh: '美股', en: 'Stocks', es: 'Acciones', pt: 'Ações' },
  forex: { zh: '外汇', en: 'Forex', es: 'Forex', pt: 'Forex' },
  metals: { zh: '金属', en: 'Metals', es: 'Metales', pt: 'Metais' },
  hyperliquid: { zh: 'HL', en: 'HL', es: 'HL', pt: 'HL' },
};

// ============================================================================
// AGGREGATED EXPORTS FOR TRANSLATIONS.TS
// ============================================================================

export const ptStrategy = {
  ...Object.fromEntries(Object.entries(coinSource).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(gridConfig).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(gridRisk).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(riskControl).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(promptSections).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(indicator).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(publishSettings).map(([k, v]) => [k, v.pt])),
  ...Object.fromEntries(Object.entries(chartTabs).map(([k, v]) => [k, v.pt])),
};