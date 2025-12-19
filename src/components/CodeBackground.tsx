import { useEffect, useState } from "react";

const terminalCommands = [
  "$ npm run build",
  "$ git push origin main",
  "$ docker compose up -d",
  "$ yarn dev --turbo",
  "$ kubectl apply -f deploy.yaml",
  "$ npm test -- --coverage",
  "$ tsc --noEmit",
  "$ prisma migrate dev",
  "$ cargo build --release",
  "$ go run main.go",
];

const codeSnippets = [
  "const app = express();",
  "async function fetchData() {",
  "export default App;",
  "import { useState } from 'react';",
  "return <Component {...props} />;",
  "await db.query(sql);",
  ".then(res => res.json())",
  "useEffect(() => {}, []);",
];

export const CodeBackground = () => {
  const [activeCommand, setActiveCommand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % terminalCommands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/3 rounded-full blur-[150px]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-line-scan" />

      {/* Terminal commands floating */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
        {terminalCommands.map((cmd, i) => (
          <div
            key={i}
            className={`absolute font-mono text-xs transition-all duration-1000 ${
              i === activeCommand ? 'text-secondary' : 'text-muted-foreground/30'
            }`}
            style={{
              top: `${10 + (i * 8)}%`,
              left: i % 2 === 0 ? '5%' : 'auto',
              right: i % 2 === 1 ? '5%' : 'auto',
              opacity: i === activeCommand ? 1 : 0.3,
              transform: i === activeCommand ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <span className={i === activeCommand ? 'text-neon-green' : ''}>
              {cmd}
              {i === activeCommand && <span className="animate-blink">_</span>}
            </span>
          </div>
        ))}
      </div>

      {/* Code snippets on the sides */}
      <div className="absolute left-4 top-1/4 opacity-10 dark:opacity-15 font-mono text-[10px] space-y-2 text-muted-foreground">
        {codeSnippets.slice(0, 4).map((snippet, i) => (
          <div key={i} className="whitespace-nowrap">{snippet}</div>
        ))}
      </div>
      <div className="absolute right-4 bottom-1/4 opacity-10 dark:opacity-15 font-mono text-[10px] space-y-2 text-muted-foreground text-right">
        {codeSnippets.slice(4).map((snippet, i) => (
          <div key={i} className="whitespace-nowrap">{snippet}</div>
        ))}
      </div>

      {/* Geometric shapes */}
      <svg className="absolute top-20 right-[15%] w-20 h-20 text-primary/10 animate-float" style={{ animationDelay: '0.5s' }} viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      
      <svg className="absolute bottom-32 left-[10%] w-16 h-16 text-secondary/10 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="1" rx="5" />
      </svg>

      <svg className="absolute top-1/3 right-[8%] w-24 h-24 text-neon-purple/10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Binary decoration */}
      <div className="absolute top-[60%] left-[3%] font-mono text-[8px] text-primary/10 leading-tight">
        01001100<br/>
        01101111<br/>
        01110110<br/>
        01100101
      </div>
      
      <div className="absolute top-[20%] right-[3%] font-mono text-[8px] text-secondary/10 leading-tight">
        11001010<br/>
        10110011<br/>
        01011001<br/>
        11010010
      </div>

      {/* Brackets decoration */}
      <div className="absolute bottom-[15%] left-[8%] text-4xl font-light text-primary/5">
        {"{ }"}
      </div>
      <div className="absolute top-[45%] right-[6%] text-3xl font-light text-secondary/5">
        {"< />"}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
        <line x1="20%" y1="70%" x2="40%" y2="85%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="60%" y1="60%" x2="85%" y2="75%" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
      </svg>
    </div>
  );
};