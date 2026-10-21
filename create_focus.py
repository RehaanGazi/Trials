import json
from pathlib import Path
folder=Path(__file__).parent
base={q['id']:q for q in json.loads((folder/'questions.json').read_text())}
sections=[];extra=[]
def ids(*ranges):
 out=[]
 for r in ranges:
  if isinstance(r,int):out.append('q%03d'%r)
  else:
   lo,hi=r
   out += ['q%03d'%i for i in range(lo,hi+1)]
 return out
def sec(key,cat,title,note,base_ids):
 sections.append(dict(key=key,category=cat,title=title,note=note,ids=base_ids))
def add(key,question,answer,example='',kind='Recall'):
 n=len(extra)+1
 extra.append(dict(id=f'f{n:03d}',section=key,unit={'css':'CSS','js':'JavaScript','html':'HTML'}[next(s['category'] for s in sections if s['key']==key)],topic=next(s['title'] for s in sections if s['key']==key),source='Teacher focus notes',page='Page 1' if next(s['category'] for s in sections if s['key']==key)!='html' and key not in ('arrays','functions','domtheory','debug','paragraph','letters') else 'Page 2',q=question,a=answer,example=example,kind=kind))
# Sections in the same order as the teacher's handwritten focus sheet
sec('cssbase','css','CSS foundations','Definition, purpose, rule structure and syntax',ids((201,207)))
add('cssbase','Write a valid CSS rule that makes all paragraphs blue.','p {\n  color: blue;\n}', 'p is the selector. color is the property. blue is the value.', 'Write code')
add('cssbase','Label each part in h1 { color: red; font-size: 20px; }.','Selector: h1.\nDeclarations: color: red and font-size: 20px.\nProperties: color and font-size.\nValues: red and 20px.\nCurly braces surround declarations.','selector { property: value; }', 'Explain code')
sec('selectors','css','Three CSS selectors','Element, class and ID selectors — know syntax and examples',ids((208,211),216,217))
add('selectors','Write an ELEMENT selector that makes every <p> green.','p { color: green; }','Element selector uses a tag name, with NO # or dot.', 'Write code')
add('selectors','Write a CLASS selector for HTML elements with class="important".','.important { color: red; }','Dot (.) means class. Many elements can share it.', 'Write code')
add('selectors','Write an ID selector for the element id="banner".','#banner { background-color: yellow; }','Hash (#) means ID; use unique IDs on the page.', 'Write code')
sec('methods','css','Three ways to apply CSS','Inline, internal, external CSS and where each goes',ids((218,223)))
add('methods','Write an INLINE CSS example that colors a paragraph red.','<p style="color: red;">Hello</p>','Inline styles are written inside that element’s style attribute.', 'Write code')
add('methods','Write a short INTERNAL CSS example.','<head>\n  <style>\n    p { color: red; }\n  </style>\n</head>','Internal CSS uses <style> usually inside <head>.', 'Write code')
add('methods','Link an EXTERNAL CSS file named style.css to an HTML page.','<head>\n  <link rel="stylesheet" href="style.css">\n</head>','External CSS is a separate .css file linked inside the HTML head.', 'Write code')
sec('box','css','CSS box model + diagram','Know the diagram, content, padding, border and margin',ids((231,238)))
add('box','Draw and label the CSS box model from the inside out.','CONTENT → PADDING → BORDER → MARGIN.\nContent is the text/image. Padding is space inside the border. Border surrounds padding. Margin is space outside the border.','Picture four nested boxes. The margin is the outermost space.', 'Diagram')
add('box','If width=200px, padding=10px on both sides, and border=5px on both sides, what is the total width?','230px.\n200 + 10 + 10 + 5 + 5 = 230px (default content-box sizing).','Margin is not counted in the border-box width.', 'Calculate')
sec('transforms','css','CSS 2D transforms','rotate(), scaleX(), scaleY(), translate() and skew()',ids((269,276)))
add('transforms','Rotate an element clockwise by 45 degrees using CSS.','transform: rotate(45deg);','A positive angle rotates clockwise in the usual screen coordinate system.', 'Write code')
add('transforms','Make a box twice as wide without changing its height using transform.','transform: scaleX(2);','scaleX(2) = stretch in the X direction.', 'Write code')
add('transforms','Make an element half its original height using transform.','transform: scaleY(0.5);','scaleY changes the vertical size.', 'Write code')
add('transforms','Move an element 40px to the right using a 2D transform.','transform: translateX(40px);','Positive X = right; negative X = left.', 'Write code')
sec('gradients','css','CSS gradients','Linear and radial gradients — both listed as a possible alternative to transforms',ids((258,261),263,264,267,268))
add('gradients','Make a left-to-right linear gradient from red to blue.','background-image: linear-gradient(to right, red, blue);','Linear = colors change along a straight line.', 'Write code')
add('gradients','Make a circular radial gradient from white in the center to blue outside.','background-image: radial-gradient(circle, white, blue);','Radial = colors spread outward from a center.', 'Write code')
sec('jsbase','js','JavaScript basics and script structure','Definition, <script>, basic code and console.log()',ids(278,282,284,285,286,287,288,294,296,298,300,301,302,303))
add('jsbase','What is JavaScript, and what job does it perform alongside HTML and CSS?','JavaScript is the scripting language that makes web pages interactive.\nHTML = structure, CSS = appearance, JavaScript = behavior.','A button that changes text after a click uses JavaScript.', 'Theory')
add('jsbase','Write the simplest HTML page with JavaScript that logs Hello to the console.','<!DOCTYPE html>\n<html>\n<body>\n<script>\n  console.log("Hello");\n</script>\n</body>\n</html>','Use <script> for JavaScript in an HTML page.', 'Write code')
add('jsbase','Explain the purpose of console.log() in one sentence.','console.log() prints information to the browser developer console, mainly for testing and debugging.','It does NOT display text in the web page itself.', 'Theory')
sec('jsoutput','js','JavaScript output methods','innerHTML, document.write(), alert() and console.log()',ids((279,280),(290,297)))
add('jsoutput','Which command changes the text inside the element whose id is result?','document.getElementById("result").innerHTML = "Done";','getElementById FINDS the element; innerHTML CHANGES what is inside it.', 'Write code')
add('jsoutput','What is the difference between console.log("Hi") and alert("Hi")?','console.log("Hi") writes to the developer console.\nalert("Hi") opens a popup alert box.','They do not update a paragraph on the page.', 'Compare')
sec('output','js','Predict JavaScript output','Read short code and write exactly what appears',ids(297,300,302,303,308,314,320,324,328,329,347))
add('output','Predict the console output:\nlet a = 5;\nlet b = 2;\nconsole.log(a + b);','7','5 + 2 = 7.', 'Predict output')
add('output','Predict the console output:\nlet x = 4;\nx += 3;\nconsole.log(x);','7','x += 3 means x = x + 3.', 'Predict output')
add('output','Predict the output:\nconsole.log("5" + 2);','52','The quoted "5" is text, so + joins the strings rather than adding numbers.', 'Predict output')
add('output','Predict the output:\nlet x = 10;\nif (x > 5) { console.log("Big"); }\nelse { console.log("Small"); }','Big','10 > 5 is true, so the if block runs.', 'Predict output')
add('output','Predict the output:\nfor (let i = 1; i <= 3; i++) { console.log(i); }','1\n2\n3','Loop starts at 1, prints each value, stops after 3.', 'Predict output')
add('output','Predict the content of the paragraph:\n<p id="demo"></p>\n<script>document.getElementById("demo").innerHTML = 5 + 6;</script>','The paragraph displays 11.','JavaScript calculates 5 + 6 and writes it into the paragraph.', 'Predict output')
sec('conditions','js','If / else and conditions','Definitions, syntax, examples and branching decisions',ids((332,335),341))
add('conditions','Write an if–else that prints Adult when age is 18 or more, otherwise Minor.','let age = 19;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}','The if condition must be in parentheses.', 'Write code')
add('conditions','What does else if do? Give a small example.','else if checks another condition only when the earlier if or else if was false.\nExample: if (mark >= 75) {...} else if (mark >= 50) {...} else {...}','If / else if / else: first true branch wins.', 'Theory')
sec('loops','js','Loops','for, while, do...while; examples and output',ids((342,354)))
add('loops','Write a for loop that prints the numbers 1, 2 and 3.','for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}','Start i at 1; continue while i <= 3; increment i.', 'Write code')
add('loops','Write a while loop that prints 1, 2 and 3.','let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}','Update i inside the loop so it eventually stops.', 'Write code')
add('loops','Write a do...while loop that prints 1 and 2.','let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 2);','do...while always executes the body at least once.', 'Write code')
add('loops','Predict the output:\nlet i = 3;\nwhile (i < 3) { console.log(i); i++; }','Nothing is printed.','The while condition is false before the first iteration.', 'Predict output')
sec('switch','js','Switch program','Switch / case / break / default; write programs and identify output',ids((336,340)))
add('switch','Write JavaScript switch code that prints Two for value 2, One for value 1, or Other.','let value = 2;\nswitch (value) {\n  case 1: console.log("One"); break;\n  case 2: console.log("Two"); break;\n  default: console.log("Other");\n}','break prevents unintentionally continuing into the next case.', 'Write code')
add('switch','Predict output:\nlet n = 2;\nswitch (n) {\n  case 1: console.log("A"); break;\n  case 2: console.log("B"); break;\n  default: console.log("C");\n}','B','case 2 matches and break exits the switch.', 'Predict output')
add('switch','What happens if you forget break after a matching case in a JavaScript switch?','Execution usually continues into the following case(s) until a break or the switch ends. This is called fall-through.','Useful in some cases, but an easy exam mistake.', 'Debug')
sec('arrays','js','JavaScript arrays','Define, declare, index and display values',ids((326,331)))
add('arrays','Declare an array of three colors and print the second color.','const colors = ["red", "blue", "green"];\nconsole.log(colors[1]); // blue','Arrays begin at index 0, so index 1 is the second element.', 'Write code')
add('arrays','Predict the output:\nconst numbers = [10, 20, 30];\nconsole.log(numbers[0] + numbers[2]);','40','numbers[0] is 10; numbers[2] is 30.', 'Predict output')
add('arrays','Fix this to print the FIRST element:\nconst a = ["A", "B"];\nconsole.log(a[1]);','Use console.log(a[0]);','Index 0 is the first element, not index 1.', 'Find error')
sec('functions','js','JavaScript functions','Define, write, call, parameters and return',ids((316,321)))
add('functions','Write a function called greet that prints Hello when called.','function greet() {\n  console.log("Hello");\n}\ngreet();','Define with function, then call using name followed by parentheses.', 'Write code')
add('functions','Write a function add(a,b) that returns the sum and call it with 3 and 4.','function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4)); // 7','return sends a value back to the caller.', 'Write code')
add('functions','Predict the output:\nfunction square(n) { return n * n; }\nconsole.log(square(5));','25','n = 5, so 5 × 5 = 25.', 'Predict output')
sec('domtheory','js','DOM theory and purpose','What DOM means and why JavaScript uses it',ids(278,279,280,281,282,283))
add('domtheory','What is the DOM, in simple words?','DOM stands for Document Object Model. It represents the HTML page as objects/elements that JavaScript can find and change.','Imagine the page as a tree of elements: html → body → p/button.', 'Theory')
add('domtheory','What is the purpose of the DOM?','It lets scripts access and update page content, properties, styles and elements, and respond to user actions.','Click button → find paragraph with DOM → change the paragraph.', 'Theory')
sec('debug','js','Find errors in code','Semicolons, brackets, quotes, IDs and logic mistakes',ids(300,303,305,306,310,312,313,345,353))
add('debug','Find and correct the syntax error:\nlet name = "Ace;\nconsole.log(name);','Correct version:\nlet name = "Ace";\nconsole.log(name);','A string needs both opening and closing quotes.', 'Find error')
add('debug','Find and correct the syntax error:\nif (x > 5 { console.log(x); }','Correct version:\nif (x > 5) { console.log(x); }','Missing closing ) after the condition.', 'Find error')
add('debug','Find the logic error: code should print 1, 2, 3.\nfor (let i = 1; i < 3; i++) { console.log(i); }','Use i <= 3 instead of i < 3.\nfor (let i = 1; i <= 3; i++) { console.log(i); }','i < 3 stops before printing 3.', 'Find error')
add('debug','Find the DOM error:\n<p id="demo">Hi</p>\n<script>document.getElementById("demoo").innerHTML = "Bye";</script>','Change "demoo" to "demo".\ndocument.getElementById("demo").innerHTML = "Bye";','The string passed to getElementById must match the HTML id exactly.', 'Find error')
add('debug','Does forgetting one semicolon always cause an error in JavaScript?','No. JavaScript often inserts missing semicolons automatically. But use them consistently, and watch for missing quotes/brackets or incorrect logic.','A semicolon is good style; not every missing one is a syntax error.', 'Theory')
add('debug','Find the logic error: should print three times but may loop forever.\nlet i = 1;\nwhile (i <= 3) { console.log(i); }','Add i++ inside the while loop:\nwhile (i <= 3) { console.log(i); i++; }','Without increment, i stays 1 and the condition remains true.', 'Find error')
sec('paragraph','js','Show a message in a paragraph','Link JavaScript output to <p> using id and innerHTML',ids(279,280,291,297))
add('paragraph','Complete the HTML and JavaScript so the paragraph displays Welcome.','<p id="message"></p>\n<script>\n  document.getElementById("message").innerHTML = "Welcome";\n</script>','HTML id and getElementById value must match.', 'Write code')
add('paragraph','Find the mistake:\n<p id="msg"></p>\n<script>document.getElementById("msg").innerHTML("Hi");</script>','innerHTML is a PROPERTY, not a function. Use = instead of parentheses:\ndocument.getElementById("msg").innerHTML = "Hi";','Property assignment uses =.', 'Find error')
sec('letters','js','Uppercase / lowercase letters','Recognise uppercase and lowercase alphabet examples; case sensitivity',ids(302,303))
add('letters','In JavaScript, are "a" and "A" identical strings?','No. JavaScript is case-sensitive, so lowercase "a" and uppercase "A" are different.','"a" === "A" is false.', 'Theory')
add('letters','Write JavaScript that converts lowercase a to uppercase A.','let letter = "a";\nconsole.log(letter.toUpperCase()); // A','toUpperCase() converts letters to capitals.', 'Write code')
add('letters','Predict the output:\nconsole.log("a".toUpperCase());\nconsole.log("A".toLowerCase());','A\na','toUpperCase() makes capitals; toLowerCase() makes small letters.', 'Predict output')
sec('lists','html','HTML lists — code','Unordered, ordered and description lists',ids((101,105)))
add('lists','Write HTML code for a BULLETED list with Apple and Banana.','<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>','ul = unordered list; li = list item.', 'Write code')
add('lists','Write HTML code for a NUMBERED list with first and second steps.','<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>','ol = ordered (numbered) list.', 'Write code')
add('lists','Write a definition/description list for HTML: HyperText Markup Language.','<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>','dl = description list; dt = term; dd = description.', 'Write code')
sec('tables','html','HTML tables — code','Rows, columns, headings and simple table examples',ids((106,113)))
add('tables','Write an HTML table with Name and Age headers, and one row for Ana, 19.','<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ana</td><td>19</td></tr>\n</table>','tr = row; th = heading; td = normal cell.', 'Write code')
add('tables','What is wrong with this table?\n<table><td>A</td><td>B</td></table>','The cells need a table row (<tr>).\n<table><tr><td>A</td><td>B</td></tr></table>','Put cells inside rows.', 'Find error')
add('tables','What is the result of <th colspan="2">Results</th>?','One header cell spans TWO columns instead of one.','colspan combines columns; rowspan combines rows.', 'Explain code')
# all included IDs must be valid; duplicates allowed across sections but unique in focus pool
for s in sections:
 assert all(i in base for i in s['ids']),s
 assert len(s['ids'])==len(set(s['ids'])),s['key']
 # Preserve teacher's outline provenance and the original six files for base bank questions.
