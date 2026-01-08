document.addEventListener('DOMContentLoaded', () => {
    const isIndex = !!document.getElementById('start-btn');
    const isQuiz = !!document.getElementById('quiz-container');

    if (isIndex) {
        setupIndexPage();
    } else if (isQuiz) {
        setupQuizPage();
    }
});

// Level System Configuration
function getPointsForDifficulty(difficulty) {
    switch (difficulty) {
        case 'A': return 10;
        case 'B': return 30;
        case 'C': return 100;
        default: return 10;
    }
}

// Calculate cumulative points required to reach "Internal Level L"
// Display Level = L + 1
// (Scaled by 10x as per user request)
function getThresholdPoints(L) {
    if (L <= 16) {
        return 10 * (L * L + 6 * L);
    } else if (L <= 31) {
        return 10 * (2.5 * L * L - 40.5 * L + 360);
    } else {
        return 10 * (4.5 * L * L - 162.5 * L + 2220);
    }
}

// 内部レベルLから必要ポイントを計算
// L=1に到達するには... getThresholdPoints(0)? -> 0 pts. Display: Lv.1
// getThresholdPoints(1)? -> 7 pts. If pts < 7, Lv.1.
// Formulas provided map L(Display?) to Pts?
// "Level starts from 1"
// Usually: Pts required to reach Level L.
// Let's assume the formula gives the threshold to REACH Level L+1 (or completed Level L).
// Actually, formulas like L^2 usually mean cumulative.
// Let's stick to the previous interpretation:
// calculateLevel returns the current Display Level.
const LEVEL_CAP = 50;

function calculateLevel(points) {
    let L = 0;
    while (L < LEVEL_CAP) {
        let nextThreshold = getThresholdPoints(L + 1);
        if (points < nextThreshold) {
            if (points < nextThreshold) {
                return L;
            }
        }
        L++;
    }
    return LEVEL_CAP;
}

const GLOBAL_TITLES = {
    0: "駆け出しの物理学者",
    10: "見習い研究員",
    20: "実験室の常連",
    30: "理科大の有望株",
    40: "物理コンテスト入賞者",
    50: "ニュートン力学の理解者",
    60: "微積分の使い手",
    70: "ラプラスの悪魔",
    80: "エントロピーの支配者",
    90: "相対性理論の旅人",
    100: "量子世界の観測者",
    110: "シュレーディンガーの猫",
    120: "標準模型の構築者",
    130: "超弦理論の探究者",
    140: "ダークマターの発見者",
    150: "事象の地平線を超えし者",
    160: "時空の歪みを操る者",
    170: "ビッグバンの目撃者",
    180: "宇宙定数の管理者",
    190: "多多元宇宙の旅行者",
    200: "アカシックレコードの閲覧者",
    210: "真理の到達者",
    220: "物理法則の超越者",
    230: "高次元の存在",
    240: "創造主の助手",
    250: "全知全能の科学者",
    260: "神のサイコロを振る者",
    270: "宇宙の設計図を描く者",
    280: "無限の知性",
    290: "終焉と再生の観測者",
    300: "物理学の神"
};

function getGlobalTitle(totalLevel) {
    // Round down to nearest 10
    const tens = Math.floor(totalLevel / 10) * 10;
    // Find closest available below or equal
    let title = GLOBAL_TITLES[0];
    const keys = Object.keys(GLOBAL_TITLES).map(Number).sort((a, b) => a - b);
    for (let k of keys) {
        if (totalLevel >= k) {
            title = GLOBAL_TITLES[k];
        } else {
            break;
        }
    }
    return title;
}

