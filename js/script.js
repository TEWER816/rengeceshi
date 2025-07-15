document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.querySelector('.options');
    const progress = document.getElementById('progress');

    // 测试状态
    let currentQuestion = 0;
    let answers = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    // 初始化测试
    function initTest() {
        currentQuestion = 0;
        answers = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        };
        showScreen(welcomeScreen);
    }

    // 显示指定屏幕
    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    // 显示问题
    function showQuestion() {
        const question = questions[currentQuestion];
        questionNumber.textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
        questionText.textContent = question.question;
        
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns[0].textContent = question.options.A;
        optionBtns[1].textContent = question.options.B;

        // 更新进度条
        progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    }

    // 处理答案
    function handleAnswer(answer) {
        const question = questions[currentQuestion];
        const [type1, type2] = question.type.split('-');
        
        if (answer === 'A') {
            answers[type1]++;
        } else {
            answers[type2]++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    // 计算性格类型
    function calculateType() {
        const type = [
            answers.E > answers.I ? 'E' : 'I',
            answers.S > answers.N ? 'S' : 'N',
            answers.T > answers.F ? 'T' : 'F',
            answers.J > answers.P ? 'J' : 'P'
        ].join('');
        
        return type;
    }

    // 显示结果
    function showResult() {
        showScreen(resultScreen);
        const type = calculateType();
        
        document.getElementById('personality-type').textContent = type;
        document.getElementById('personality-desc').textContent = personalityTypes[type].description;

        // 更新维度条
        updateDimensionBar('E', answers.E, answers.I);
        updateDimensionBar('S', answers.S, answers.N);
        updateDimensionBar('T', answers.T, answers.F);
        updateDimensionBar('J', answers.J, answers.P);
    }

    // 更新维度条
    function updateDimensionBar(dimension, value1, value2) {
        const total = value1 + value2;
        const percentage = (value1 / total) * 100;
        document.getElementById(`${dimension}-bar`).style.width = `${percentage}%`;
    }

    // 导出结果为图片
    async function exportResult() {
        const resultScreen = document.querySelector('#result-screen');
        
        // 创建临时容器用于导出
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '0';
        document.body.appendChild(tempContainer);
        
        // 复制内容到临时容器
        const clone = resultScreen.cloneNode(true);
        // 移除不需要的元素
        const elementsToRemove = clone.querySelectorAll('.action-buttons, .donate-section');
        elementsToRemove.forEach(el => el.remove());
        
        // 设置导出样式
        clone.style.background = 'white';
        clone.style.padding = '40px';
        clone.style.width = '800px';
        clone.style.borderRadius = '0';
        tempContainer.appendChild(clone);
        
        try {
            // 使用html2canvas生成图片
            const canvas = await html2canvas(clone, {
                scale: 2,
                backgroundColor: 'white',
                logging: false,
                useCORS: true
            });
            
            // 创建下载链接
            const link = document.createElement('a');
            link.download = 'MBTI测试结果.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('导出图片失败:', error);
            alert('导出图片失败，请稍后重试');
        } finally {
            // 清理临时容器
            document.body.removeChild(tempContainer);
        }
    }

    // 处理二维码图片点击
    function handleQRCodeClick(event) {
        if (event.target.classList.contains('qr-code')) {
            event.target.classList.toggle('enlarged');
        }
    }

    // 切换捐赠二维码显示
    function toggleDonateQR() {
        const qrCodes = document.getElementById('donate-qr');
        qrCodes.classList.toggle('active');
    }

    // 事件监听器
    startBtn.addEventListener('click', () => {
        showScreen(questionScreen);
        showQuestion();
    });

    restartBtn.addEventListener('click', () => {
        initTest();
    });

    optionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('option-btn')) {
            handleAnswer(e.target.dataset.value);
        }
    });

    document.getElementById('export-btn').addEventListener('click', exportResult);
    document.getElementById('donate-btn').addEventListener('click', toggleDonateQR);
    document.getElementById('donate-qr').addEventListener('click', handleQRCodeClick);

    // 初始化测试
    initTest();
});
