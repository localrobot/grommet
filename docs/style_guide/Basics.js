// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Chapter = require('Chapter');

var Basics = React.createClass({

  render: function() {
    return (
      <Chapter title="Basics">
        <header>
          <section>
            <h1>Basics</h1>

            <p>Here you will find the core elements for the application style guide.
            The downloadable assets contain these core elements. Checkboxes, buttons,
            status icons and more are all described in these assets.
            Rather than documenting these in gory detail, we thought you would
            appreciate the brevity. We also think you really just want to see them anyway,
            so why waste your time?</p>

            <ol className="chapter__nav list-bare">
              <li data-target="color">Color</li>
              <li data-target="text">Text</li>
              <li data-target="date-time">Date and Time</li>
              <li data-target="capitalization">Capitalization</li>
              <li data-target="grid">Grid</li>
            </ol>
          </section>
        </header>

        <section id="color">
          <h2 id="color">Color</h2>
          <p>The HP Experience color palette is utilized in applications for the
          most part. However there are variances in the palette that apply specifically
          to applications.</p>

          <p>For application design the color orange should not be used as an accent
          color. The reason being that the highly salient orange is closely associated
          with red which is a color which indicates a critical status. The red color is
          reserved for resources that need immediate attention. </p>

          <p>Similarly, the HP Experience green accent color should not be used because
          it is reserved for status icons that refer to resources that are in a normal
          state.</p>







        </section>

        <section id="text">
          <h2>Text</h2>
          <p>Text and Typography is arguably one of the most important elements of
          style to get right. Ironically, when done well the text styles and typography
          disappear from the users consciousness and they simply enjoy the beautiful
          and fluid experience. However, when done poorly, the typography can be a
          reason an application just doesn’t feel right. Everything from displeasing
          aesthetics, to unclear organization of information, to physical eye strain
          can result from an application with insufficient attention to this detail.</p>

          <h3>Typography</h3>
          <p>We recommend applications use the HP Simplified font in prominent areas
          such as headings, subheadings, login screens and titles. For the remaining
          body copy, tables, labels, values, and so on, use the Arial font. The
          typographic scale and styles can be found in the attached assets.</p>

          <h3>Writing Style</h3>
          <p>Applications should use a conversational tone and should not include
          excessive technical jargon.</p>

          <p>Here are some things we recommend you consider when writing for applications:</p>

          <h3>Do’s</h3>
          <ul>
            <li>Use simple yet complete sentences.</li>
            <li>Use correct punctuation.</li>
            <li>Use the present tense to describe problem states.</li>
            <li>Use past tense to describe events that occurred in the past.</li>
            <li>Use an active voice whenever possible.</li>
            <li>Passive voice is acceptable to describe some error conditions.</li>
            <li>Use descriptors clarify terminology. For example, “Specify InflD
            when Detect is set to NO.” We instead recommend something along the
            lines of “Specify the InflD parameter when the Detect option is set
            to NO”.</li>
          </ul>

          <h3>Don’ts</h3>
          <ul>
            <li>Do not use UPPERCASE in text or exclamation points!!!!</li>
            <li>Do not make the user feel at fault.</li>
            <li>Do not anthropomorphize by implying that the programs or hardware
            can think or feel.</li>
            <li>Do not use colloquial words or phrases.</li>
            <li>Do not use terms that may be offensive in certain cultures.</li>
            <li>Do not compound several nouns without adding a preposition or
            subclause to clarify the meaning. For example, “Site Server LDAP
            Service directory server” should be changed to “Directory server for
            the LDAP Service of the Site Server”.</li>
            <li>Avoid the use of the word “bad”. Use more descriptive terms to
            tell the user as to what is wrong. For example, avoid messages such
            as “Bad size”. Instead, tell the user what criteria to use when
            specifying a size.</li>
            <li>Avoid the use of the word “please”. It can imply that a required
            action is optional.</li>
          </ul>

          <h3 id="date-time">Date and Time</h3>
          <p>Date and time formats should generally be displayed in the user’s
          local timezone.  Any exceptions to this should include the timezone being
          used to display the time and date. In addition, dates and times shall always
          be localized to use the most recognizable format for the user’s locale.
          Here are examples of recommended date and time formats. Notice, that we use
          words like “Today” and “Yesterday” as it doesn’t force the user to remember
          today’s date to process the information.  In each of these examples, showing
          seconds is optional.</p>

          <ol>
            <li>Today, since 12:00 am today:
              <ul>
                <li><code>Today &lt;HH:MM[:SS] am|pm&gt;</code></li>
                <li><code>Today 10:10:05 am</code></li>
                <li><code>Today 11:11 am</code></li>
              </ul>
            </li>

            <li>Yesterday, since 12:00 am yesterday, before 12:00 am today:
              <ul>
                <li><code>Yesterday &lt;HH:MM[:SS] am|pm&gt;</code></li>
                <li><code>Yesterday 10:10:05 pm</code></li>
                <li><code>Yesterday 11:11 am</code></li>
              </ul>
            </li>

            <li>This year, since 12:00 am this year, before yesterday:
              <ul>
                <li><code>&lt;3 char month name&gt; &lt;day&gt; &lt;HH:MM[:SS] am/pm&gt;</code></li>
                <li><code>Jan 28 10:10:05 am</code></li>
              </ul>
            </li>

            <li>Last years messages, before 12:00 am this year:
              <ul>
                <li><code>&lt;month&gt; &lt;day&gt; &lt;year&gt; &lt;HH:MM[:SS] am/pm&gt;</code></li>
                <li>1/1/2011 10:10:05 am</li>
              </ul>
            </li>
          </ol>

          <h3 id="capitalization">Capitalization</h3>
          <p>For the English language, we recommend using English title capitalization
          rules for titles (i.e. generally, capitalize first letter of each word). Titles
          include the following user interface elements:</p>
          <ul>
            <li>Page titles</li>
            <li>Panel titles</li>
            <li>Section headings</li>
            <li>Form section titles</li>
            <li>Table headers</li>
            <li>Dialog titles (reference rule #8: grammarbook.com)</li>
          </ul>

          <h4>Sentence Capitalization</h4>
          <p>Capitalize only the first letter of data labels unless a word used in the
          data label otherwise deserves capitalization because of English capitalization
          rules (e.g. proper names, abbreviations, etc).</p>

          <p>Data labels include the following UI elements:</p>
          <ul>
            <li>Radio button labels</li>
            <li>Checkbox labels</li>
            <li>Form property labels</li>
            <li>Panel property labels</li>
            <li>Button labels</li>
            <li>Action menu items</li>
            <li>Hyperlinks to actions</li>
            <li>Hint text</li>
            <li>Help text</li>
          </ul>

          <h4>Attributes</h4>
          <p>Capitalize only the first letter of attributes unless a word used in
          the attribute otherwise deserves capitalization because of English
          capitalization rules (e.g. proper names, abbreviations, etc). User-entered
          attributes will retain the user’s capitalization.</p>

          <h4>Exceptions</h4>
          <p>The English language is full of exceptions, so we felt compelled.
          For attribute values which indicate the property or data field hasn’t
          been set or the location is intentionally left empty, we use the
          non-capitalized words or phrases such as “empty”, “none”, “not set”,
          “unassigned”, or “no alerts”.</p>

          <p>Some specific words and acronyms are always capitalized for branding
          or common industry recognition.</p>

          <p>Examples:</p>
          <ul>
            <li>VLAN</li>
            <li>IPv4</li>
            <li>IPv6</li>
            <li>WWN</li>
          </ul>

          <h4>Capitalization in APIs</h4>
          <p>Yes, our application users make use of our API’s, so it’s important
          to provide a familiar voice to our users, regardless of the interface
          they are using.</p>

          <h5>PascalCase</h5>
          <ul>
            <li>Schema names</li>
            <li>Schema enum values</li>
          </ul>

          <h5>camelCase</h5>
          <p>The following API elements should be rendered in camelCase:</p>
          <ul>
            <li>Schema attribute names</li>
          </ul>
        </section>

        <section id="grid">
          <h2>Grid</h2>
          <p>A grid is the cornerstone of user interface design.  It provides
          alignment and negative space in your application.  The downloadable
          assets contain the recommended grid sizes and layouts.</p>
        </section>

      </Chapter>
    );
  }

});

module.exports = Basics;
