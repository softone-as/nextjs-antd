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
  userPermissions: T[],
  hasPermissionCB: (permission: T) => boolean,
): T[] => {
  return userPermissions.reduce((all, permission) => {
    // Check permission type and length
    if (
      isPermissionWithChildren(permission) &&
      permission.children.length > 0
    ) {
      const children = filterPermission(
        permission.children as T[],
        hasPermissionCB,
      );
      if (children.length > 0) {
        const currentPermission = permission;
        currentPermission.children = children;
        all.push(currentPermission);
      }
      // check permission through callback
    } else if (hasPermissionCB(permission)) {
      all.push(permission);
    }
    return all;
  }, [] as T[]);
};