function getTotalLevel(stats) {
    let sum = 0;
    // Calculate level for each part in partPoints
    // But we also need to account for parts with 0 points (Lv.1).
    // Summing levels: Lv.1 counts as 1.
    // We should iterate over ALL_CATEGORIES if available to ensure we count "Lv.1" for unplayed parts?
    // Or just sum played parts?
    // "Total of Part Levels". Usually implies Base Lv.1 exists for all.
    // But if we only have partPoints, we miss unplayed ones.
    // Let's iterate `CATEGORIES` if defined.

    if (typeof CATEGORIES !== 'undefined') {
        CATEGORIES.forEach(part => {
            const pts = (stats.partPoints && stats.partPoints[part.id]) || 0;
            sum += calculateLevel(pts);
        });
    } else {
        // Fallback if CATEGORIES not ready (should not happen in main flow)
        Object.values(stats.partPoints || {}).forEach(pts => {
            sum += calculateLevel(pts);
        });
    }

    // If sum is 0 (no categories loaded?), return at least 1?
    // If sum is 0 (no categories loaded?), return 0
    return sum;
}

// Helper to get stats
function getUserStats() {
    return JSON.parse(localStorage.getItem('phy_quiz_user_stats') || '{"totalPoints": 0, "partPoints": {}}');
}

function saveUserStats(stats) {
    localStorage.setItem('phy_quiz_user_stats', JSON.stringify(stats));
}

// index.html top display
function updateLevelDisplay() {
    const stats = getUserStats();

    // Total Level Logic
    // Total Level is sum of PART LEVELS.
    // Total Points is just a sum of points, used for legacy? Or global calc?
    // User requested: "Display sum of part levels".

    let totalLvl = getTotalLevel(stats);
    let title = getGlobalTitle(totalLvl);

    const rankEl = document.getElementById('rank-display');
    if (rankEl) {
        rankEl.innerHTML = `総合レベル: ${totalLvl}<br>【${title}】`;
        rankEl.style.background = '#e3f2fd'; // Light blue
        rankEl.style.color = '#0d47a1';
        rankEl.style.fontWeight = 'bold';
        rankEl.style.textAlign = 'center'; // Ensure center alignment
    }
}

