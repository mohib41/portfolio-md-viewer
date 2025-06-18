import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { useTheme } from "next-themes";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-4 py-10">
      {/* Header with theme toggle */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center w-full">Markdown Portfolio Generator</h1>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow text-sm hover:scale-105 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        )}
      </div>


      {/* Two-column layout */}
      <div className="flex flex-row gap-6 h-[85vh]">
        {/* Left: Preview */}
        <div className="w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-600 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">Live Preview</h2>
          <div className="flex-1 overflow-auto prose dark:prose-invert max-w-none p-2">
            {showPreview ? (
              <Markdown>{markdown}</Markdown>
            ) : (
              <p className="text-yellow-500 text-center">
                ⚠️ Click &quot;Generate&quot; to see preview.
              </p>
            )}
          </div>
        </div>

        {/* Right: Editor */}
        <div className="w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-600 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">Write Markdown</h2>

          {/* Markdown textarea */}
          <textarea
            className="flex-1 p-4 rounded bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-400 dark:border-gray-600 resize-none font-mono"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type Markdown here..."
          />

          {/* Generate Button */}
          <button
            onClick={() => setShowPreview(true)}
            className="mt-6 py-3 px-6 text-lg font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg transition-all duration-300"
          >
            🚀 Generate Portfolio
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Portfolio Builder. Built with ❤️ using Next.js + Tailwind CSS.
        </p>
        <p className="mt-1">
          <a
            href="https://github.com/mohib41/portfolio-md-viewer.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Source on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
