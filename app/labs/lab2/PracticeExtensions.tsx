export default function PracticeExtensions() {
  return (
    <section id="wd-practice-extensions">
      <h3>On Your Own and With AI Practice</h3>

      <div id="wd-own-selectors" className="wd-own-sample">
        <h4>On Your Own: Selectors and Colors</h4>
        <p style={{ color: "#222", backgroundColor: "#eee" }}>
          CS 5010 is my personal selector example.
        </p>
        <p className="wd-own-highlight">This class adds my black-and-white style.</p>
      </div>

      <div id="wd-ai-box-practice" className="wd-ai-sample">
        <h4>With AI: Border and Box Model</h4>
        <div className="wd-ai-box">AI sample with padding, margin, border, and rounded corners.</div>
      </div>

      <div id="wd-own-layout-practice" className="wd-own-sample">
        <h4>On Your Own: Position and Flex</h4>
        <div className="wd-own-flex">
          <span>Design</span><span>Test</span><span>Improve</span>
        </div>
      </div>

      <div id="wd-ai-responsive-practice" className="wd-ai-sample">
        <h4>With AI: Responsive Layout</h4>
        <div className="wd-ai-responsive-grid">
          <span>HTML</span><span>CSS</span><span>Tailwind</span><span>React</span>
        </div>
      </div>
    </section>
  );
}
