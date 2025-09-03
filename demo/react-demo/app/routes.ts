import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/alt", "routes/hook-demo.tsx"),
] satisfies RouteConfig;
