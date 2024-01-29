"use client";

import React, { useRef, useState } from "react";
import { Table, Pagination, Space, PaginationProps, theme } from "antd";
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { IDataTableProps, TOnSort, FilterState } from "./type";

const stylePagination: React.CSSProperties = {
  display: "flex",
  justifyContent: "end",
  padding: "8px",
};
const tableLayout: React.CSSProperties = { width: "100%" };

const DataTable = <
  T extends Record<string, unknown>,
  X extends Record<string, unknown>,
>(
  props: IDataTableProps<T, X> & {
    showSearch?: boolean;
    showRowSelection?: boolean;
  },
): JSX.Element => {
  const {
    defaultCurrent,
    rowSelection,
    filterComponents,
    onChange,
    search,
    customQueryKey,
    showRowSelection = true,
    source,
    ...rest
  } = props;

  const [, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [state, setState] = useState<FilterState<T, X>>({
    custom: {
      search,
    },
  });
  const stateRef = useRef<FilterState<T, X>>(state);
  const { token } = theme.useToken();

  const handleSetState = (value: FilterState<T, X>) => {
    setState(value);
    stateRef.current = value;
  };

  const handleOnChange = (value: FilterState<T, X>) => {
    handleSetState(value);
    onChange?.(
      value.custom,
      value.sorter,
      value.filters,
      value.pagination,
      value.extra,
    );
  };

  const handleSelectRow = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handlePageChange: PaginationProps["onChange"] = (page, pageSize) => {
    const newState: FilterState<T, X> = {
      ...stateRef.current,
      pagination: {
        ...(stateRef.current.pagination || {}),
        [customQueryKey?.page ?? "page"]: page,
        [customQueryKey?.per_page ?? "per_page"]: pageSize,
      },
      extra: {
        action: "paginate",
        customContext: filterComponents,
      },
    };
    handleOnChange(newState);
  };

  const handleTableChange = (
    filters: Record<string, FilterValue | null>,
    sorter: TOnSort<T>,
    extra: TableCurrentDataSource<T>,
  ) => {
    const newState: FilterState<T, X> = {
      ...stateRef.current,
      filters: {
        ...(stateRef.current.filters || {}),
        ...filters,
      },
      sorter: {
        ...(stateRef.current.sorter || {}),
        field: sorter.field,
        column: sorter.column,
        [customQueryKey?.sort ?? "sort"]: String(sorter.columnKey),
        [customQueryKey?.order ?? "order"]: sorter.order,
      },
      extra: {
        ...extra,
        customContext: filterComponents,
      },
    };
    handleOnChange(newState);
  };

  console.log(source);

  return (
    <>
      <Space.Compact direction="vertical" style={tableLayout}>
        <Table<T>
          rowSelection={
            showRowSelection
              ? {
                  onChange: handleSelectRow,
                  ...rowSelection,
                }
              : undefined
          }
          {...rest}
          dataSource={source?.data}
          style={tableLayout}
          size="small"
          pagination={false}
          onChange={(
            _pagination,
            filters,
            sorter: SorterResult<T> | SorterResult<T>[],
            extra,
          ): void => {
            // WIP: temporary disabled multiple sorter
            if (Array.isArray(sorter)) return;
            const newSorter: TOnSort<T> = {
              ...sorter,
              order:
                sorter.order !== undefined
                  ? sorter.order === "ascend"
                    ? "ASC"
                    : "DESC"
                  : undefined,
            };

            handleTableChange(filters, newSorter, extra);
          }}
        />

        {source?.meta && !!source?.meta?.total && (
          <div
            style={{
              ...stylePagination,
              backgroundColor: token.colorBgContainer,
            }}
          >
            <Pagination
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultCurrent={defaultCurrent || 1}
              showSizeChanger
              {...source.meta}
              onChange={handlePageChange}
              pageSizeOptions={[5, 10, 20, 50, 100]}
            />
          </div>
        )}
      </Space.Compact>
    </>
  );
};

export default DataTable;
