
export interface DetailedMeasure {
  id: number;
  title: string;
  objective: string;
  details: string[];
  impact?: string;
  cost?: string;
  financing?: string;
}

export interface BlockData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  measures: string[];
  quotes?: string[];
  detailedMeasures?: DetailedMeasure[];
  conclusion?: string;
}
