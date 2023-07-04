import React from 'react';
import s from './HomePage.module.css'
import HomePageImage from './images/Home image.png'
import val1 from './icons/1.1.png'
import val2 from './icons/1.2.png'
import val3 from './icons/1.3.png'
import val4 from './icons/1.4.png'
import project1 from './images/projects1.png'
import project2 from './images/projects2.png'
import project3 from './images/projects3.png'
import project4 from './images/projects4.png'


const HomePage = () => {
    return (
        <div className={s.HomePageOverlay}>
            <div className={s.HomePageImgOverlay}>
                <img className={s.homepaageImg} src={HomePageImage} alt="Modern Kitchen"/>
            </div>

            <div className={s.statistic}>
                <div className={s.statisticBlock}>
                    <div className={s.digit}>
                        2700
                    </div>
                    <div className={s.digitDescription}>
                        задоволених клієнтів протягом 6-ти років роботи майстерні
                    </div>
                </div>
                <div className={s.statisticBlock}>
                    <div className={s.digit}>
                        70%
                    </div>
                    <div className={s.digitDescription}>
                        клієнтів повертаються до нас з новими проєктами
                    </div>
                </div>
                <div className={s.statisticBlock}>
                    <div className={s.digit}>
                        20%
                    </div>
                    <div className={s.digitDescription}>
                        клієнтів приходять до нас завдяки рекомендаціям
                    </div>
                </div>
                <div className={s.statisticBlock}>
                    <div className={s.digit}>
                        XXX
                    </div>
                    <div className={s.digitDescription}>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </div>
                </div>
            </div>
            {/*about us*/}
            <div className={s.aboutOverlay}>
                <div className={s.aboutText}>
                    <h2 className={s.aboutHeader}>КОРОТКО ПРО НАС</h2>
                    <p className={s.aboutDescription}>
                        За шість років своєї діяльності, ми не лише втілюємо ваші мрії у зручні та
                        індивідуальні меблі, а й створюємо можливості для змін.
                        Від самого початку роботи майстерні ми працевлаштовуємо чоловіків,
                        які пройшли реабілітацію від алко- та наркозалежності в реабілітаційних центрах Львова,
                        а також ветеранів. Обираючи наші меблі, ви не тільки отримуєте комфортні
                        та стильні меблі, а й стаєте частиною цієї надзвичайної місії —
                        допомоги та підтримки людей, які заслуговують другий шанс.
                    </p>
                    <button className={s.aboutButton}>Детальніше</button>
                </div>
                <div>
                    <iframe width="658" height="370" src="https://www.youtube.com/embed/wnFV9rNTubk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
            {/*our values*/}
            <div className={s.valuesOverlay}>
                <h2 className={s.valuesTitle}>НАШІ ЦІННОСТІ</h2>
                <div className={s.cardsBlock}>
                    <div className={s.valuesCard}>
                        <div className={s.valuesIcon}>
                            <img src={val1} alt="icon"/>
                        </div>
                        <h3 className={s.valuesCardTitle}>
                            Творимо разом
                        </h3>
                        <p className={s.valuesCardText}>
                            Ми команда, яка працює разом із клієнтом, тому кожен відчуває свій внесок у кінцевий
                            продукт.
                        </p>
                    </div>
                    <div className={s.valuesCard}>
                        <div className={s.valuesIcon}>
                            <img src={val2} alt="icon"/>
                        </div>
                        <h3 className={s.valuesCardTitle}>
                            Беремо відповідальність
                        </h3>
                        <p className={s.valuesCardText}>
                            Відповідальність перед собою, клієнтом та суспільством.
                        </p>
                    </div>
                    <div className={s.valuesCard}>
                        <div className={s.valuesIcon}>
                            <img src={val3} alt="icon"/>
                        </div>
                        <h3 className={s.valuesCardTitle}>
                            Допомагаємо спільно
                        </h3>
                        <p className={s.valuesCardText}>
                            Ми віддаємо частину своїх ресурсів (прибуток, час, продукцію) на розвиток спільнот.
                        </p>
                    </div>
                    <div className={s.valuesCard}>
                        <div className={s.valuesIcon}>
                            <img src={val4} alt="icon"/>
                        </div>
                        <h3 className={s.valuesCardTitle}>
                            Екологічність та безпека
                        </h3>
                        <p className={s.valuesCardText}>
                            Ми використовуємо лише безпечний лак та клей, що не містить шкідливих хімікатів.
                        </p>
                    </div>
                </div>
            </div>

            {/*progects*/}

            <div className={s.projectsOverlay}>
                <div className={s.projectsHeader}>
                    <h2 className={s.projectTitle}>НАШІ ПРОЄКТИ</h2>
                    <div className={s.projectsButtonContainer}>
                        <button className={s.projectsButton}>Детальніше</button>
                    </div>
                </div>
                <div className={s.projectsCardBlock}>
                    <div className={s.projectsImageContainer}>
                        <img src={project1} alt="Blum Cafe"/>
                    </div>
                    <div className={s.projectsImageContainer}>
                        <img src={project2} alt="Blum Cafe"/>
                    </div>
                    <div className={s.projectsImageContainer}>
                        <img src={project3} alt="Blum Cafe"/>
                    </div>
                    <div className={s.projectsImageContainer}>
                        <img src={project4} alt="Blum Cafe"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;