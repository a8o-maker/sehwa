제가 직접 고객님의 깃허브(GitHub) 계정에 접근하여 코드를 푸시하거나 연동해 드릴 수 있는 권한이나 도구가 없기 때문에, 깃허브에 파일을 반영하는 과정은 직접 진행해 주셔야 합니다.
하지만 아주 간단하게 적용하실 수 있도록, 원하시는 "하늘(샌프란시스코)에서 시작해 아래로 갈수록 바다 속(부산/스노클링)으로 들어가는 감성"을 담아 완성한 최신 청첩장 전체 코드를 제공해 드립니다.
🛠️ 적용 방법 (1분 완료)
 * GitHub의 본인 저장소(a8o-maker/sehwa/gyusooandsehwa/book/)로 이동합니다.
 * index.html 파일을 엽니다.
 * 아래의 완성된 코드를 전체 복사하여 index.html 내용에 붙여넣기(Commit changes) 하시면, 바로 [https://a8o-maker.github.io/sehwa/gyusooandsehwa/book/](https://a8o-maker.github.io/sehwa/gyusooandsehwa/book/) 링크에 실시간으로 반영됩니다!
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>손규수 & 문세화 모바일 청첩장</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Gowun Batang & Montserrat -->
    <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'batang': ['"Gowun Batang"', 'serif'],
                        'sans': ['"Montserrat"', 'sans-serif'],
                    },
                    colors: {
                        skyDark: '#0a192f',
                        skyLight: '#1e3a8a',
                        seaDeep: '#022c22',
                        seaAqua: '#0d9488',
                        sand: '#fef3c7',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Gowun Batang', 'Montserrat', sans-serif;
            background-color: #050b14;
            color: #f8fafc;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #050b14;
        }
        ::-webkit-scrollbar-thumb {
            background: #0d9488;
            border-radius: 3px;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .sea-glass {
            background: rgba(2, 44, 34, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(13, 148, 136, 0.3);
        }
        @keyframes floatBubble {
            0% { transform: translateY(0px) scale(1); opacity: 0.3; }
            50% { transform: translateY(-300px) scale(1.2); opacity: 0.8; }
            100% { transform: translateY(-600px) scale(0.8); opacity: 0; }
        }
        .bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            pointer-events: none;
            animation: floatBubble 8s infinite linear;
        }
    </style>
</head>
<body class="relative selection:bg-teal-500 selection:text-white">

    <!-- BGM Audio Element -->
    <audio id="bgm" loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf756.mp3?filename=cinematic-time-lapse-115672.mp3" type="audio/mpeg">
    </audio>

    <!-- Floating BGM Toggle Button -->
    <div class="fixed top-5 right-5 z-50">
        <button id="bgm-btn" onclick="toggleBgm()" class="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white text-xs tracking-wider shadow-lg hover:bg-white/20 transition-all duration-300">
            <i id="bgm-icon" class="fa-solid fa-music animate-spin text-teal-300"></i>
            <span id="bgm-text">BGM ON</span>
        </button>
    </div>

    <!-- MAIN CONTAINER (Vertical Storyline: Sky -> Ocean) -->
    <main class="w-full max-w-md mx-auto relative shadow-2xl overflow-hidden">

        <!-- SECTION 1: SF SKY VIEW (San Francisco Aerial Shot Concept) -->
        <section class="relative min-h-screen flex flex-col justify-between items-center text-center px-6 py-16 bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#1e293b]">
            <!-- Aerial SF Skyline Background Glow -->
            <div class="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
            
            <div class="relative z-10 pt-8">
                <span class="text-xs uppercase tracking-[0.3em] text-indigo-300 font-sans">SF (USA) ✈️ BUSAN (KOREA)</span>
                <h1 class="text-3xl font-bold tracking-wider mt-3 text-white">손규수 & 문세화</h1>
                <p class="text-xs text-indigo-200 mt-2 font-light">하늘 위에서 내려다본 운명적인 만남</p>
            </div>

            <!-- Couple Aerial Card / Photo -->
            <div class="relative z-10 my-8 w-full max-w-xs">
                <div class="rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl border border-indigo-500/30 transform hover:scale-[1.02] transition duration-500">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Aerial View" class="w-full h-80 object-cover rounded-xl filter brightness-90 contrast-110">
                    <div class="absolute bottom-4 left-0 right-0 text-center">
                        <span class="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] tracking-widest text-indigo-200 border border-indigo-400/20">
                            SAN FRANCISCO SKYLINE
                        </span>
                    </div>
                </div>
            </div>

            <div class="relative z-10 pb-6">
                <p class="text-sm text-gray-300 leading-relaxed font-light">
                    샌프란시스코의 푸른 하늘 아래서 시작된 인연이<br>고향 부산의 바다에서 하나로 깊어집니다.
                </p>
                <div class="mt-6 animate-bounce text-indigo-400">
                    <i class="fa-solid fa-chevron-down text-lg"></i>
                </div>
            </div>
        </section>

        <!-- SECTION 2: INVITATION (Transitioning from Sky to Sea Depth) -->
        <section class="relative py-24 px-6 bg-gradient-to-b from-[#1e293b] via-[#0d233a] to-[#022c22] text-center">
            <div class="max-w-sm mx-auto glass-panel p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-teal-500/20">
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
                
                <span class="text-xs uppercase tracking-[0.3em] text-teal-300 font-sans">Invitation</span>
                <h2 class="text-2xl font-bold mt-3 mb-6 text-white">소중한 분들을 모십니다</h2>
                
                <p class="text-sm leading-loose text-gray-200 font-light mb-8">
                    기계공학적 완벽함과 다큐멘터리 같은 깊은 시선으로<br>
                    함께 걸어갈 인생의 오프닝 컷을 찍으려 합니다.<br><br>
                    두 사람이 손을 잡고 세상이라는 바다 속으로<br>
                    기쁘게 뛰어드는 첫 걸음에<br>
                    따뜻한 축복으로 함께해 주세요.
                </p>

                <!-- Parents Info -->
                <div class="space-y-3 text-sm border-t border-b border-white/10 py-6 text-gray-300">
                    <div class="flex justify-center items-center gap-2">
                        <span class="font-medium text-white">손영길 · 김정숙</span>
                        <span class="text-xs text-teal-400">의 아들</span>
                        <span class="font-semibold text-teal-200">규수</span>
                    </div>
                    <div class="flex justify-center items-center gap-2">
                        <span class="font-medium text-white">문재호 · 박순희</span>
                        <span class="text-xs text-teal-400">의 딸</span>
                        <span class="font-semibold text-teal-200">세화</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: UNDERWATER SNORKELING JOURNEY (Deep Sea Theme) -->
        <section class="relative min-h-screen py-24 px-6 bg-gradient-to-b from-[#022c22] via-[#043d31] to-[#01140e] text-center overflow-hidden">
            <!-- Bubble Effects -->
            <div class="bubble w-4 h-4 left-10 bottom-0" style="animation-duration: 7s;"></div>
            <div class="bubble w-6 h-6 left-1/2 bottom-0" style="animation-duration: 9s; animation-delay: 1s;"></div>
            <div class="bubble w-3 h-3 right-12 bottom-0" style="animation-duration: 6s; animation-delay: 2s;"></div>

            <div class="relative z-10">
                <span class="text-xs uppercase tracking-[0.3em] text-teal-300 font-sans">🌊 SNORKELING INTO FOREVER</span>
                <h2 class="text-2xl font-bold mt-3 mb-2 text-white">스노클링처럼 청량한 우리들의 바다</h2>
                <p class="text-xs text-teal-200/80 mb-10">아래로 스크롤할수록 투명하고 깊은 바다 속으로 빠져듭니다.</p>
            </div>

            <!-- Gallery Grid -->
            <div class="grid grid-cols-3 gap-3 relative z-10 mb-12">
                <div class="aspect-[3/4] rounded-xl overflow-hidden sea-glass p-1 border border-teal-500/30">
                    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80" alt="Snorkeling 1" class="w-full h-full object-cover rounded-lg filter brightness-95">
                </div>
                <div class="aspect-[3/4] rounded-xl overflow-hidden sea-glass p-1 border border-teal-500/30">
                    <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=500&q=80" alt="Snorkeling 2" class="w-full h-full object-cover rounded-lg filter brightness-95">
                </div>
                <div class="aspect-[3/4] rounded-xl overflow-hidden sea-glass p-1 border border-teal-500/30">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" alt="Snorkeling 3" class="w-full h-full object-cover rounded-lg filter brightness-95">
                </div>
            </div>

            <!-- Calendar & D-Day -->
            <div class="sea-glass p-6 rounded-3xl relative z-10 text-left mb-12 border border-teal-500/30 shadow-xl">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-teal-100"><i class="fa-regular fa-calendar-days mr-2 text-teal-400"></i> 2026년 10월</h3>
                    <span id="d-day" class="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full font-sans border border-teal-500/40">D-Day 계산중</span>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-300 mb-2 font-sans">
                    <span class="text-red-400">일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span class="text-blue-400">토</span>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-300 font-sans">
                    <span></span><span></span><span></span><span></span><span>1</span><span>2</span><span>3</span>
                    <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                    <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
                    <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
                    <span class="bg-teal-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mx-auto shadow-lg shadow-teal-500/50">25</span>
                    <span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span></span>
                </div>
                <div class="mt-4 pt-4 border-t border-teal-500/20 text-center text-xs text-teal-200 font-light">
                    2026년 10월 25일 일요일 낮 12시 30분
                </div>
            </div>

            <!-- Location & Map -->
            <div class="sea-glass p-6 rounded-3xl relative z-10 text-left mb-12 border border-teal-500/30 shadow-xl">
                <h3 class="text-lg font-bold text-teal-100 mb-3"><i class="fa-solid fa-location-dot mr-2 text-teal-400"></i> 오시는 길</h3>
                <p class="text-sm font-semibold text-white">양산 더 지펠리체 5층 팰리스홀</p>
                <p class="text-xs text-gray-300 mt-1 mb-4">경남 양산시 동면 남양산로 (지펠리체 웨딩)</p>
                
                <div class="w-full h-40 rounded-xl bg-teal-950/60 flex items-center justify-center border border-teal-500/20 mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80" alt="Map Preview" class="w-full h-full object-cover opacity-50">
                    <span class="absolute bg-teal-900/90 text-teal-200 px-4 py-2 rounded-lg text-xs font-medium border border-teal-500/40 shadow-lg">
                        📍 양산 더 지펠리체
                    </span>
                </div>

                <div class="grid grid-cols-3 gap-2">
                    <a href="https://naver.me/5x5x5x5x" target="_blank" class="py-2.5 bg-teal-600/80 hover:bg-teal-600 text-white rounded-xl text-center text-xs font-medium transition shadow-md">네이버 지도</a>
                    <a href="https://kakaomap.com" target="_blank" class="py-2.5 bg-yellow-500/90 hover:bg-yellow-500 text-gray-900 rounded-xl text-center text-xs font-semibold transition shadow-md">카카오내비</a>
                    <a href="https://tmap.co.kr" target="_blank" class="py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-xl text-center text-xs font-medium transition shadow-md">티맵</a>
                </div>
            </div>

            <!-- Account Number Section -->
            <div class="sea-glass p-6 rounded-3xl relative z-10 text-left mb-12 border border-teal-500/30 shadow-xl">
                <h3 class="text-lg font-bold text-teal-100 mb-4"><i class="fa-solid fa-wallet mr-2 text-teal-400"></i> 마음 전하실 곳</h3>
                
                <div class="space-y-4">
                    <div class="p-4 rounded-2xl bg-teal-950/50 border border-teal-500/20">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs text-teal-300 font-medium">신랑 측 계좌</span>
                            <button onclick="copyAccount('국민은행 123456-04-123456 (손규수)')" class="text-xs bg-teal-500/20 hover:bg-teal-500/40 text-teal-200 px-2.5 py-1 rounded-md transition border border-teal-500/30">
                                <i class="fa-regular fa-copy mr-1"></i> 복사하기
                            </button>
                        </div>
                        <p class="text-xs text-white font-sans">국민은행 123456-04-123456</p>
                        <p class="text-xs text-gray-300 mt-0.5">예금주: 손규수</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-teal-950/50 border border-teal-500/20">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs text-teal-300 font-medium">신부 측 계좌</span>
                            <button onclick="copyAccount('경남은행 789012-52-654321 (문세화)')" class="text-xs bg-teal-500/20 hover:bg-teal-500/40 text-teal-200 px-2.5 py-1 rounded-md transition border border-teal-500/30">
                                <i class="fa-regular fa-copy mr-1"></i> 복사하기
                            </button>
                        </div>
                        <p class="text-xs text-white font-sans">경남은행 789012-52-654321</p>
                        <p class="text-xs text-gray-300 mt-0.5">예금주: 문세화</p>
                    </div>
                </div>
            </div>

            <!-- Footer Share & Copyright -->
            <div class="relative z-10 pb-12 text-center">
                <button onclick="shareLink()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium text-sm shadow-lg shadow-teal-900/50 hover:brightness-110 transition flex items-center justify-center gap-2 mb-4">
                    <i class="fa-solid fa-share-nodes"></i> 청첩장 링크 공유하기
                </button>
                <p class="text-xs text-teal-300/60 font-sans tracking-widest mt-6">© 2026 GyuSoo & SeHwa Wedding</p>
            </div>
        </section>

    </main>

    <!-- JavaScript Interactions -->
    <script>
        // BGM Control
        let isPlaying = false;
        const bgm = document.getElementById('bgm');
        const bgmBtn = document.getElementById('bgm-btn');
        const bgmIcon = document.getElementById('bgm-icon');
        const bgmText = document.getElementById('bgm-text');

        function toggleBgm() {
            if (isPlaying) {
                bgm.pause();
                isPlaying = false;
                bgmIcon.className = "fa-solid fa-music text-gray-400";
                bgmText.innerText = "BGM OFF";
                bgmBtn.classList.remove('bg-teal-500/30');
            } else {
                bgm.play().then(() => {
                    isPlaying = true;
                    bgmIcon.className = "fa-solid fa-music animate-spin text-teal-300";
                    bgmText.innerText = "BGM ON";
                    bgmBtn.classList.add('bg-teal-500/30');
                }).catch(e => {
                    alert("브라우저 정책상 화면을 터치한 후 BGM을 켤 수 있습니다.");
                });
            }
        }

        // Auto try play on first user interaction
        document.body.addEventListener('click', function initAudio() {
            if (!isPlaying) {
                bgm.play().then(() => {
                    isPlaying = true;
                    bgmIcon.className = "fa-solid fa-music animate-spin text-teal-300";
                    bgmText.innerText = "BGM ON";
                }).catch(() => {});
            }
            document.body.removeEventListener('click', initAudio);
        }, { once: true });

        // D-Day Calculation
        const weddingDate = new Date('2026-10-25T12:30:00');
        const today = new Date();
        const diffTime = weddingDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const dDayElement = document.getElementById('d-day');
        if (diffDays > 0) {
            dDayElement.innerText = `D-${diffDays}`;
        } else if (diffDays === 0) {
            dDayElement.innerText = `D-Day 🎉`;
        } else {
            dDayElement.innerText = `D+${Math.abs(diffDays)}`;
        }

        // Copy Account
        function copyAccount(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('계좌번호가 복사되었습니다: ' + text);
            }).catch(err => {
                alert('복사에 실패했습니다.');
            });
        }

        // Share Link
        function shareLink() {
            if (navigator.share) {
                navigator.share({
                    title: '손규수 ❤ 문세화 모바일 청첩장',
                    text: '샌프란시스코와 부산, 하늘과 바다를 닮은 우리들의 결혼식에 초대합니다.',
                    url: window.location.href,
                }).catch(() => {});
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert('청첩장 링크가 클립보드에 복사되었습니다!');
            }
        }
    </script>
</body>
</html>

