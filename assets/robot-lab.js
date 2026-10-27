'use strict';

const ROBOT_STARTER = `public class Main {
    public static void main(String[] args) {
        String mission = "SCFS";
        // Add your four checkpoints here. Keep all code in this file.

    }
}`;
// Match the named beginner structures described by the tasks. This is
// structural feedback, not Java execution or a general-purpose Java parser.
const robotPattern = (pattern) => ({test: code => pattern.test((code.match(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[^\s]/g)||[]).join(''))});
const ROBOT_CHALLENGES = [
  {title:'A Mission of the Right Length',subtitle:'boolean · comparisons · &&',body:`<p>A classroom robot reads a nonempty instruction string named <code>mission</code>. Each uppercase letter is one instruction: <b>S</b> = scan, <b>C</b> = charge, <b>F</b> = forward, <b>L</b> = left, <b>R</b> = right. Assume the string contains only these letters.</p><p>A mission is ready only when all three rules are true:</p><ol><li>It has <b>4 to 8 instructions, inclusive</b>.</li><li>It includes both <b>S</b> and <b>C</b>.</li><li>Its first and last instructions match.</li></ol><p>For this checkpoint, create <code>boolean lengthGood</code>. Use <code>mission.length()</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>&amp;&amp;</code> to check rule 1.</p><h3>Example to follow</h3><pre class="api">boolean ageGood = age &gt;= 10 &amp;&amp; age &lt;= 15;</pre><p>Both comparisons must be true. Length 4 or 8 passes; length 3 or 9 fails. Adapt the example to the mission length.</p>`,checks:[
    ['Assign lengthGood using both inclusive bounds and &&',robotPattern(/booleanlengthGood=(?:mission\.length\(\)>=4&&mission\.length\(\)<=8|mission\.length\(\)<=8&&mission\.length\(\)>=4);/)]
  ]},
  {title:'Scan AND Charge',subtitle:'indexOf · presence · &&',body:`<p>Create <code>boolean hasStations</code>. It should be true only if <code>mission</code> contains at least one <code>"S"</code> <b>and</b> at least one <code>"C"</code>.</p><p>Use two <code>indexOf</code> comparisons joined by <code>&amp;&amp;</code>. An index of 0 counts as found; -1 means not found. Use either <code>&gt;= 0</code> or <code>!= -1</code>.</p><h3>Example to follow</h3><pre class="api">boolean hasKey = code.indexOf("K") &gt;= 0;</pre><p><code>"SCFS"</code> has both instructions → true.<br><code>"SFFS"</code> has no C → false.<br><code>"CFFC"</code> has no S → false.</p>`,checks:[
    ['Assign hasStations by finding both S and C with &&',robotPattern(/booleanhasStations=(?:mission\.indexOf\("S"\)(?:>=0|!=-1)&&mission\.indexOf\("C"\)(?:>=0|!=-1)|mission\.indexOf\("C"\)(?:>=0|!=-1)&&mission\.indexOf\("S"\)(?:>=0|!=-1));/)]
  ]},
  {title:'Matching First and Last Instructions',subtitle:'substring · length · equals',body:`<p>Create <code>boolean loopGood</code>. Use <code>substring</code> to get the first and last letters of <code>mission</code>, then compare them with <code>.equals(...)</code>.</p><ul><li>First letter: <code>mission.substring(0, 1)</code></li><li>Last letter: <code>mission.substring(mission.length() - 1)</code></li></ul><h3>Example to follow</h3><pre class="api">boolean same = "S".equals("S"); // true</pre><p>Call <code>.equals(...)</code> on the first substring, with the last substring as its argument. Do not use <code>==</code> to compare String contents.</p><p><code>"SCFS"</code> → true; <code>"SCFL"</code> → false.</p>`,checks:[
    ['Assign loopGood by comparing first and last substrings with equals',robotPattern(/booleanloopGood=mission\.substring\(0,1\)\.equals\(mission\.substring\(mission\.length\(\)-1(?:,mission\.length\(\))?\)\);/)]
  ]},
  {title:'Ready to Launch?',subtitle:'if / else · combine three booleans',body:`<p>Use your three boolean variables in an <code>if / else</code> statement:</p><ul><li>If <code>lengthGood</code>, <code>hasStations</code>, <b>and</b> <code>loopGood</code> are all true, print <code>"Ready to launch"</code>.</li><li>Otherwise, print <code>"Revise mission"</code>.</li></ul><p>Join the three variables with <code>&amp;&amp;</code>. Use braces around each branch and <code>System.out.println</code> for output.</p><h3>Example to follow</h3><pre class="api">if (hasTicket &amp;&amp; gateOpen) {
    System.out.println("Enter");
} else {
    System.out.println("Wait");
}</pre><p>Adapt the example to the three mission checks and the required messages. Try the examples in the reference panel. Checking each checkpoint earns one point; keep all four parts in Main.java.</p>`,checks:[
    ['Use all three booleans with && in an if / else and print the correct messages',robotPattern(/if\((?:lengthGood&&hasStations&&loopGood|lengthGood&&loopGood&&hasStations|hasStations&&lengthGood&&loopGood|hasStations&&loopGood&&lengthGood|loopGood&&lengthGood&&hasStations|loopGood&&hasStations&&lengthGood)\)\{System\.out\.println\("Ready to launch"\);\}else\{System\.out\.println\("Revise mission"\);\}/)]
  ]}
];
const ROBOT_TRANSLATIONS = [
  '<p>课堂机器人读取非空字符串 <code>mission</code>，每个大写字母表示一条指令：S 扫描、C 充电、F 前进、L 左转、R 右转。假设输入只包含这些字母。</p><p>任务必须同时满足三条规则：① 长度为 4–8（包含 4 和 8）；② 同时包含 S 和 C；③ 首尾指令相同。</p><p>本题只检查规则①：创建 <code>boolean lengthGood</code>，用 <code>mission.length()</code>、<code>&gt;=</code>、<code>&lt;=</code> 和 <code>&amp;&amp;</code> 判断两个条件是否同时成立。参考英文题目的年龄判断例子，把年龄换成指令长度。长度 4、8 合格；3、9 不合格。</p>',
  '<p>创建 <code>boolean hasStations</code>：只有 mission 同时包含至少一个 S（扫描）和一个 C（充电）时才为 true。</p><p>分别用 <code>indexOf</code> 查找 S 和 C，用 <code>&gt;= 0</code> 或 <code>!= -1</code> 判断是否找到，再用 <code>&amp;&amp;</code> 连接。位置为 0 也表示找到了，-1 才表示没找到。</p><p><code>SCFS</code> 为 true；<code>SFFS</code> 缺少 C，为 false；<code>CFFC</code> 缺少 S，为 false。</p>',
  '<p>创建 <code>boolean loopGood</code>。用 <code>mission.substring(0, 1)</code> 取第一个字符，用 <code>mission.substring(mission.length() - 1)</code> 取最后一个字符。</p><p>在第一个子串后调用 <code>.equals(...)</code>，把最后一个子串放入括号中，比较两个字符串的内容。不要用 <code>==</code> 比较字符串内容。</p><p><code>SCFS</code> 首尾都是 S，结果为 true；<code>SCFL</code> 首尾不同，结果为 false。</p>',
  '<p>用 <code>if / else</code> 判断三个布尔变量 <code>lengthGood</code>、<code>hasStations</code> 和 <code>loopGood</code> 是否都为 true，用 <code>&amp;&amp;</code> 连接。</p><p>全部成立时，输出 <code>Ready to launch</code>；否则输出 <code>Revise mission</code>。每个分支使用花括号，并用 <code>System.out.println</code> 输出。参考英文题目的入场判断例子进行改写。</p><p>可用右侧示例逐个验证。四道题共用一个 Main.java，每个检查点通过得 1 分，总分 4 分。</p>'
];
