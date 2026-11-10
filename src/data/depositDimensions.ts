/**
 * Tablas de medidas facilitadas por Depofibra (10/11/2026).
 * Son datos orientativos pendientes de confirmar por referencia/fabricante.
 *
 * La tabla de verticales denomina «longitud» a la segunda cota tras el diámetro.
 * En la web se muestra como «Cota de ficha» para no afirmar que equivale a la
 * altura total (la boca de hombre y accesorios pueden modificarla).
 */
export interface DepositDimension {
  liters: number;
  diameterMm: number;
  longitudinalMm: number;
  supports?: string;
}

// 17 configuraciones: se conservan dos dimensiones distintas para 5.000 L.
export const verticalFlatBaseDimensions: DepositDimension[] = [
  { liters: 5000, diameterMm: 1700, longitudinalMm: 2500 },
  { liters: 5000, diameterMm: 2050, longitudinalMm: 1650 },
  { liters: 6000, diameterMm: 1700, longitudinalMm: 3100 },
  { liters: 8000, diameterMm: 2050, longitudinalMm: 2750 },
  { liters: 9000, diameterMm: 2050, longitudinalMm: 3000 },
  { liters: 10000, diameterMm: 2450, longitudinalMm: 2500 },
  { liters: 12000, diameterMm: 2450, longitudinalMm: 3000 },
  { liters: 15000, diameterMm: 2450, longitudinalMm: 3650 },
  { liters: 18000, diameterMm: 2450, longitudinalMm: 4150 },
  { liters: 20000, diameterMm: 2450, longitudinalMm: 4850 },
  { liters: 25000, diameterMm: 2450, longitudinalMm: 5800 },
  { liters: 30000, diameterMm: 3000, longitudinalMm: 4300 },
  { liters: 35000, diameterMm: 3000, longitudinalMm: 5400 },
  { liters: 40000, diameterMm: 3000, longitudinalMm: 6100 },
  { liters: 45000, diameterMm: 3000, longitudinalMm: 6800 },
  { liters: 50000, diameterMm: 3000, longitudinalMm: 7500 },
  { liters: 60000, diameterMm: 3000, longitudinalMm: 9000 },
];

// 23 configuraciones: las cunas corresponden al producto para superficie.
export const horizontalCradleDimensions: DepositDimension[] = [
  { liters: 4000, diameterMm: 1700, longitudinalMm: 2100, supports: '2' },
  { liters: 5000, diameterMm: 1700, longitudinalMm: 2500, supports: '2' },
  { liters: 6000, diameterMm: 1700, longitudinalMm: 3100, supports: '2' },
  { liters: 6000, diameterMm: 2050, longitudinalMm: 2300, supports: '2' },
  { liters: 7000, diameterMm: 2050, longitudinalMm: 2700, supports: '2' },
  { liters: 8000, diameterMm: 2050, longitudinalMm: 3000, supports: '2' },
  { liters: 9000, diameterMm: 2050, longitudinalMm: 3200, supports: '3' },
  { liters: 10000, diameterMm: 2050, longitudinalMm: 3500, supports: '3' },
  { liters: 10000, diameterMm: 2450, longitudinalMm: 2500, supports: '2' },
  { liters: 12000, diameterMm: 2050, longitudinalMm: 4000, supports: '3' },
  { liters: 12000, diameterMm: 2450, longitudinalMm: 3000, supports: '3' },
  { liters: 15000, diameterMm: 2450, longitudinalMm: 3700, supports: '3' },
  { liters: 16000, diameterMm: 2450, longitudinalMm: 4000, supports: '3' },
  { liters: 18000, diameterMm: 2450, longitudinalMm: 4450, supports: '4' },
  { liters: 20000, diameterMm: 2450, longitudinalMm: 4900, supports: '4' },
  { liters: 25000, diameterMm: 2450, longitudinalMm: 5800, supports: '5' },
  { liters: 30000, diameterMm: 2450, longitudinalMm: 7400, supports: '6' },
  { liters: 30000, diameterMm: 3000, longitudinalMm: 4600, supports: '5' },
  { liters: 35000, diameterMm: 3000, longitudinalMm: 5500, supports: '4' },
  { liters: 40000, diameterMm: 3000, longitudinalMm: 6200, supports: '5' },
  { liters: 45000, diameterMm: 3000, longitudinalMm: 7000, supports: '6' },
  { liters: 50000, diameterMm: 3000, longitudinalMm: 7500, supports: '7' },
  { liters: 60000, diameterMm: 3000, longitudinalMm: 9000, supports: '8 o más' },
];

export type DimensionMode = 'vertical' | 'surface-horizontal' | 'buried-horizontal';

export function getDepositDimensions(slug: string): { mode: DimensionMode; rows: DepositDimension[] } | null {
  if (slug === 'vertical-base-plana') return { mode: 'vertical', rows: verticalFlatBaseDimensions };
  if (slug === 'horizontal-con-cunas') return { mode: 'surface-horizontal', rows: horizontalCradleDimensions };
  if (slug === 'horizontal-enterrable') {
    return { mode: 'buried-horizontal', rows: horizontalCradleDimensions };
  }
  return null;
}
