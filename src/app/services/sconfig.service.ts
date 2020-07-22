import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SconfigService {

  SHEET_CONFIG = [
    {
      name: 'ao',
      display: 'All Organs',
      header_count: 1,
      cell_col: 2,
      marker_col: 3,
      uberon_col: 0,
      report_cols: [1, 2],
      tree_cols: [1],
      indent_cols: [1, 2],
      body: 'Body',
      config: {
        bimodal_distance: 450,
        width: 700,
        width_offset: 750,
        height_offset: 4500
      },
      title: 'Organs'
    },
    {
      name: 'spleen',
      display: 'Spleen',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '1283919854',
      header_count: 1,
      cell_col: 15,
      marker_col: 18,
      uberon_col: 2,
      report_cols: [0, 3, 6, 9, 12, 15, 18],
      tree_cols: [0, 3, 6, 9, 12],
      indent_cols: [0, 3, 6, 9, 12, 15],
      body: 'Spleen',
      config: {
        bimodal_distance: 350,
        width: 1000,
        width_offset: 550,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'kidney',
      display: 'Kidney',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '1074409228',
      header_count: 1,
      cell_col: 4,
      marker_col: 6,
      uberon_col: 0,
      report_cols: [0, 1, 2, 4],
      tree_cols: [0, 1],
      indent_cols: [0, 1, 2],
      body: 'Kidney',
      config: {
        bimodal_distance: 350,
        width: 700,
        width_offset: 600,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'liver',
      display: 'Liver',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '1218756021',
      header_count: 1,
      cell_col: 3,
      marker_col: 4,
      uberon_col: 0,
      report_cols: [0, 1, 2, 3, 4],
      tree_cols: [0, 1, 2],
      indent_cols: [0, 1, 2, 3],
      body: 'Liver',
      config: {
        bimodal_distance: 360,
        width: 800,
        width_offset: 600,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'lymph',
      display: 'Lymph Nodes',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '272157091',
      header_count: 1,
      cell_col: 4,
      marker_col: 5,
      uberon_col: 0,
      report_cols: [0, 1, 2, 3, 4, 5],
      tree_cols: [0, 1, 2, 3],
      indent_cols: [0, 1, 2, 3, 4],
      body: 'Lymph Nodes',
      config: {
        bimodal_distance: 350,
        width: 1200,
        width_offset: 350,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'heart',
      display: 'Heart',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '1799670106',
      header_count: 2,
      cell_col: 6,
      marker_col: 9,
      uberon_col: 2,
      report_cols: [0, 3, 6, 9],
      tree_cols: [0, 3],
      indent_cols: [0, 3, 6],
      body: 'Heart',
      config: {
        bimodal_distance: 400,
        width: 800,
        width_offset: 550,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'si',
      display: 'Small Intestine',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '766906089',
      header_count: 1,
      cell_col: 4,
      marker_col: 6,
      uberon_col: 0,
      report_cols: [0, 1, 2, 3, 4, 6],
      tree_cols: [0, 1, 2, 3],
      indent_cols: [0, 1, 2, 3, 4],
      body: 'Small Intestine',
      config: {
        bimodal_distance: 360,
        width: 1200,
        width_offset: 0,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'li',
      display: 'Large Intestine',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '82644608',
      header_count: 1,
      cell_col: 4,
      marker_col: 5,
      uberon_col: 0,
      report_cols: [0, 1, 2, 3, 4, 5],
      tree_cols: [0, 1, 2, 3],
      indent_cols: [0, 1, 2, 3, 4],
      body: 'Large Intestine',
      config: {
        bimodal_distance: 360,
        width: 1200,
        width_offset: 0,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
    {
      name: 'skin',
      display: 'Skin',
      sheetId: '1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI',
      gid: '1268820100',
      header_count: 1,
      cell_col: 3,
      marker_col: 4,
      uberon_col: 0,
      report_cols: [0, 1, 2, 3],
      tree_cols: [0, 1, 2],
      indent_cols: [0, 1, 2, 3],
      body: 'Skin',
      config: {
        bimodal_distance: 350,
        width: 800,
        width_offset: 650,
        height_offset: 200
      },
      title: 'Anatomical Structures'
    },
  ];


  constructor() { }
}
