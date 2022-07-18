import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: {
          description: "About Us",
          followUss:"Follow us on our social media",
          descriptionP2:"We give you immediate feedback on your pronunciation and offer live coaching with native speakers, preparing you to hold meaningful conversations in your new language.Our tried and tested curriculum and engaging mobile app makes it easy and fun to learn a new language.",
          descriptionP:"For nearly 10 years, learners have turned to Lughat Space to build the fluency and confidence they need to speak new languages.The best way to pick up a language is to surround yourself with it. We help you learn efficiently through real-world scenarios, interactive activities, and audio from native speakers.Lughat Space sets you up for success by introducing new skills at the perfect pace and giving you opportunities to practice key words and phrases in multiple contexts.",
          introSent: "You are one click away from becoming fluent",
          testi : "Testimonials",
          serviceIntro : "What's in for you?",
          se1:"- Add structure to learning with optional plans that are tailored to your goals",
          se2:"- Get the accent juuuuust right with instant feedback on your pronunciation",
          se3:"- Make it manageable with bite-sized lessons you can do at your own pace",
          se4:"- Immerse yourself in real-life scenarios, not endless flashcards",
          service1 :"Spanish - 15$/m for 12 months",
          service1ds :" Learning Spanish is not only an attractive business for those looking to expand their professional and personal opportunities. Speaking Spanish can also be a valuable asset. As the second most spoken language in the world, Spanish has more than 400 million speakers and is the mother tongue in 20 different countries.",
          service2 :"English - 20$/m for 12 monthss ",
          service2ds :" English is the third most spoken language in the world in terms of native speakers. But it's also one of the most widely spoken second languages, making it incredibly useful in most industries and careers, including business and education.",
          service3 :"French - 15$/m for 12 months",
          service3ds :" French has a reputation for being the language of love, but there are many other reasons to fall in love with French. It is the sixth most spoken language in the world and the only language other than English spoken on all five continents.",
          service4 :"Arabic - 13$/m for 12 months ",
          service4ds :" To learn Arabic quickly, you must first learn to read Arabic. This involves learning the Arabic alphabet. Once completed, you will move on to learning grammar, vocabulary and conjugation.",
          service5 :"Japanese - 15$/m for 12 months",
          service5ds :" Understanding how to start learning a language can be tricky and this is especially true for Japanese. Misconceptions about the difficulty of the language and the best way to learn Japanese abound. Can you really learn Japanese in a few minutes a day and how effective are these online lessons in helping beginners understand and speak the language?",
        },
        common: {
          btnReg: "Register Now",
          homeNav:"Home",
          serv: "Our Services",
          reg:"Register",
          logI: "Log In",
          signup: "Sign up / Login",
          submitBtn: "Submit",
        },
        loginForm: {
          title: "Login",
          email: "Username / Email",
          password: "Password",
          loginBtn: "Login",
          createAccount: "Create account",
          missingEmailErrorTitle: "Missing Email",
          missingEmailErrorMsg: "Please enter your email.",
          missingPasswordErrorTitle: "Missing password",
          missingPasswordErrorMsg: "Please enter your password.",
        },
        createAccountForm: {
          title: "Register",
          nm:"Full Name",
          pn : "Phone Number",
          langSel : "Which language are you looking to learn?",
          email: "Email",
          password: "Password",
          retypePassword: "Retype password",
          createAccountBtn: "Create account",
          missingEmailErrorTitle: "Missing Email",
          missingEmailErrorMsg: "Please enter your email.",
          missingPasswordErrorTitle: "Missing password",
          missingPasswordErrorMsg: "Please enter your password.",
          missingRetypePasswordErrorTitle: "Retype password",
          missingRetypePasswordErrorMsg: "Please retype your password.",
          differentPasswordErrorTitle: "Passwords do not match",
          differentPasswordErrorMsg:
            "Please make sure you retype your password correctly .",
        },
      
        regiSuccess: {
          title: "Success",
          description: "About Us",
          backToHomeBtn: "Back to homepage",
          confirmAl :"Registration Confirmed, you will receive an email shortly.",
        },
      },
      fr: {
        home: {
          description: "A propos de nous",
          followUss:"Suivez-nous sur nos reseaux sociaux",
          introSent: "Vous etes a un clique de parler couramment la langue de vos reves",
          descriptionP2:"Nous vous donnons un retour immédiat sur votre prononciation et offrons un coaching en direct avec des locuteurs natifs, vous préparant à tenir des conversations significatives dans votre nouvelle langue. Notre programme d’études éprouvé et notre application mobile attrayante rendent facile et amusant l’apprentissage d’une nouvelle langue.",
          descriptionP:"Depuis près de 10 ans, les apprenants se tournent vers Lughat Space pour développer la fluidité et la confiance dont ils ont besoin pour parler de nouvelles langues. La meilleure façon de choisir une langue est de vous entourer de celle-ci. Nous vous aidons à apprendre efficacement grâce à des scénarios réels, des activités interactives et de l’audio de locuteurs natifs. Lughat Space vous prépare au succès en introduisant de nouvelles compétences au rythme parfait et en vous donnant l’occasion de pratiquer des mots et des phrases clés dans plusieurs contextes.",
          testi : "Temoignages",
          serviceIntro : "Qu'est ce que vous gagnez?",
          se1:"- Ajouter de la structure à l’apprentissage avec des plans optionnels adaptés à vos objectifs",
          se2:"- Obtenir le bon accent avec un retour instantané sur votre prononciation",
          se3:"- Apprendre à votre propre rythme",
          se4:"- Plonger dans des scénarios réels, pas des flashcards sans fin",
          service1 :"Espagnol - 15$/m pour 12 mois",
          service1ds :" Apprendre l’espagnol n’est pas seulement une entreprise attrayante pour ceux qui cherchent à élargir leurs opportunités professionnelles et personnelles. Parler espagnol peut également être un atout précieux. En tant que deuxième langue la plus parlée au monde, l’espagnol compte plus de 400 millions de locuteurs et est la langue maternelle dans 20 pays différents.",
          service2 :"Anglais - 20$/m pour 12 mois ",
          service2ds :" L’anglais est la troisième langue la plus parlée au monde en termes de locuteurs natifs. Mais c’est aussi l’une des langues secondes les plus parlées, ce qui la rend incroyablement utile dans la plupart des industries et des carrières, y compris les affaires et l’éducation.",
          service3 :"Francais - 15$/m pour 12 mois",
          service3ds :"Le français a la réputation d’être le langage de l’amour, mais il y a beaucoup d’autres raisons de tomber amoureux de Français. C’est la sixième langue la plus parlée au monde et la seule autre langue que l’anglais parlée sur les cinq continents. ",
          service4 :"Arabe - 13$/m pour 12 mois ",
          service4ds :" Pour apprendre l’arabe rapidement, vous devez tout d’abord apprendre à lire l’arabe. Cela implique un apprentissage de l’alphabet arabe. Une fois terminé, vous passerez à l’apprentissage de la grammaire, du vocabulaire et de la conjugaison.",
          service5 :"Japonais - 15$/m pour 12 mois",
          service5ds :" Comprendre comment commencer à apprendre une langue peut être délicat et c’est particulièrement vrai pour le japonais. Les idées fausses sur la difficulté de la langue et la meilleure façon d’apprendre le japonais abondent. Pouvez-vous vraiment apprendre le japonais en quelques minutes par jour et quelle est l’efficacité de ces leçons en ligne pour aider les débutants à comprendre et à parler la langue?",
            
        },
        common: {
          btnReg: "Inscrivez-vous maintenant",
          homeNav:"Accueil",
          serv: "Nos Services",
          reg:"Inscrivez-vous",
          logI: "Connectez-vous",
          signup: "S'inscrite / Login",
          submitBtn: "Soumettre",
        },
        loginForm: {
          title: "Connexion",
          email: "Nom d'utilisateur / Email",
          password: "Mot de passe",
          loginBtn: "Connexion",
          createAccount: "Créer un compte",
          missingEmailErrorTitle: "E-mail manquant",
          missingEmailErrorMsg: "Veuillez taper votre e-mail.",
          missingPasswordErrorTitle: "Mot de passe manquant",
          missingPasswordErrorMsg: "Veuillez taper votre mot de passe.",
        },
        createAccountForm: {
          title: "S'inscrire",
          nm:"Nom et Prenom",
          pn : "Numero de Telephone",
          langSel : "Quelle langue souhaitiez-vous apprendre?",
          email: "Email",
          password: "Mot de passe",
          retypePassword: "Retaper le mot de passe",
          createAccountBtn: "Créer un compte",
          missingEmailErrorTitle: "E-mail manquant",
          missingEmailErrorMsg: "Veuillez entrer votre e-mail.",
          missingPasswordErrorTitle: "Mot de passe manquant",
          missingPasswordErrorMsg: "Veuillez entrer votre mot de passe.",
          confirmAl :"Inscription confirmee ,vous recevrez un email sous peu.",
          missingRetypePasswordErrorTitle: "Retaper le mot de passe",
          missingRetypePasswordErrorMsg: "Veuillez retaper votre mot de passe.",
          differentPasswordErrorTitle: "Les mots de passe sont différents",
          differentPasswordErrorMsg:
            "Assurez-vous de retaper correctement votre mot de passe.",
        },
        regiSuccess: {
          title: "Succès",
          description: "About Us",
          backToHomeBtn: "Retour à la page d'accueil",
          confirmAl :"Inscription confirmee ,vous recevrez un email sous peu.",
        },
      },
    },
    fallbackLng: "en",
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ["common", "home"],

    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
    keySeparator: false,
  });

export default i18n;
