import { Component, OnInit, Output, Input, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';



import { ReplaySubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { BimodalService } from '../../modules/tree/bimodal.service';
import { Store, Select, NgxsOnInit } from '@ngxs/store';
import { TreeState, TreeStateModel } from '../../store/tree.state';
import { SearchStructure, TNode } from '../../models/tree.model';
import { DoSearch } from '../../actions/tree.actions';
import { BMNode } from '../../models/bimodal.model';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';
import { GaAction, GaCategory } from '../../models/ga.model';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() disabled = false;

  protected structures: SearchStructure[] = [];

  /** control for the selected structures for multi-selection */
  public structuresMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public structuresMultiFilterCtrl: FormControl = new FormControl();

  /** list of structures filtered by search keyword */
  public filteredstructuresMulti: ReplaySubject<SearchStructure[]> = new ReplaySubject<SearchStructure[]>(1);

  @ViewChild('searchField') searchField: MatInput;

  /** Subject that emits when the component has been destroyed. */
  protected subjectOnDestroy = new Subject<void>();

  @Select(TreeState) tree$: Observable<TreeStateModel>;

  treeData: TNode[];
  nodes: BMNode[];
  showList: boolean = false;

  constructor(
    // private dialogRef: MatDialogRef<SearchComponent>,
    public bms: BimodalService,
    public store: Store,
    public ga: GoogleAnalyticsService
  ) {

    this.tree$.subscribe(tree => {
      this.structuresMultiCtrl.setValue(tree.search);
      this.treeData = tree.treeData;
      this.nodes = tree.bimodal.nodes;
    });
  }


  ngOnInit() {

  }

  onOptionSelect() {
    this.store.dispatch(new DoSearch(this.structuresMultiCtrl.value));
    console.log(this.structuresMultiCtrl);
    const selectedValues = this.structuresMultiCtrl.value.map(obj => obj.name.replace(' ' , '_')).join();
    this.ga.eventEmitter('nav_search_filter_select', GaCategory.NAVBAR, 'Select/Deselect Search Filters', GaAction.CLICK, selectedValues);
  }

  createSearchList() {
    const searchSet = new Set<SearchStructure>();

    for (const node of this.treeData) {
        if (node.children !== 0) {
          searchSet.add({
            id: node.id,
            name: node.name,
            groupName: 'Anatomical Structures',
            x: node.x,
            y: node.y
          });
        }

      }

    for (const node of this.nodes) {
        searchSet.add({
          id: node.id,
          name: node.name,
          groupName: node.groupName,
          x: node.x,
          y: node.y
        });
      }

    this.structures = [...searchSet];
    this.filteredstructuresMulti.next(this.structures.slice());

    // Show search dropdown
    this.showList = true;
    this.searchField.focus();
    this.ga.eventEmitter('nav_search_clicked', GaCategory.NAVBAR, 'Click Search Box', GaAction.CLICK);
  }

  ngAfterViewInit() {
    // listen for search field value changes
    this.structuresMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this.subjectOnDestroy))
      .subscribe((r) => {
        this.filterstructuressMulti();
      });
  }

  protected filterstructuressMulti() {
    if (!this.structures) {
      return;
    }
    // get the search keyword
    let search = this.structuresMultiFilterCtrl.value;
    if (!search) {
      this.filteredstructuresMulti.next(this.structures.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the structures
    this.filteredstructuresMulti.next(
      this.structures.filter(structures => structures.name.toLowerCase().includes(search))
    );
    // This event fires for every letter typed
    this.ga.eventEmitter('nav_search_term', GaCategory.NAVBAR, 'Search term typed in', GaAction.INPUT, search);
  }

}
