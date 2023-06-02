import { AdminView } from "./AdminView";
import { CustomerView } from "./CustomerView";

export const ApplicationViews = () => {

  const localProjectUser = localStorage.getItem("project_user");
  const appUserObject = JSON.parse(localProjectUser);

  if (appUserObject.isStaff) {
    return <AdminView />;
  } else {
    return <CustomerView />;
  }
};

