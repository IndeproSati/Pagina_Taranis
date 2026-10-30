import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/soluciones")({
  component: Outlet,
});