function setupIndexPage() {
    updateLevelDisplay();

    // --- Bonus Timer Loop ---
    const bonusContainer = document.getElementById('bonus-timer-area');
    if (bonusContainer) {
        const stats = getUserStats(); // Load stats
        const expires = stats.bonusExpires || {};
        const streaks = stats.streaks || {};

        const activeDiffs = Object.keys(expires).filter(diff => {
            const exp = expires[diff];
            const str = streaks[diff] || 0;
            return (exp > Date.now() && str > 0); // Only show if active and valid
        });

        if (activeDiffs.length > 0) {
            bonusContainer.classList.remove('hidden');

            const updateTimers = () => {
                const now = Date.now();
                bonusContainer.innerHTML = ''; // Re-render simple usage

                let hasActive = false;
                activeDiffs.forEach(diff => {
                    const diffExp = expires[diff];
                    const left = diffExp - now;

                    if (left > 0) {
                        hasActive = true;
                        const hrs = Math.floor(left / (1000 * 60 * 60));
                        const mins = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));

                        const badge = document.createElement('div');
                        badge.className = 'bonus-timer-item';
                        badge.innerHTML = `🔥 難易度${diff} ボーナス: 残り ${hrs}時間${mins}分`;
                        bonusContainer.appendChild(badge);
                    }
                });

                // If all expired during wait, hide
                if (!hasActive) bonusContainer.classList.add('hidden');
            };

            updateTimers(); // Initial
            setInterval(updateTimers, 60000); // Update every minute
        } else {
            bonusContainer.classList.add('hidden');
        }
    }
    // ------------------------

    const partContainer = document.getElementById('part-container');
    const chapterContainer = document.getElementById('chapter-container');
    const stepChapter = document.getElementById('step-chapter');
    const stepDifficulty = document.getElementById('step-difficulty');
    const startBtn = document.getElementById('start-btn');

    let selectedCategory = null;

    // Render Parts
    // Updated Part Selection Renderer
    if (typeof CATEGORIES !== 'undefined') {
        CATEGORIES.forEach((part, index) => {
            const btn = document.createElement('button');
            btn.className = 'grid-btn';

            // Title
            const titleSpan = document.createElement('span');
            titleSpan.className = 'btn-title';
            titleSpan.textContent = part.title;

            // Stats Info (Level/Points)
            const stats = getUserStats();
            const partPts = (stats.partPoints && stats.partPoints[part.id]) || 0;
            const partLvl = calculateLevel(partPts);

            // Calculate Progress
            // Internal Level = partLvl (Since Level starts from 0)
            const currentInternalL = partLvl;
            const prevThreshold = getThresholdPoints(currentInternalL);
            const nextThreshold = getThresholdPoints(currentInternalL + 1);

            let progressPercent = 0;
            if (nextThreshold > prevThreshold) {
                progressPercent = ((partPts - prevThreshold) / (nextThreshold - prevThreshold)) * 100;
            }
            if (progressPercent > 100) progressPercent = 100;

            // Container for Level Info
            const levelInfo = document.createElement('div');
            levelInfo.className = 'level-info-container';

            // Level Text
            const levelText = document.createElement('div');
            levelText.className = 'level-text';
            levelText.textContent = `Lv.${partLvl}`;

            // Progress Bar
            const progBar = document.createElement('div');
            progBar.className = 'level-progress-bar';

            const progFill = document.createElement('div');
            progFill.className = `level-progress-fill level-progress-fill-${index % 6}`;
            progFill.style.width = `${progressPercent}%`;

            progBar.appendChild(progFill);
            levelInfo.appendChild(levelText);
            levelInfo.appendChild(progBar);

            btn.appendChild(titleSpan);
            btn.appendChild(levelInfo);

            btn.onclick = () => selectPart(part, btn);
            partContainer.appendChild(btn);
        });
    }

    // Part Selection Logic
    function selectPart(part, btnElement) {
        // Highlight logic
        Array.from(partContainer.children).forEach(b => b.classList.remove('selected'));
        btnElement.classList.add('selected');

        // Reset lower steps
        chapterContainer.innerHTML = '';
        stepChapter.classList.remove('hidden');
        stepChapter.style.opacity = '1'; // Ensure opacity is set (CSS transition uses opacity)
        chapterContainer.style.display = 'grid'; // Ensure grid

        // Auto-scroll to Middle Field (Chapter)
        setTimeout(() => {
            stepChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        stepDifficulty.classList.add('hidden');
        startBtn.classList.add('hidden');
        selectedCategory = null;
        selectedDifficulty = null; // Global variable

        // Render Chapters
        part.chapters.forEach(chap => {
            const cBtn = document.createElement('button');
            cBtn.className = 'grid-btn';
            cBtn.textContent = chap.title;
            cBtn.onclick = () => selectChapter(chap.id, cBtn);
            chapterContainer.appendChild(cBtn);
        });
    }

    function selectChapter(chapId, btnElement) {
        Array.from(chapterContainer.children).forEach(b => b.classList.remove('selected'));
        btnElement.classList.add('selected');

        selectedCategory = chapId;
        stepDifficulty.classList.remove('hidden');
        stepDifficulty.style.opacity = '1';

        // Auto-scroll to Bottom Field (Difficulty)
        setTimeout(() => {
            stepDifficulty.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        // Reset difficulty selection visual
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
        startBtn.classList.add('hidden');
    }

    // Global function for onclick in HTML (overwriting previous definition)
    window.selectDifficulty = (diff) => {
        if (!selectedCategory) return;

        selectedDifficulty = diff;
        document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.diff === diff) {
                btn.classList.add('selected');
            }
        });

        // Finalize
        startBtn.disabled = false;
        startBtn.classList.remove('hidden');
        startBtn.textContent = `クイズを始める`;
    };

    startBtn.addEventListener('click', () => {
        if (!selectedCategory || !selectedDifficulty) return;
        window.location.href = `quiz.html?category=${selectedCategory}&difficulty=${selectedDifficulty}`;
    });

    // Reset Button Logic
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('【注意】\nこれまでの学習データ（レベル・ポイント）を全て消去してもよろしいですか？\nこの操作は元に戻せません。')) {
                localStorage.removeItem('phy_quiz_user_stats');
                alert('データをリセットしました。');
                location.reload();
            }
        });
    }
}

