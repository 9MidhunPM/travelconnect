export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", border: "2px solid #2563eb", padding: "16px" }}>
      <aside style={{ width: "150px", background: "#0f172a", color: "#fff", padding: "10px" }}>
        Sidebar
      </aside>
      <main style={{ padding: "10px" }}>{children}</main>
    </div>
  );
}
