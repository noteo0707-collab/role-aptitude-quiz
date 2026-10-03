const questions = {
  "1": { text: "あなたは個人携帯火器に興味がある。", yes: "1-1", no: "1-2" },
  "1-1": { text: "あなたは小火器を扱うのが得意または好きだ。", yes: "1-1-1", no: "1-2" },
  "1-1-1": { text: "あなたは支援火器で味方を援護するのが好きだ。", yes: "1-1-1-1", no: "1-2" },
  "1-1-1-1": { text: "あなたは射撃方法を使い分け、ヘイトを集めても冷静に制圧射撃を続けるのが得意だ。", yes: "1-1-2", no: "1-1-2", job: "陸上団　普通科　オートマチックライフルマン（軽機関銃手）" },
  "1-1-2": { text: "あなたはアイアンサイトでの射撃が得意だ。", yes: "1-1-2-1", no: "1-2", job: "陸上団　普通科　スペシャリスト　ライフルマン（小銃手）" },
  "1-1-2-1": { text: "あなたは弾道学や数学的・論理的な思考を、瞬時に計算して実行するのが得意だ。", yes: "1-1-2-1-1", no: "1-2" },
  "1-1-2-1-1": { text: "あなたは歩兵としての即応性と柔軟性をもち、冷静な観察眼に自信がある又は努力を続けることができる。", yes: "1-2", no: "1-2", job: "陸上団　普通科　スペシャリスト　マークスマン（選抜射手）" },
  "1-2": { text: "あなたは軽兵器を扱うのが得意または好きだ。", yes: "1-2-1", no: "1-3" },
  "1-2-1": { text: "あなたは移動車両に無反動砲を命中させるのが得意だ。", yes: "1-2-1-1", no: "1-2-2" },
  "1-2-1-1": { text: "あなたはミサイルやロケットを命中させる自信がある又は努力を続けることができる。", yes: "1-2-2", no: "1-2-2", job: "陸上団　普通科　スペシャリスト　アンチタンクガンナー（対戦車射手 ）" },
  "1-2-2": { text: "あなたは直射兵器よりも曲射兵器の方が好きだ。", yes: "1-2-2-1", no: "1-3" },
  "1-2-2-1": { text: "あなたは目測で障害物の陰に着弾させるのが得意だ。", yes: "1-2-2-1-1", no: "1-3", job: "陸上団　普通科　グレネーダー（擲弾手）" },
  "1-2-2-1-1": { text: "あなたは直接照準火器ではなく、間接照準火器が得意だ。", yes: "1-2-2-1-1-1", no: "1-3" },
  "1-2-2-1-1-1": { text: "あなたは高低差や距離を自身の感覚を頼りに即座に判断する自信がある又は努力を続けることができる。", yes: "1-2-2-1-1-2", no: "1-3", job: "陸上団　普通科　スペシャリスト　軽迫撃砲手" },
  "1-2-2-1-1-2": { text: "あなたは正確性と論理的思考力、コミュニケーション能力に自信がある又は努力を続けることができる。", yes: "1-3", no: "1-3", job: "陸上団　普通科　スペシャリスト　中迫撃砲手" },
  "1-3": { text: "あなたは小銃火器に特別な興味はないが、味方の状態や動向が気になる。", yes: "1-3-1", no: "1-4" },
  "1-3-1": { text: "あなたは最新のドローンや無人機を扱うのが得意または好きだ。", yes: "1-3-1-1", no: "1-3-2" },
  "1-3-1-1": { text: "あなたはドローンの設定や操作、メンテナンス、新たなドローンを覚えて使うのが得意だ。", yes: "1-3-1-1-1", no: "1-4" },
  "1-3-1-1-1": { text: "あなたはISRドローンや無人機で索敵を行い、報告する自信がある又は努力を続けることができる。", yes: "1-3-1-1-2", no: "1-3-1-1-2", job: "陸上団　普通科　スペシャリスト　UASオペレーター" },
  "1-3-1-1-2": { text: "あなたはFPVドローンで指定された相手に命中させる自信がある又は努力を続けることができる。", yes: "1-3-2", no: "1-3-2", job: "陸上団　普通科　スペシャリスト　システムオペレーター" },
  "1-3-2": { text: "あなたは自分で敵を倒すことより、敵の射線を外して、味方を治療したり助けることが好きだ。", yes: "1-3-2-1", no: "1-4" },
  "1-3-2-1": { text: "あなたは味方のメンダウンに直ぐに気付き、ＣＵＦすることが得意だ。", yes: "1-3-2-1-1", no: "1-4", job: "陸上団　衛生科　コンバットライフセーバー（戦闘救護員）" },
  "1-3-2-1-1": { text: "あなたは医療技術に加えて、戦闘状況を見極める判断能力、戦術知識に自信がある又は努力を続けることができる。", yes: "1-4", no: "1-4", job: "陸上団　衛生科　スペシャリスト　コンバットメディック（衛生兵）" },
  "1-4": { text: "あなたは部下を指揮することが好きだ。", yes: "1-4-1", no: "2" },
  "1-4-1": { text: "あなたは率先垂範、簡潔で的確な命令、部下の成長と安全のために「規律」を維持することが得意だ。", yes: "1-4-1-1", no: "2", job: "陸上団　普通科　ファイアチームリーダー（班長）" },
  "1-4-1-1": { text: "あなたは戦術・戦闘スキル、即断即決の決断力、現実的な管理能力、恐怖心をコントロールする統率力に自信がある又は努力を続けることができる。", yes: "1-4-1-1-1", no: "2", job: "陸上団　普通科　スクアッドリーダー（分隊長）" },
  "1-4-1-1-1": { text: "あなたは思考力と戦闘調整能力、階層組織を動かすマネジメント能力、決定的瞬間における主導権の掌握、間接統率能力に自信がある又は努力を続けることができる。", yes: "2", no: "2", job: "陸上団　普通科　プラトゥーンリーダー（小隊長）" },
  "2": { text: "あなたは小銃火器ではなく、搭乗兵器に興味がある。", yes: "2-1", no: "RESULT" },
  "2-1": { text: "あなたは陸上兵器を扱うのが得意または好きだ。", yes: "2-1-1", no: "2-2" },
  "2-1-1": { text: "あなたはわずかな視界だけで車幅や地面の凹凸を把握して運転することが得意だ。", yes: "2-1-2", no: "2-2", job: "陸上団　ドライバー（操縦手）" },
  "2-1-2": { text: "あなたは動く目標に対して照準を合わせ続けることが得意だ。", yes: "2-1-3", no: "2-2", job: "陸上団　機甲科　ガンナー（砲手）" },
  "2-1-3": { text: "あなたは戦車の指揮と迅速な決断力で乗員への明確な命令を下すことが得意だ。", yes: "2-1-3-1", no: "2-2", job: "陸上団　機甲科　車長" },
  "2-1-3-1": { text: "あなたは猪突猛進を抑える冷徹さ、危険な現場の最前線に立って部下を引っ張る強烈なリーダーシップに自信がある又は努力を続けることができる。", yes: "2-2", no: "2-2", job: "陸上団　機甲科　連隊長" },
  "2-2": { text: "あなたは航空兵器を扱うのが得意または好きだ。", yes: "2-2-1", no: "2-3" },
  "2-2-1": { text: "あなたは英語での無線、資料での座学、個人での練習が得意だ。", yes: "2-2-1-1", no: "2-3" },
  "2-2-1-1": { text: "あなたは協調性と柔軟性、高い空間認識能力とマルチタスクを行うことに自信がある又は努力を続けることができる。", yes: "2-2-1-2", no: "2-3", job: "航空団　固定翼航空隊　BVR戦闘部隊" },
  "2-2-1-2": { text: "あなたは空間認識と操縦技術、高度なシステム運用力とタイムラインの厳守に自信がある又は努力を続けることができる。", yes: "2-2-1-3", no: "2-3", job: "航空団　固定翼航空隊　対地攻撃・SEAD部隊" },
  "2-2-1-3": { text: "あなたは聴覚的マルチタスクと脳内メモリ、言語・コミュニケーション能力に自信がある又は努力を続けることができる。", yes: "2-2-1-3-1", no: "2-3", job: "航空団　固定翼航空隊　AWACS／航空管制部隊" },
  "2-2-1-3-1": { text: "あなたは全管制官やオペレーターを統括し、戦術的な意思決定や戦闘機への指示の最終責任に自信がある又は努力を続けることができる。", yes: "2-3", no: "2-3", job: "航空団　固定翼航空隊　指揮官" },
  "2-3": { text: "あなたは海上兵器・艦艇を扱うのが得意または好きだ。", yes: "2-3-1", no: "RESULT" },
  "2-3-1": { text: "あなたは復命復唱と和を乱さない協調性、消火・修理などのメンテナンス、様々な業務を行うマルチロールが得意だ。", yes: "2-3-1-1", no: "RESULT" },
  "2-3-1-1": { text: "あなたは時間差の空間認識、正確性と規律心、厳しい指導や失敗に心が折れないことに自信がある又は努力を続けることができる。", yes: "2-3-1-2", no: "RESULT", job: "海上団　艦船・潜水艦　総舵手" },
  "2-3-1-2": { text: "あなたは雑音から瞬時に識別する集中力、海の科学的データから論理的思考を行う自信がある又は努力を続けることができる。", yes: "2-3-1-3", no: "RESULT", job: "海上団　艦船・潜水艦　水測員" },
  "2-3-1-3": { text: "あなたは情報処理、決断の瞬発力、艦の武器システムの特性理解に自信がある又は努力を続けることができる。", yes: "2-3-1-4", no: "RESULT", job: "海上団　艦船・潜水艦　砲雷長" },
  "2-3-1-4": { text: "あなたは操舵手、推測員の業務を理解し、指揮官の指揮権の代行を行う自信がある又は努力を続けることができる。", yes: "2-3-1-4-1", no: "RESULT", job: "海上団　艦船・潜水艦　航海長" },
  "2-3-1-4-1": { text: "あなたは胆力と状況を見抜く大局観、外部とのデータリンクや無線を駆使したネットワーク戦を行う自信がある又は努力を続けることができる。", yes: "2-3-1-4-1-1", no: "RESULT", job: "海上団　艦船・潜水艦　艦長" },
  "2-3-1-4-1-1": { text: "あなたは大局観と戦略的・戦術的思考、高度な統率力、兵器体系の深い理解に自信がある又は努力を続けることができる。", yes: "RESULT", no: "RESULT", job: "海上団　艦船・潜水艦　艦隊司令" }
};

