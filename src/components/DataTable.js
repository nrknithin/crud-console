import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

const DataTable = ({ data, columns, setPage, page }) => {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table className="table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} scope="col">
                    {header.isPlaceholder ? null : <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="d-flex justify-content-end align-justify-content-end align-items-center">
        <button className="border rounded px-2 mx-2" onClick={() => setPage(page - 1)} disabled={page <= 1}>
          {"<"}
        </button>
        <span>{page}</span>
        <button className="border rounded px-2 mx-2" onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      </div>
    </div>
  );
};
export default DataTable;
