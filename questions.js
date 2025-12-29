const QUESTIONS =
    [
        {
            "id": 101,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "速度$v$と速さの違いについての記述として正しいものはどれか。",
            "options": [
                "向きを持つかどうか",
                "単位が異なる",
                "常に速度の方が大きい",
                "実は同じものである"
            ],
            "answer": 0,
            "explanation": "「速度」は大きさと向きを持つベクトル量ですが、「速さ」は大きさのみを持つスカラー量です。",
            "image_url": ""
        },
        {
            "id": 102,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "初速度$2.0\\text{m/s}$で等加速度直線運動を始めた物体が、3.0秒後に速度$8.0\\text{m/s}$になった。加速度の大きさはいくらか。",
            "options": [
                "$1.0\\text{m/s}^2$",
                "$2.0\\text{m/s}^2$",
                "$3.0\\text{m/s}^2$",
                "$4.0\\text{m/s}^2$"
            ],
            "answer": 1,
            "explanation": "加速度の定義式$a=\\frac{v-v_0}{t}$より、$a=\\frac{8.0-2.0}{3.0}=2.0\\text{m/s}^2$です。",
            "image_url": ""
        },
        {
            "id": 103,
            "category": "p1_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "作用・反作用の法則において、2つの力は必ず「同じ大きさ」で「逆向き」である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正解です。作用反作用の法則（運動の第3法則）では、2物体間にはたらく力は同一直線上で、互いに逆向きで、大きさが等しいです。",
            "image_url": ""
        },
        {
            "id": 104,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量$5.0\\text{kg}$の物体に$10\\text{N}$の力を加えたとき、生じる加速度の大きさはいくらか。",
            "options": [
                "$0.5\\text{m/s}^2$",
                "$2.0\\text{m/s}^2$",
                "$5.0\\text{m/s}^2$",
                "$50\\text{m/s}^2$"
            ],
            "answer": 1,
            "explanation": "運動方程式$F=ma$より、$10=5.0\\times{a}$なので$a=2.0\\text{m/s}^2$です。",
            "image_url": ""
        },
        {
            "id": 105,
            "category": "p1_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "仕事$W$の定義式として正しいものはどれか（力$F$、移動距離$x$）。",
            "options": [
                "$W=F+x$",
                "$W=F-x$",
                "$W=Fx$",
                "$W=F/x$"
            ],
            "answer": 2,
            "explanation": "仕事は「力$\\times$力の向きに移動した距離」で定義されます。したがって$W=Fx$です。",
            "image_url": ""
        },
        {
            "id": 106,
            "category": "p1_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "質量$m$の物体が速さ$v$で運動しているとき、運動エネルギー$K$はどう表されるか。",
            "options": [
                "$mv$",
                "$mg$",
                "$\\frac{1}{2}mv^2$",
                "$mgh$"
            ],
            "answer": 2,
            "explanation": "運動エネルギーの公式は$K=\\frac{1}{2}mv^2$です。$mgh$は重力による位置エネルギーです。",
            "image_url": ""
        },
        {
            "id": 107,
            "category": "p1_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量$m$のボールが速さ$v$で壁に垂直衝突し、速さ$v$で跳ね返った。このときの運動量変化の大きさはいくらか。",
            "options": [
                "$0$",
                "$mv$",
                "$2mv$",
                "$\\frac{1}{2}mv$"
            ],
            "answer": 2,
            "explanation": "衝突前を正とすると、運動量は$mv$から$-mv$に変化しました。変化の大きさは$|-mv-mv|=|-2mv|=2mv$です。",
            "image_url": ""
        },
        {
            "id": 108,
            "category": "p1_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "外力がはたらかない系において、衝突前後で保存される物理量は何か。",
            "options": [
                "運動エネルギー",
                "運動量",
                "速度",
                "加速度"
            ],
            "answer": 1,
            "explanation": "外力がはたらかないとき、運動量の総和は保存されます（運動量保存則）。運動エネルギーは弾性衝突以外では保存されません。",
            "image_url": ""
        },
        {
            "id": 109,
            "category": "p1_c5",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "半径$r$、角速度$\\omega$で等速円運動をする物体の加速度の大きさはいくらか。",
            "options": [
                "$r\\omega$",
                "$r\\omega^2$",
                "$r^2\\omega$",
                "$\\frac{v^2}{r}$"
            ],
            "answer": 1,
            "explanation": "等速円運動の加速度は中心向きで、大きさは$r\\omega^2$または$\\frac{v^2}{r}$です。",
            "image_url": ""
        },
        {
            "id": 110,
            "category": "p1_c5",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "万有引力の大きさは、2物体の距離の何乗に比例するか。",
            "options": [
                "距離に比例",
                "距離の2乗に比例",
                "距離に反比例",
                "距離の2乗に反比例"
            ],
            "answer": 3,
            "explanation": "万有引力の法則$F=G\\frac{Mm}{r^2}$より、距離$r$の2乗に反比例します。",
            "image_url": ""
        },
        {
            "id": 111,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "静止していた物体が等加速度直線運動をし、4.0秒後に$12\\text{m/s}$になった。移動距離はいくらか。",
            "options": [
                "$12\\text{m}$",
                "$24\\text{m}$",
                "$36\\text{m}$",
                "$48\\text{m}$"
            ],
            "answer": 1,
            "explanation": "$x=\\frac{1}{2}at^2$または$v-t$グラフの面積より。加速度$3.0\\text{m/s}^2$なので$x=\\frac{1}{2}\\times3.0\\times4.0^2=24\\text{m}$。",
            "image_url": ""
        },
        {
            "id": 112,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "$v-t$グラフの傾きが表している物理量は何か。",
            "options": [
                "移動距離",
                "速さ",
                "加速度",
                "力"
            ],
            "answer": 2,
            "explanation": "$v-t$グラフ（縦軸が速度、横軸が時間）の傾きは加速度を表します。",
            "image_url": "https://placehold.co/600x400/png?text=v-t+Graph"
        },
        {
            "id": 113,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "水平投射された物体において、水平方向の運動はどのような運動か。",
            "options": [
                "自由落下",
                "等速直線運動",
                "等加速度運動",
                "円運動"
            ],
            "answer": 1,
            "explanation": "水平方向には力がはたらかないため、等速直線運動をします。",
            "image_url": ""
        },
        {
            "id": 114,
            "category": "p1_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "高さ$h$から水平に初速度$v_0$で投げ出した物体が地面に到達する時間は、$v_0$を大きくするとどうなるか。",
            "options": [
                "大きくなる",
                "小さくなる",
                "変わらない",
                "質量による"
            ],
            "answer": 2,
            "explanation": "水平初速度は落下の時間（鉛直方向の運動）には影響しません。$t=\\sqrt{\\frac{2h}{g}}$で決まります。",
            "image_url": "https://placehold.co/600x400/png?text=Projectile+Motion"
        },
        {
            "id": 115,
            "category": "p1_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "慣性の法則（運動の第1法則）の説明として正しいものはどれか。",
            "options": [
                "力がはたらかないと静止する",
                "力がはたらかないと等速直線運動を続ける",
                "力と加速度は比例する",
                "作用と反作用は等しい"
            ],
            "answer": 1,
            "explanation": "物体に力がはたらかない、またつり合っているとき、静止している物体は静止し続け、動いている物体は等速直線運動を続けます。",
            "image_url": ""
        },
        {
            "id": 116,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "あらい水平面上で質量$2.0\\text{kg}$の物体を$10\\text{N}$の力で引いたが動かなかった。静止摩擦力の大きさはいくらか。",
            "options": [
                "$0\\text{N}$",
                "$2.0\\text{N}$",
                "$10\\text{N}$",
                "$20\\text{N}$"
            ],
            "answer": 2,
            "explanation": "物体が動いていないので、力のつり合いより引く力と同じ$10\\text{N}$です。",
            "image_url": ""
        },
        {
            "id": 117,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "なめらかな斜面（傾角$30^\\circ$）を滑り降りる物体の加速度の大きさはいくらか（重力加速度$g$）。",
            "options": [
                "$g$",
                "$\\frac{1}{2}g$",
                "$\\frac{\\sqrt{3}}{2}g$",
                "$2g$"
            ],
            "answer": 1,
            "explanation": "斜面方向の重力の成分は$mg\\sin30^\\circ$なので、運動方程式$ma=mg\\sin30^\\circ$より$a=g\\times0.5$です。",
            "image_url": "https://placehold.co/600x400/png?text=Slope+Force"
        },
        {
            "id": 118,
            "category": "p1_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "エレベーターが上向きに加速度$a$で上昇中、中の人が感じる慣性力の向きはどちらか。",
            "options": [
                "上向き",
                "下向き",
                "水平方向",
                "感じない"
            ],
            "answer": 1,
            "explanation": "観測者の加速度と逆向き（下向き）に慣性力$ma$がはたらきます。",
            "image_url": ""
        },
        {
            "id": 119,
            "category": "p1_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "運動エネルギーの変化量は何に等しいか。",
            "options": [
                "力積",
                "仕事",
                "運動量",
                "力"
            ],
            "answer": 1,
            "explanation": "運動エネルギーの変化量は、外力からされた仕事に等しいです（エネルギーの原理）。",
            "image_url": ""
        },
        {
            "id": 120,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "ばね定数$k$のばねを自然長から$x$だけ伸ばしたとき、弾性力による位置エネルギーはいくらか。",
            "options": [
                "$kx$",
                "$\\frac{1}{2}kx$",
                "$kx^2$",
                "$\\frac{1}{2}kx^2$"
            ],
            "answer": 3,
            "explanation": "弾性エネルギーの公式は$U=\\frac{1}{2}kx^2$です。",
            "image_url": ""
        },
        {
            "id": 121,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "高さ$10\\text{m}$から自由落下させたおもりの、地面到達直前の速さはいくらか（$g=9.8\\text{m/s}^2$）。",
            "options": [
                "$7.0\\text{m/s}$",
                "$9.8\\text{m/s}$",
                "$14\\text{m/s}$",
                "$19.6\\text{m/s}$"
            ],
            "answer": 2,
            "explanation": "力学的エネルギー保存則より$mgh=\\frac{1}{2}mv^2$。$v=\\sqrt{2gh}=\\sqrt{2\\times9.8\\times10}=\\sqrt{196}=14$。",
            "image_url": ""
        },
        {
            "id": 122,
            "category": "p1_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "なめらかな水平面上でばねに物体をつけて振動させた。速さが最大になるのはどの位置か。",
            "options": [
                "ばねが最も伸びた位置",
                "ばねが最も縮んだ位置",
                "自然長の位置",
                "変位が半分の位置"
            ],
            "answer": 2,
            "explanation": "力学的エネルギー保存則より、位置エネルギーが最小（0）になる自然長の位置で、運動エネルギー（速さ）は最大になります。",
            "image_url": ""
        },
        {
            "id": 123,
            "category": "p1_c4",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "運動量と力積の関係を表す式として正しいものはどれか。",
            "options": [
                "（運動量の変化）=（力積）",
                "（運動量）=（力積）",
                "（運動エネルギー）=（力積）",
                "（力）=（力積）"
            ],
            "answer": 0,
            "explanation": "物体の運動量の変化量は、その間に受けた力積に等しいです。",
            "image_url": ""
        },
        {
            "id": 124,
            "category": "p1_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量$2.0\\text{kg}$、速さ$5.0\\text{m/s}$の物体を止めたい。必要な力積の大きさはいくらか。",
            "options": [
                "$2.5\\text{N\\cdot{s}}$",
                "$5.0\\text{N\\cdot{s}}$",
                "$10\\text{N\\cdot{s}}$",
                "$20\\text{N\\cdot{s}}$"
            ],
            "answer": 2,
            "explanation": "運動量の変化の大きさが力積の大きさです。$|0-2.0\\times5.0|=10\\text{N\\cdot{s}}$。",
            "image_url": ""
        },
        {
            "id": 125,
            "category": "p1_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "2球が衝突し、合体して動いた。この衝突における反発係数$e$の値はいくらか。",
            "options": [
                "$e=1$",
                "$0<e<1$",
                "$e=0$",
                "$e<0$"
            ],
            "answer": 2,
            "explanation": "合体する場合（完全非弾性衝突）の反発係数は0です。",
            "image_url": "https://placehold.co/600x400/png?text=Collision"
        },
        {
            "id": 126,
            "category": "p1_c5",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "等速円運動において、速度の向きはどの方向か。",
            "options": [
                "円の中心向き",
                "円の接線方向",
                "円の外側向き",
                "つねに一定"
            ],
            "answer": 1,
            "explanation": "速度ベクトルは常に円の接線方向を向いています。",
            "image_url": ""
        },
        {
            "id": 127,
            "category": "p1_c5",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "地球の第一宇宙速度（地表すれすれを回る人工衛星の速さ）は約いくらか。",
            "options": [
                "$7.9\\text{km/s}$",
                "$11.2\\text{km/s}$",
                "$340\\text{m/s}$",
                "$3.0\\times10^8\\text{m/s}$"
            ],
            "answer": 0,
            "explanation": "第一宇宙速度は約$7.9\\text{km/s}$です。$11.2\\text{km/s}$は第二宇宙速度。",
            "image_url": ""
        },
        {
            "id": 128,
            "category": "p1_c5",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "遠心力は見かけの力（慣性力）の一種である。正しいか。",
            "options": [
                "正しい",
                "誤り"
            ],
            "answer": 0,
            "explanation": "円運動する観測者から見たときに現れる、向心力とつり合う外向きの見かけの力です。",
            "image_url": ""
        },
        {
            "id": 129,
            "category": "p1_c5",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "ケプラーの第3法則において、惑星の公転周期$T$の2乗は何に比例するか。",
            "options": [
                "太陽からの距離",
                "長半径の2乗",
                "長半径の3乗",
                "質量の2乗"
            ],
            "answer": 2,
            "explanation": "公転周期$T$の2乗は、楕円軌道の長半径$a$の3乗に比例します（$T^2\\propto{a^3}$）。",
            "image_url": ""
        },
        {
            "id": 130,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "自由落下する物体の落下距離は、時間の2乗に比例する。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "$y=\\frac{1}{2}gt^2$なので、時間$t$の2乗に比例します。",
            "image_url": ""
        },
        {
            "id": 131,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "等加速度直線運動の式 $v^2 - v_0^2 = 2ax$ において、$x$ は何を表しているか。",
            "options": [
                "時刻",
                "速度",
                "変位",
                "加速度"
            ],
            "answer": 2,
            "explanation": "$x$ は変位（位置の変化）を表します。",
            "image_url": ""
        },
        {
            "id": 132,
            "category": "p1_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "初速度 $10\\text{m/s}$、加速度 $-2.0\\text{m/s}^2$ で運動する物体が停止するまでの距離はいくらか。",
            "options": [
                "$10\\text{m}$",
                "$25\\text{m}$",
                "$50\\text{m}$",
                "$100\\text{m}$"
            ],
            "answer": 1,
            "explanation": "$0^2 - 10^2 = 2 \\times (-2.0) \\times x$ より、$-100 = -4x$ なので $x = 25\\text{m}$ です。",
            "image_url": ""
        },
        {
            "id": 133,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "相対速度の計算式として正しいものはどれか（Aに対するBの相対速度 $v_{AB}$）。",
            "options": [
                "$v_B - v_A$",
                "$v_A - v_B$",
                "$v_A + v_B$",
                "$v_A \\times v_B$"
            ],
            "answer": 0,
            "explanation": "Aから見たBの速度なので、「相手(B) - 自分(A)」で計算します。",
            "image_url": ""
        },
        {
            "id": 134,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "雨が鉛直下向きに $10\\text{m/s}$ で降っている中を、電車が水平方向に $10\\text{m/s}$ で走っている。電車内の人から見た雨の速さはいくらか。",
            "options": [
                "$10\\text{m/s}$",
                "$14\\text{m/s}$",
                "$20\\text{m/s}$",
                "$0\\text{m/s}$"
            ],
            "answer": 1,
            "explanation": "速度のベクトル合成（直角三角形）より、$\\sqrt{10^2 + 10^2} = 10\\sqrt{2} \\approx 14.1\\text{m/s}$ です。",
            "image_url": ""
        },
        {
            "id": 135,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "等加速度直線運動の $x-t$ グラフは、直線になる。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "等加速度運動の変位 $x$ は時間 $t$ の2次関数（$t^2$）になるため、放物線（曲線）になります。",
            "image_url": "https://placehold.co/600x400/png?text=x-t+Graph"
        },
        {
            "id": 136,
            "category": "p1_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "自由落下において、落下距離が4倍になるには何倍の時間がかかるか。",
            "options": [
                "2倍",
                "4倍",
                "8倍",
                "16倍"
            ],
            "answer": 0,
            "explanation": "$y \\propto t^2$ なので、距離が4倍になるには時間は $\\sqrt{4}=2$ 倍かかります。",
            "image_url": ""
        },
        {
            "id": 137,
            "category": "p1_c2",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "力の単位 [N]（ニュートン）を基本単位 [kg], [m], [s] で表すとどうなるか。",
            "options": [
                "$\\text{kg\\cdot m/s}$",
                "$\\text{kg\\cdot m/s}^2$",
                "$\\text{kg\\cdot m}^2\\text{/s}^2$",
                "$\\text{kg/m}$"
            ],
            "answer": 1,
            "explanation": "運動方程式 $F=ma$ より、単位は $\\text{kg} \\times \\text{m/s}^2$ です。",
            "image_url": ""
        },
        {
            "id": 138,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "なめらかな滑車に糸をかけ、質量 $M$ と $m$ ($M>m$) の物体をつるして放した。加速度の及ぼす力は何か。",
            "options": [
                "$(M+m)g$",
                "$(M-m)g$",
                "$Mg$",
                "$mg$"
            ],
            "answer": 1,
            "explanation": "系全体を考えると、物体を動かそうとする正味の力は重力の差 $(M-m)g$ です。",
            "image_url": ""
        },
        {
            "id": 139,
            "category": "p1_c2",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "前問で、全体の加速度 $a$ はいくらか。",
            "options": [
                "$\\frac{M-m}{M+m}g$",
                "$\\frac{M+m}{M-m}g$",
                "$g$",
                "$\\frac{m}{M}g$"
            ],
            "answer": 0,
            "explanation": "運動方程式 $(M+m)a = (M-m)g$ より導かれます。",
            "image_url": "https://placehold.co/600x400/png?text=Atwood+Machine"
        },
        {
            "id": 140,
            "category": "p1_c2",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "静止摩擦力には最大値があり、それを超えると物体は滑り出す。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正解です。その最大値を「最大摩擦力」と呼びます。",
            "image_url": ""
        },
        {
            "id": 141,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "最大摩擦力を表す式はどれか（静止摩擦係数 $\\mu$、垂直抗力 $N$）。",
            "options": [
                "$\\mu N$",
                "$\\mu N^2$",
                "$\\frac{N}{\\mu}$",
                "$\\mu + N$"
            ],
            "answer": 0,
            "explanation": "最大摩擦力 $F_0 = \\mu N$ です。",
            "image_url": ""
        },
        {
            "id": 142,
            "category": "p1_c2",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "あらい斜面上にある物体が滑り落ち始めた。このときの斜面の角度 $\\theta$ と静止摩擦係数 $\\mu$ の関係は？",
            "options": [
                "$\\mu = \\sin\\theta$",
                "$\\mu = \\cos\\theta$",
                "$\\mu = \\tan\\theta$",
                "$\\mu = \\frac{1}{\\tan\\theta}$"
            ],
            "answer": 2,
            "explanation": "重力の斜面成分 $mg\\sin\\theta$ と最大摩擦力 $\\mu mg\\cos\\theta$ が等しいときなので、$\\mu = \\tan\\theta$ となります。",
            "image_url": ""
        },
        {
            "id": 143,
            "category": "p1_c3",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "物体に対して力が仕事をしない場合、運動エネルギーは変化しない。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正解です。仕事とエネルギーの原理より、仕事が0ならエネルギー変化も0です。",
            "image_url": ""
        },
        {
            "id": 144,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量 $2.0\\text{kg}$ の物体をゆっくりと $10\\text{m}$ 持ち上げた。重力に逆らってした仕事はいくらか。",
            "options": [
                "$20\\text{J}$",
                "$98\\text{J}$",
                "$196\\text{J}$",
                "$200\\text{J}$"
            ],
            "answer": 2,
            "explanation": "$W = mgh = 2.0 \\times 9.8 \\times 10 = 196\\text{J}$ です。",
            "image_url": ""
        },
        {
            "id": 145,
            "category": "p1_c3",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "ばね定数 $100\\text{N/m}$ のばねを $0.20\\text{m}$ 縮めたとき、蓄えられる弾性エネルギーはいくらか。",
            "options": [
                "$2.0\\text{J}$",
                "$4.0\\text{J}$",
                "$10\\text{J}$",
                "$20\\text{J}$"
            ],
            "answer": 0,
            "explanation": "$U = \\frac{1}{2}kx^2 = \\frac{1}{2} \\times 100 \\times 0.20^2 = 50 \\times 0.04 = 2.0\\text{J}$ です。",
            "image_url": ""
        },
        {
            "id": 146,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "力学的エネルギー保存則が成り立たない場合はどれか。",
            "options": [
                "自由落下",
                "振り子の運動",
                "摩擦がある面での運動",
                "ばねによる振動"
            ],
            "answer": 2,
            "explanation": "摩擦力は非保存力であり、摩擦熱としてエネルギーが散逸するため、力学的エネルギーは保存されません。",
            "image_url": ""
        },
        {
            "id": 147,
            "category": "p1_c3",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "仕事率の単位はどれか。",
            "options": [
                "J (ジュール)",
                "N (ニュートン)",
                "W (ワット)",
                "Pa (パスカル)"
            ],
            "answer": 2,
            "explanation": "仕事率（単位時間あたりの仕事）の単位は W (ワット) です。J/s と同じです。",
            "image_url": ""
        },
        {
            "id": 148,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "$100\\text{J}$ の仕事を 5.0秒間で行ったときの仕事率はいくらか。",
            "options": [
                "$20\\text{W}$",
                "$50\\text{W}$",
                "$100\\text{W}$",
                "$500\\text{W}$"
            ],
            "answer": 0,
            "explanation": "$P = \\frac{W}{t} = \\frac{100}{5.0} = 20\\text{W}$ です。",
            "image_url": ""
        },
        {
            "id": 149,
            "category": "p1_c4",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "運動量はベクトル量（向きを持つ）である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正解です。運動量 $mv$ は速度 $v$ と同じ向きを持ちます。",
            "image_url": ""
        },
        {
            "id": 150,
            "category": "p1_c4",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "一直線上を反対向きに進む2球（質量$m$、速さ$v$）が衝突して静止した。衝突前の全運動量の和はいくらか。",
            "options": [
                "$2mv$",
                "$mv$",
                "$0$",
                "$-mv$"
            ],
            "answer": 2,
            "explanation": "右向きを正とすると、$mv + m(-v) = 0$ となります。",
            "image_url": ""
        },
        {
            "id": 151,
            "category": "p1_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "反発係数 $e=0.5$ で壁に衝突したボールの、衝突後の速さは衝突前の何倍か。",
            "options": [
                "0.5倍",
                "0.25倍",
                "2倍",
                "変わらない"
            ],
            "answer": 0,
            "explanation": "反発係数の定義 $|v'| = e|v|$ より、速さは $e$ 倍、つまり0.5倍になります。",
            "image_url": ""
        },
        {
            "id": 152,
            "category": "p1_c4",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "なめらかな水平面上で、静止している質量 $M$ の台車から、質量 $m$ の小球を速さ $v$ で水平に発射した。台車の速さ $V$ はいくらか。",
            "options": [
                "$\\frac{m}{M}v$",
                "$\\frac{M}{m}v$",
                "$v$",
                "$\\frac{m}{M+m}v$"
            ],
            "answer": 0,
            "explanation": "運動量保存則より $0 = mv + M(-V)$ なので、$MV = mv$ より $V = \\frac{m}{M}v$ です。",
            "image_url": ""
        },
        {
            "id": 153,
            "category": "p1_c5",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "等速円運動の周期 $T$、半径 $r$、速さ $v$ の関係式として正しいものはどれか。",
            "options": [
                "$T=vr$",
                "$v=Tr$",
                "$v=\\frac{2\\pi r}{T}$",
                "$T=2\\pi rv$"
            ],
            "answer": 2,
            "explanation": "速さは「円周 ÷ 時間」なので、$v = \\frac{2\\pi r}{T}$ です。",
            "image_url": ""
        },
        {
            "id": 154,
            "category": "p1_c5",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "等速円運動における加速度の向きは？",
            "options": [
                "速度と同じ向き",
                "円の外側向き",
                "円の中心向き",
                "常に一定方向"
            ],
            "answer": 2,
            "explanation": "加速度は常に円の中心を向いています（向心加速度）。",
            "image_url": "https://placehold.co/600x400/png?text=Centripetal+Acceleration"
        },
        {
            "id": 155,
            "category": "p1_c5",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "質量 $m$ のおもりを長さ $L$ の糸につるし、水平面内で等速円運動させた（円錐振り子）。円運動の半径 $r$ と糸の張力の水平成分に釣り合う力は？",
            "options": [
                "重力",
                "遠心力",
                "摩擦力",
                "垂直抗力"
            ],
            "answer": 1,
            "explanation": "物体と一緒に回転する座標系で考えると、張力の水平成分と遠心力がつり合っています。",
            "image_url": ""
        },
        {
            "id": 156,
            "category": "p1_c5",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "慣性力の一種で、回転座標系において速度を持つ物体にはたらく見かけの力を何というか。",
            "options": [
                "遠心力",
                "向心力",
                "コリオリの力",
                "万有引力"
            ],
            "answer": 2,
            "explanation": "回転している座標系で物体が動くときにはたらく見かけの力は「コリオリの力」と呼ばれます。",
            "image_url": ""
        },
        {
            "id": 157,
            "category": "p1_c5",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "万有引力定数 $G$ の値はおよそいくらか。",
            "options": [
                "$9.8$",
                "$6.7 \\times 10^{-11}$",
                "$3.0 \\times 10^8$",
                "$1.6 \\times 10^{-19}$"
            ],
            "answer": 1,
            "explanation": "$G \\approx 6.67 \\times 10^{-11} \\text{N\\cdot m}^2\\text{/kg}^2$ です。極めて小さい値です。",
            "image_url": ""
        },
        {
            "id": 158,
            "category": "p1_c5",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "地球の半径を $R$、地表での重力加速度を $g$ とするとき、第一宇宙速度を表す式はどれか。",
            "options": [
                "$\\sqrt{gR}$",
                "$\\sqrt{2gR}$",
                "$\\sqrt{g/R}$",
                "$gR$"
            ],
            "answer": 0,
            "explanation": "遠心力 $m\\frac{v^2}{R}$ と重力 $mg$ のつり合いより、$v = \\sqrt{gR}$ です。",
            "image_url": ""
        },
        {
            "id": 159,
            "category": "p1_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "「変位」と「移動距離」の違いについて、変位の説明として正しいのは？",
            "options": [
                "つねに正の値である",
                "向きを考慮しない総移動量",
                "出発点から到着点への位置の変化",
                "時間あたりの変化率"
            ],
            "answer": 2,
            "explanation": "変位は位置ベクトルの変化（スタートとゴールを結ぶベクトル）であり、符号や向きを持ちます。移動距離はスカラー量です。",
            "image_url": ""
        },
        {
            "id": 160,
            "category": "p1_c3",
            "difficulty": "B",
            "type": "ox",
            "classification": null,
            "question": "保存力以外の力（摩擦力など）が仕事をした場合、力学的エネルギーは保存される。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 1,
            "explanation": "保存力以外の力が仕事をすると、その分だけ力学的エネルギーは変化してしまい、保存されません。",
            "image_url": ""
        },
        {
            "id": "",
            "category": "p0_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "test",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": 0,
            "explanation": "test",
            "image_url": ""
        },
        {
            "id": 201,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "速度$v$と速さの違いについての記述として正しいものはどれか。",
            "options": [
                "向きを持つかどうか",
                "単位が異なる",
                "常に速度の方が大きい",
                "実は同じものである"
            ],
            "answer": 0,
            "explanation": "「速度」は大きさと向きを持つベクトル量ですが、「速さ」は大きさのみを持つスカラー量です。",
            "image_url": ""
        },
        {
            "id": 202,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "初速度$2.0\\text{m/s}$で等加速度直線運動を始めた物体が、3.0秒後に速度$8.0\\text{m/s}$になった。加速度の大きさはいくらか。",
            "options": [
                "$1.0\\text{m/s}^2$",
                "$2.0\\text{m/s}^2$",
                "$3.0\\text{m/s}^2$",
                "$4.0\\text{m/s}^2$"
            ],
            "answer": 1,
            "explanation": "加速度の定義式$a=\\frac{v-v_0}{t}$より、$a=\\frac{8.0-2.0}{3.0}=2.0\\text{m/s}^2$です。",
            "image_url": ""
        },
        {
            "id": 203,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "ox",
            "classification": null,
            "question": "作用・反作用の法則において、2つの力は必ず「同じ大きさ」で「逆向き」である。",
            "options": [
                "〇",
                "✕"
            ],
            "answer": 0,
            "explanation": "正解です。作用反作用の法則（運動の第3法則）では、2物体間にはたらく力は同一直線上で、互いに逆向きで、大きさが等しいです。",
            "image_url": ""
        },
        {
            "id": 204,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量$5.0\\text{kg}$の物体に$10\\text{N}$の力を加えたとき、生じる加速度の大きさはいくらか。",
            "options": [
                "$0.5\\text{m/s}^2$",
                "$2.0\\text{m/s}^2$",
                "$5.0\\text{m/s}^2$",
                "$50\\text{m/s}^2$"
            ],
            "answer": 1,
            "explanation": "運動方程式$F=ma$より、$10=5.0\\times{a}$なので$a=2.0\\text{m/s}^2$です。",
            "image_url": ""
        },
        {
            "id": 205,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "仕事$W$の定義式として正しいものはどれか（力$F$、移動距離$x$）。",
            "options": [
                "$W=F+x$",
                "$W=F-x$",
                "$W=Fx$",
                "$W=F/x$"
            ],
            "answer": 2,
            "explanation": "仕事は「力$\\times$力の向きに移動した距離」で定義されます。したがって$W=Fx$です。",
            "image_url": ""
        },
        {
            "id": 206,
            "category": "p2_c1",
            "difficulty": "C",
            "type": "choice",
            "classification": null,
            "question": "質量$m$の物体が速さ$v$で運動しているとき、運動エネルギー$K$はどう表されるか。",
            "options": [
                "$mv$",
                "$mg$",
                "$\\frac{1}{2}mv^2$",
                "$mgh$"
            ],
            "answer": 2,
            "explanation": "運動エネルギーの公式は$K=\\frac{1}{2}mv^2$です。$mgh$は重力による位置エネルギーです。",
            "image_url": ""
        },
        {
            "id": 207,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "質量$m$のボールが速さ$v$で壁に垂直衝突し、速さ$v$で跳ね返った。このときの運動量変化の大きさはいくらか。",
            "options": [
                "$0$",
                "$mv$",
                "$2mv$",
                "$\\frac{1}{2}mv$"
            ],
            "answer": 2,
            "explanation": "衝突前を正とすると、運動量は$mv$から$-mv$に変化しました。変化の大きさは$|-mv-mv|=|-2mv|=2mv$です。",
            "image_url": ""
        },
        {
            "id": 208,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "外力がはたらかない系において、衝突前後で保存される物理量は何か。",
            "options": [
                "運動エネルギー",
                "運動量",
                "速度",
                "加速度"
            ],
            "answer": 1,
            "explanation": "外力がはたらかないとき、運動量の総和は保存されます（運動量保存則）。運動エネルギーは弾性衝突以外では保存されません。",
            "image_url": ""
        },
        {
            "id": 209,
            "category": "p2_c1",
            "difficulty": "B",
            "type": "choice",
            "classification": null,
            "question": "半径$r$、角速度$\\omega$で等速円運動をする物体の加速度の大きさはいくらか。",
            "options": [
                "$r\\omega$",
                "$r\\omega^2$",
                "$r^2\\omega$",
                "$\\frac{v^2}{r}$"
            ],
            "answer": 1,
            "explanation": "等速円運動の加速度は中心向きで、大きさは$r\\omega^2$または$\\frac{v^2}{r}$です。",
            "image_url": ""
        },
        {
            "id": 210,
            "category": "p2_c1",
            "difficulty": "A",
            "type": "choice",
            "classification": null,
            "question": "万有引力の大きさは、2物体の距離の何乗に比例するか。",
            "options": [
                "距離に比例",
                "距離の2乗に比例",
                "距離に反比例",
                "距離の2乗に反比例"
            ],
            "answer": 3,
            "explanation": "万有引力の法則$F=G\\frac{Mm}{r^2}$より、距離$r$の2乗に反比例します。",
            "image_url": ""
        }
    ]