extra=sorted(extra,key=lambda q:(next(i for i,s in enumerate(sections) if s['key']==q['section']),int(q['id'][1:])))
allbase={i for s in sections for i in s['ids']}
counts={s['key']:len(s['ids'])+sum(q['section']==s['key'] for q in extra) for s in sections}
print(len(sections),'sections;',len(allbase),'unique base questions;',len(extra),'teacher-targeted new questions;',len(allbase)+len(extra),'unique focus questions')
print(counts)
payload={'sections':sections,'extra':extra,'notes':{'page1':'CSS fundamentals, 3 selectors, CSS inclusion methods, box model/diagram, 2D transforms or gradients; JavaScript basics, output, conditions, loops, switch programs.','page2':'JavaScript arrays, functions, DOM, code-output and error finding, case of letters, HTML lists and tables.','unclear':['A handwritten line between code/error finding and alphabet notes is ambiguous; practice interpreting JavaScript output and displaying a message in a paragraph is included.','A short item resembling “paper flow” is not readable enough to turn into a definite exam topic.']}}
(folder/'focused.json').write_text(json.dumps(payload,indent=2,ensure_ascii=False),encoding='utf-8')
(folder/'focused.js').write_text('window.WDC_FOCUSED = '+json.dumps(payload,ensure_ascii=False)+';\n',encoding='utf-8')