// Google Apps Script API URL (Paste your URL here)
// Google Apps Script API URL (Paste your URL here)
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbwSvDtyroCdktH5KV4SLwi3ef6IDqzisjAWz4jaSnekrDKGjvjxM2z_Ef94pm9ezdzQrg/exec";

async function setupQuizPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const difficulty = urlParams.get('difficulty');

    if (!category || !difficulty) {
        alert('設定が読み込めませんでした。トップに戻ります。');
        window.location.href = 'index.html';
        return;
    }

    try {
        let allQuestions = [];
        let loadedFrom = 'local';
        let partTitle = null;

        // Verify GAS URL and identify Part Title for Sheet Name
        if (GAS_API_URL && typeof CATEGORIES !== 'undefined') {
            for (const p of CATEGORIES) {
                if (p.chapters.some(c => c.id === category)) {
                    partTitle = p.title; // e.g., "第1編 力と運動"
                    break;
                }
            }
        }

        // Determine Part to load based on category
        // category format: "p1_c1" -> "part1", file: "p1.js"
        let partId = 'part1'; // Default
        let fileName = 'p1.js';

        if (category) {
            const match = category.match(/^(p\d+)_/);
            if (match) {
                const pCode = match[1]; // e.g., "p2"
                fileName = `${pCode}.js`;
                partId = `part${pCode.substring(1)}`; // e.g., "part2"
            }
        }

        // Helper for Dynamic Script Loading (JSONP-style)
        if (!window.loadQuizData) {
            window.loadQuizData = function (pid, data) {
                console.log(`Loaded ${pid}: ${data.length} questions`);
                if (window.onQuizDataLoaded) {
                    window.onQuizDataLoaded(data);
                }
            };
        }

        try {
            allQuestions = await new Promise((resolve, reject) => {
                window.onQuizDataLoaded = resolve;

                const script = document.createElement('script');
                script.src = `data/${fileName}`;
                script.onerror = () => reject(new Error(`Failed to load data/${fileName}`));
                document.body.appendChild(script);
            });
            loadedFrom = `Split Load (${partId})`;
        } catch (e) {
            console.error(e);
            // Fallback to QUESTIONS if available
            if (typeof QUESTIONS !== 'undefined') {
                allQuestions = QUESTIONS;
                loadedFrom = 'Local Variable (Fallback)';
            } else {
                alert('データの読み込みに失敗しました。\n' + e.message);
                window.location.href = 'index.html';
                return;
            }
        }

        console.log(`Questions loaded from: ${loadedFrom}`);

        // 3. Data Sanitization & Normalization
        allQuestions = allQuestions.map(q => {
            // Ensure options is an array
            if (typeof q.options === 'string') {
                // Remove brackets if present (e.g. "[opt1, opt2]") just in case
                let cleanOpts = q.options.replace(/^\[|\]$/g, '');
                q.options = cleanOpts.split(',').map(s => s.trim()).filter(s => s !== '');
            } else if (!Array.isArray(q.options)) {
                q.options = [];
            }

            // Filter out empty strings and placeholders from existing arrays
            if (Array.isArray(q.options)) {
                q.options = q.options.map(s => String(s).trim()).filter(s => s !== '' && s !== '_');
            }

            // Ensure answer is a number
            if (typeof q.answer !== 'number') {
                q.answer = parseInt(q.answer, 10);
            }
            if (isNaN(q.answer)) q.answer = 0;

            return q;
        }).filter(q => q.question && q.options.length > 0); // Filter out broken data

        const filteredQuestions = allQuestions.filter(q => {
            // Basic filtering
            const catMatch = category === 'all' ? true : q.category === category;
            const diffMatch = q.difficulty === difficulty;
            return catMatch && diffMatch;
        });

        if (filteredQuestions.length === 0) {
            alert('該当する問題がありませんでした。\nスプレッドシートのデータ形式を確認してください。');
            window.location.href = 'index.html';
            return;
        }

        // Create a pool of valid candidates
        const candidates = shuffleArray(filteredQuestions);

        // Select 5 questions with unique classification
        const questions = [];
        const usedClassifications = new Set();

        for (const q of candidates) {
            if (questions.length >= 5) break;

            // If classification is present, ensure uniqueness
            if (q.classification) {
                if (usedClassifications.has(q.classification)) {
                    continue; // Skip duplicate classification
                }
                usedClassifications.add(q.classification);
            }
            questions.push(q);
        }

        // If we have fewer than 5 (and there are candidates left that were skipped), 
        // fallback to fill up to 5? 
        // User said "Ensure different numbers". 
        // If filtering results in < 5 questions, the current behavior is just to show fewer questions or what?
        // Let's just use what we have.

        startQuiz(questions, difficulty);

    } catch (error) {
        console.error('Failed to load questions:', error);
        document.getElementById('question-text').textContent = '問題の読み込みに失敗しました。\n' + error.message;
        document.getElementById('question-image').src = ''; // Clear image
        document.getElementById('image-container').classList.add('hidden');
        document.getElementById('options-container').innerHTML = ''; // Clear options so they don't look weird
    }
}

