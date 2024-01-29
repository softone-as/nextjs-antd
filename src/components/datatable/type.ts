import type { TableProps } from "antd/es/table";
import {
  ColumnType,
  FilterValue,
  SorterResult,
  TableAction,
} from "antd/es/table/interface";

import React from "react";
import {
  MenuDividerType,
  MenuItemGroupType,
  MenuItemType,
  SubMenuType,
} from "antd/es/menu/hooks/useItems";

export type TOrder = {
  order: "ASC" | "DESC" | undefined;
};

export type TOnSort<T> = Omit<SorterResult<T>, "order"> & TOrder;

/* Custom types component Dropdown ant design for supporting passing selectedRowKeys from component DataTable */
export declare type MenuClickEventHandler = (
  info: MenuInfo,
  selectedRowKeys?: React.Key[],
) => void;

export type MenuInfo = {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
};

export interface IMenuItemType extends Omit<MenuItemType, "onClick"> {
  onClick?: MenuClickEventHandler;
}
export interface ISubMenuType extends Omit<SubMenuType, "onClick"> {
  onClick?: MenuClickEventHandler;
}
export type ItemType =
  | IMenuItemType
  | ISubMenuType
  | MenuItemGroupType
  | MenuDividerType
  | null;

export type DataTableSorter<T extends Record<string, unknown>> = {
  column?: ColumnType<T>;
  order?: "DESC" | "ASC" | null;
  field?: React.Key | readonly React.Key[];
  sort?: string;
};

export type DataTablePagination = {
  total?: number;
  page?: number;
  per_page?: number;
};

export type CustomFilter<X extends Record<string, unknown>> =
  | (X & {
      search?: string;
    })
  | { search?: string };

export interface ITableCurrentDataSource<RecordType> {
  action: TableAction | "custom";
  currentDataSource?: RecordType[];
  customContext?: unknown[];
}

export type FilterState<
  T extends Record<string, unknown>,
  X extends Record<string, unknown>,
> = {
  custom?: CustomFilter<X>;
  sorter?: DataTableSorter<T>;
  filters?: Record<string, FilterValue | null>;
  pagination?: DataTablePagination;
  extra?: ITableCurrentDataSource<T>;
};

export type TCustomQueryKey = {
  sort?: string;
  order?: string;
  search?: string;
  page?: string;
  per_page?: string;
};

export interface IDataTableProps<
  T extends Record<string, unknown>,
  X extends Record<string, unknown>,
> extends Omit<TableProps<T>, "onChange" | "dataSource" | "pagination"> {
  defaultCurrent?: number;
  batchActionMenus?: ItemType[];
  filterComponents?: unknown[];
  search?: string;
  source?: {
    data?: TableProps<T>["dataSource"];
    meta?: TableProps<T>["pagination"];
  };
  onChange?: (
    customFilter?: CustomFilter<X>,
    sorter?: DataTableSorter<T>,
    filters?: Record<string, FilterValue | null>,
    pagination?: DataTablePagination,
    extra?: ITableCurrentDataSource<T>,
  ) => void;
  customQueryKey?: TCustomQueryKey;
}
