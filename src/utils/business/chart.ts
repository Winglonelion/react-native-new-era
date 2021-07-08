const MAP_COLOR: Record<string, string> = {
  taxes: '#77569E',
  benefits: '#4FA5AD',
  retirements: '#E28080',
  other: '#C0CAB8',
  take_home: '#FF894D',
};

export function mapPieColor(type: string) {
  return MAP_COLOR[type] ?? 'transparent';
}
