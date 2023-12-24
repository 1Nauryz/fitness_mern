import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import Auth from "../utils/auth";
import Header from "../components/Header";


export default function Nutrition() {
    const loggedIn = Auth.loggedIn();

    // If the user is not logged in, redirect to the login page
    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{backgroundColor: 'whitesmoke'}}>
            <Header/>
            <div className='container mt-5 fs-5'>
                <h1 style={{fontSize: '50px'}}>Дұрыс тамақтану принциптері</h1>
                <div className='mt-5 mb-5 align-content-center'>
                    <img src={require("../assets/images/nutrition.img.png")} alt="nutrition" width={800} height={500}/>
                </div>
                <p>
                    Дұрыс, дұрыс тамақтану формуласы өте қарапайым, өйткені ол бір-біріне тікелей тәуелді екі
                    компонентті <br/>
                    ғана қамтиды. Оның мәні мынада: тағамның энергетикалық құндылығы (калориямен өлшенеді) дененің
                    энергия <br/>
                    шығындарына сәйкес келуі керек. Егер адам көп жесе, бірақ аз қозғалса, оның жұмсалмаған энергиясы
                    артық <br/>
                    салмаққа айналатынын бәрі біледі. Демек, қалыпты салмақты сақтауда өмір салты, кәсіп, жыныс,
                    физиологиялық <br/>
                    мәліметтер, физикалық белсенділік маңызды. Бірақ әр адам қарапайым ережелерді сақтай алады.
                    <br/>
                    Сонымен, дұрыс, яғни теңдестірілген немесе ұтымды тамақтану қажет:
                </p>
                <div className='container'>
                    <li>
                        режимді сақтаңыз, әрқашан бір уақытта тамақтаныңыз;
                    </li>
                    <li>
                        тамақтану кестесін ұстаныңыз: таңғы ас, жеңіл тағамдар, түскі ас, түстен кейінгі тағамдар, кешкі
                        ас.<br/>
                        Бұл жағдайда тағамның негізгі көлемі ағзаға таңғы және түскі ас кезінде түсуі керек;
                    </li>
                    <li>
                        тамақтану арасында 3 сағаттан аспайтын үзіліс жасаңыз;
                    </li>
                    <li>
                        азық-түліктің энергетикалық құндылығын ескеру және оларды тамақтану кестесінде дұрыс бөлу;
                    </li>
                    <li>
                        "табақ ережесін" сақтай отырып, тағамның мөлшерін есептеңіз: 1/4-күрделі көмірсулар,
                        1/4-ақуыздар,<br/>
                        1/2-көкөністер, жемістер, жидектер;
                    </li>
                    <li>
                        жеке физикалық белсенділікке сәйкес майларды, ақуыздар мен көмірсуларды біріктіріңіз,
                        витаминдер, <br/>
                        микроэлементтер, талшықтар туралы ұмытпаңыз;
                    </li>
                    <li>
                        көкөністер мен жемістерге, балыққа, құс етіне, майсыз етке, теңіз өнімдеріне, майсыз сүт
                        өнімдеріне, <br/>
                        бұршақ дақылдарына, тұтас дәнді дақылдарға, жармаларға артықшылық беріңіз;
                    </li>
                    <li>
                        тұзды, қантты, тәттілерді және кондитерлік өнімдерді (жылдам көмірсулар), газдалған
                        сусындарды, <br/>
                        зауыт шырындарын, алкогольді азайтыңыз;
                    </li>
                    <li>
                        тағамдарды дайындаудың пайдалы әдістерін ұстаныңыз: бумен пісіру, бұқтыру, қайнату;
                    </li>
                    <li>
                        диетаға тағамдық қоспалар мен диеталық қоспаларды қосыңыз; аштық сезімі пайда болған кезде
                        ғана <br/>
                        тамақтаныңыз; тым суық және тым ыстық тағамды тұтынбаңыз; Мұқият шайнаңыз;
                    </li>
                    <li>
                        кешкі асты 18-19 сағатқа дейін ішуге тырысыңыз;
                    </li>
                    <li>
                        күніне кем дегенде 7 сағат ұйықтаңыз, стресстен аулақ болыңыз.
                    </li>
                </div>
            </div>
            <div className='container mt-5 fs-5'>
                <h1 style={{fontSize: '50px'}}>Әр күнге арналған мәзір</h1>
                <h2>Мәзір мыналарды қамтиды:</h2>
                <li>Сүт өнімдері</li>
                <li>Тұқымдар мен жаңғақтар</li>
                <li>Жарма</li>
                <li>Жемістер</li>
                <li>Балық және теңіз өнімдері</li>
                <li>Көкөністер</li>
                <li>Смузи, коктейльдер</li>
                <li>Жұмыртқа</li>
                <li>Құс еті, сиыр еті</li>
                <li>Тұтас бидай наны</li>
                <div className='mt-5 mb-5 align-content-center'>
                    <img src={require("../assets/images/nutrition2.png")} alt="nutrition" width={800} height={500}/>
                </div>
            </div>
            <div>
                <footer className='text-center text-lg-start bg-body-tertiary text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Сіздің денсаулығыңыз — бұл сіз жейтін нәрсе!</span>
                        </div>

                        <div>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-google'></i>
                            </a>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-instagram'></i>
                            </a>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href="" className='me-4 text-reset'>
                                <i className='fab fa-github'></i>
                            </a>
                        </div>
                    </section>

                    <section className=''>
                        <div className='container text-center text-md-start mt-5'>
                            <div className='row mt-3'>
                                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        <i className='fas fa-gem me-3'></i>Yernur Motion
                                    </h6>
                                    <p>
                                        Денсаулық-бұл сапардың соңында тапқан қызықты нәрсе емес, жол бойында сізді сүйемелдейтін күш!
                                    </p>
                                </div>

                                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        Сілтемелер
                                    </h6>
                                    <p>
                                        <Link to="/" style={{color: 'grey'}}>
                                            <a href="#" className='text-reset'>Home</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/exercise" style={{color: 'grey'}}>
                                            <a href="#" className='text-reset'>Exercise</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/history" style={{color: 'grey'}}>
                                            <a href="#" className='text-reset'>History</a>
                                        </Link>
                                    </p>
                                </div>

                                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        Пайдалы сілтемелер
                                    </h6>
                                    <p>
                                        <a href="https://chat.openai.com/" className='text-reset'>ChatGpt</a>
                                    </p>
                                    <p>
                                        <a href="https://google.com/" className='text-reset'>Google</a>
                                    </p>
                                    <p>
                                        <a href="https://ru.wikipedia.org/wiki/" className='text-reset'>Wikipedia</a>
                                    </p>
                                    <p>
                                        <Link to="/"  style={{color: 'grey'}}>
                                            <a href="#" className='text-reset'>Home</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Байланыс</h6>
                                    <p><i className='fas fa-home me-3'></i> Almaty, Almaty 050000, KZ</p>
                                    <p>
                                        <i className='fas fa-envelope me-3'></i>
                                        techopsnarxoz@gmail.com
                                    </p>
                                    <p><i className='fas fa-print me-3'></i> + 7 747 517 92 36</p>
                                    <p><i className='fas fa-phone me-3'></i> + 7 777 698 30 99</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                        © 2023 Copyright:
                        <a className='text-reset fw-bold' href="https://luminate.kz/">luminate.kz</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}


