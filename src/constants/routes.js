export const routes = [
    {
        path: "/",
        componentName: "Home",
        exact: true,
    },
    {
        path: "/users",
        componentName: "UsersList",
        exact: true,
    },
    {
        path: "/user/:userId",
        componentName: "UserDetails",
        exact: true,
    },
    {
        path: "*",
        componentName: "NotFound",
    },
];