const $ = (id) => document.getElementById(id);
const quiz = $("quiz");
const results = $("results");
let currentId = "1";
let history = [];
let selectedJobs = [];

function render() {
  const item = questions[currentId];
  if (!item) return showResults();
  quiz.hidden = false;
  results.hidden = true;
  $("question-id").textContent = `質問 ${currentId}`;
  $("question-text").textContent = item.text;
  $("step-label").textContent = `回答 ${history.length + 1} 問目`;
  $("progress").style.width = `${Math.min(94, Math.round((history.length / 22) * 100))}%`;
  $("back-button").disabled = history.length === 0;
}

function answer(choice) {
  const item = questions[currentId];
  history.push({ id: currentId, jobsLength: selectedJobs.length });
  if (choice === "yes" && item.job) selectedJobs.push(item.job);
  const next = item[choice];
  if (next === "RESULT") return showResults();
  currentId = next;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
  quiz.hidden = true;
  results.hidden = false;
  const uniqueJobs = [...new Set(selectedJobs)];
  $("result-summary").textContent = uniqueJobs.length
    ? `あなたの回答から ${uniqueJobs.length} 件の職種が選ばれました。`
    : "今回の回答では、職種は選ばれませんでした。";
  const list = $("result-list");
  list.replaceChildren();
  if (!uniqueJobs.length) {
    const empty = document.createElement("p");
    empty.className = "empty-result";
    empty.textContent = "回答を変えて、もう一度試してみてください。";
    list.append(empty);
  } else {
    uniqueJobs.forEach((job) => {
      const row = document.createElement("div");
      row.className = "result-item";
      row.textContent = job;
      list.append(row);
    });
  }
  $("copy-status").textContent = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restart() {
  currentId = "1";
  history = [];
  selectedJobs = [];
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("yes-button").addEventListener("click", () => answer("yes"));
$("no-button").addEventListener("click", () => answer("no"));
$("back-button").addEventListener("click", () => {
  const previous = history.pop();
  if (!previous) return;
  selectedJobs.length = previous.jobsLength;
  currentId = previous.id;
  render();
});
$("restart-top").addEventListener("click", restart);
$("restart-result").addEventListener("click", restart);
$("copy-result").addEventListener("click", async () => {
  const jobs = [...new Set(selectedJobs)];
  const text = jobs.length ? `回答集計\n${jobs.map((job, i) => `${i + 1}. ${job}`).join("\n")}` : "回答集計\n該当する職種はありませんでした。";
  try {
    await navigator.clipboard.writeText(text);
    $("copy-status").textContent = "結果をコピーしました。";
  } catch {
    $("copy-status").textContent = "コピーできませんでした。結果を選択してコピーしてください。";
  }
});

render();
