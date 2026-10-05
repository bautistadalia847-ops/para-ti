/* ======================================
   ELEMENTOS
====================================== */

const continueBtn =
    document.getElementById("continueBtn");

const finalMessage =
    document.getElementById("finalMessage");

const yesBtn =
    document.getElementById("yesBtn");

const maybeBtn =
    document.getElementById("maybeBtn");

const response =
    document.getElementById("response");

const heartsContainer =
    document.getElementById("hearts");

const starsContainer =
    document.getElementById("stars");


/* ======================================
   CREAR ESTRELLAS
====================================== */

function createStars() {

    for (let i = 0; i < 90; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.setProperty(
            "--duration",
            1 + Math.random() * 3 + "s"
        );

        star.style.animationDelay =
            Math.random() * 3 + "s";

        starsContainer.appendChild(star);
    }
}


/* ======================================
   CORAZONES FLOTANTES
====================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    const types = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "♡"
    ];

    heart.innerHTML =
        types[
            Math.floor(
                Math.random() *
                types.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.setProperty(
        "--size",
        15 + Math.random() * 30 + "px"
    );

    heart.style.setProperty(
        "--duration",
        5 + Math.random() * 7 + "s"
    );

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 13000);
}


/* ======================================
   MUCHOS CORAZONES
====================================== */

setInterval(
    createHeart,
    500
);


/* ======================================
   ABRIR SEGUNDO MENSAJE
====================================== */

continueBtn.addEventListener(
    "click",
    () => {

        finalMessage.classList.remove(
            "hidden"
        );

        continueBtn.style.display =
            "none";

        heartExplosion();

    }
);


/* ======================================
   RESPUESTA "SÍ"
====================================== */

yesBtn.addEventListener(
    "click",
    () => {

        response.innerHTML =
            "🥹❤️ Me acabas de hacer muy feliz ❤️🥹";

        heartExplosion();

    }
);


/* ======================================
   RESPUESTA "CLARO"
====================================== */

maybeBtn.addEventListener(
    "click",
    () => {

        response.innerHTML =
            "🏐❤️ Entonces habrá que conocernos más... ❤️🏐";

        heartExplosion();

    }
);


/* ======================================
   EXPLOSIÓN DE CORAZONES
====================================== */

function heartExplosion() {

    for (let i = 0; i < 60; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            12 + Math.random() * 25 + "px";

        heart.style.zIndex =
            "100";

        heart.style.pointerEvents =
            "none";

        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            100 +
            Math.random() * 500;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        const animation =
            heart.animate(
                [

                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",

                        opacity: 1
                    },

                    {

                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            rotate(360deg)
                            scale(1.5)`,

                        opacity: 0

                    }

                ],

                {

                    duration:
                        1000 +
                        Math.random() * 1500,

                    easing:
                        "cubic-bezier(.17,.67,.83,.67)"

                }
            );


        animation.onfinish =
            () => {

                heart.remove();

            };

    }

}


/* ======================================
   CLICK EN LA PANTALLA
====================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            event.target.tagName ===
            "BUTTON"
        ) {
            return;
        }


        createClickHeart(
            event.clientX,
            event.clientY
        );

    }
);


/* ======================================
   CORAZÓN DONDE HACES CLICK
====================================== */

function createClickHeart(x, y) {

    const heart =
        document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position =
        "fixed";

    heart.style.left =
        x + "px";

    heart.style.top =
        y + "px";

    heart.style.fontSize =
        "25px";

    heart.style.zIndex =
        "100";

    heart.style.pointerEvents =
        "none";

    document.body.appendChild(
        heart
    );


    const animation =
        heart.animate(
            [

                {
                    transform:
                        "translate(-50%, -50%) scale(.2)",

                    opacity: 1
                },

                {

                    transform:
                        "translate(-50%, -150px) scale(1.5)",

                    opacity: 0

                }

            ],

            {

                duration: 900,

                easing: "ease-out"

            }
        );


    animation.onfinish =
        () => {

            heart.remove();

        };

}


/* ======================================
   INICIAR
====================================== */

createStars();

for (let i = 0; i < 10; i++) {

    setTimeout(
        createHeart,
        i * 200
    );

}