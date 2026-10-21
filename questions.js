/* Question bank based on six uploaded WDC course files. */
const WDC_QUESTIONS = [
  {
    "id": "q001",
    "unit": "Internet & Web",
    "topic": "Internet fundamentals",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 4",
    "q": "What is the Internet?",
    "a": "The Internet is a worldwide network connecting computers and other devices. It lets people communicate, share information, and use online services.",
    "example": "Think: many networks connected into one global system."
  },
  {
    "id": "q002",
    "unit": "Internet & Web",
    "topic": "Internet fundamentals",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 4",
    "q": "Name the four key features of the Internet.",
    "a": "1. Global connectivity.\n2. Communication services.\n3. Information sharing.\n4. Online applications.",
    "example": ""
  },
  {
    "id": "q003",
    "unit": "Internet & Web",
    "topic": "Internet fundamentals",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 4",
    "q": "Give examples of communication services on the Internet.",
    "a": "Email, online chat, VoIP (Internet calling), and video conferencing.",
    "example": ""
  },
  {
    "id": "q004",
    "unit": "Internet & Web",
    "topic": "Internet fundamentals",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 4",
    "q": "Give examples of Internet-based applications.",
    "a": "Online banking, shopping, social media, and cloud services.",
    "example": ""
  },
  {
    "id": "q005",
    "unit": "Internet & Web",
    "topic": "Internet fundamentals",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 4",
    "q": "How does the Internet help people share information?",
    "a": "It makes websites, online resources, and digital libraries available to people around the world.",
    "example": ""
  },
  {
    "id": "q006",
    "unit": "Internet & Web",
    "topic": "Internet history",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 5",
    "q": "What was ARPANET?",
    "a": "ARPANET was an early computer network and a predecessor to the modern Internet. It allowed multiple computers to communicate on one network.",
    "example": ""
  },
  {
    "id": "q007",
    "unit": "Internet & Web",
    "topic": "Internet history",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 5",
    "q": "What does ARPANET stand for in the notes?",
    "a": "Advanced Research Projects Agency Network. The slides shorten the expansion to “Advanced Research Projects Agency”.",
    "example": ""
  },
  {
    "id": "q008",
    "unit": "Internet & Web",
    "topic": "Internet history",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 5",
    "q": "Which technology did ARPANET use to transmit information?",
    "a": "Packet switching: breaking data into smaller packets that can travel through the network.",
    "example": ""
  },
  {
    "id": "q009",
    "unit": "Internet & Web",
    "topic": "Internet history",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 5",
    "q": "When was the first ARPANET message sent?",
    "a": "October 1969. The notes place the early Internet/ARPANET era in the 1960s.",
    "example": ""
  },
  {
    "id": "q010",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "What is a client in a client–server system?",
    "a": "A client is a device or application, such as your browser, that requests information or a service from a server.",
    "example": "Your laptop requests a website → client."
  },
  {
    "id": "q011",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "What is a web server?",
    "a": "A server is a computer/system that stores or provides website files and responds to requests from clients.",
    "example": ""
  },
  {
    "id": "q012",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "What does ISP stand for, and what does it do?",
    "a": "Internet Service Provider. It gives users and networks access to the Internet.",
    "example": ""
  },
  {
    "id": "q013",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "What is a domain name?",
    "a": "A human-friendly website name used instead of remembering a numeric IP address.",
    "example": "Example: example.com"
  },
  {
    "id": "q014",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "Explain in simple words how a website is loaded.",
    "a": "1. Enter a website name in the browser.\n2. DNS finds its IP address.\n3. The browser requests the page from the server.\n4. The server sends files.\n5. The browser displays the page.",
    "example": ""
  },
  {
    "id": "q015",
    "unit": "Internet & Web",
    "topic": "Client, server & ISP",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 6–7",
    "q": "Why do websites use domain names?",
    "a": "Names are easier to read and remember than long numerical IP addresses.",
    "example": ""
  },
  {
    "id": "q016",
    "unit": "Internet & Web",
    "topic": "IP addresses",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 9",
    "q": "What does IP stand for?",
    "a": "Internet Protocol.",
    "example": ""
  },
  {
    "id": "q017",
    "unit": "Internet & Web",
    "topic": "IP addresses",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 9",
    "q": "What is an IP address?",
    "a": "A numeric network address that helps identify a device and route data to it.",
    "example": "Example from the notes: 192.154.3.29"
  },
  {
    "id": "q018",
    "unit": "Internet & Web",
    "topic": "IP addresses",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 9",
    "q": "How is an IPv4 address written?",
    "a": "As four numbers separated by dots. Each number is from 0 to 255.",
    "example": "Example: 192.168.1.1"
  },
  {
    "id": "q019",
    "unit": "Internet & Web",
    "topic": "IP addresses",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 9",
    "q": "Why are IP addresses useful?",
    "a": "They help distinguish networked devices and let data reach the correct destination.",
    "example": ""
  },
  {
    "id": "q020",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What is the World Wide Web (WWW)?",
    "a": "A system of linked web pages and resources accessed using the Internet. The Web is a service built on the Internet.",
    "example": ""
  },
  {
    "id": "q021",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What is the difference between the Internet and the Web?",
    "a": "Internet = the global network/infrastructure.\nWorld Wide Web = connected web pages you access over that network.",
    "example": ""
  },
  {
    "id": "q022",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What is a hyperlink?",
    "a": "A clickable link that takes you from one web page or resource to another.",
    "example": ""
  },
  {
    "id": "q023",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What does HTTP stand for, and what is its use?",
    "a": "Hypertext Transfer Protocol. It defines how browsers and web servers exchange web requests and responses.",
    "example": ""
  },
  {
    "id": "q024",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What does URL stand for?",
    "a": "Uniform Resource Locator, the address used to locate a web resource.",
    "example": ""
  },
  {
    "id": "q025",
    "unit": "Internet & Web",
    "topic": "WWW & web components",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 10–11",
    "q": "What does HTML stand for, and what is its role on the Web?",
    "a": "HyperText Markup Language. It describes the structure/content of web pages.",
    "example": ""
  },
  {
    "id": "q026",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "Identify the protocol, domain and extension in https://www.fitsmallbusiness.com.",
    "a": "Protocol/prefix: https://.\nDomain name: fitsmallbusiness.\nExtension (top-level domain): .com.\n“www” is a subdomain label.",
    "example": "Based on the labeled URL diagram on slide 8."
  },
  {
    "id": "q027",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "What is DNS?",
    "a": "Domain Name System. It looks up the IP address associated with a domain name.",
    "example": "Think of it as a contact list for website names."
  },
  {
    "id": "q028",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "Describe the browser–DNS–web server interaction.",
    "a": "1. User enters URL.\n2. Browser looks up domain using DNS.\n3. DNS supplies server IP address.\n4. Browser sends HTTP/HTTPS request.\n5. Server responds with website files.\n6. Browser renders them.",
    "example": "The diagram on slide 14 shows the DNS lookup and HTTP exchange."
  },
  {
    "id": "q029",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "What is the difference between a DNS server and a web server?",
    "a": "DNS server helps find an IP address for a domain. Web server sends the actual website content.",
    "example": ""
  },
  {
    "id": "q030",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "Which web technologies help a browser display a website?",
    "a": "The DOM (page structure), CSS processing (styles) and JavaScript engine (scripts) help display and run the page.",
    "example": "The slide groups these under its explanation of rendering."
  },
  {
    "id": "q031",
    "unit": "Internet & Web",
    "topic": "URL & DNS diagrams",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slides 8, 12–14",
    "q": "What does HTTPS mean compared with HTTP?",
    "a": "HTTPS is HTTP with an encrypted, authenticated connection; HTTP by itself does not provide that protection.",
    "example": "The slides mention HTTP/HTTPS requests."
  },
  {
    "id": "q032",
    "unit": "Internet & Web",
    "topic": "Why make a website?",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 15",
    "q": "Give six reasons for creating a website.",
    "a": "1. 24/7 online presence.\n2. Share information.\n3. Marketing/promotion.\n4. Grow a business.\n5. Communicate with visitors.\n6. Sell products or book services.",
    "example": ""
  },
  {
    "id": "q033",
    "unit": "Internet & Web",
    "topic": "Why make a website?",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 15",
    "q": "How does a website support business growth?",
    "a": "It can reach potential customers, present products/services and help increase sales.",
    "example": ""
  },
  {
    "id": "q034",
    "unit": "Internet & Web",
    "topic": "Why make a website?",
    "source": "WDC- UNIT 1 Part 1.pptx",
    "page": "Slide 15",
    "q": "How can users communicate with an organization through a website?",
    "a": "With contact forms, email links, live chat, and social-media links.",
    "example": ""
  },
  {
    "id": "q035",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "What is simplicity in web design?",
    "a": "Keep the design clean and straightforward. Avoid unnecessary graphics, text and clutter.",
    "example": ""
  },
  {
    "id": "q036",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "What is user-friendly navigation?",
    "a": "Make menus and links easy to find so users can move between pages without confusion.",
    "example": ""
  },
  {
    "id": "q037",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "What does consistency mean in website design?",
    "a": "Use matching colors, fonts, layouts and patterns across pages so the site feels predictable.",
    "example": ""
  },
  {
    "id": "q038",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "What is responsive design?",
    "a": "Design that adapts to phones, tablets and desktop screens so the website remains usable.",
    "example": ""
  },
  {
    "id": "q039",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "List the four basic principles of developing a good website.",
    "a": "1. Simplicity.\n2. User-friendly navigation.\n3. Consistency.\n4. Responsive design.",
    "example": ""
  },
  {
    "id": "q040",
    "unit": "Web Design",
    "topic": "Core design principles",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 3",
    "q": "Why is responsive design important?",
    "a": "People use different screen sizes. A responsive layout adjusts instead of forcing them to zoom or scroll sideways.",
    "example": ""
  },
  {
    "id": "q041",
    "unit": "Web Design",
    "topic": "W3C standards",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 4",
    "q": "What is the W3C?",
    "a": "World Wide Web Consortium, the organization known for developing web standards.",
    "example": ""
  },
  {
    "id": "q042",
    "unit": "Web Design",
    "topic": "W3C standards",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 4",
    "q": "Explain HTML, CSS, XML and DOM in one line each.",
    "a": "HTML → page structure.\nCSS → appearance/layout.\nXML → structured data storage/transfer.\nDOM → page representation that scripts can access/change.",
    "example": ""
  },
  {
    "id": "q043",
    "unit": "Web Design",
    "topic": "W3C standards",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 4",
    "q": "What is XML used for?",
    "a": "Extensible Markup Language is used to represent, store, and transport structured data.",
    "example": ""
  },
  {
    "id": "q044",
    "unit": "Web Design",
    "topic": "W3C standards",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 4",
    "q": "What is the DOM used for?",
    "a": "Document Object Model lets scripts find, read and update parts of a webpage.",
    "example": ""
  },
  {
    "id": "q045",
    "unit": "Web Design",
    "topic": "W3C standards",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 4",
    "q": "Why are web standards important?",
    "a": "They help websites behave consistently across different browsers and devices.",
    "example": ""
  },
  {
    "id": "q046",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "State the five steps of the website planning process.",
    "a": "1. Define the purpose.\n2. Identify the target audience.\n3. Plan structure and content.\n4. Design and develop.\n5. Test and deploy.",
    "example": ""
  },
  {
    "id": "q047",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "What do you decide when defining a website’s purpose?",
    "a": "Its main goal: for example, sharing information, promoting a business or selling products.",
    "example": ""
  },
  {
    "id": "q048",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "Why should we identify the target audience?",
    "a": "To understand who will use the site and what those visitors need.",
    "example": ""
  },
  {
    "id": "q049",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "What is a sitemap used for in planning?",
    "a": "It shows what pages a website will have and how they are organized.",
    "example": ""
  },
  {
    "id": "q050",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "What should be tested before deploying a website?",
    "a": "Errors, browser/device compatibility, performance and whether important features work.",
    "example": ""
  },
  {
    "id": "q051",
    "unit": "Web Design",
    "topic": "Website planning",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slide 5",
    "q": "What is deployment?",
    "a": "Making the finished and tested website available for people to use online.",
    "example": ""
  },
  {
    "id": "q052",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "What is learnability?",
    "a": "How easily a new user can understand and learn to use a website or interface.",
    "example": ""
  },
  {
    "id": "q053",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "What is visibility in interface design?",
    "a": "Important controls and information should be easy to see, recognize and use.",
    "example": ""
  },
  {
    "id": "q054",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "What is error prevention?",
    "a": "Designing interactions to stop likely mistakes and help users recover if errors occur.",
    "example": "Example: confirm before deleting something important."
  },
  {
    "id": "q055",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "What does efficiency mean in interface design?",
    "a": "Helping both beginners and experienced users complete tasks quickly and flexibly.",
    "example": "Example: typical installation for beginners, custom installation for experts."
  },
  {
    "id": "q056",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "What does the “graphic design” concept emphasize in these notes?",
    "a": "Avoid irrelevant or rarely needed information. Extra clutter hides important content.",
    "example": ""
  },
  {
    "id": "q057",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "List the five design concepts discussed in the slides.",
    "a": "Learnability, visibility, error prevention, efficiency and graphic design (reducing unnecessary information).",
    "example": ""
  },
  {
    "id": "q058",
    "unit": "Web Design",
    "topic": "Interface design concepts",
    "source": "WDC- UNIT 1 Part 2.pptx",
    "page": "Slides 6–8",
    "q": "Give an example of good learnability and visibility.",
    "a": "Clear labeled buttons, familiar icons and menus that new users can understand without instructions.",
    "example": ""
  },
  {
    "id": "q059",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What is HTML?",
    "a": "HyperText Markup Language. The standard markup language that structures content on web pages.",
    "example": ""
  },
  {
    "id": "q060",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What is an HTML element?",
    "a": "A piece of webpage content marked by HTML tags, usually a start tag, content and end tag.",
    "example": "Example: <p>Hello</p>"
  },
  {
    "id": "q061",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What does <!DOCTYPE html> do?",
    "a": "It declares the document as HTML5 and helps the browser use the correct rendering mode. Put it at the top of the page.",
    "example": "Example: <!DOCTYPE html>"
  },
  {
    "id": "q062",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What is the <html> element?",
    "a": "The root element that contains the whole HTML page.",
    "example": ""
  },
  {
    "id": "q063",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What belongs inside <head>?",
    "a": "Page information such as the title, metadata, CSS links and sometimes scripts. It is not the main visible page content.",
    "example": ""
  },
  {
    "id": "q064",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What does the <title> element do?",
    "a": "Sets the page title shown in the browser tab.",
    "example": ""
  },
  {
    "id": "q065",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "What does <body> contain?",
    "a": "The visible page content: headings, paragraphs, links, images, tables, forms and so on.",
    "example": ""
  },
  {
    "id": "q066",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "Write a minimal HTML page skeleton.",
    "a": "<!DOCTYPE html>\n<html>\n<head><title>My Page</title></head>\n<body><h1>Hello</h1><p>Welcome</p></body>\n</html>",
    "example": ""
  },
  {
    "id": "q067",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "Where must <!DOCTYPE html> appear?",
    "a": "At the very beginning of the document, before the HTML tags, and only once.",
    "example": ""
  },
  {
    "id": "q068",
    "unit": "HTML",
    "topic": "HTML document basics",
    "source": "2 A) HTML.pdf",
    "page": "Pages 1–2",
    "q": "How are HTML and CSS different?",
    "a": "HTML describes the content and structure. CSS controls how that content looks.",
    "example": ""
  },
  {
    "id": "q069",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "List the six website development phases given in the HTML notes.",
    "a": "1. Concept building.\n2. Solution design analysis.\n3. Business proposal.\n4. Design ride (wireframing/design).\n5. Development sprint.\n6. Launch in market.",
    "example": ""
  },
  {
    "id": "q070",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "What happens during concept building?",
    "a": "Project kickoff, understanding the customer and market, and brainstorming ideas.",
    "example": ""
  },
  {
    "id": "q071",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "What happens during solution design analysis?",
    "a": "Decide features, functions, architecture, content and project scope.",
    "example": ""
  },
  {
    "id": "q072",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "What does a business proposal contain?",
    "a": "Solution options, implementation plan, packages/pricing and business value.",
    "example": ""
  },
  {
    "id": "q073",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "What happens during the design ride and development sprint?",
    "a": "Design ride → wireframes and design refinements.\nDevelopment sprint → front/back-end development, QA and beta testing.",
    "example": ""
  },
  {
    "id": "q074",
    "unit": "HTML",
    "topic": "Development process",
    "source": "2 A) HTML.pdf",
    "page": "Page 2",
    "q": "What happens after website launch?",
    "a": "Find and fix issues, promote the site in search engines, and monitor analytics.",
    "example": ""
  },
  {
    "id": "q075",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "Which HTML tags define headings?",
    "a": "<h1> to <h6>. <h1> is the highest-level/most important heading and <h6> the lowest.",
    "example": ""
  },
  {
    "id": "q076",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "Which tag creates a paragraph?",
    "a": "<p>.",
    "example": "Example: <p>This is a paragraph.</p>"
  },
  {
    "id": "q077",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "What is an HTML attribute?",
    "a": "Extra information written in an opening tag.",
    "example": "Example: href in <a href=\"page.html\">Go</a>"
  },
  {
    "id": "q078",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "What tag makes a hyperlink?",
    "a": "<a>, usually with an href attribute containing the destination.",
    "example": ""
  },
  {
    "id": "q079",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "How do you display an image in HTML?",
    "a": "Use <img> with src (image path) and alt (alternative text).",
    "example": "Example: <img src=\"cat.jpg\" alt=\"A cat\">"
  },
  {
    "id": "q080",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "What does the src attribute mean on an image?",
    "a": "It tells the browser where the image file is located.",
    "example": ""
  },
  {
    "id": "q081",
    "unit": "HTML",
    "topic": "Headings, paragraphs & attributes",
    "source": "2 A) HTML.pdf",
    "page": "Pages 2–3",
    "q": "What does the alt attribute do?",
    "a": "Provides alternative text describing the image, useful when the file fails to load or for assistive technology.",
    "example": ""
  },
  {
    "id": "q082",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "What is the difference between <b> and <strong>?",
    "a": "<b> makes text stylistically bold. <strong> says the text is important (and is often displayed bold).",
    "example": ""
  },
  {
    "id": "q083",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "What is the difference between <i> and <em>?",
    "a": "<i> marks alternate voice/style, often italic; <em> marks emphasis, also usually italic.",
    "example": ""
  },
  {
    "id": "q084",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "Which tag highlights text?",
    "a": "<mark>.",
    "example": "Example: <mark>Important</mark>"
  },
  {
    "id": "q085",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "Which tag shows smaller text?",
    "a": "<small>.",
    "example": ""
  },
  {
    "id": "q086",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "Which tags show deleted and inserted text?",
    "a": "<del> shows deleted text, usually struck through. <ins> shows inserted text, usually underlined.",
    "example": ""
  },
  {
    "id": "q087",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "Which tags make subscript and superscript text?",
    "a": "<sub> = lowered text, such as the 2 in H₂O. <sup> = raised text, such as the 2 in x².",
    "example": ""
  },
  {
    "id": "q088",
    "unit": "HTML",
    "topic": "Text formatting",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3–5",
    "q": "Name eight HTML text-formatting tags and their uses.",
    "a": "<b> bold; <strong> important; <i> alternate/italic; <em> emphasized; <mark> highlighted; <small> smaller; <del> deleted; <ins> inserted; <sub> subscript; <sup> superscript.",
    "example": ""
  },
  {
    "id": "q089",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "How do you write an HTML comment?",
    "a": "Place text between <!-- and -->. Browsers do not display it.",
    "example": "Example: <!-- my note -->"
  },
  {
    "id": "q090",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "Why use HTML comments?",
    "a": "To explain code or temporarily hide a section of HTML without deleting it.",
    "example": ""
  },
  {
    "id": "q091",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "How do you change an element’s background color?",
    "a": "Use the CSS background-color property, often inside the HTML style attribute.",
    "example": "Example: <p style=\"background-color:Tomato\">Hi</p>"
  },
  {
    "id": "q092",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "How do you change text and border colors?",
    "a": "Use color for text and border for the outline.",
    "example": "Example: style=\"color:blue; border:2px solid red\""
  },
  {
    "id": "q093",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "Name five ways to represent an HTML/CSS color.",
    "a": "Named colors, RGB, HEX, HSL, RGBA and HSLA (six are shown in the notes).",
    "example": ""
  },
  {
    "id": "q094",
    "unit": "HTML",
    "topic": "Comments and colors",
    "source": "2 A) HTML.pdf",
    "page": "Pages 6–7",
    "q": "What do RGBA and HSLA add compared with RGB and HSL?",
    "a": "An alpha (opacity) component, so colors can be partially transparent.",
    "example": ""
  },
  {
    "id": "q095",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "What is href used for in a link?",
    "a": "It sets the URL or destination that opens when the link is clicked.",
    "example": ""
  },
  {
    "id": "q096",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "What is an absolute URL?",
    "a": "A complete address, including protocol and host.",
    "example": "Example: https://www.w3.org/"
  },
  {
    "id": "q097",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "What is a relative URL?",
    "a": "A link path relative to the current site/page, without a full host address.",
    "example": "Example: images/photo.jpg"
  },
  {
    "id": "q098",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "How can an image act as a link?",
    "a": "Put an <img> element inside an <a> element.",
    "example": "Example: <a href=\"home.html\"><img src=\"logo.png\" alt=\"Home\"></a>"
  },
  {
    "id": "q099",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "How do you create an email link in HTML?",
    "a": "Use mailto: in an anchor href.",
    "example": "Example: <a href=\"mailto:someone@example.com\">Email</a>"
  },
  {
    "id": "q100",
    "unit": "HTML",
    "topic": "Links",
    "source": "2 A) HTML.pdf",
    "page": "Pages 7–9",
    "q": "What is visible link text?",
    "a": "The text between <a> and </a> that the visitor clicks.",
    "example": ""
  },
  {
    "id": "q101",
    "unit": "HTML",
    "topic": "Lists",
    "source": "2 A) HTML.pdf",
    "page": "Pages 9–10",
    "q": "What is an unordered list?",
    "a": "A list of items that normally appear with bullet markers. Use <ul> with <li> children.",
    "example": ""
  },
  {
    "id": "q102",
    "unit": "HTML",
    "topic": "Lists",
    "source": "2 A) HTML.pdf",
    "page": "Pages 9–10",
    "q": "What is an ordered list?",
    "a": "A list that normally shows numbered items. Use <ol> with <li> children.",
    "example": ""
  },
  {
    "id": "q103",
    "unit": "HTML",
    "topic": "Lists",
    "source": "2 A) HTML.pdf",
    "page": "Pages 9–10",
    "q": "Which tags are used for a description list?",
    "a": "<dl> = list; <dt> = term; <dd> = term description.",
    "example": ""
  },
  {
    "id": "q104",
    "unit": "HTML",
    "topic": "Lists",
    "source": "2 A) HTML.pdf",
    "page": "Pages 9–10",
    "q": "Write the basic HTML for an unordered list with two items.",
    "a": "<ul>\n<li>Tea</li>\n<li>Coffee</li>\n</ul>",
    "example": ""
  },
  {
    "id": "q105",
    "unit": "HTML",
    "topic": "Lists",
    "source": "2 A) HTML.pdf",
    "page": "Pages 9–10",
    "q": "When would you choose <ol> instead of <ul>?",
    "a": "When order matters, such as numbered instructions or steps.",
    "example": ""
  },
  {
    "id": "q106",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What is an HTML table used for?",
    "a": "Showing related data in rows and columns.",
    "example": ""
  },
  {
    "id": "q107",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What do <table>, <tr>, <th> and <td> mean?",
    "a": "<table> table; <tr> row; <th> header cell; <td> regular data cell.",
    "example": ""
  },
  {
    "id": "q108",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What is <caption> used for?",
    "a": "Giving a table a title/caption.",
    "example": ""
  },
  {
    "id": "q109",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What do <thead>, <tbody> and <tfoot> do?",
    "a": "Group header, body and footer rows in a table.",
    "example": ""
  },
  {
    "id": "q110",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What is the use of <colgroup> and <col>?",
    "a": "To define/group table columns so they can be formatted.",
    "example": ""
  },
  {
    "id": "q111",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What does colspan do?",
    "a": "Makes one table cell span multiple columns.",
    "example": "Example: <th colspan=\"2\">Name</th>"
  },
  {
    "id": "q112",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "What does rowspan do?",
    "a": "Makes one table cell span multiple rows.",
    "example": "Example: <th rowspan=\"2\">Phone</th>"
  },
  {
    "id": "q113",
    "unit": "HTML",
    "topic": "Tables",
    "source": "2 A) HTML.pdf",
    "page": "Pages 10–12",
    "q": "Write a simple one-row, two-column HTML table.",
    "a": "<table><tr><th>Name</th><th>Age</th></tr><tr><td>Ana</td><td>20</td></tr></table>",
    "example": ""
  },
  {
    "id": "q114",
    "unit": "HTML",
    "topic": "Images",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3, 12–13",
    "q": "What happens if an image file cannot load?",
    "a": "The browser can display the alt text instead of the image.",
    "example": ""
  },
  {
    "id": "q115",
    "unit": "HTML",
    "topic": "Images",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3, 12–13",
    "q": "How do you set an image’s display dimensions in HTML?",
    "a": "With width and height attributes or CSS width/height.",
    "example": ""
  },
  {
    "id": "q116",
    "unit": "HTML",
    "topic": "Images",
    "source": "2 A) HTML.pdf",
    "page": "Pages 3, 12–13",
    "q": "Can HTML show animated GIF images?",
    "a": "Yes. Use an <img> whose src points to an animated .gif file.",
    "example": ""
  },
  {
    "id": "q117",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "What is an HTML form?",
    "a": "An area containing input controls for collecting data from users.",
    "example": ""
  },
  {
    "id": "q118",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "What does <input type=\"text\"> create?",
    "a": "A single-line text input field.",
    "example": ""
  },
  {
    "id": "q119",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "What does <label> do?",
    "a": "Gives an input a readable description and helps accessibility. Its for value should match the input id.",
    "example": ""
  },
  {
    "id": "q120",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "How are radio buttons different from checkboxes?",
    "a": "Radio buttons select ONE choice from a named group. Checkboxes allow zero or more choices.",
    "example": ""
  },
  {
    "id": "q121",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "Which input type creates a radio button?",
    "a": "<input type=\"radio\">.",
    "example": ""
  },
  {
    "id": "q122",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "Which input type creates a checkbox?",
    "a": "<input type=\"checkbox\">.",
    "example": ""
  },
  {
    "id": "q123",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "What does <input type=\"submit\"> do?",
    "a": "Creates a button that submits a form’s data to its destination.",
    "example": ""
  },
  {
    "id": "q124",
    "unit": "HTML",
    "topic": "Forms & controls",
    "source": "2 A) HTML.pdf",
    "page": "Pages 13–14",
    "q": "What does a form-handler do?",
    "a": "A server-side script/program receives and processes submitted form information.",
    "example": ""
  },
  {
    "id": "q125",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "What is the action attribute of <form>?",
    "a": "The URL or server endpoint that will receive the submitted form data.",
    "example": ""
  },
  {
    "id": "q126",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "What does method=\"get\" do?",
    "a": "Sends form fields in the URL query string. It is suitable for non-sensitive searches or bookmarkable results.",
    "example": ""
  },
  {
    "id": "q127",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "What does method=\"post\" do?",
    "a": "Sends form fields in the HTTP request body, not appended to the address bar.",
    "example": ""
  },
  {
    "id": "q128",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "What is the default HTML form method?",
    "a": "GET.",
    "example": ""
  },
  {
    "id": "q129",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "Why should you avoid GET for sensitive form data?",
    "a": "Because form values are placed in the URL and may be visible in browser history, logs or shared links.",
    "example": ""
  },
  {
    "id": "q130",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "Compare GET and POST in forms.",
    "a": "GET → values in URL; easy to bookmark; used for searches.\nPOST → values in request body; used for submissions with larger or changing data.",
    "example": ""
  },
  {
    "id": "q131",
    "unit": "HTML",
    "topic": "Form action and method",
    "source": "2 A) HTML.pdf",
    "page": "Pages 14–15",
    "q": "Does using POST alone make a form secure?",
    "a": "No. Use HTTPS to protect transmitted data; POST only changes where form data is sent.",
    "example": "This is a safety clarification beyond the notes’ simple GET/POST comparison."
  },
  {
    "id": "q132",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "What is the <meta> tag used for?",
    "a": "Metadata about the page such as description, author, keywords, character set and viewport settings.",
    "example": ""
  },
  {
    "id": "q133",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "Where are <meta> tags placed?",
    "a": "Inside <head>, not in the visible page body.",
    "example": ""
  },
  {
    "id": "q134",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "Give three examples of meta information.",
    "a": "Description, keywords, author (also character set, viewport and refresh).",
    "example": ""
  },
  {
    "id": "q135",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "What does <meta http-equiv=\"refresh\" content=\"30\"> mean?",
    "a": "It tells the browser to refresh the document after 30 seconds.",
    "example": ""
  },
  {
    "id": "q136",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "What is a viewport?",
    "a": "The portion of the webpage visible on the user’s device screen.",
    "example": ""
  },
  {
    "id": "q137",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "What does width=device-width in a viewport meta tag do?",
    "a": "It makes the page’s viewport width match the device’s screen width.",
    "example": ""
  },
  {
    "id": "q138",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "What does initial-scale=1.0 mean?",
    "a": "Start the page at a normal zoom scale when first loaded.",
    "example": ""
  },
  {
    "id": "q139",
    "unit": "HTML",
    "topic": "Metadata & responsive viewport",
    "source": "2 A) HTML.pdf",
    "page": "Pages 15–16",
    "q": "Write the common responsive viewport tag.",
    "a": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "example": ""
  },
  {
    "id": "q140",
    "unit": "HTML",
    "topic": "Page structure & semantics",
    "source": "2 A) HTML.pdf",
    "page": "Page 17",
    "q": "Name eight HTML semantic page-structure elements.",
    "a": "<header>, <nav>, <section>, <article>, <aside>, <footer>, <details>, <summary>.",
    "example": ""
  },
  {
    "id": "q141",
    "unit": "HTML",
    "topic": "Page structure & semantics",
    "source": "2 A) HTML.pdf",
    "page": "Page 17",
    "q": "What does <nav> represent?",
    "a": "A group of navigation links.",
    "example": ""
  },
  {
    "id": "q142",
    "unit": "HTML",
    "topic": "Page structure & semantics",
    "source": "2 A) HTML.pdf",
    "page": "Page 17",
    "q": "What is the difference between <section> and <article>?",
    "a": "<section> groups content by theme; <article> is self-contained content that can make sense independently.",
    "example": ""
  },
  {
    "id": "q143",
    "unit": "HTML",
    "topic": "Page structure & semantics",
    "source": "2 A) HTML.pdf",
    "page": "Page 17",
    "q": "What does <aside> represent?",
    "a": "Related side content, such as a sidebar.",
    "example": ""
  },
  {
    "id": "q144",
    "unit": "HTML",
    "topic": "Page structure & semantics",
    "source": "2 A) HTML.pdf",
    "page": "Page 17",
    "q": "What are <details> and <summary> used for?",
    "a": "<details> holds expandable/collapsible information and <summary> is the clickable heading.",
    "example": ""
  },
  {
    "id": "q145",
    "unit": "HTML5",
    "topic": "HTML5 overview",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1",
    "q": "What is HTML5?",
    "a": "A version of HTML used to structure and present web documents, with new input types, graphics, media, semantic elements and browser APIs.",
    "example": ""
  },
  {
    "id": "q146",
    "unit": "HTML5",
    "topic": "HTML5 overview",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1",
    "q": "Name four major areas introduced or highlighted in HTML5.",
    "a": "New form input types, graphics (Canvas/SVG), browser APIs, media and semantic tags.",
    "example": ""
  },
  {
    "id": "q147",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"color\" provide?",
    "a": "It provides a color picker.",
    "example": "Example: <input type=\"color\">"
  },
  {
    "id": "q148",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"date\" provide?",
    "a": "It provides a date picker.",
    "example": "Example: <input type=\"date\">"
  },
  {
    "id": "q149",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"datetime\" provide?",
    "a": "It provides date and time with timezone information (as described in the handout; historical/obsolete input type).",
    "example": "Example: <input type=\"datetime\">"
  },
  {
    "id": "q150",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"datetime-local\" provide?",
    "a": "It provides local date and time without timezone.",
    "example": "Example: <input type=\"datetime-local\">"
  },
  {
    "id": "q151",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"email\" provide?",
    "a": "It provides an email-address field with email-format checking.",
    "example": "Example: <input type=\"email\">"
  },
  {
    "id": "q152",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"month\" provide?",
    "a": "It provides month and year selection.",
    "example": "Example: <input type=\"month\">"
  },
  {
    "id": "q153",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"number\" provide?",
    "a": "It provides numeric value entry.",
    "example": "Example: <input type=\"number\">"
  },
  {
    "id": "q154",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"range\" provide?",
    "a": "It provides a numeric slider over a range.",
    "example": "Example: <input type=\"range\">"
  },
  {
    "id": "q155",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"search\" provide?",
    "a": "It provides a search field.",
    "example": "Example: <input type=\"search\">"
  },
  {
    "id": "q156",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"tel\" provide?",
    "a": "It provides telephone-number entry.",
    "example": "Example: <input type=\"tel\">"
  },
  {
    "id": "q157",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"time\" provide?",
    "a": "It provides time entry without a timezone.",
    "example": "Example: <input type=\"time\">"
  },
  {
    "id": "q158",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"url\" provide?",
    "a": "It provides a URL entry field.",
    "example": "Example: <input type=\"url\">"
  },
  {
    "id": "q159",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What does HTML5 input type=\"week\" provide?",
    "a": "It provides week of the year selection.",
    "example": "Example: <input type=\"week\">"
  },
  {
    "id": "q160",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "Which HTML5 input types would you use for email, website and phone number?",
    "a": "email for email; url for website; tel for phone number.",
    "example": ""
  },
  {
    "id": "q161",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "What is the difference between date and datetime-local?",
    "a": "date asks for a calendar date only. datetime-local asks for a date plus a local clock time.",
    "example": ""
  },
  {
    "id": "q162",
    "unit": "HTML5",
    "topic": "HTML5 input types",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 1 (table image)",
    "q": "Which HTML5 input type is suited to a sliding numeric control?",
    "a": "range.",
    "example": "Example: <input type=\"range\" min=\"0\" max=\"100\">"
  },
  {
    "id": "q163",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "What is the HTML <canvas> element?",
    "a": "A drawing surface in a page. JavaScript is used to draw shapes, text and images onto it.",
    "example": ""
  },
  {
    "id": "q164",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Does <canvas> draw graphics by itself?",
    "a": "No. It provides a surface; scripts actually draw on it.",
    "example": ""
  },
  {
    "id": "q165",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Name things that Canvas can draw.",
    "a": "Paths, boxes/rectangles, circles, text and images.",
    "example": ""
  },
  {
    "id": "q166",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "What does SVG stand for?",
    "a": "Scalable Vector Graphics.",
    "example": ""
  },
  {
    "id": "q167",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "What is SVG?",
    "a": "A way to describe vector graphics using XML markup, directly usable in HTML pages.",
    "example": ""
  },
  {
    "id": "q168",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Give an example of an SVG shape tag.",
    "a": "<rect> draws a rectangle.",
    "example": "Example: <svg width=\"100\" height=\"60\"><rect width=\"80\" height=\"40\" fill=\"blue\"/></svg>"
  },
  {
    "id": "q169",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Compare SVG and Canvas by resolution.",
    "a": "SVG is resolution-independent because it is vector-based. Canvas is pixel-based, so its output depends on its resolution.",
    "example": ""
  },
  {
    "id": "q170",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Compare SVG and Canvas for complex drawings and games.",
    "a": "SVG is convenient for individually selectable shapes; Canvas is often better for rapidly redrawing many pixels or game graphics.",
    "example": ""
  },
  {
    "id": "q171",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "What are two advantages of SVG?",
    "a": "Scales without getting blurry; graphics are elements that can be styled/animated with CSS and JavaScript.",
    "example": ""
  },
  {
    "id": "q172",
    "unit": "HTML5",
    "topic": "Canvas & SVG",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 2–3",
    "q": "Can you save Canvas output as an image?",
    "a": "Yes. A Canvas can be exported as an image, commonly PNG.",
    "example": "This point appears in the Canvas/SVG comparison table."
  },
  {
    "id": "q173",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What does the Geolocation API do?",
    "a": "It can request the user’s geographic position, usually after user permission.",
    "example": ""
  },
  {
    "id": "q174",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What method is named for obtaining location in the notes?",
    "a": "getCurrentPosition().",
    "example": ""
  },
  {
    "id": "q175",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What is drag and drop?",
    "a": "A user grabs an object and moves it to another place using a pointer or touch interaction.",
    "example": ""
  },
  {
    "id": "q176",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What does Web Storage do?",
    "a": "Lets websites store information locally in the browser.",
    "example": ""
  },
  {
    "id": "q177",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What is localStorage?",
    "a": "Browser storage that persists across sessions until cleared.",
    "example": ""
  },
  {
    "id": "q178",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What is sessionStorage?",
    "a": "Browser storage for the current tab/session; generally removed when that tab or session ends.",
    "example": ""
  },
  {
    "id": "q179",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "Compare localStorage and sessionStorage.",
    "a": "localStorage → persists across visits.\nsessionStorage → only for the current tab/session.",
    "example": ""
  },
  {
    "id": "q180",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "What is a Web Worker?",
    "a": "A JavaScript script that runs work in the background so long tasks need not block the main interface.",
    "example": ""
  },
  {
    "id": "q181",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "Why are Web Workers useful?",
    "a": "They help keep the page responsive while time-consuming calculations run.",
    "example": ""
  },
  {
    "id": "q182",
    "unit": "HTML5",
    "topic": "HTML5 browser APIs",
    "source": "2 B) HTML 5.pdf",
    "page": "Page 3",
    "q": "How did older sites commonly store small pieces of data before Web Storage?",
    "a": "With cookies, which can also be sent along with browser requests.",
    "example": ""
  },
  {
    "id": "q183",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "Which HTML5 element embeds sound?",
    "a": "<audio>.",
    "example": "Example: <audio controls><source src=\"song.mp3\" type=\"audio/mpeg\"></audio>"
  },
  {
    "id": "q184",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "Which HTML5 element embeds video?",
    "a": "<video>.",
    "example": "Example: <video controls width=\"320\"><source src=\"movie.mp4\" type=\"video/mp4\"></video>"
  },
  {
    "id": "q185",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "What does controls do on an audio or video tag?",
    "a": "Shows built-in player controls such as play/pause.",
    "example": ""
  },
  {
    "id": "q186",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "What does autoplay do?",
    "a": "Requests the browser to start playing automatically; browsers may restrict autoplay.",
    "example": ""
  },
  {
    "id": "q187",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "What is the purpose of <source> inside audio/video?",
    "a": "Specifies a media file and its MIME type; multiple sources can provide alternate formats.",
    "example": ""
  },
  {
    "id": "q188",
    "unit": "HTML5",
    "topic": "Audio & video",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 3–4",
    "q": "Why is fallback text written inside audio/video elements?",
    "a": "It gives a message for browsers that cannot display the media element.",
    "example": ""
  },
  {
    "id": "q189",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What is a semantic HTML element?",
    "a": "A tag whose name clearly expresses the meaning/purpose of its content.",
    "example": ""
  },
  {
    "id": "q190",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What is a non-semantic HTML element?",
    "a": "A tag like <div> or <span> that does not itself describe the content’s meaning.",
    "example": ""
  },
  {
    "id": "q191",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "Give examples of semantic and non-semantic elements.",
    "a": "Semantic: <article>, <form>, <table>, <nav>.\nNon-semantic: <div>, <span>.",
    "example": ""
  },
  {
    "id": "q192",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <section> mean?",
    "a": "A thematic group of content, usually with a heading.",
    "example": ""
  },
  {
    "id": "q193",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <article> mean?",
    "a": "Independent, self-contained material such as a blog post, comment or product card.",
    "example": ""
  },
  {
    "id": "q194",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <header> mean?",
    "a": "Introductory content for a page or section, often containing headings, logo or navigation.",
    "example": ""
  },
  {
    "id": "q195",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <footer> mean?",
    "a": "Footer for a page or section, often containing copyright, contact info or related links.",
    "example": ""
  },
  {
    "id": "q196",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <aside> mean?",
    "a": "Content indirectly related to nearby main content, like a sidebar.",
    "example": ""
  },
  {
    "id": "q197",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "Name the semantic tags listed in the HTML5 notes.",
    "a": "<article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>.",
    "example": ""
  },
  {
    "id": "q198",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What do <figure> and <figcaption> typically describe?",
    "a": "<figure> holds a self-contained figure/media item and <figcaption> labels or describes it.",
    "example": ""
  },
  {
    "id": "q199",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <main> represent?",
    "a": "The primary content of the page.",
    "example": ""
  },
  {
    "id": "q200",
    "unit": "HTML5",
    "topic": "Semantic elements",
    "source": "2 B) HTML 5.pdf",
    "page": "Pages 4–6",
    "q": "What does <time> indicate?",
    "a": "A date, time, or date/time value in content.",
    "example": ""
  },
  {
    "id": "q201",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What is CSS?",
    "a": "Cascading Style Sheets: the language used to control the look and layout of HTML elements.",
    "example": ""
  },
  {
    "id": "q202",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "Why is CSS useful?",
    "a": "It separates styling from content and can style many pages consistently, especially with one shared external file.",
    "example": ""
  },
  {
    "id": "q203",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What is the basic CSS rule syntax?",
    "a": "selector { property: value; }",
    "example": "Example: p { color: red; text-align: center; }"
  },
  {
    "id": "q204",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What is a CSS selector?",
    "a": "The part that tells the browser which element(s) a CSS rule should style.",
    "example": ""
  },
  {
    "id": "q205",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What is a CSS declaration?",
    "a": "A property and value separated by a colon. Multiple declarations are separated by semicolons.",
    "example": ""
  },
  {
    "id": "q206",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What do curly braces do in CSS?",
    "a": "They contain the declarations belonging to a selector.",
    "example": ""
  },
  {
    "id": "q207",
    "unit": "CSS",
    "topic": "CSS introduction & syntax",
    "source": "2 C) CSS.pdf",
    "page": "Pages 1–2",
    "q": "What does p { color: red; } do?",
    "a": "It makes text in all matching <p> elements red.",
    "example": ""
  },
  {
    "id": "q208",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is an element selector?",
    "a": "A selector that targets all elements of a tag name.",
    "example": "Example: p { color: red; }"
  },
  {
    "id": "q209",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is an ID selector?",
    "a": "A selector starting with # that targets the element with that unique id.",
    "example": "Example: #para1 { color: red; }"
  },
  {
    "id": "q210",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is a class selector?",
    "a": "A selector starting with . that targets elements having that class.",
    "example": "Example: .center { text-align: center; }"
  },
  {
    "id": "q211",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is the difference between an ID and a class?",
    "a": "An ID identifies a unique element on a page; a class can be shared by many elements.",
    "example": ""
  },
  {
    "id": "q212",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What does p.center select?",
    "a": "Only <p> elements whose class list includes center.",
    "example": ""
  },
  {
    "id": "q213",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "Can an HTML element have more than one class?",
    "a": "Yes. Separate class names with spaces.",
    "example": "Example: class=\"center large\""
  },
  {
    "id": "q214",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is the universal selector?",
    "a": "The * selector targets every element.",
    "example": "Example: * { box-sizing: border-box; }"
  },
  {
    "id": "q215",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "What is a grouping selector?",
    "a": "Comma-separated selectors sharing the same style declarations.",
    "example": "Example: h1, h2, p { color: red; }"
  },
  {
    "id": "q216",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "Which selector selects id=\"intro\"?",
    "a": "The ID selector #intro.",
    "example": ""
  },
  {
    "id": "q217",
    "unit": "CSS",
    "topic": "CSS selectors",
    "source": "2 C) CSS.pdf",
    "page": "Pages 2–5",
    "q": "Which selector selects all elements class=\"notice\"?",
    "a": "The class selector .notice.",
    "example": ""
  },
  {
    "id": "q218",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "What is external CSS?",
    "a": "Styles kept in a separate .css file and linked from an HTML page.",
    "example": "Example: <link rel=\"stylesheet\" href=\"style.css\">"
  },
  {
    "id": "q219",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "Where is an external stylesheet linked?",
    "a": "Normally inside the HTML <head> using a <link> tag.",
    "example": ""
  },
  {
    "id": "q220",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "What is internal CSS?",
    "a": "CSS written inside a <style> element in the HTML page’s <head>.",
    "example": ""
  },
  {
    "id": "q221",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "What is inline CSS?",
    "a": "CSS written directly on one HTML element using its style attribute.",
    "example": "Example: <h1 style=\"color:blue\">Title</h1>"
  },
  {
    "id": "q222",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "Compare external, internal and inline CSS.",
    "a": "External → reusable file for many pages.\nInternal → <style> on one page.\nInline → style attribute on one element.",
    "example": ""
  },
  {
    "id": "q223",
    "unit": "CSS",
    "topic": "Three ways to insert CSS",
    "source": "2 C) CSS.pdf",
    "page": "Pages 5–6",
    "q": "Which CSS method best helps maintain a multi-page website?",
    "a": "External CSS. One stylesheet can update many pages at once.",
    "example": ""
  },
  {
    "id": "q224",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "How do you change CSS text color?",
    "a": "Use the color property.",
    "example": "Example: color: Tomato;"
  },
  {
    "id": "q225",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "How do you set a CSS background color?",
    "a": "Use background-color.",
    "example": "Example: background-color: lightblue;"
  },
  {
    "id": "q226",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "How do you use an image as a CSS background?",
    "a": "Set background-image to url(\"filename\").",
    "example": "Example: background-image: url(\"paper.gif\");"
  },
  {
    "id": "q227",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "What does background-repeat: no-repeat do?",
    "a": "Prevents a background image from tiling repeatedly.",
    "example": ""
  },
  {
    "id": "q228",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "What does background-position: right top do?",
    "a": "Places the background image toward the upper-right area.",
    "example": ""
  },
  {
    "id": "q229",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "What does background-attachment: fixed do?",
    "a": "Keeps the background image fixed relative to the viewport as the page scrolls.",
    "example": ""
  },
  {
    "id": "q230",
    "unit": "CSS",
    "topic": "Colors & backgrounds",
    "source": "2 C) CSS.pdf",
    "page": "Pages 7–9",
    "q": "How can you set a border’s appearance?",
    "a": "Use border with thickness, style and color.",
    "example": "Example: border: 2px solid Tomato;"
  },
  {
    "id": "q231",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "What is the CSS box model?",
    "a": "Every element is a rectangular box made of content, padding, border and margin.",
    "example": ""
  },
  {
    "id": "q232",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "Name the four parts of the box model from inside to outside.",
    "a": "Content → padding → border → margin.",
    "example": ""
  },
  {
    "id": "q233",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "What is padding in the box model?",
    "a": "Space between the element’s content and its border.",
    "example": ""
  },
  {
    "id": "q234",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "What is margin in the box model?",
    "a": "Space outside the border separating the element from other elements.",
    "example": ""
  },
  {
    "id": "q235",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "What is the border in the box model?",
    "a": "The visible edge around an element’s content and padding.",
    "example": ""
  },
  {
    "id": "q236",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "Compare padding and margin.",
    "a": "Padding is INSIDE the border. Margin is OUTSIDE the border.",
    "example": ""
  },
  {
    "id": "q237",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "For width:300px, padding:50px each side and border:15px each side, what is total box width?",
    "a": "430px (300 + 50×2 + 15×2), before margins, under the default content-box sizing.",
    "example": "Box-model example from page 10."
  },
  {
    "id": "q238",
    "unit": "CSS",
    "topic": "Box model",
    "source": "2 C) CSS.pdf",
    "page": "Pages 9–10",
    "q": "If you also add 20px margins to that box, what horizontal space can it occupy?",
    "a": "470px including both 20px margins (430 + 40), under default content-box sizing.",
    "example": ""
  },
  {
    "id": "q239",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "What does font-family do?",
    "a": "Chooses the typeface and optional fallback fonts for text.",
    "example": ""
  },
  {
    "id": "q240",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "Name three generic font families in the examples.",
    "a": "serif, sans-serif and monospace.",
    "example": ""
  },
  {
    "id": "q241",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "What does a:link style?",
    "a": "Links that have not been visited.",
    "example": ""
  },
  {
    "id": "q242",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "What does a:visited style?",
    "a": "Links the user has already visited.",
    "example": ""
  },
  {
    "id": "q243",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "What does a:hover style?",
    "a": "A link when the pointer is hovering over it.",
    "example": ""
  },
  {
    "id": "q244",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "What does a:active style?",
    "a": "A link while it is being activated/clicked.",
    "example": ""
  },
  {
    "id": "q245",
    "unit": "CSS",
    "topic": "Fonts and hyperlink states",
    "source": "2 C) CSS.pdf",
    "page": "Pages 10–11",
    "q": "Name the four link state pseudo-classes shown in CSS notes.",
    "a": "a:link, a:visited, a:hover and a:active.",
    "example": ""
  },
  {
    "id": "q246",
    "unit": "CSS",
    "topic": "Pseudo-classes",
    "source": "2 C) CSS.pdf",
    "page": "Pages 12–13",
    "q": "What is a CSS pseudo-class?",
    "a": "It styles an element based on a special state, such as hovered, visited or focused.",
    "example": ""
  },
  {
    "id": "q247",
    "unit": "CSS",
    "topic": "Pseudo-classes",
    "source": "2 C) CSS.pdf",
    "page": "Pages 12–13",
    "q": "What is the syntax of a pseudo-class selector?",
    "a": "selector:pseudo-class { property: value; }",
    "example": "Example: a:hover { color: hotpink; }"
  },
  {
    "id": "q248",
    "unit": "CSS",
    "topic": "Pseudo-classes",
    "source": "2 C) CSS.pdf",
    "page": "Pages 12–13",
    "q": "What does :focus represent?",
    "a": "An element currently receiving keyboard/input focus.",
    "example": ""
  },
  {
    "id": "q249",
    "unit": "CSS",
    "topic": "Pseudo-classes",
    "source": "2 C) CSS.pdf",
    "page": "Pages 12–13",
    "q": "What order is recommended for common link-state rules?",
    "a": "a:link, a:visited, a:hover, a:active.",
    "example": "Remember: LoVe HAte (LVHA)."
  },
  {
    "id": "q250",
    "unit": "CSS",
    "topic": "Pseudo-classes",
    "source": "2 C) CSS.pdf",
    "page": "Pages 12–13",
    "q": "How is :hover different from ::before?",
    "a": ":hover is a pseudo-class (state). ::before is a pseudo-element (virtual part/content).",
    "example": ""
  },
  {
    "id": "q251",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What is a CSS pseudo-element?",
    "a": "It styles a particular part of an element or inserts generated content.",
    "example": ""
  },
  {
    "id": "q252",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What is the CSS pseudo-element syntax?",
    "a": "selector::pseudo-element { property: value; }",
    "example": ""
  },
  {
    "id": "q253",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What does ::first-line select?",
    "a": "The first line of text in a matching element.",
    "example": ""
  },
  {
    "id": "q254",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What does ::first-letter select?",
    "a": "The first letter of text in a matching element.",
    "example": ""
  },
  {
    "id": "q255",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What does ::before do?",
    "a": "Inserts generated content before an element’s own content.",
    "example": "Example: h1::before { content: \"★ \"; }"
  },
  {
    "id": "q256",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "What does ::after do?",
    "a": "Inserts generated content after an element’s own content.",
    "example": "Example: h1::after { content: \" ✓\"; }"
  },
  {
    "id": "q257",
    "unit": "CSS",
    "topic": "Pseudo-elements",
    "source": "2 C) CSS.pdf",
    "page": "Pages 13–14",
    "q": "Give two uses of pseudo-elements.",
    "a": "Style a paragraph’s first letter/line; add decorative content before/after headings.",
    "example": ""
  },
  {
    "id": "q258",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is a CSS gradient?",
    "a": "A smooth transition between two or more colors created with a CSS function.",
    "example": ""
  },
  {
    "id": "q259",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "Name the three CSS gradient types.",
    "a": "linear-gradient(), radial-gradient() and conic-gradient().",
    "example": ""
  },
  {
    "id": "q260",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is a linear gradient?",
    "a": "Colors blend along a straight line (up, down, left, right or diagonal).",
    "example": "Example: linear-gradient(to right, red, yellow)"
  },
  {
    "id": "q261",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is a radial gradient?",
    "a": "Colors spread outward from a central point.",
    "example": "Example: radial-gradient(circle, red, yellow, green)"
  },
  {
    "id": "q262",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is a conic gradient?",
    "a": "Colors transition around a central point, like slices of a color wheel.",
    "example": "Example: conic-gradient(red, yellow, green)"
  },
  {
    "id": "q263",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What are color stops?",
    "a": "The specified colors/positions between which the gradient blends.",
    "example": ""
  },
  {
    "id": "q264",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is the minimum number of colors needed for a gradient in the notes?",
    "a": "At least two.",
    "example": ""
  },
  {
    "id": "q265",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is the default radial-gradient shape in the handout?",
    "a": "An ellipse, centered by default.",
    "example": ""
  },
  {
    "id": "q266",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What is the default angle/position for a conic gradient in the handout?",
    "a": "0 degrees, with the gradient centered by default.",
    "example": ""
  },
  {
    "id": "q267",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "How do you make a vertical linear gradient from red to yellow?",
    "a": "background-image: linear-gradient(to bottom, red, yellow);",
    "example": ""
  },
  {
    "id": "q268",
    "unit": "CSS",
    "topic": "Gradients",
    "source": "2 C) CSS.pdf",
    "page": "Pages 15–17",
    "q": "What does linear-gradient(to top, red, yellow) mean?",
    "a": "Red begins at the bottom and transitions toward yellow at the top.",
    "example": ""
  },
  {
    "id": "q269",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What does transform: translate(x, y) do?",
    "a": "Moves an element horizontally and vertically from its original position.",
    "example": "Example: transform: translate(50px, 100px);"
  },
  {
    "id": "q270",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What does transform: rotate(20deg) do?",
    "a": "Rotates an element by 20 degrees clockwise.",
    "example": ""
  },
  {
    "id": "q271",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What does transform: scale(2, 3) do?",
    "a": "Makes an element twice as wide and three times as tall relative to its original size.",
    "example": ""
  },
  {
    "id": "q272",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What is the difference between scaleX() and scaleY()?",
    "a": "scaleX() changes width; scaleY() changes height.",
    "example": ""
  },
  {
    "id": "q273",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What does transform: skew(20deg, 10deg) do?",
    "a": "Slants an element by the specified angles on the X and Y axes.",
    "example": ""
  },
  {
    "id": "q274",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "What is the difference between skewX() and skewY()?",
    "a": "skewX() slants along the X axis; skewY() slants along the Y axis.",
    "example": ""
  },
  {
    "id": "q275",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "Name four 2D transform families in the notes.",
    "a": "translate, rotate, scale and skew.",
    "example": ""
  },
  {
    "id": "q276",
    "unit": "CSS",
    "topic": "2D transforms",
    "source": "2 C) CSS.pdf",
    "page": "Pages 17–18",
    "q": "How does translate differ from margin?",
    "a": "translate changes the visual position without changing normal document flow; margin contributes spacing in layout.",
    "example": "The handout covers translate; comparison helps remember."
  },
  {
    "id": "q277",
    "unit": "CSS",
    "topic": "Tables & forms styling",
    "source": "2 C) CSS.pdf",
    "page": "Page 15",
    "q": "What is said about CSS table and form styling in the theory handout?",
    "a": "It is listed as “CSS Tables and Forms — Covered in Lab sessions”. There is no detailed theory explanation in this PDF.",
    "example": "This card marks the boundary of what the uploaded notes actually teach."
  },
  {
    "id": "q278",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What can JavaScript do to HTML content?",
    "a": "It can find elements and update their content when the page runs or the user interacts.",
    "example": "Example: document.getElementById(\"demo\").innerHTML = \"Hello\";"
  },
  {
    "id": "q279",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What does document.getElementById(\"demo\") do?",
    "a": "Finds the element with id=\"demo\" in the document.",
    "example": ""
  },
  {
    "id": "q280",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What does innerHTML do?",
    "a": "Gets or sets HTML content inside an element.",
    "example": ""
  },
  {
    "id": "q281",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "How can JavaScript change CSS styles?",
    "a": "Access the element’s style properties.",
    "example": "Example: document.getElementById(\"demo\").style.fontSize = \"35px\";"
  },
  {
    "id": "q282",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What is an event in JavaScript?",
    "a": "An occurrence such as a click that can trigger JavaScript code.",
    "example": ""
  },
  {
    "id": "q283",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What does onclick mean?",
    "a": "A click-event handler that calls code when the element is clicked.",
    "example": ""
  },
  {
    "id": "q284",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "What is a JavaScript function?",
    "a": "A named/reusable block of code that performs a task when called.",
    "example": ""
  },
  {
    "id": "q285",
    "unit": "JavaScript",
    "topic": "JavaScript & DOM changes",
    "source": "3 JS final.pdf",
    "page": "Pages 1–2",
    "q": "Where can JavaScript be placed in an HTML document?",
    "a": "Inside <script> in <head> or <body>, or linked from an external .js file.",
    "example": ""
  },
  {
    "id": "q286",
    "unit": "JavaScript",
    "topic": "External JavaScript",
    "source": "3 JS final.pdf",
    "page": "Pages 2–3",
    "q": "How do you link an external JavaScript file?",
    "a": "Use the src attribute on a <script> tag.",
    "example": "Example: <script src=\"myScript.js\"></script>"
  },
  {
    "id": "q287",
    "unit": "JavaScript",
    "topic": "External JavaScript",
    "source": "3 JS final.pdf",
    "page": "Pages 2–3",
    "q": "What file extension do JavaScript files use?",
    "a": ".js",
    "example": ""
  },
  {
    "id": "q288",
    "unit": "JavaScript",
    "topic": "External JavaScript",
    "source": "3 JS final.pdf",
    "page": "Pages 2–3",
    "q": "Give three advantages of external JavaScript.",
    "a": "1. Separates HTML and scripts.\n2. Easier to read and maintain.\n3. Browser caching can speed page loads.",
    "example": ""
  },
  {
    "id": "q289",
    "unit": "JavaScript",
    "topic": "External JavaScript",
    "source": "3 JS final.pdf",
    "page": "Pages 2–3",
    "q": "Why reuse one external script across several pages?",
    "a": "It avoids copying the same code repeatedly and makes updates easier.",
    "example": ""
  },
  {
    "id": "q290",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "What are the four main JavaScript output methods listed?",
    "a": "innerHTML, document.write(), window.alert(), console.log().",
    "example": ""
  },
  {
    "id": "q291",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "What does innerHTML output do?",
    "a": "Shows content inside a selected HTML element.",
    "example": ""
  },
  {
    "id": "q292",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "What does document.write() do?",
    "a": "Writes output into the HTML document; after the page loads, using it may replace existing content.",
    "example": ""
  },
  {
    "id": "q293",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "What does window.alert() do?",
    "a": "Shows a popup message box.",
    "example": ""
  },
  {
    "id": "q294",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "What does console.log() do?",
    "a": "Writes information to the developer console, often for debugging.",
    "example": ""
  },
  {
    "id": "q295",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "How do you print the browser’s current page with JavaScript?",
    "a": "Call window.print().",
    "example": ""
  },
  {
    "id": "q296",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "Which JavaScript output method is most useful for debugging?",
    "a": "console.log().",
    "example": ""
  },
  {
    "id": "q297",
    "unit": "JavaScript",
    "topic": "Output methods",
    "source": "3 JS final.pdf",
    "page": "Pages 3–5",
    "q": "Which output method is best for changing a paragraph on a page?",
    "a": "Find the paragraph element and set its innerHTML (or another suitable text property).",
    "example": ""
  },
  {
    "id": "q298",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "What is a JavaScript statement?",
    "a": "An instruction for the computer/browser to execute.",
    "example": ""
  },
  {
    "id": "q299",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "What parts can a JavaScript statement contain?",
    "a": "Values, operators, expressions, keywords and comments.",
    "example": ""
  },
  {
    "id": "q300",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "Which punctuation is commonly used to separate JavaScript statements?",
    "a": "Semicolons (;).",
    "example": ""
  },
  {
    "id": "q301",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "How do you write number values in JavaScript?",
    "a": "As numerals with or without decimals.",
    "example": "Example: 1001 and 10.50"
  },
  {
    "id": "q302",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "How do you write string values in JavaScript?",
    "a": "Put text inside single or double quotes.",
    "example": "Example: \"John\" or 'John'"
  },
  {
    "id": "q303",
    "unit": "JavaScript",
    "topic": "Statements & syntax",
    "source": "3 JS final.pdf",
    "page": "Pages 5–6",
    "q": "Is JavaScript case sensitive?",
    "a": "Yes. Identifiers that differ in capitalization are treated as different names.",
    "example": "Example: lastName and lastname are different."
  },
  {
    "id": "q304",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What is a variable?",
    "a": "A named place used to store a value in a program.",
    "example": ""
  },
  {
    "id": "q305",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "Which keywords declare JavaScript variables?",
    "a": "var, let and const.",
    "example": ""
  },
  {
    "id": "q306",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "How is a value assigned to a variable?",
    "a": "With =.",
    "example": "Example: let x = 6;"
  },
  {
    "id": "q307",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What is the difference between let and const?",
    "a": "let can be reassigned. const cannot be reassigned after declaration.",
    "example": ""
  },
  {
    "id": "q308",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What is the difference between = and +=?",
    "a": "= assigns a value. += adds the right-hand value to the old value and stores the result.",
    "example": "Example: x += 2 means x = x + 2."
  },
  {
    "id": "q309",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What does -= mean?",
    "a": "Subtract and assign: x -= y means x = x - y.",
    "example": ""
  },
  {
    "id": "q310",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What does *= mean?",
    "a": "Multiply and assign: x *= y means x = x * y.",
    "example": ""
  },
  {
    "id": "q311",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What does /= mean?",
    "a": "Divide and assign: x /= y means x = x / y.",
    "example": ""
  },
  {
    "id": "q312",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What does %= mean?",
    "a": "Remainder and assign: x %= y means x = x % y.",
    "example": ""
  },
  {
    "id": "q313",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What does **= mean?",
    "a": "Exponentiate and assign: x **= y means x = x ** y.",
    "example": ""
  },
  {
    "id": "q314",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "How do parentheses affect arithmetic expressions?",
    "a": "The expression in parentheses is evaluated before outside arithmetic.",
    "example": "Example: (100 + 50) * 3 = 450."
  },
  {
    "id": "q315",
    "unit": "JavaScript",
    "topic": "Variables & operators",
    "source": "3 JS final.pdf",
    "page": "Pages 6–8",
    "q": "What is a JavaScript keyword?",
    "a": "A language word with a defined purpose, such as let, const, function or return.",
    "example": ""
  },
  {
    "id": "q316",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "How do you declare a simple JavaScript function?",
    "a": "Use function, a name, parameters in parentheses, and a body in braces.",
    "example": "Example: function multiply(a,b) { return a*b; }"
  },
  {
    "id": "q317",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "What is a function parameter?",
    "a": "A named input used inside the function.",
    "example": "Example: a and b in function multiply(a,b)."
  },
  {
    "id": "q318",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "What does it mean to call a function?",
    "a": "Run it by writing its name with parentheses and any needed arguments.",
    "example": "Example: multiply(4,3);"
  },
  {
    "id": "q319",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "What does return do in a function?",
    "a": "Ends that function’s execution and sends a result back to the caller.",
    "example": ""
  },
  {
    "id": "q320",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "What is the output of multiply(4, 3) if it returns a*b?",
    "a": "12.",
    "example": ""
  },
  {
    "id": "q321",
    "unit": "JavaScript",
    "topic": "Functions and returns",
    "source": "3 JS final.pdf",
    "page": "Pages 8–9",
    "q": "Why are functions useful?",
    "a": "They let you reuse logic instead of rewriting the same instructions many times.",
    "example": ""
  },
  {
    "id": "q322",
    "unit": "JavaScript",
    "topic": "Objects",
    "source": "3 JS final.pdf",
    "page": "Pages 9–10",
    "q": "What is a JavaScript object?",
    "a": "A value holding related named properties.",
    "example": "Example: const car = {type:\"Fiat\", model:\"500\", color:\"white\"};"
  },
  {
    "id": "q323",
    "unit": "JavaScript",
    "topic": "Objects",
    "source": "3 JS final.pdf",
    "page": "Pages 9–10",
    "q": "How do you access an object property using dot notation?",
    "a": "Write objectName.propertyName.",
    "example": "Example: car.type"
  },
  {
    "id": "q324",
    "unit": "JavaScript",
    "topic": "Objects",
    "source": "3 JS final.pdf",
    "page": "Pages 9–10",
    "q": "What value does car.type produce when car = {type:\"Fiat\"}?",
    "a": "\"Fiat\".",
    "example": ""
  },
  {
    "id": "q325",
    "unit": "JavaScript",
    "topic": "Objects",
    "source": "3 JS final.pdf",
    "page": "Pages 9–10",
    "q": "Why use objects?",
    "a": "To keep related information about one thing together under meaningful names.",
    "example": ""
  },
  {
    "id": "q326",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "What is a JavaScript array?",
    "a": "A value that stores multiple items in one ordered collection.",
    "example": ""
  },
  {
    "id": "q327",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "How do you create an array?",
    "a": "Use square brackets.",
    "example": "Example: const cars = [\"Saab\", \"Volvo\", \"BMW\"];"
  },
  {
    "id": "q328",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "At which number does JavaScript array indexing begin?",
    "a": "0, not 1.",
    "example": ""
  },
  {
    "id": "q329",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "How do you access the first element of an array?",
    "a": "With [0].",
    "example": "Example: cars[0]"
  },
  {
    "id": "q330",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "How do you change or add an array element at an index?",
    "a": "Assign to the indexed position.",
    "example": "Example: cars[1] = \"Volvo\";"
  },
  {
    "id": "q331",
    "unit": "JavaScript",
    "topic": "Arrays",
    "source": "3 JS final.pdf",
    "page": "Pages 10–11",
    "q": "What is the difference between an object and an array?",
    "a": "Object → values with named properties.\nArray → ordered values with numeric indexes.",
    "example": ""
  },
  {
    "id": "q332",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What does an if statement do?",
    "a": "Runs a block of code only if its condition is true.",
    "example": ""
  },
  {
    "id": "q333",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What does else do?",
    "a": "Runs the alternative block when the if condition is false.",
    "example": ""
  },
  {
    "id": "q334",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What does else if do?",
    "a": "Tests another condition when an earlier if or else-if condition was false.",
    "example": ""
  },
  {
    "id": "q335",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "Write an if–else that checks if a number is positive.",
    "a": "if (n > 0) { console.log(\"Positive\"); } else { console.log(\"Not positive\"); }",
    "example": ""
  },
  {
    "id": "q336",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What is a switch statement used for?",
    "a": "Choosing which of several code blocks to run based on one expression’s value.",
    "example": ""
  },
  {
    "id": "q337",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What is the role of case in switch?",
    "a": "Marks a value to compare with the switch expression.",
    "example": ""
  },
  {
    "id": "q338",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What is the role of break in switch?",
    "a": "Ends the matching case and stops execution continuing into later cases.",
    "example": ""
  },
  {
    "id": "q339",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What is the purpose of default in switch?",
    "a": "It runs when no case matches.",
    "example": ""
  },
  {
    "id": "q340",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "Compare if–else and switch.",
    "a": "if–else handles conditions/ranges; switch is convenient for matching an expression against specific case values.",
    "example": ""
  },
  {
    "id": "q341",
    "unit": "JavaScript",
    "topic": "Conditional statements",
    "source": "3 JS final.pdf",
    "page": "Pages 11–13",
    "q": "What does Math.sign() indicate in the handout’s sign-check example?",
    "a": "It returns 1 for positive numbers, -1 for negative numbers, and 0 for zero.",
    "example": "The provided switch example contains mismatched variable names; study the concept rather than copying it verbatim."
  },
  {
    "id": "q342",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What is a loop?",
    "a": "A structure that runs a block of code repeatedly while its rules say to continue.",
    "example": ""
  },
  {
    "id": "q343",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "Which three loop types are covered in the notes?",
    "a": "for, while and do...while.",
    "example": ""
  },
  {
    "id": "q344",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What are the three parts of a for loop?",
    "a": "Initialization; condition; update.",
    "example": "Example: for (let i=0; i<5; i++) { ... }"
  },
  {
    "id": "q345",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What does i++ do?",
    "a": "Increases i by 1.",
    "example": ""
  },
  {
    "id": "q346",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "Why is a for loop useful with arrays?",
    "a": "It can visit each array element without writing separate code for each index.",
    "example": ""
  },
  {
    "id": "q347",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What is the output sequence for for(let i=0; i<5; i++)?",
    "a": "0, 1, 2, 3, 4.",
    "example": ""
  },
  {
    "id": "q348",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What is a while loop?",
    "a": "It checks a condition before every repetition and runs while that condition stays true.",
    "example": ""
  },
  {
    "id": "q349",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What is a do...while loop?",
    "a": "It runs its body once, then tests the condition before repeating.",
    "example": ""
  },
  {
    "id": "q350",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "What is the key difference between while and do...while?",
    "a": "while may run zero times; do...while always runs at least once.",
    "example": ""
  },
  {
    "id": "q351",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "Write the syntax of a while loop.",
    "a": "while (condition) { /* statements */ }",
    "example": ""
  },
  {
    "id": "q352",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "Write the syntax of a do...while loop.",
    "a": "do { /* statements */ } while (condition);",
    "example": ""
  },
  {
    "id": "q353",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "How do you avoid an accidental infinite loop?",
    "a": "Make sure the loop condition can eventually become false, usually by updating the counter.",
    "example": ""
  },
  {
    "id": "q354",
    "unit": "JavaScript",
    "topic": "Loops",
    "source": "3 JS final.pdf",
    "page": "Pages 14–16",
    "q": "When is for easier to use than while?",
    "a": "When you know the iteration pattern, especially a counter running through an array.",
    "example": ""
  }
];
