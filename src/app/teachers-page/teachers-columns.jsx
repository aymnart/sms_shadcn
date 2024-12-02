import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../data-table/components/data-table-column-header";
import { teachersCategories } from "./table-data/filterable_teacher_columns";
import { DataTableRowActions } from "../data-table/components/data-table-row-actions";

export const teachersColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="rounded justify-center p-1 h-4 w-4 flex items-center "
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="rounded justify-center p-1 h-4 w-4 flex items-center "
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden md:flex"
        column={column}
        title="ID"
      />
    ),
    cell: ({ row }) => (
      <div className="hidden md:flex">{row.getValue("id")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <img
            src={row.getValue("photo")}
            alt=""
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop if default image also fails
              e.target.src = "/user_default.png"; // Set default image
            }}
            className="w-7 h-7 rounded-lg "
          />
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden sm:flex"
        column={column}
        title="Email"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="hidden sm:flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden md:flex"
        column={column}
        title="Category"
      />
    ),
    cell: ({ row }) => {
      const category = teachersCategories.find(
        (category) => category.value === row.getValue("category")
      );

      if (!category) {
        return null;
      }

      return (
        <div className="hidden md:flex items-center">
          {category.icon && (
            <category.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{category.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "photo",
    header: ({ column }) => (
      <DataTableColumnHeader className="hidden" column={column} title={null} />
    ),
    cell: () => {
      return null;
    },
    enableHiding: true,
    enableSorting: false,
  },

  {
    id: "actions",
    cell: ({ row }) => (
      <div>
        <DataTableRowActions row={row} />
      </div>
    ),
  },
];