// ... (Only showing changed parts)

function startQuiz(questions, difficulty) {
    let currentQuestionIndex = 0;
    let score = 0;
    let sessionPoints = 0;

    // ... (In startQuiz) ...
    // --- Bonus System Setup ---
    const stats = getUserStats(); // Load stats at start

    // Ensure streaks/expires object exists
    if (!stats.streaks) stats.streaks = { A: 0, B: 0, C: 0 };
    if (!stats.bonusExpires) stats.bonusExpires = { A: 0, B: 0, C: 0 };

    const currentDiff = difficulty || 'A';

    // Check Expiration
    const now = Date.now();
    const expiry = stats.bonusExpires[currentDiff] || 0;

    if (now > expiry && stats.streaks[currentDiff] > 0) {
        // Expired!
        stats.streaks[currentDiff] = 0;
        stats.bonusExpires[currentDiff] = 0;
        saveUserStats(stats); // Save reset
        // Notify user? Maybe just show 0 streak.
    }

    const streak = stats.streaks[currentDiff] || 0;

    // Cap streak at 10 for calculation (Max 200%)
    const effectiveN = Math.min(streak, 10);
    const bonusMultiplier = 1 + (0.1 * effectiveN);




    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const qNumberSpan = document.getElementById('q-number');
    const progressBar = document.getElementById('progress');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackMsg = document.getElementById('feedback-msg');
    const explanationText = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('next-btn');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    // Display Bonus Indicator if active
    const headerH1 = document.querySelector('header h1');
    // Clean up previous bonus indicators if any
    const oldInd = document.getElementById('bonus-indicator');
    if (oldInd) oldInd.remove();

    if (streak > 0) {
        const ind = document.createElement('div');
        ind.id = 'bonus-indicator';
        ind.className = 'bonus-badge pop-in'; // Add css later
        ind.textContent = `🔥 連続ボーナス適用中 (x${bonusMultiplier.toFixed(1)})`;
        ind.style.fontSize = '0.8rem';
        ind.style.color = '#ff6b6b';
        ind.style.fontWeight = 'bold';
        headerH1.appendChild(ind);
    }

    let currentSelectedBtn = null;
    let currentSelectedIndex = null;
    const checkBtn = document.getElementById('check-btn');

    checkBtn.onclick = () => {
        if (currentSelectedIndex === null) return;
        const q = questions[currentQuestionIndex];
        checkAnswer(currentSelectedIndex, q.answer, q.explanation, q.difficulty, currentSelectedBtn);
        checkBtn.classList.add('hidden');
    };


    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResult();
            return;
        }

        const q = questions[currentQuestionIndex];
        qNumberSpan.textContent = currentQuestionIndex + 1;
        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // const idDisplay = `[ID:${q.id || '-'} A:${q.answer}] `; // Debug
        questionText.textContent = q.question;

        // ... (Image handling same) ...
        try {
            const imgContainer = document.getElementById('image-container');
            const qImage = document.getElementById('question-image');
            if (q.image_url && q.image_url.trim() !== '') {
                qImage.src = q.image_url;
                imgContainer.classList.remove('hidden');
            } else {
                imgContainer.classList.add('hidden');
                qImage.src = '';
            }
        } catch (e) {
            console.error('Image display error:', e);
        }

        optionsContainer.innerHTML = '';
        feedbackArea.classList.add('hidden');
        checkBtn.classList.add('hidden');
        currentSelectedBtn = null;
        currentSelectedIndex = null;

        // Create an array of option objects with original indices
        let displayOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));

        // Randomize ONLY if it is a 'choice' type (keep OX fixed)
        // Default to randomized if type is undefined, but usually we check q.type
        if (q.type === 'choice') {
            displayOptions = shuffleArray(displayOptions);
        }

        displayOptions.forEach((optObj) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optObj.text;
            
            btn.onclick = () => {
                // Remove selected from others
                optionsContainer.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                currentSelectedBtn = btn;
                currentSelectedIndex = optObj.originalIndex;
                checkBtn.classList.remove('hidden');
            };
            optionsContainer.appendChild(btn);
        });

        // ... (Math rendering same) ...
        const renderMath = () => {
            if (window.renderMathInElement) {
                try {
                    const quizContainer = document.getElementById('quiz-container');
                    renderMathInElement(quizContainer, {
                        delimiters: [
                            { left: "$$", right: "$$", display: true },
                            { left: "\\[", right: "\\]", display: true },
                            { left: "\\(", right: "\\)", display: false },
                            { left: "$", right: "$", display: false }
                        ],
                        throwOnError: false
                    });
                } catch (e) {
                    console.error('KaTeX rendering error:', e);
                }
            }
        };

        if (window.renderMathInElement) {
            renderMath();
        } else {
            console.warn('KaTeX not loaded yet. Retrying in 500ms...');
            setTimeout(renderMath, 500);
        }
    }

    function checkAnswer(selectedIndex, correctIndex, explanation, difficulty, selectedBtn) {
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true); // Disable all

        if (selectedIndex === correctIndex) {
            score++;
            const basePts = getPointsForDifficulty(difficulty);

            // Apply Multiplier
            const finalPts = Math.round(basePts * bonusMultiplier);
            sessionPoints += finalPts;

            selectedBtn.classList.add('correct');

            let msg = `正解！ (+${finalPts} Pt)`;
            if (streak > 0) msg += ` [x${bonusMultiplier.toFixed(1)}]`;

            feedbackMsg.textContent = msg;
            feedbackMsg.style.color = '#155724';
        } else {
            selectedBtn.classList.add('wrong');
            // Safety check: ensure correct button exists
            if (buttons[correctIndex]) {
                buttons[correctIndex].classList.add('correct');
            }
            feedbackMsg.textContent = '残念！';
            feedbackMsg.style.color = '#721c24';
        }

        // ... (Explanation rendering remains same)
        explanationText.textContent = explanation;
        feedbackArea.classList.remove('hidden');

        // Auto-scroll to Next Button
        setTimeout(() => {
            nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        if (window.renderMathInElement) {
            try {
                renderMathInElement(explanationText, {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "\\(", right: "\\)", display: false },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            } catch (e) {
                console.error('KaTeX explanation rendering error:', e);
            }
        }
    }

    // ... (Next Button remains same) ...
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        showQuestion();
    };


    function showResult() {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // --- 1. Populate Basic Score ---
        document.getElementById('final-score').textContent = score;

        const commentEl = document.getElementById('result-comment');
        let comment = '';
        if (score === 5) {
            comment = '全問正解！完璧です！';
            commentEl.style.color = '#ff6b6b';
        } else if (score >= 4) {
            comment = 'おしい！あと少し！';
            commentEl.style.color = '#ffa502';
        } else if (score >= 2) {
            comment = 'もう少し！復習しよう';
            commentEl.style.color = '#333';
        } else {
            comment = 'ドンマイ！次は頑張ろう';
            commentEl.style.color = '#666';
        }
        commentEl.textContent = comment;


        // --- 2. Stats & Level Logic ---

        let partId = null;
        let partTitle = "学習"; // Default
        const currentCategory = new URLSearchParams(window.location.search).get('category');

        if (typeof CATEGORIES !== 'undefined' && currentCategory) {
            for (const p of CATEGORIES) {
                if (p.chapters.some(c => c.id === currentCategory)) {
                    partId = p.id;
                    partTitle = p.title;
                    break;
                }
            }
        }

        const accuracy = (score / questions.length);
        let streakMsg = '';

        // Ensure stats objects exist
        if (!stats.streaks) stats.streaks = { A: 0, B: 0, C: 0 };
        if (!stats.bonusExpires) stats.bonusExpires = { A: 0, B: 0, C: 0 };

        const currentDiff = difficulty || 'A';
        const currentStreak = stats.streaks[currentDiff] || 0;

        if (accuracy >= 0.8) { // 80% or more
            stats.streaks[currentDiff] = currentStreak + 1;

            // UPDATE EXPIRATION (24 hours from now)
            stats.bonusExpires[currentDiff] = Date.now() + (24 * 60 * 60 * 1000);

            const newStreak = stats.streaks[currentDiff];
            const nextN = Math.min(newStreak, 10);
            const nextMult = 1 + (0.1 * nextN);
            streakMsg = `\n🔥 **好調！(難易度${currentDiff})** 連続${newStreak}回\n次回ボーナス: **${Math.round(nextMult * 100)}%**\n(有効期限: 24時間)`;
        } else {
            if (currentStreak > 0) {
                streakMsg = `\n💨 **難易度${currentDiff}の連続記録終了**`;
            }
            stats.streaks[currentDiff] = 0;
            stats.bonusExpires[currentDiff] = 0;
        }

        // Update DOM for Streak
        const streakDisplay = document.getElementById('streak-display');
        streakDisplay.textContent = stats.streaks[currentDiff] + ' 回';
        if (stats.streaks[currentDiff] > 0) {
            streakDisplay.innerHTML += ' <span style="color:#ff6b6b">🔥</span>';
        }


        // --- Points & Level Update ---
        let pointsMsg = `+${sessionPoints} Pt`;
        if (streak > 0) pointsMsg += ` (x${bonusMultiplier.toFixed(1)})`; // 'streak' var from closure is OLD streak
        // Wait, 'streak' defined in startQuiz is the one at START. Correct for display.

        document.getElementById('earned-points').textContent = pointsMsg;


        let messages = [];

        if (sessionPoints > 0 && partId) {
            const oldPartPts = (stats.partPoints && stats.partPoints[partId]) || 0;
            const oldPartLvl = calculateLevel(oldPartPts);

            // Calc New
            const newTotalPts = oldPartPts + sessionPoints;
            stats.partPoints = stats.partPoints || {};
            stats.partPoints[partId] = newTotalPts;

            saveUserStats(stats); // Save Everything

            const newPartLvl = calculateLevel(newTotalPts);

            // --- Level Progress Bar Logic ---
            const lvlSection = document.getElementById('level-result-section');
            lvlSection.classList.remove('hidden');

            document.getElementById('part-name-result').textContent = partTitle;
            document.getElementById('level-tag-result').textContent = `Lv.${newPartLvl}`;

            // Calculate Progress
            // Thresholds: Start of Current Lvl -> Start of Next Lvl
            const currentLvlThresh = getThresholdPoints(newPartLvl); // Points needed for Current Lvl
            const nextLvlThresh = getThresholdPoints(newPartLvl + 1); // Points needed for Next

            // Pts within this level
            const ptsInLevel = newTotalPts - currentLvlThresh;
            const ptsNeededForNext = nextLvlThresh - newTotalPts;
            const range = nextLvlThresh - currentLvlThresh;

            const progress = range > 0 ? (ptsInLevel / range) * 100 : 100;

            setTimeout(() => {
                document.getElementById('xp-bar-fill').style.width = `${progress}%`;
            }, 300); // Animation delay

            document.getElementById('next-xp').textContent = ptsNeededForNext;


            // --- Messages ---
            if (newPartLvl > oldPartLvl) {
                messages.push(`🎉 **${partTitle} LvUP!** 🎉\nLv.${oldPartLvl} ➡ Lv.${newPartLvl}`);
            }

            // Streak Bonus Info
            if (streakMsg) {
                messages.push(streakMsg);
            }

            // Title Check logic omitted for brevity/safety unless crucial? 
            // It's nice to keep.
            // (Simplified for this complexity)

        } else {
            // Non-part specific
            document.getElementById('level-result-section').classList.add('hidden');
        }

        // Render Special Messages
        const msgContainer = document.getElementById('special-messages');
        msgContainer.innerHTML = messages.map(m => `<div>${m}</div>`).join('');
    }

    // Initial call
    showQuestion();
}

