enum BM_TYPE {
  G = 'gene',
  P = 'protein',
}

export interface Reference {
  id?: string;
  doi?: string;
  notes?: string;
}

export interface Structure {
  name?: string;
  id?: string;
  rdfs_label?: string;
  b_type?: BM_TYPE;
  isNew?: boolean;
  color?: string;
}

export interface Row {
  anatomical_structures: Array<Structure>;
  cell_types: Array<Structure>;
  biomarkers: Array<Structure>;
  biomarkers_gene: Array<Structure>;
  biomarkers_protein: Array<Structure>;
  references: Reference[];
}

export interface ResponseData {
  csv: string;
  data: Row[];
  parsed: [];
}

export interface Sheet {
  name: string;
  sheetId: string;
  gid: string;
  display: string;
  config: SheetConfig;
  title: string;
  data?: string;
}

export interface CompareData {
  link: string;
  title: string;
  description: string;
  color: string;
  sheetId: string;
  gid: string;
}

export interface SheetConfig {
  bimodal_distance_y: number;
  bimodal_distance_x: number;
  width: number;
  height: number;
  show_ontology?: boolean;
  show_all_AS?: boolean;
}

export interface SheetInfo {
  name: string;
  ontologyId: string;
  iri: string;
  label: string;
  desc: string;
  hasError: boolean;
  msg: string;
  status: number;
}
