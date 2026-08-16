import { body, column, heading, pageSection, quote, rule, subhead } from "@/components/theme";

export const metadata = {
  title: "Help",
  description: "Ways to help us hold Max Herrle accountable.",
};

export default function RecordsPage() {
  return (
    <section style={pageSection}>
      <h1 style={heading}>
        Drop out, Max<span style={{ fontStyle: "italic" }}>.</span>
      </h1>

      <div style={column}>
        <p style={body}>
          If you would like to help us hold Max Herrle accountable, please contribute to the to-do list below. If you can help cover an item, let us know by joining our group chat on the <a href="https://signal.group/#CjQKIH9MlEvfVEzLSGxLQF60aZLNU7zcXhkzWLMOzrQB3klJEhC4_W9_WAhBHIFFobF5MDZx">Signal platform</a> or write to{" "}
          <a href="mailto:tlhresident@gmail.com">tlhresident@gmail.com</a>.
        </p>

        <h2 style={subhead}>1. Share the Open Letter with Max's Affiliates and Ask for Their Comment</h2>

        <h2 style={subhead}>2. Help us plan an upcoming community meeting/rally</h2>

        <h2 style={subhead}>3. Hand-deliver the letter to Max's Campaign Office</h2>

        <h2 style={subhead}>4. Stand at the polls on Election Day, passing out flyers about Max's sordid history</h2>

    
      </div>
    </section>
  );
}
