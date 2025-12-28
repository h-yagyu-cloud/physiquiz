
// State
let questionsList = [];

document.addEventListener('DOMContentLoaded', () => {
    initForm();
    setupEventListeners();
});

function initForm() {
    // Populate Parts
    const partSelect = document.getElementById('part-select');
    const chapterSelect = document.getElementById('chapter-select');

    if (typeof CATEGORIES !== 'undefined') {
        CATEGORIES.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat.id;
            opt.textContent = cat.title;
            partSelect.appendChild(opt);
        });

        // Initial Chapter Population
        updateChapters();
    }
}

function updateChapters() {
    const partSelect = document.getElementById('part-select');
    const chapterSelect = document.getElementById('chapter-select');
    const partId = partSelect.value;

    chapterSelect.innerHTML = '';

    const part = CATEGORIES.find(c => c.id === partId);
    if (part) {
        part.chapters.forEach(chap => {
            const opt = document.createElement('option');
            opt.value = chap.id;
            opt.textContent = chap.title;
            chapterSelect.appendChild(opt);
        });
    }
}

function setupEventListeners() {
    document.getElementById('part-select').addEventListener('change', updateChapters);

    // Type Toggle
    document.querySelectorAll('input[name="q-type"]').forEach(radio => {
        radio.addEventListener('change', toggleType);
    });

    // Live Preview Events
    const inputs = ['question-text', 'image-url', 'opt-0', 'opt-1', 'opt-2', 'opt-3', 'explanation-text'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', renderPreview);
    });
    document.querySelectorAll('input[name="correct-ans"]').forEach(radio => {
        radio.addEventListener('change', renderPreview);
    });

    // Buttons
    document.getElementById('add-btn').addEventListener('click', addToList);
    document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
    document.getElementById('json-btn').addEventListener('click', logJson);
    document.getElementById('clear-btn').addEventListener('click', () => {
        if (confirm('リストを全て削除しますか？')) {
            questionsList = [];
            renderList();
        }
    });

    // Handle Tab key in Textarea to facilitate input? No, standard behavior is fine.
}

function toggleType() {
    const type = document.querySelector('input[name="q-type"]:checked').value;
    const row2 = document.getElementById('row-2');
    const row3 = document.getElementById('row-3');
    const opt0 = document.getElementById('opt-0');
    const opt1 = document.getElementById('opt-1');

    if (type === 'ox') {
        row2.style.display = 'none';
        row3.style.display = 'none';
        // Preset O/X
        if (opt0.value === '') opt0.value = '〇';
        if (opt1.value === '') opt1.value = '×';

        // If correct answer was 2 or 3, reset to 0
        const correct = document.querySelector('input[name="correct-ans"]:checked');
        if (correct && correct.value >= 2) {
            document.querySelector('input[name="correct-ans"][value="0"]').checked = true;
        }
    } else {
        row2.style.display = 'flex';
        row3.style.display = 'flex';
        // Maybe clear O/X only if they perfectly match?
        if (opt0.value === '〇') opt0.value = '';
        if (opt1.value === '×') opt1.value = '';
    }
    renderPreview();
}

function renderPreview() {
    const qText = document.getElementById('question-text').value;
    const imgUrl = document.getElementById('image-url').value;

    // Render Q
    const previewQ = document.getElementById('preview-q');
    previewQ.textContent = qText || '(問題文)';

    // Render Img
    const previewImgContainer = document.getElementById('preview-img');
    const previewImg = previewImgContainer.querySelector('img');
    if (imgUrl.trim()) {
        previewImg.src = imgUrl;
        previewImgContainer.classList.remove('hidden');
    } else {
        previewImgContainer.classList.add('hidden');
    }

    // Render Opts
    // Render Opts
    const previewOpts = document.getElementById('preview-opts');
    previewOpts.innerHTML = '';

    const correctVal = document.querySelector('input[name="correct-ans"]:checked').value;
    const type = document.querySelector('input[name="q-type"]:checked') ? document.querySelector('input[name="q-type"]:checked').value : '4ch';
    const maxIndex = (type === 'ox') ? 1 : 3;

    [0, 1, 2, 3].forEach(i => {
        if (i > maxIndex) return; // Skip extra options if OX mode

        const val = document.getElementById(`opt-${i}`).value;
        if (val || i < 2) { // Show at least 2 or if has value
            const div = document.createElement('div');
            div.className = 'preview-opt' + (correctVal == i ? ' correct' : '');
            div.textContent = (val || `(選択肢${i + 1})`) + (correctVal == i ? ' [正解]' : '');
            previewOpts.appendChild(div);
        }
    });

    // Render Explanation
    const explText = document.getElementById('explanation-text').value;
    const previewExpl = document.getElementById('preview-explanation');
    if (explText.trim()) {
        previewExpl.textContent = `解説: ${explText}`;
        previewExpl.classList.remove('hidden');
    } else {
        previewExpl.classList.add('hidden');
    }

    // Apply KaTeX
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('preview-area'), {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false }
            ]
        });
    }
}

