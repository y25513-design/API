const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

// おやじギャグを取得する関数
async function getJapaneseJoke() {
    jokeText.innerText = "考え中...";

    try {
        // 公開されているおやじギャグAPI（例）
        const response = await fetch('https://oyaji-gag-api.vercel.app/api/gags');
        const data = await response.json();

        // APIからランダムに1つ選ぶ（このAPIは配列で全件返ってくることが多いです）
        const randomIndex = Math.floor(Math.random() * data.length);
        const gag = data[randomIndex];

        // ギャグの文章を表示
        jokeText.innerText = gag.japanese; // JSONのキーが 'japanese' の場合

    } catch (error) {
        // APIが不安定な場合や制限がある場合のフォールバック（手動リスト）
        const fallbackGags = [
            "アルミ缶の上にあるミカン",
            "電話に誰もでんわ",
            "イカはいかが？",
            "パンダのパンだ！",
            "布団が吹っ飛んだ！",
            "ざけんなや 呪力が練れん ドブカスがぁ",
            "このメロン買うのやめろん！",
            "洋ナシはもう用なしだ！",
            "このミントは食べてみんとわからん",
            "鬼門の置きもん",
            "小学生は生姜くせぇ",
            "コンドルが食い込んどる",
            "怨念がおんねん",
            "トマトが止まっとる",
            "オカリナを借りな",
            "言い訳をしていい訳？",
            "コーディネートはこーでねーと",
            "内臓がないぞう",
            "梅がうめー",
            "ツイッターでつい言ったー",
            "野口英世の愚痴、ひでぇよぉ",
            "ジャムおじさんがジャムを持参",
            "忍者は何人じゃ？",
            "ヨロちくわ",
            "ダジャレを言っているのは誰じゃ？",
            "そんなばなな",
            "うれしいたけ",
            "中国に行っちゃいなー",
            "急いで弁当食べんどー",
            "大丈夫、ボク、最強だから",
            "ガッデム！！",
            "余計なおせWi-Fi",
            "ロシアは恐ろしあ"

        ];
        const randomFallback = fallbackGags[Math.floor(Math.random() * fallbackGags.length)];
        jokeText.innerText = randomFallback;
        console.log("外部APIエラーのため、予備リストから表示しました。");
    }
}

jokeBtn.addEventListener('click', getJapaneseJoke);

// 初期表示
getJapaneseJoke();