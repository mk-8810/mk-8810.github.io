<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ねむねむのへや</title>
    <style>
        body {
            background-color: #fff0f5; /* 淡いピンク */
            color: #6c5b7b;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            text-align: center;
            padding: 50px 20px;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .card {
            background: white;
            padding: 40px;
            border-radius: 30px;
            box-shadow: 0 10px 25px rgba(255, 182, 193, 0.4);
            max-width: 400px;
            width: 100%;
        }

        .icon {
            font-size: 60px;
            margin-bottom: 10px;
            animation: float 3s ease-in-out infinite;
        }

        h1 {
            font-size: 24px;
            color: #ff8b94;
            margin-bottom: 15px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 25px;
        }

        .btn {
            background-color: #ffb7b2;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 16px;
            border-radius: 50px;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(255, 183, 178, 0.5);
        }

        .btn:hover {
            background-color: #ff9aa2;
            transform: scale(1.05);
        }

        /* ふわふわ浮くアニメーション */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>
</head>
<body>

    <div class="card">
        <div class="icon">🐰💤</div>
        <h1>きょうもおつかれさま</h1>
        <p>
            まぶたが重たくなってきましたね。<br>
            画面を閉じて、あたたかいお布団で<br>
            ゆっくりぐっすり眠りましょう……。
        </p>
        <button class="btn" onclick="alert('おやすみなさい！いい夢を…✨')">お布団へいく</button>
    </div>

</body>
</html>