// Function to Randomly Select Questions with Unique Classification
function getRandomQuestions(allQuestions, count, partId, chapterId, difficulty) {
    if (!allQuestions) return [];

    // Filter relevant questions
    let candidates = allQuestions.filter(q => {
        // Match Part (Check logic: does question have category matching part/chapter?)
        // Currently questions have 'category' which matches chapterId usually (e.g. p1_c1).
        // partId is broader.
        // We usually filter by 'category' if chapterId is present?
        // Wait, looking at current script.js usage (I need to see how it was before).
        // Let's assume the filtering logic is mostly correct in existing code, simply adding classification check.

        let match = true;

        // Difficulty check
        if (difficulty && q.difficulty !== difficulty) match = false;

        // Chapter check (strict)
        if (chapterId && q.category !== chapterId) match = false;

        // Part check (if no chapter selected, allow any chapter within part?)
        // This logic depends on how 'category' is defined in questions.
        // Assuming 'category' === chapterId.

        return match;
    });

    if (candidates.length < count) {
        console.warn('Not enough questions found for strict criteria. Returning all candidates.');
        return candidates; // Or shuffle?
    }

    // Shuffle candidates
    for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    // Select unique by classification
    const selected = [];
    const usedClassifications = new Set();

    for (const q of candidates) {
        if (selected.length >= count) break;

        if (q.classification) {
            if (usedClassifications.has(q.classification)) {
                continue; // Skip duplicate classification
            }
            usedClassifications.add(q.classification);
        }

        selected.push(q);
    }

    // If we didn't get enough questions due to classification constraints, 
    // should we fill up with duplicates? The user said "ensure different".
    // I will return what we found. If it's less than 5, so be it?
    // Or maybe loop again and allow duplicates if we really need to?
    // Request says: "Ensure... different". Implicit strictness.

    return selected;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

