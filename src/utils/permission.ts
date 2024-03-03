// Purpose: Filter Allowed Permissions for a user, support nested permissions
// How To Use:
// const session = useSession();
//
// filterPermission(session.data.permissions, (permission) => {
//  return Permissions.includes(permission);
// })

type Permission = Record<string, unknown>;

type PermissionWithoutChildren = Permission;

type PermissionWithChildren = Permission & {
  children: (PermissionWithChildren | PermissionWithoutChildren)[];
};

const isPermissionWithChildren = (
  permission: PermissionWithChildren | PermissionWithoutChildren,
): permission is PermissionWithChildren => {
  return "children" in permission;
};

export const filterPermission = <
  T extends PermissionWithChildren | PermissionWithoutChildren,
>(
  menus: T[],
  hasPermissionCB: (menu: T) => boolean,
): T[] => {
  return menus.reduce((all, menu) => {
    // Check permission type and length
    if (isPermissionWithChildren(menu) && menu.children.length > 0) {
      const children = filterPermission(menu.children as T[], hasPermissionCB);
      if (children.length > 0) {
        const currentPermission = menu;
        currentPermission.children = children;
        all.push(currentPermission);
      }
      // check permission through callback
    } else if (hasPermissionCB(menu)) {
      all.push(menu);
    }
    return all;
  }, [] as T[]);
};
