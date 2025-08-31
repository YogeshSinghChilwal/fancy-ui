import { Copy, Check, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner"
import { CodeBlock } from "./CodeBlock";
interface ComponentDisplayProps {
  component: {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    preview: React.ReactNode;
    code: string;
    dependencies: string[];
  };
}

export function ComponentDisplay({ component }: ComponentDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  const copyToClipboard = async (text: string, type: 'code' | 'install' = 'code') => {
    try {
      await navigator.clipboard.writeText(text);
      
      if (type === 'code') {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setInstallCopied(true);
        setTimeout(() => setInstallCopied(false), 2000);
      }
      
      
      toast.success("Copied to clipboard", {description: type === 'code' ? "Component code copied!" : "Installation command copied!"})
    } catch {
      toast.error("Copy failed",
        {description: "Failed to copy to clipboard"})

    }
  };

  const installCommand = component.dependencies.length > 0 
    ? `npm install ${component.dependencies.join(' ')}`
    : '';

  return (
    <div className="space-y-6">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {component.title}
        </h1>
        <p className="text-muted-foreground mb-4">{component.description}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {component.category}
          </Badge>
          {component.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Installation */}
      {installCommand && (
        <div className="p-4 bg-muted/50 border border-border rounded-xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <Package className="w-5 h-5 text-muted-foreground" />
              <div >
                <h3 className="font-semibold text-foreground mb-1 ">Installation</h3>
                <code className="text-sm bg-background px-3 py-1 rounded border text-muted-foreground">
                  {installCommand}
                </code>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(installCommand, 'install')}
            >
              {installCopied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Preview */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Preview</h3>
        <div className="border border-border rounded-xl bg-card overflow-hidden">
          {component.preview}
        </div>
      </div>

      {/* Code */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-foreground">Code</h3>
          <Button
            onClick={() => copyToClipboard(component.code)}
            className="bg-primary hover:bg-primary/90"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </>
            )}
          </Button>
        </div>
        
<CodeBlock code={component.code} />
        {/* <div className="bg-muted rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
            <code>{component.code}</code>
          </pre>
        </div> */}
      </div>
    </div>
  );
}