import {Sheet, CompareData, SheetConfig} from './../models/sheet.model';

export class FetchSheetData {
  static readonly type = '[FETCH] Sheet Data';
  constructor(public sheet: Sheet) {}
}

export class RefreshData {
  static readonly type = '[FETCH] Refresh';
  constructor() {}
}

export class FetchDataFromAssets {
  static readonly type = '[FETCH] Data from Assets';
  constructor(public version: string, public sheet: Sheet) {}
}

export class FetchAllOrganData {
  static readonly type = '[FETCH] All Organ Data';
  constructor(public sheet: Sheet) {}
}

export class FetchCompareData {
  static readonly type = '[FETCH] Compare Data';
  constructor(public compareData: CompareData[]) {}
}

export class UpdateConfig {
  static readonly type = '[UPDATE] Sheet Config';
  constructor(public config: SheetConfig) {}
}

export class ToggleShowAllAS {
  static readonly type = '[SHOW ALL AS]';
  constructor() {}
}

export class UpdateReport {
  static readonly type = '[Update] Report Statistics';
  constructor(public reportData: any) {}
}

export class DeleteCompareSheet {
  static readonly type = '[DELETE] Compare Sheet';
  constructor(public i: number) {}
}

export class UpdateMode {
  static readonly type = '[UPDATE] Mode';
  constructor(public mode: string) {}
}

export class UpdatePrevSheet {
  static readonly type = '[UPDATE] Previous Sheet';
  constructor(public sheet: string) {}
}

export class UpdateSheet {
  static readonly type = '[UPDATE] Sheet';
  constructor(public sheet: any) {}
}

export class FetchInitialPlaygroundData {
  static readonly type = '[FETCH] Initial Playground Data';
  constructor() {}
}