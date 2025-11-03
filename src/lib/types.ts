export interface AideTransformation {
  id: string;
  name: string;
  before: string;
  after: string;
  impact: string;
}

export interface DetailedMeasure {
  id: number;
  title: string;
  objective: string;
  details: string[];
  impact?: string;
  cost?: string;
  financing?: string;
  aidesTransformation?: AideTransformation[];
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
