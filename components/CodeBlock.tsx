import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";


export function CodeBlock({ code }: { code: string }) {
  const { theme } = useTheme();

  return (
    <div className="bg-muted rounded-xl overflow-x-auto">
      <SyntaxHighlighter
        language="tsx"
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent", // let Tailwind's bg-muted handle it
          fontSize: "0.875rem",
          borderRadius: "0.75rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
