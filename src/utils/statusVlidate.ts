interface UserRole {
  (roles?: Array<string>, option?: string): string[] | boolean;
}

const userRole: UserRole = (roles, option) => {
  if (option === "isAdmin") {
    return roles?.includes("admin");
  }

  return roles;
};

export const statusValidate = async (value, options) => {
  const { user } = options;

  if (value !== "public") {
    if (!userRole(user?.roles ?? [], "isAdmin")) {
      return "Non-admin user allow review public only[DEBUG]";
    }
    return true;
  }

  return true;
};
