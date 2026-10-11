export default function TailwindExamples() {
  return (
    <div id="wd-tailwind" className="p-6 space-y-10">
      <h2 className="text-3xl font-bold">Tailwind CSS Examples</h2>

      <section id="wd-tailwind-spacing">
        <h3 className="text-2xl font-semibold mb-3">Margins and Padding</h3>
        <div className="m-4 p-6 bg-blue-100 border border-blue-500">
          This box has margin and padding.
        </div>
      </section>

      <section id="wd-tailwind-fonts">
        <h3 className="text-2xl font-semibold mb-3">Font Size and Weight</h3>
        <p className="text-sm font-light">Small and light text</p>
        <p className="text-xl font-medium">Large and medium text</p>
        <p className="text-3xl font-bold">Extra large and bold text</p>
      </section>

      <section id="wd-tailwind-backgrounds">
        <h3 className="text-2xl font-semibold mb-3">Background Colors</h3>
        <div className="p-4 bg-red-200">Red background</div>
        <div className="p-4 bg-green-200">Green background</div>
        <div className="p-4 bg-blue-200">Blue background</div>
      </section>

      <section id="wd-tailwind-responsive-color">
        <h3 className="text-2xl font-semibold mb-3">Responsive Color</h3>
        <div className="p-5 bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300">
          Change the window width to change my color.
        </div>
      </section>

      <section id="wd-tailwind-responsive-display">
        <h3 className="text-2xl font-semibold mb-3">Responsive Show and Hide</h3>
        <p className="block md:hidden p-3 bg-orange-200">Visible on small screens</p>
        <p className="hidden md:block p-3 bg-purple-200">Visible on medium and large screens</p>
      </section>

      <section id="wd-tailwind-responsive-flex">
        <h3 className="text-2xl font-semibold mb-3">Responsive Flex Row</h3>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 p-4 bg-cyan-200">Flex 1</div>
          <div className="flex-1 p-4 bg-cyan-300">Flex 2</div>
          <div className="flex-1 p-4 bg-cyan-400">Flex 3</div>
        </div>
      </section>

      <section id="wd-tailwind-responsive-grid">
        <h3 className="text-2xl font-semibold mb-3">Responsive Grid Columns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-4 bg-indigo-200 text-center">Grid {item}</div>
          ))}
        </div>
      </section>

      <section id="wd-tailwind-responsive-spacing">
        <h3 className="text-2xl font-semibold mb-3">Responsive Spacing and Text</h3>
        <div className="p-2 md:p-6 lg:p-10 text-sm md:text-xl lg:text-3xl bg-emerald-200">
          My padding and text size respond to the screen width.
        </div>
      </section>

      <section id="wd-tailwind-card">
        <h3 className="text-2xl font-semibold mb-3">Responsive Card</h3>
        <article className="max-w-xl p-5 rounded-xl shadow-lg bg-white border border-gray-200 md:flex md:items-center md:gap-5">
          <div className="w-20 h-20 rounded-full bg-red-800 shrink-0" />
          <div>
            <h4 className="text-xl font-bold">Web Development</h4>
            <p className="text-gray-600">Build responsive user interfaces with React and Tailwind CSS.</p>
          </div>
        </article>
      </section>

      <section id="wd-tailwind-blur">
        <h3 className="text-2xl font-semibold mb-3">Blur Effects</h3>
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-pink-500 blur-sm" />
          <div className="w-24 h-24 bg-blue-500 blur-md" />
          <div className="w-24 h-24 bg-green-500 blur-lg" />
        </div>
      </section>

      <section id="wd-tailwind-column-spans">
        <h3 className="text-2xl font-semibold mb-3">Grid Column Spans</h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-4 p-4 bg-slate-300">Header spans four columns</div>
          <div className="col-span-1 p-4 bg-slate-200">Sidebar</div>
          <div className="col-span-3 p-4 bg-slate-100">Content spans three columns</div>
        </div>
      </section>

      <section id="wd-tailwind-on-your-own" className="space-y-4">
        <h3 className="text-2xl font-semibold">On Your Own</h3>
        <div className="m-3 p-5 bg-neutral-100 border-2 border-neutral-900">
          My CS 5010 spacing and background example
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-lg">
          <div className="p-4 bg-neutral-200">Design</div>
          <div className="p-4 bg-neutral-300">Test</div>
          <div className="p-4 bg-neutral-400">Improve</div>
        </div>
      </section>

      <section id="wd-tailwind-with-ai" className="space-y-4">
        <h3 className="text-2xl font-semibold">With AI</h3>
        <div className="p-4 bg-violet-200 sm:bg-cyan-200 lg:bg-amber-200">
          AI responsive color example
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 p-4 bg-gray-300">1 column</div>
          <div className="col-span-3 p-4 bg-gray-200 blur-[1px]">3 columns with a light blur</div>
        </div>
      </section>
    </div>
  );
}
