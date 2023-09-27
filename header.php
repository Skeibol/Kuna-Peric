<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style-mobile.css">
    <link rel="stylesheet" href="css/style-tablet.css">
    <link rel="stylesheet" href="css/style-desktop.css">

</head>

<body>
    <nav class="navbar--container--mobile">
        <div class="navbar--mobile">
            <p>K&P</p>
            <img class="navbar--logo--mobile navbar--toggler" src="images/hamburger.png" alt="">
        </div>
        <div class="navbar--expand--mobile">
            <a href="">Prvi</a>
            <a href="">Drugi</a>
            <a href="">Treci</a>
        </div>
    </nav>
    <nav class="navbar--container--desktop">
        <div class="navbar--bg">
            <div class="navbar--top--desktop container--default navbar--padding">
                <div class="navbar--top--left">
                    <p>Ul. Crvenog križa 35, 10000 Zagreb</p>
                    <p>+385 01 4555 400</p>
                    <p>info@kunaperic.hr</p>
                </div>
                <div class="navbar--top--right">
                    <p>O nama</p>
                    <p>Novosti</p>
                    <p>Cjenik</p>
                    <p>Kontakt</p>
                </div>
            </div>
        </div>

        <div class="navbar--bottom--desktop container--default navbar--padding">
            <img src="images/logo.png" alt="" srcset="" class="navbar--logo--desktop">
            <p>Ginekologija i porodništvo</p>
            <p>Fizikalna medicina</p>
            <p>Oftamologija - Ultrazvučne pretrage</p>
            <p>Medicinsko-biokemijski laboratorij</p>
            <p>Nuklearna medicina</p>
        </div>

    </nav>

    <nav class="navbar--container--tablet">
        <div class="navbar--top--tablet">
            <div class="navbar--tablet--left">+385 01 4555 400</div>
            <div class="navbar--tablet--right">
                <p>O nama</p>
                <p>Novosti</p>
                <p>Cjenik</p>
                <p>Kontakt</p>
            </div>
        </div>
        <div class="navbar--bottom--tablet">
            <img src="images/logo.png" alt="" srcset="">
            <img class='navbar--toggler' src="images/plus.png" alt="" srcset="">
            
        </div>
        <div class="navbar--expand--tablet">
            <p>Prvi</p>
            <p>Prvi</p>
            <p>Prvi</p>
            <p>Prvi</p>
        </div>
    </nav>