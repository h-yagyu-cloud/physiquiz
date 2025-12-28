const QUESTIONS = [
    {
        "id": 1,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "question": "速さと速度の違いについて、正しい記述はどれか。",
        "options": [
            "速さは向きを持たないが、速度は向きを持つ。",
            "速さは向きを持つが、速度は向きを持たない。",
            "どちらも向きを持たない。",
            "どちらも向きを持つ。"
        ],
        "answer": 0,
        "explanation": "速さは大きさのみを持つスカラー量、速度は大きさと向きを持つベクトル量です。"
    },
    {
        "id": 2,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "question": "「時速36km」は「秒速10m」と同じ速さである。",
        "options": [
            "〇",
            "×"
        ],
        "answer": 0,
        "explanation": "36km/h = 36000m / 3600s = 10m/s なので正しいです。"
    },
    {
        "id": 3,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "choice",
        "question": "加速度の単位として正しいものはどれか。",
        "options": [
            "m/s",
            "m/s²",
            "km/h",
            "m"
        ],
        "answer": 1,
        "explanation": "加速度は単位時間あたりの速度の変化率なので、m/s² です。"
    },
    {
        "id": 4,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "question": "100mを10秒で走る人の平均の速さは何m/sか。",
        "options": [
            "5m/s",
            "10m/s",
            "20m/s",
            "100m/s"
        ],
        "answer": 1,
        "explanation": "速さ = 距離 ÷ 時間 = 100m ÷ 10s = 10m/s です。"
    },
    {
        "id": 5,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "question": "静止していた物体が等加速度直線運動をし、3秒後に12m/sになった。加速度の大きさはいくらか。",
        "options": [
            "2m/s²",
            "3m/s²",
            "4m/s²",
            "6m/s²"
        ],
        "answer": 2,
        "explanation": "加速度 = 速度の変化 ÷ 時間 = (12 - 0) ÷ 3 = 4m/s² です。"
    },
    {
        "id": 6,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "question": "A君が東に4m/s、B君が北に3m/sで進んでいる。A君から見たB君の相対速度の大きさはいくらか。",
        "options": [
            "1m/s",
            "5m/s",
            "7m/s",
            "12m/s"
        ],
        "answer": 1,
        "explanation": "相対速度の大きさは三平方の定理より √(4² + 3²) = √25 = 5m/s です。"
    },
    {
        "id": 7,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "question": "速度が一定の運動を等速直線運動という。",
        "options": [
            "〇",
            "×"
        ],
        "answer": 0,
        "explanation": "速度（大きさ向き）が一定なので、等速直線運動です。"
    },
    {
        "id": 8,
        "category": "p1_c1",
        "difficulty": "A",
        "type": "ox",
        "question": "加速度が負の場合、物体は必ず減速している。",
        "options": [
            "〇",
            "×"
        ],
        "answer": 1,
        "explanation": "加速度が負でも、速度が負（後退）であれば、速さは増加します。向きによるため必ずしも減速とは限りません。"
    },
    {
        "id": 9,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "question": "x-tグラフの傾きが表す物理量は何か。",
        "options": [
            "位置",
            "速度",
            "加速度",
            "力"
        ],
        "answer": 1,
        "explanation": "位置xの時間変化率なので、速度を表します。"
    },
    {
        "id": 10,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "question": "v-tグラフの傾きが表す物理量は何か。",
        "options": [
            "移動距離",
            "速度",
            "加速度",
            "力"
        ],
        "answer": 2,
        "explanation": "速度vの時間変化率なので、加速度を表します。"
    },
    {
        "id": 11,
        "category": "p1_c1",
        "difficulty": "B",
        "type": "choice",
        "question": "東向きに10m/sで進む車Aと、西向きに10m/sで進む車Bがある。すれ違う際の相対速度の大きさは。",
        "options": [
            "0m/s",
            "10m/s",
            "20m/s",
            "100m/s"
        ],
        "answer": 2,
        "explanation": "東向きを正とすると、Aの速度+10、Bの速度-10。Aから見たBは (-10) - (+10) = -20。大きさは20m/s。"
    },
    {
        "id": 12,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "question": "初速度10m/sで走っていた車がブレーキをかけ、5秒後に停止した。この間の移動距離はいくらか（等加速度運動とする）。",
        "options": [
            "10m",
            "25m",
            "50m",
            "100m"
        ],
        "answer": 1,
        "explanation": "v-tグラフを描くと、底辺5、高さ10の三角形の面積になるので、10 * 5 / 2 = 25m。"
    },
    {
        "id": 13,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "question": "物体が静止状態から加速度 a で t 秒間加速した後、等速運動に移った。合計 2t 秒間の移動距離は。",
        "options": [
            "1.5at²",
            "2at²",
            "2.5at²",
            "3at²"
        ],
        "answer": 0,
        "explanation": "最初のt秒で x1 = 1/2at²。この時の速度 v = at。次のt秒は等速で x2 = vt = at²。合計 = 0.5at² + at² = 1.5at²。"
    },
    {
        "id": 14,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "question": "ある区間を往復するのに、行きは速さv、帰りは速さ2vで移動した。往復の平均の速さは。",
        "options": [
            "1.33v",
            "1.5v",
            "1.66v",
            "3v"
        ],
        "answer": 0,
        "explanation": "片道の距離をLとすると、行きにかかる時間はL/v、帰りはL/2v。往復距離2Lを往復時間(3L/2v)で割ると、4v/3 ≒ 1.33v。"
    },
    {
        "id": 15,
        "category": "p1_c1",
        "difficulty": "C",
        "type": "choice",
        "question": "v-tグラフと時間軸で囲まれた部分の面積は何を表すか。",
        "options": [
            "平均の速さ",
            "瞬間の速さ",
            "移動距離（変位の大きさ）",
            "加速度"
        ],
        "answer": 2,
        "explanation": "速度と時間の積（の積分）にあたるため、移動距離（変位の大きさ）を表します。"
    }
];
