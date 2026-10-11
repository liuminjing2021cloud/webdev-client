import "./index.css";
import ReactIconsSampler from "./ReactIconsSampler";
import PracticeExtensions from "./PracticeExtensions";
import Link from "next/link";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - CSS</h2>
      <p>
        <Link href="/labs/lab2/tailwind" id="wd-tailwind-link">
          Tailwind CSS Examples
        </Link>
      </p>

      <section>
        <h3>Styling with the style attribute</h3>
        <p style={{ backgroundColor: "yellow", color: "blue" }}>
          This paragraph uses the style attribute.
        </p>
      </section>

      <section>
        <h3>Styling with ID selectors</h3>
        <p id="wd-id-selector">
          This paragraph is styled using an ID selector.
        </p>
      </section>

      <section>
        <h3>Styling with class selectors</h3>
        <p className="wd-class-selector">
          This paragraph is styled using a class selector.
        </p>
      </section>

      <section className="wd-document-structure">
        <h3>Document structure selectors</h3>
        <p>This paragraph is inside a section.</p>
      </section>

        <section id="wd-css-colors">
            <h3>Colors</h3>

            <p className="wd-fg-color-blue">
                This text is blue.
            </p>

            <p className="wd-fg-color-red">
                This text is red.
            </p>

            <p className="wd-bg-color-yellow">
                This paragraph has a yellow background.
            </p>

            <p className="wd-bg-color-green">
                This paragraph has a green background.
            </p>
        </section>

        <section id="wd-css-borders">
            <h3>Borders</h3>

            <p className="wd-border-thin">
                This paragraph has a thin solid border.
            </p>

            <p className="wd-border-dashed">
                This paragraph has a dashed border.
            </p>

            <p className="wd-border-colored">
                This paragraph has a thick blue border.
            </p>
        </section>

        <section id="wd-css-spacing">
            <h3>Padding and Margin</h3>

            <div className="wd-spacing-container">
                <div className="wd-padding-example">
                    This box has padding.
                </div>

                <div className="wd-margin-example">
                    This box has margin.
                </div>
            </div>
        </section>

        <section id="wd-css-box-model">
          <h3>Box Model</h3>
          <div className="wd-box-model-example">
            Content inside the box model.
          </div>
        </section>

        <section id="wd-css-rounded-corners">
          <h3>Rounded Corners</h3>
          <div className="wd-rounded-corners-small">
            Small rounded corners
          </div>
          <div className="wd-rounded-corners-large">
            Large rounded corners
          </div>
          <div className="wd-rounded-corners-circle">
            Circle
          </div>
        </section>

        <section id="wd-css-dimensions">
            <h3>Dimensions</h3>

            <div className="wd-dimension-box">
                Width: 300px and Height: 100px
            </div>

            <div className="wd-dimension-percent">
                Width: 50%
            </div>
        </section>

        <section id="wd-css-display">
            <h3>Display</h3>

            <h4>Block elements</h4>
            <div className="wd-display-block">Block A</div>
            <div className="wd-display-block">Block B</div>

            <h4>Inline elements</h4>
            <span className="wd-display-inline">Inline A</span>
            <span className="wd-display-inline">Inline B</span>

            <h4>Inline-block elements</h4>
            <div>
                <span className="wd-display-inline-block">Inline-block A</span>
                <span className="wd-display-inline-block">Inline-block B</span>
            </div>
        </section>

        <section id="wd-css-position">
            <h3>Position and Z-index</h3>

            <div className="wd-position-container">
                <div className="wd-position-box wd-position-red">
                    Red
                </div>

                <div className="wd-position-box wd-position-blue">
                    Blue
                </div>

                <div className="wd-position-box wd-position-green">
                    Green
                </div>
            </div>
        </section>

        <section id="wd-css-float">
          <h3>Float</h3>
          <div className="wd-float-container">
            <div className="wd-float-box">Float Left</div>
            <p>
              This paragraph flows around the floating box. Float moves an
              element to one side and allows the following text to appear next
              to it.
            </p>
          </div>
        </section>

        <section id="wd-css-grid">
          <h3>CSS Grid</h3>
          <div className="wd-grid-container">
            <div className="wd-grid-item">Grid Item 1</div>
            <div className="wd-grid-item">Grid Item 2</div>
            <div className="wd-grid-item">Grid Item 3</div>
            <div className="wd-grid-item">Grid Item 4</div>
            <div className="wd-grid-item">Grid Item 5</div>
            <div className="wd-grid-item">Grid Item 6</div>
          </div>
        </section>

        <section id="wd-css-flex">
          <h3>Flexbox</h3>
          <div className="wd-flex-container">
            <div className="wd-flex-item">Flex Item 1</div>
            <div className="wd-flex-item">Flex Item 2</div>
            <div className="wd-flex-item">Flex Item 3</div>
          </div>
        </section>

        <section id="wd-css-responsive">
          <h3>Media Queries</h3>
          <div className="wd-responsive-box">
            Resize the browser window to change my color.
          </div>
        </section>

      <PracticeExtensions />
      <ReactIconsSampler />
    </div>
  );
}
