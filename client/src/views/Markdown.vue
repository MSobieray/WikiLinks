<template>
  <div class="markdown-body">
    <h1>MarkDown Demo</h1>
    <p class="line" data-line="1">
      <strong
        >Advertisement
        <img
          class="emoji"
          draggable="false"
          alt="😃"
          src="https://twemoji.maxcdn.com/36x36/1f603.png"
      /></strong>
    </p>
    <ul>
      <li>
        <strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong>
        - high quality and fast image resize in browser.
      </li>
      <li>
        <strong
          ><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong
        >
        - developer friendly i18n with plurals support and easy syntax.
      </li>
    </ul>
    <p class="line" data-line="8">You will like those projects!</p>
    <hr />
    <h1 class="line" data-line="12">
      h1 Heading
      <img
        class="emoji"
        draggable="false"
        alt="😎"
        src="https://twemoji.maxcdn.com/36x36/1f60e.png"
      />
    </h1>
    <h2 class="line" data-line="13">h2 Heading</h2>
    <h3 class="line" data-line="14">h3 Heading</h3>
    <h4 class="line" data-line="15">h4 Heading</h4>
    <h5 class="line" data-line="16">h5 Heading</h5>
    <h6 class="line" data-line="17">h6 Heading</h6>
    <h2 class="line" data-line="20">Horizontal Rules</h2>
    <hr />
    <hr />
    <hr />
    <h2 class="line" data-line="29">Typographic replacements</h2>
    <p class="line" data-line="31">Enable typographer option to see result.</p>
    <p class="line" data-line="33">© © ® ® ™ ™ § § ±</p>
    <p class="line" data-line="35">test… test… test… test?.. test!..</p>
    <p class="line" data-line="37">!!! ??? , – —</p>
    <p class="line" data-line="39">
      “Smartypants, double quotes” and ‘single quotes’
    </p>
    <h2 class="line" data-line="42">Emphasis</h2>
    <p class="line" data-line="44"><strong>This is bold text</strong></p>
    <p class="line" data-line="46"><strong>This is bold text</strong></p>
    <p class="line" data-line="48"><em>This is italic text</em></p>
    <p class="line" data-line="50"><em>This is italic text</em></p>
    <p class="line" data-line="52"><s>Strikethrough</s></p>
    <h2 class="line" data-line="55">Blockquotes</h2>
    <blockquote>
      <p>Blockquotes can also be nested…</p>
      <blockquote>
        <p>…by using additional greater-than signs right next to each other…</p>
        <blockquote>
          <p>…or with spaces between arrows.</p>
        </blockquote>
      </blockquote>
    </blockquote>
    <h2 class="line" data-line="63">Lists</h2>
    <p class="line" data-line="65">Unordered</p>
    <ul>
      <li>
        Create a list by starting a line with <code>+</code>, <code>-</code>, or
        <code>*</code>
      </li>
      <li>
        Sub-lists are made by indenting 2 spaces:
        <ul>
          <li>
            Marker character change forces new list start:
            <ul>
              <li>Ac tristique libero volutpat at</li>
            </ul>
            <ul>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
            <ul>
              <li>Nulla volutpat aliquam velit</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Very easy!</li>
    </ul>
    <p class="line" data-line="75">Ordered</p>
    <ol>
      <li>
        <p>Lorem ipsum dolor sit amet</p>
      </li>
      <li>
        <p>Consectetur adipiscing elit</p>
      </li>
      <li>
        <p>Integer molestie lorem at massa</p>
      </li>
      <li>
        <p>You can use sequential numbers…</p>
      </li>
      <li>
        <p>…or keep all the numbers as <code>1.</code></p>
      </li>
    </ol>
    <p class="line" data-line="85">Start numbering with offset:</p>
    <ol start="57">
      <li>foo</li>
      <li>bar</li>
    </ol>
    <h2 class="line" data-line="91">Code</h2>
    <p class="line" data-line="93">Inline <code>code</code></p>
    <p class="line" data-line="95">Indented code</p>
    <pre><code>// Some comments
    line 1 of code
    line 2 of code
    line 3 of code
    </code></pre>
    <p class="line" data-line="103">Block code “fences”</p>
    <pre class="hljs"><code>Sample text here...
    </code></pre>
    <p class="line" data-line="109">Syntax highlighting</p>
    <pre
      class="hljs language-js"
    ><code><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">bar</span>) </span>{
      <span class="hljs-keyword">return</span> bar++;
    };

    <span class="hljs-built_in">console</span>.log(foo(<span class="hljs-number">5</span>));
    </code></pre>
    <h2 class="line" data-line="119">Tables</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Option</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>
            path to data files to supply the data that will be passed into
            templates.
          </td>
        </tr>
        <tr>
          <td>engine</td>
          <td>
            engine to be used for processing templates. Handlebars is the
            default.
          </td>
        </tr>
        <tr>
          <td>ext</td>
          <td>extension to be used for dest files.</td>
        </tr>
      </tbody>
    </table>
    <p class="line" data-line="127">Right aligned columns</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th style="text-align:right">Option</th>
          <th style="text-align:right">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:right">data</td>
          <td style="text-align:right">
            path to data files to supply the data that will be passed into
            templates.
          </td>
        </tr>
        <tr>
          <td style="text-align:right">engine</td>
          <td style="text-align:right">
            engine to be used for processing templates. Handlebars is the
            default.
          </td>
        </tr>
        <tr>
          <td style="text-align:right">ext</td>
          <td style="text-align:right">extension to be used for dest files.</td>
        </tr>
      </tbody>
    </table>
    <h2 class="line" data-line="136">Links</h2>
    <p class="line" data-line="138">
      <a href="http://dev.nodeca.com">link text</a>
    </p>
    <p class="line" data-line="140">
      <a href="http://nodeca.github.io/pica/demo/" title="title text!"
        >link with title</a
      >
    </p>
    <p class="line" data-line="142">
      Autoconverted link
      <a href="https://github.com/nodeca/pica"
        >https://github.com/nodeca/pica</a
      >
      (enable linkify to see)
    </p>
    <h2 class="line" data-line="145">Images</h2>
    <p class="line" data-line="147">
      <img src="https://octodex.github.com/images/minion.png" alt="Minion" />
      <img
        src="https://octodex.github.com/images/stormtroopocat.jpg"
        alt="Stormtroopocat"
        title="The Stormtroopocat"
      />
    </p>

    <p class="line" data-line="150">
      Like links, Images also have a footnote style syntax
    </p>
    <p class="line" data-line="152">
      <img
        src="https://octodex.github.com/images/dojocat.jpg"
        alt="Alt text"
        title="The Dojocat"
      />
    </p>
    <p class="line" data-line="154">
      With a reference later in the document defining the URL location:
    </p>
    <h2 class="line" data-line="159">Plugins</h2>
    <p class="line" data-line="161">
      The killer feature of <code>markdown-it</code> is very effective support
      of
      <a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin"
        >syntax plugins</a
      >.
    </p>
    <h3 class="line" data-line="165">
      <a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a>
    </h3>
    <blockquote>
      <p>
        Classic markup:
        <img
          class="emoji"
          draggable="false"
          alt="😉"
          src="https://twemoji.maxcdn.com/36x36/1f609.png"
        />
        :crush:
        <img
          class="emoji"
          draggable="false"
          alt="😢"
          src="https://twemoji.maxcdn.com/36x36/1f622.png"
        />
        :tear:
        <img
          class="emoji"
          draggable="false"
          alt="😆"
          src="https://twemoji.maxcdn.com/36x36/1f606.png"
        />
        <img
          class="emoji"
          draggable="false"
          alt="😋"
          src="https://twemoji.maxcdn.com/36x36/1f60b.png"
        />
      </p>
      <p>
        Shortcuts (emoticons):
        <img
          class="emoji"
          draggable="false"
          alt="😃"
          src="https://twemoji.maxcdn.com/36x36/1f603.png"
        />
        <img
          class="emoji"
          draggable="false"
          alt="😦"
          src="https://twemoji.maxcdn.com/36x36/1f626.png"
        />
        <img
          class="emoji"
          draggable="false"
          alt="😎"
          src="https://twemoji.maxcdn.com/36x36/1f60e.png"
        />
        <img
          class="emoji"
          draggable="false"
          alt="😉"
          src="https://twemoji.maxcdn.com/36x36/1f609.png"
        />
      </p>
    </blockquote>
    <p class="line" data-line="171">
      see
      <a href="https://github.com/markdown-it/markdown-it-emoji#change-output"
        >how to change output</a
      >
      with twemoji.
    </p>
    <h3 class="line" data-line="174">
      <a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> /
      <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a>
    </h3>
    <ul>
      <li>19<sup>th</sup></li>
      <li>H<sub>2</sub>O</li>
    </ul>
    <h3 class="line" data-line="180">
      <a href="https://github.com/markdown-it/markdown-it-ins">&lt;ins&gt;</a>
    </h3>
    <p class="line" data-line="182"><ins>Inserted text</ins></p>
    <h3 class="line" data-line="185">
      <a href="https://github.com/markdown-it/markdown-it-mark">&lt;mark&gt;</a>
    </h3>
    <p class="line" data-line="187"><mark>Marked text</mark></p>
    <h3 class="line" data-line="190">
      <a href="https://github.com/markdown-it/markdown-it-footnote"
        >Footnotes</a
      >
    </h3>
    <p class="line" data-line="192">
      Footnote 1 link<sup class="footnote-ref"
        ><a href="#fn1" id="fnref1">[1]</a></sup
      >.
    </p>
    <p class="line" data-line="194">
      Footnote 2 link<sup class="footnote-ref"
        ><a href="#fn2" id="fnref2">[2]</a></sup
      >.
    </p>
    <p class="line" data-line="196">
      Inline footnote<sup class="footnote-ref"
        ><a href="#fn3" id="fnref3">[3]</a></sup
      >
      definition.
    </p>
    <p class="line" data-line="198">
      Duplicated footnote reference<sup class="footnote-ref"
        ><a href="#fn2" id="fnref2:1">[2:1]</a></sup
      >.
    </p>
    <h3 class="line" data-line="207">
      <a href="https://github.com/markdown-it/markdown-it-deflist"
        >Definition lists</a
      >
    </h3>
    <dl>
      <dt>Term 1</dt>
      <dd>
        <p>Definition 1 with lazy continuation.</p>
      </dd>
      <dt>Term 2 with <em>inline markup</em></dt>
      <dd>
        <p>Definition 2</p>
        <pre><code>  { some code, part of Definition 2 }
    </code></pre>
        <p>Third paragraph of definition 2.</p>
      </dd>
    </dl>
    <p class="line" data-line="222"><em>Compact style:</em></p>
    <dl>
      <dt>Term 1</dt>
      <dd>Definition 1</dd>
      <dt>Term 2</dt>
      <dd>Definition 2a</dd>
      <dd>Definition 2b</dd>
    </dl>
    <h3 class="line" data-line="232">
      <a href="https://github.com/markdown-it/markdown-it-abbr"
        >Abbreviations</a
      >
    </h3>
    <p class="line" data-line="234">
      This is <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation
      example.
    </p>
    <p class="line" data-line="236">
      It converts “<abbr title="Hyper Text Markup Language">HTML</abbr>”, but
      keep intact partial entries like “xxxHTMLyyy” and so on.
    </p>
    <h3 class="line" data-line="240">
      <a href="https://github.com/markdown-it/markdown-it-container"
        >Custom containers</a
      >
    </h3>
    <div class="warning">
      <p><em>here be dragons</em></p>
    </div>
    <hr class="footnotes-sep" />
    <section class="footnotes">
      <ol class="footnotes-list">
        <li id="fn1" class="footnote-item">
          <p>Footnote <strong>can have markup</strong></p>
          <p>
            and multiple paragraphs.
            <a href="#fnref1" class="footnote-backref">↩︎</a>
          </p>
        </li>
        <li id="fn2" class="footnote-item">
          <p>
            Footnote text. <a href="#fnref2" class="footnote-backref">↩︎</a>
            <a href="#fnref2:1" class="footnote-backref">↩︎</a>
          </p>
        </li>
        <li id="fn3" class="footnote-item">
          <p>
            Text of inline footnote
            <a href="#fnref3" class="footnote-backref">↩︎</a>
          </p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "Markdown",
};
</script>

<style lang="scss" scoped></style>