function addToList() {
    const partSelect = document.getElementById('part-select');
    const chapterSelect = document.getElementById('chapter-select');
    const difficulty = document.getElementById('difficulty-select').value;
    const qText = document.getElementById('question-text').value.trim();
    const imgUrl = document.getElementById('image-url').value.trim();
    const explanation = document.getElementById('explanation-text').value.trim();

    if (!qText) {
        alert('問題文を入力してください');
        return;
    }

    const options = [
        document.getElementById('opt-0').value.trim(),
        document.getElementById('opt-1').value.trim(),
        document.getElementById('opt-2').value.trim(),
        document.getElementById('opt-3').value.trim()
    ];

    // Filter empty options BUT keep index structure? 
    // Sheets usually expects 4 columns for opts. We should keep them, maybe use "_" for empty?
    // Or just empty string.

    const correctIndex = document.querySelector('input[name="correct-ans"]:checked').value;
    const rawType = document.querySelector('input[name="q-type"]:checked').value;
    const type = (rawType === '4ch') ? 'choice' : 'ox';
    const classification = document.getElementById('classification').value.trim() || '0';

    const newItem = {
        id: Date.now(), // Temp ID
        partId: partSelect.value,
        chapterId: chapterSelect.value,
        difficulty: difficulty,
        type: type,
        classification: classification,
        question: qText,
        imageUrl: imgUrl || '_', // Use _ for empty as per convention
        option1: options[0] || '_',
        option2: options[1] || '_',
        option3: options[2] || '_',
        option4: options[3] || '_',
        answer: correctIndex, // 0-3
        explanation: explanation || 'なし'
    };

    questionsList.push(newItem);
    renderList();

    // Flash effect or toast
    showToast('リストに追加しました');
}

function renderList() {
    const container = document.getElementById('questions-list');
    const countSpan = document.getElementById('list-count');

    container.innerHTML = '';
    countSpan.textContent = questionsList.length;

    questionsList.slice().reverse().forEach((item, idx) => { // Show newest first
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div class="list-item-header">
                <span>[${item.difficulty}] ${item.question.substring(0, 20)}...</span>
                <button class="sm-btn delete-btn" onclick="deleteItem(${item.id})">削除</button>
            </div>
            <div class="list-item-body">
                [${item.type}] Class:${item.classification} | ${item.chapterId} | 正解: ${item.answer}
            </div>
        `;
        container.appendChild(div);
    });
}

window.deleteItem = function (id) {
    questionsList = questionsList.filter(q => q.id !== id);
    renderList();
};

function copyToClipboard() {
    if (questionsList.length === 0) {
        alert('リストが空です');
        return;
    }

    // Generate TSV for Google Sheets
    // Columns: Difficulty, Question, ImageURL, Opt1, Opt2, Opt3, Opt4, Answer, Explanation, (Category/Chapter ignored as they are sheet-level usually?)
    // Note: The User pastes into specific sheet. So we don't need Category column usually.
    // Order based on common format:
    // Difficulty | Question | ImageURL | Opt1 | Opt2 | Opt3 | Opt4 | Answer | Explanation

    // Header for reference (not copied)
    // const header = "Difficulty\tQuestion\tImage\tOpt1\tOpt2\tOpt3\tOpt4\tAnswer\tExplanation";

    const lines = questionsList.map(q => {
        // Sanitize newlines in textual fields (excel cell within newline requires quotes, but simple TSV might break)
        // Simplest is to replace newlines with space or <br>?. 
        // For Sheets paste, usually double quotes wrapping works for newlines.

        const sanitize = (str) => {
            str = String(str);
            if (str.includes('\n') || str.includes('\t')) {
                return `"${str.replace(/"/g, '""')}"`; // CSV/TSV escaping
            }
            return str;
        };

        return [
            q.chapterId,      // Category (Col B)
            q.difficulty,     // (Col C)
            q.type,           // Type (Col D)
            q.classification, // Classification (Col E - NEW)
            sanitize(q.question), // (Col F)
            sanitize(q.option1),
            sanitize(q.option2),
            sanitize(q.option3),
            sanitize(q.option4),
            q.answer,
            sanitize(q.explanation),
            sanitize(q.imageUrl)
        ].join('\t');
    });

    const textToCopy = lines.join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('クリップボードにコピーしました！\nスプレッドシートに貼り付けてください');
    }).catch(err => {
        console.error(err);
        alert('コピーに失敗しました');
    });
}

function logJson() {
    console.log(JSON.stringify(questionsList, null, 2));
    showToast('コンソールにJSONを出力しました (F12)');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => {
        t.classList.add('hidden');
    }, 3000);
}
