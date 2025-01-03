interface ToolSidebarHeaderProps {
  title: string;
  description: string;
}

export default function ToolSidebarHeader({
  title,
  description,
}: ToolSidebarHeaderProps) {
  return (
    <div className="h-[68px] space-y-1 border-b p-4">
      <p className="text-xs font-medium">{title}</p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
