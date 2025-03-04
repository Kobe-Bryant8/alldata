import {ActionContext, ActionTree, GetterTree, Module, MutationTree, Store} from 'vuex';

export declare global {
  interface RootStoreState {
    common: CommonStoreState;
    layout: LayoutStoreState;
    node: NodeStoreState;
    project: ProjectStoreState;
    spider: SpiderStoreState;
    task: TaskStoreState;
    file: FileStoreState;
    tag: TagStoreState;
    dataCollection: DataCollectionStoreState;
    schedule: ScheduleStoreState;
    user: UserStoreState;
    token: TokenStoreState;
    plugin: PluginStoreState;
    git: GitStoreState;
    notification: NotificationStoreState;
  }

  type StoreGetter<S, T, R = RootStoreState> = (state: S, getters: GetterTree<S, R>, rootState: R, rootGetters: any) => T;

  type StoreMutation<S, P> = (state: S, payload: P) => void;

  type StoreActionHandler<S, P, T, R = RootStoreState> = (this: Store<R>, ctx: ActionContext<S, R>, payload?: P) => T;

  interface StoreActionObject<S, P, T> {
    root?: boolean;
    handler: StoreActionHandler<S, P, T>;
  }

  type StoreAction<S, P, T> =
    StoreActionHandler<S, P, T>
    | StoreActionObject<S, P, T>;

  interface BaseModule<S, G = any, M = any, A = any, R = RootStoreState> extends Module<S, R> {
    getters: G;
    mutations: M;
    actions: A;
  }

  interface BaseStoreState<T = any> {
    ns: StoreNamespace;
    dialogVisible: DialogVisible;
    activeDialogKey: DialogKey | undefined;
    createEditDialogTabName: CreateEditTabName;
    form: T;
    isSelectiveForm: boolean;
    selectedFormFields: string[];
    readonlyFormFields: string[];
    formList: T[];
    newFormFn: DefaultFormFunc<T | {}>;
    confirmLoading: boolean;
    tableData: TableData<T>;
    tableTotal: number;
    tablePagination: TablePagination;
    tableListFilter: FilterConditionData[];
    tableListSort: SortData[];
    allList: T[];
    sidebarCollapsed: boolean;
    actionsCollapsed: boolean;
    tabs: NavItem[];
    afterSave: (() => Promise)[];
  }

  interface BaseStoreGetters<S = BaseStoreState, R = RootStoreState> extends GetterTree<S, R> {
    dialogVisible: StoreGetter<BaseStoreState, boolean>;
    isBatchForm: StoreGetter<BaseStoreState, boolean>;
    formListIds: StoreGetter<BaseStoreState, string[]>;
    allListSelectOptions: StoreGetter<BaseStoreState, SelectOption[]>;
    allDict: StoreGetter<BaseStoreState, Map<string, T>>;
    tabName: StoreGetter<BaseStoreState, string>;
    allTags: StoreGetter<BaseStoreState, Tag[]>;
    tabs: StoreGetter<BaseStoreState, NavItem[]>;
  }

  interface BaseStoreMutations<T = any> extends MutationTree<BaseStoreState<T>> {
    showDialog: StoreMutation<BaseStoreState<T>, DialogKey>;
    hideDialog: StoreMutation<BaseStoreState<T>>;
    setCreateEditDialogTabName: StoreMutation<BaseStoreState<T>, CreateEditTabName>;
    resetCreateEditDialogTabName: StoreMutation<BaseStoreState<T>>;
    setForm: StoreMutation<BaseStoreState<T>, T>;
    resetForm: StoreMutation<BaseStoreState<T>>;
    setIsSelectiveForm: StoreMutation<BaseStoreState<T>, boolean>;
    setSelectedFormFields: StoreMutation<BaseStoreState<T>, string[]>;
    resetSelectedFormFields: StoreMutation<BaseStoreState<T>>;
    setReadonlyFormFields: StoreMutation<BaseStoreState<T>, string[]>;
    resetReadonlyFormFields: StoreMutation<BaseStoreState<T>>;
    setFormList: StoreMutation<BaseStoreState<T>, T[]>;
    resetFormList: StoreMutation<BaseStoreState<T>>;
    setConfirmLoading: StoreMutation<BaseStoreState<T>, boolean>;
    setTableData: StoreMutation<BaseStoreState<T>, TableDataWithTotal<T>>;
    resetTableData: StoreMutation<BaseStoreState<T>>;
    setTablePagination: StoreMutation<BaseStoreState<T>, TablePagination>;
    resetTablePagination: StoreMutation<BaseStoreState<T>>;
    setTableListFilter: StoreMutation<BaseStoreState<T>, FilterConditionData[]>;
    resetTableListFilter: StoreMutation<BaseStoreState<T>>;
    setTableListFilterByKey: StoreMutation<BaseStoreState<T>, { key: string; conditions: FilterConditionData[] }>;
    resetTableListFilterByKey: StoreMutation<BaseStoreState<T>, string>;
    setTableListSort: StoreMutation<BaseStoreState<T>, SortData[]>;
    resetTableListSort: StoreMutation<BaseStoreState<T>>;
    setTableListSortByKey: StoreMutation<BaseStoreState<T>, { key: string; sort: SortData }>;
    resetTableListSortByKey: StoreMutation<BaseStoreState<T>, string>;
    setAllList: StoreMutation<BaseStoreState<T>, T[]>;
    resetAllList: StoreMutation<BaseStoreState<T>>;
    expandSidebar: StoreMutation<BaseStoreState<T>>;
    collapseSidebar: StoreMutation<BaseStoreState<T>>;
    expandActions: StoreMutation<BaseStoreState<T>>;
    collapseActions: StoreMutation<BaseStoreState<T>>;
    setTabs: StoreMutation<BaseStoreState, NavItem[]>;
    setAfterSave: StoreMutation<BaseStoreState<T>, (() => Promise)[]>;
  }

  interface BaseStoreActions<T = any, R = RootStoreState> extends ActionTree<BaseStoreState<T>, R> {
    getById: StoreAction<BaseStoreState<T>, string>;
    create: StoreAction<BaseStoreState<T>, T>;
    updateById: StoreAction<BaseStoreState<T>, { id: string; form: T }>;
    deleteById: StoreAction<BaseStoreState<T>, string>;
    getList: StoreAction<BaseStoreState<T>>;
    getListWithParams: StoreAction<BaseStoreState<T>, ListRequestParams>;
    getAllList: StoreAction<BaseStoreState<T>>;
    createList: StoreAction<BaseStoreState<T>, T[]>;
    updateList: StoreAction<BaseStoreState<T>, BatchRequestPayloadWithData<T>>;
    deleteList: StoreAction<BaseStoreState<T>, BatchRequestPayload>;
  }

  type StoreActionContext<S = BaseStoreState, R = RootStoreState> = ActionContext<S, R>;

  type StoreNamespace =
    'layout'
    | 'node'
    | 'project'
    | 'spider'
    | 'task'
    | 'schedule'
    | 'file'
    | 'tag'
    | 'dataCollection'
    | 'user'
    | 'token'
    | 'plugin'
    | 'git'
    | 'notification';
  type ListStoreNamespace =
    'node'
    | 'project'
    | 'spider'
    | 'task'
    | 'tag'
    | 'dataCollection'
    | 'schedule'
    | 'user'
    | 'token'
    | 'plugin'
    | 'git'
    | 'notification';

  interface StoreContext<T, R = RootStoreState> {
    namespace: StoreNamespace;
    store: Store<R>;
    state: BaseStoreState<T>;
  }

  interface ListStoreContext<T, R = RootStoreState> extends StoreContext<T> {
    namespace: ListStoreNamespace;
    state: R[ListStoreNamespace];
  }

  type DetailStoreContext<T> = ListStoreContext<T>;

  interface GetDefaultStoreGettersOptions {
    selectOptionValueKey?: string;
    selectOptionLabelKey?: string;
  }
}
