import {Article, ArticleContent, ArticlePreview} from "./types";

export class FakeBase {
    static getArticlesPreview(num?: number): Promise<ArticlePreview[]> {
        return Promise.resolve(num ? FakeBase.articles.slice(0, num).map(article => ({
            id: article.id,
            link: article.link,
            en_title: article.en_title,
            ru_title: article.ru_title,
            ru_category: article.ru_category,
            en_category: article.en_category,
            image: article.image,
        })) : FakeBase.articles.map(article => ({
            id: article.id,
            link: article.link,
            en_title: article.en_title,
            ru_title: article.ru_title,
            ru_category: article.ru_category,
            en_category: article.en_category,
            image: article.image,
        })));
    }

    static getArticle(link: string): Promise<ArticleContent | undefined> {
        const article = FakeBase.articles.find(article => article.link === link);
        return Promise.resolve(article ? article.content : undefined);
    }

    static articles: Array<Article> = [
        {
            "id": 1,
            "link": "my-childs-dyslexia-how-can-i-help",
            "ru_title": "У моего ребенка дислексия. Как ему помочь?",
            "en_title": "My child's dyslexia. How can I help?",
            "ru_category": "Образование",
            "en_category": "Education",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Дислексия у детей",
                    "en_text": "Dyslexia in children",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Дислексия — это неврологическое расстройство, которое затрудняет чтение и написание текста. Это состояние может проявляться в различных формах, от трудностей с распознаванием слов до сложностей с написанием правильных букв.",
                    "en_text": "Dyslexia is a neurological disorder that makes reading and writing difficult. It can manifest in various forms, from trouble recognizing words to difficulties in writing the correct letters."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Дислексия у детей"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поддержка и ресурсы для детей с дислексией",
                    "en_header": "Support and Resources for Children with Dyslexia",
                    "ru_text": "Раннее обнаружение и поддержка могут значительно помочь детям с дислексией. Важно предоставить ребенку дополнительные ресурсы и методы обучения, которые могут улучшить его навыки чтения и письма. Психологическая поддержка также играет ключевую роль в преодолении трудностей, связанных с дислексией.",
                    "en_text": "Early detection and support can significantly help children with dyslexia. It is important to provide the child with additional resources and learning methods that can improve their reading and writing skills. Psychological support also plays a key role in overcoming the difficulties associated with dyslexia."
                },
                {
                    "type": "removal",
                    "ru_text": "Ранее применяемые методы и подходы, которые не показали своей эффективности, могут быть заменены на более современные и подходящие решения.",
                    "en_text": "Previously used methods and approaches that have not proven effective can be replaced with more modern and suitable solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Стратегии и методы поддержки",
                    "en_header": "Support Strategies and Methods",
                    "ru_text": "Существуют различные стратегии и методы, которые могут быть полезны для детей с дислексией. Это включает использование визуальных и аудиовизуальных материалов, а также обучение специфическим техникам чтения и письма. Важно сотрудничать с учителями и специалистами, чтобы создать индивидуализированный план поддержки для каждого ребенка.",
                    "en_text": "There are various strategies and methods that can be useful for children with dyslexia. This includes using visual and audiovisual materials, as well as teaching specific reading and writing techniques. It is important to work with teachers and specialists to create an individualized support plan for each child."
                }
            ]
        },
        {
            "id": 2,
            "link": "school-treats-reasons-and-solutions",
            "ru_title": "Травля в школе: причины и решения",
            "en_title": "School treats: reasons and solutions",
            "ru_category": "Социальные вопросы",
            "en_category": "Social Issues",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Проблема травли в школе",
                    "en_text": "The problem of bullying in school",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Травля в школе — это форма агрессии, которая может иметь долгосрочные последствия для пострадавшего ребенка. Травля может проявляться в виде физического насилия, вербального оскорбления или социальных манипуляций, что приводит к психологическому стрессу и негативным последствиям.",
                    "en_text": "Bullying in school is a form of aggression that can have long-term consequences for the affected child. Bullying can manifest as physical violence, verbal abuse, or social manipulation, leading to psychological stress and negative outcomes."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Травля в школе"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поддержка пострадавших от травли",
                    "en_header": "Support for Victims of Bullying",
                    "ru_text": "Важно осознавать признаки травли и предоставлять поддержку пострадавшим детям. Это может включать активное участие в решении проблемы со стороны школы, обеспечение безопасной среды и помощь в развитии стратегий преодоления стресса и уверенности в себе. Обсуждение проблемы с родителями и вовлечение в образовательный процесс могут способствовать созданию более поддерживающей атмосферы.",
                    "en_text": "It is important to recognize the signs of bullying and provide support to affected children. This may include active involvement from the school in addressing the issue, ensuring a safe environment, and helping develop strategies for stress management and self-confidence. Discussing the issue with parents and involving them in the educational process can help create a more supportive atmosphere."
                },
                {
                    "type": "removal",
                    "ru_text": "Методы, которые не обеспечили значительного улучшения в профилактике травли, могут быть пересмотрены и заменены на более эффективные подходы.",
                    "en_text": "Methods that have not led to significant improvements in preventing bullying can be reviewed and replaced with more effective approaches.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Комплексное решение проблемы травли",
                    "en_header": "Comprehensive Approach to Bullying",
                    "ru_text": "Решение проблемы травли требует комплексного подхода, который включает в себя как профилактику, так и вмешательство. Важно обучать детей и педагогов тому, как распознавать и реагировать на случаи травли, а также внедрять программы, направленные на создание позитивного школьного климата.",
                    "en_text": "Addressing bullying requires a comprehensive approach that includes both prevention and intervention. It is important to teach children and educators how to recognize and respond to instances of bullying, as well as to implement programs aimed at creating a positive school climate."
                }
            ]
        },
        {
            "id": 3,
            "link": "i-cant-do-it-support-methods",
            "ru_title": "“Я не справляюсь”: методы самоподдержки",
            "en_title": "“I can't do it”: support methods",
            "ru_category": "Самопомощь",
            "en_category": "Self-Help",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Методы самоподдержки",
                    "en_text": "Self-help methods",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Когда вы чувствуете, что не справляетесь, важно найти эффективные способы самопомощи. Самоподдержка может включать в себя как психологические, так и практические методы для улучшения общего состояния и борьбы с негативными эмоциями.",
                    "en_text": "When you feel that you are not coping, it is important to find effective self-help methods. Self-help can include both psychological and practical methods for improving overall well-being and managing negative emotions."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Методы самоподдержки"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Стратегии и методы поддержки для дислексии",
                    "en_header": "Strategies and Methods for Dyslexia",
                    "ru_text": "Раннее обнаружение и поддержка могут значительно помочь детям с дислексией. Важно предоставить ребенку дополнительные ресурсы и методы обучения, которые могут улучшить его навыки чтения и письма. Психологическая поддержка также играет ключевую роль в преодолении трудностей, связанных с дислексией.",
                    "en_text": "Early detection and support can significantly help children with dyslexia. It is important to provide the child with additional resources and learning methods that can improve their reading and writing skills. Psychological support also plays a key role in overcoming the difficulties associated with dyslexia."
                },
                {
                    "type": "removal",
                    "ru_text": "Ранее применяемые методы и подходы, которые не показали своей эффективности, могут быть заменены на более современные и подходящие решения.",
                    "en_text": "Previously used methods and approaches that have not proven effective can be replaced with more modern and suitable solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Раннее обнаружение и поддержка дислексии",
                    "en_header": "Early Detection and Support for Dyslexia",
                    "ru_text": "Существуют различные стратегии и методы, которые могут быть полезны для детей с дислексией. Это включает использование визуальных и аудиовизуальных материалов, а также обучение специфическим техникам чтения и письма. Важно сотрудничать с учителями и специалистами, чтобы создать индивидуализированный план поддержки для каждого ребенка.",
                    "en_text": "There are various strategies and methods that can be useful for children with dyslexia. This includes using visual and audiovisual materials, as well as teaching specific reading and writing techniques. It is important to work with teachers and specialists to create an individualized support plan for each child."
                }
            ]
        },
        {
            "id": 4,
            "link": "unlocking-childs-talents",
            "ru_title": "Раскрываем таланты ребенка",
            "en_title": "Unlocking child's talents",
            "ru_category": "Развитие",
            "en_category": "Development",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Таланты ребенка",
                    "en_text": "Child's talents",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Каждый ребенок обладает уникальными талантами, которые можно развивать и поддерживать. Важно создать условия, которые помогут ребенку раскрыть свои способности и уверенность в себе.",
                    "en_text": "Every child has unique talents that can be developed and nurtured. It is important to create conditions that help the child discover their abilities and build self-confidence."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Таланты ребенка"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Развитие талантов через интересы",
                    "en_header": "Developing Talents Through Interests",
                    "ru_text": "Поддержка и поощрение интересов ребенка могут способствовать раскрытию его талантов. Это может включать участие в различных занятиях, таких как спорт, музыка или искусство, и предоставление возможности для самовыражения и развития навыков.",
                    "en_text": "Supporting and encouraging a child's interests can help unlock their talents. This may include participating in various activities such as sports, music, or art, and providing opportunities for self-expression and skill development."
                },
                {
                    "type": "removal",
                    "ru_text": "Ранее применяемые методы, которые не принесли результатов в развитии талантов ребенка, могут быть заменены на более успешные подходы.",
                    "en_text": "Previously used methods that did not yield results in developing a child's talents can be replaced with more successful approaches.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поддержка новых увлечений",
                    "en_header": "Supporting New Hobbies",
                    "ru_text": "Важно также поддерживать интерес ребенка к новым увлечениям и предоставлять ресурсы для дальнейшего развития. Это может включать обучение новым навыкам и предоставление доступа к специализированным программам и материалам.",
                    "en_text": "It is also important to support the child's interest in new hobbies and provide resources for further development. This may include learning new skills and providing access to specialized programs and materials."
                }
            ]
        },
        {
            "id": 5,
            "link": "managing-screen-time-for-kids",
            "ru_title": "Управление временем у экрана для детей",
            "en_title": "Managing screen time for kids",
            "ru_category": "Здоровье",
            "en_category": "Health",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Экранное время",
                    "en_text": "Screen time",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Управление экранным временем имеет важное значение для здоровья детей. Правильное распределение времени, проведенного за экранами, может способствовать общему благополучию и предотвращению негативных последствий.",
                    "en_text": "Managing screen time is important for children's health. Proper allocation of time spent on screens can contribute to overall well-being and prevent negative consequences."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Экранное время"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Ограничения экранного времени",
                    "en_header": "Screen Time Limits",
                    "ru_text": "Установление четких ограничений и правил для экранного времени помогает сохранить здоровье детей. Это включает в себя регулярные перерывы, использование экранного времени как награды и обеспечение баланса между физической активностью и сидячими занятиями.",
                    "en_text": "Setting clear limits and rules for screen time helps maintain children's health. This includes regular breaks, using screen time as a reward, and ensuring a balance between physical activity and sedentary activities."
                },
                {
                    "type": "removal",
                    "ru_text": "Ранее применяемые методы управления экранным временем, которые не показали своей эффективности, могут быть заменены на более современные и подходящие решения.",
                    "en_text": "Previously used methods of managing screen time that have not proven effective can be replaced with more modern and suitable solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Баланс между экранным временем и физической активностью",
                    "en_header": "Balancing Screen Time with Physical Activity",
                    "ru_text": "Важно также создавать возможности для ребенка проводить время на свежем воздухе и заниматься активными видами деятельности. Баланс между экранным временем и физической активностью способствует общему здоровью и благополучию ребенка.",
                    "en_text": "It is also important to create opportunities for the child to spend time outdoors and engage in active activities. Balancing screen time with physical activity contributes to the overall health and well-being of the child."
                }
            ]
        },
        {
            "id": 6,
            "link": "healthy-eating-habits-for-children",
            "ru_title": "Здоровые привычки питания для детей",
            "en_title": "Healthy eating habits for children",
            "ru_category": "Здоровье",
            "en_category": "Health",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Здоровое питание",
                    "en_text": "Healthy eating",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Здоровое питание — это ключ к обеспечению роста и развития ребенка. Правильный выбор продуктов питания может оказать значительное влияние на физическое и умственное развитие.",
                    "en_text": "Healthy eating is key to supporting a child's growth and development. Making the right food choices can have a significant impact on physical and mental development."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Здоровое питание"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Здоровые привычки питания с раннего возраста",
                    "en_header": "Healthy Eating Habits from a Young Age",
                    "ru_text": "Формирование здоровых привычек питания должно начинаться с раннего возраста. Важно предлагать детям разнообразные и питательные продукты, которые содержат необходимые витамины и минералы. Это может включать фрукты, овощи, цельные зерна и белки.",
                    "en_text": "Establishing healthy eating habits should start at an early age. It is important to offer children a variety of nutritious foods that provide essential vitamins and minerals. This can include fruits, vegetables, whole grains, and proteins."
                },
                {
                    "type": "removal",
                    "ru_text": "Методы и подходы к питанию, которые не обеспечили значительного улучшения в здоровье ребенка, могут быть заменены на более эффективные подходы.",
                    "en_text": "Methods and approaches to nutrition that have not led to significant improvements in the child's health can be replaced with more effective approaches.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Обучение осознанному выбору пищи",
                    "en_header": "Teaching Mindful Food Choices",
                    "ru_text": "Кроме того, важно обучать детей тому, как делать осознанный выбор в отношении пищи и понимать важность сбалансированного питания. Родители должны быть примером и поддерживать здоровые привычки как дома, так и в учебных заведениях.",
                    "en_text": "Additionally, it is important to teach children how to make mindful food choices and understand the importance of balanced nutrition. Parents should lead by example and support healthy habits both at home and in educational settings."
                }
            ]
        },
        {
            "id": 7,
            "link": "importance-of-sleep-for-kids",
            "ru_title": "Важность сна для детей",
            "en_title": "Importance of sleep for kids",
            "ru_category": "Здоровье",
            "en_category": "Health",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Качество сна",
                    "en_text": "Quality of sleep",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Сон играет ключевую роль в развитии ребенка. Достаточное количество сна способствует физическому росту, когнитивному развитию и эмоциональному благополучию.",
                    "en_text": "Sleep plays a crucial role in a child's development. Adequate sleep contributes to physical growth, cognitive development, and emotional well-being."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Важность сна"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Регулярный режим сна и обстановка",
                    "en_header": "Regular Sleep Routine and Environment",
                    "ru_text": "Создание регулярного режима сна и поддержание подходящей обстановки для отдыха помогают улучшить качество сна ребенка. Это включает в себя создание спокойной и темной среды, установление четкого графика и обеспечение комфортного спального места. Регулярное время сна и расслабляющая рутина перед сном могут способствовать более глубокому и восстановительному сну.",
                    "en_text": "Creating a regular sleep routine and maintaining a suitable sleeping environment help improve the child's sleep quality. This includes creating a calm and dark environment, establishing a clear schedule, and providing a comfortable sleeping area. Regular sleep times and a relaxing bedtime routine can contribute to deeper and more restorative sleep."
                },
                {
                    "type": "removal",
                    "ru_text": "Ранее применяемые методы и подходы к улучшению сна, которые не обеспечили значительных результатов, могут быть пересмотрены и заменены на более эффективные решения.",
                    "en_text": "Previously used methods and approaches to improve sleep that have not yielded significant results can be reviewed and replaced with more effective solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Индивидуальные потребности и открытое общение",
                    "en_header": "Individual Sleep Needs and Open Communication",
                    "ru_text": "Кроме того, важно учитывать индивидуальные потребности ребенка в сне и поддерживать открытое общение о его состоянии. Родители должны быть внимательны к сигналам, которые могут указывать на проблемы со сном, и обращаться за помощью, если это необходимо. Помощь специалиста и регулярные проверки могут способствовать улучшению сна и общего состояния ребенка.",
                    "en_text": "Additionally, it is important to consider the child's individual sleep needs and maintain open communication about their condition. Parents should be attentive to signs that may indicate sleep problems and seek help if necessary. Professional assistance and regular check-ups can contribute to improving the child's sleep and overall well-being."
                }
            ]
        },
        {
            "id": 8,
            "link": "how-to-build-self-esteem-in-children",
            "ru_title": "Как развивать самооценку у детей",
            "en_title": "How to build self-esteem in children",
            "ru_category": "Развитие",
            "en_category": "Development",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Развитие самооценки",
                    "en_text": "Building self-esteem",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Самооценка играет важную роль в развитии ребенка и его способности справляться с трудностями. Поддержка и поощрение со стороны родителей и педагогов могут помочь ребенку развить уверенность в себе.",
                    "en_text": "Self-esteem plays a crucial role in a child's development and their ability to cope with challenges. Support and encouragement from parents and educators can help a child build self-confidence."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Развитие самооценки"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поощрение достижений и позитивное подкрепление",
                    "en_header": "Encouraging Achievements and Positive Reinforcement",
                    "ru_text": "Важно поощрять достижения ребенка и предоставлять положительное подкрепление за его усилия и успехи. Это может включать в себя признание достижений, поддержку в сложных ситуациях и помощь в развитии навыков, которые способствуют уверенному поведению. Создание обстановки, где ребенок чувствует себя ценным и способным, играет ключевую роль в формировании здоровой самооценки.",
                    "en_text": "It is important to encourage the child's achievements and provide positive reinforcement for their efforts and successes. This can include recognizing accomplishments, supporting them in challenging situations, and helping them develop skills that foster confident behavior. Creating an environment where the child feels valued and capable plays a key role in forming a healthy self-esteem."
                },
                {
                    "type": "removal",
                    "ru_text": "Методы и подходы, которые не обеспечили значительного улучшения в развитии самооценки, могут быть заменены на более успешные и подходящие решения.",
                    "en_text": "Methods and approaches that have not led to significant improvements in building self-esteem can be replaced with more successful and suitable solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поддержка эмоционального состояния ребенка",
                    "en_header": "Supporting the Child's Emotional State",
                    "ru_text": "Родители и воспитатели должны быть внимательны к эмоциональному состоянию ребенка и активно участвовать в его развитии. Обеспечение поддерживающей и позитивной среды помогает ребенку чувствовать себя ценным и способным преодолевать трудности. Регулярное общение и признание успехов могут способствовать повышению уверенности ребенка в себе.",
                    "en_text": "Parents and caregivers should be attentive to the child's emotional state and actively participate in their development. Providing a supportive and positive environment helps the child feel valued and capable of overcoming challenges. Regular communication and recognition of achievements can contribute to increasing the child's self-confidence."
                }
            ]
        },
        {
            "id": 9,
            "link": "helping-children-with-anxiety",
            "ru_title": "Помощь детям с тревожностью",
            "en_title": "Helping children with anxiety",
            "ru_category": "Самопомощь",
            "en_category": "Self-Help",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Тревожность у детей",
                    "en_text": "Anxiety in children",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Тревожность у детей может проявляться в различных формах и влиять на их повседневную жизнь. Понимание причин тревожности и предоставление необходимой поддержки может помочь ребенку справиться с этими проблемами.",
                    "en_text": "Anxiety in children can manifest in various forms and impact their daily lives. Understanding the causes of anxiety and providing necessary support can help the child cope with these issues."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Тревожность у детей"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Стратегии и методы управления тревожностью",
                    "en_header": "Strategies and Methods for Managing Anxiety",
                    "ru_text": "Существуют различные стратегии и методы, которые могут помочь детям справиться с тревожностью. Это может включать использование техник релаксации, поддержку со стороны семьи и профессиональную помощь в виде консультаций с психологом. Важно создать пространство, где ребенок может открыто выражать свои чувства и получать необходимую поддержку.",
                    "en_text": "There are various strategies and methods that can help children manage anxiety. This may include using relaxation techniques, family support, and professional help such as counseling with a psychologist. It is important to create a space where the child can openly express their feelings and receive the necessary support."
                },
                {
                    "type": "removal",
                    "ru_text": "Методы и подходы, которые не обеспечили значительного улучшения в управлении тревожностью, могут быть пересмотрены и заменены на более эффективные решения.",
                    "en_text": "Methods and approaches that have not led to significant improvements in managing anxiety can be reviewed and replaced with more effective solutions.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Создание безопасного пространства и план действий",
                    "en_header": "Creating a Safe Space and Action Plan",
                    "ru_text": "Важно обеспечить ребенку безопасное пространство для выражения своих эмоций и разработать план действий, который поможет справиться с тревожностью. Психологическая поддержка и сотрудничество с медицинскими специалистами могут быть важной частью этого процесса. Постоянное внимание к эмоциональному состоянию ребенка поможет создать надежную основу для его благополучия.",
                    "en_text": "It is important to provide a safe space for the child to express their emotions and develop an action plan to manage anxiety. Psychological support and collaboration with medical professionals can be an important part of this process. Continuous attention to the child's emotional state will help create a solid foundation for their well-being."
                }
            ]
        },
        {
            "id": 10,
            "link": "encouraging-creativity-in-kids",
            "ru_title": "Поощрение креативности у детей",
            "en_title": "Encouraging creativity in kids",
            "ru_category": "Развитие",
            "en_category": "Development",
            "image": "https://picsum.photos/400/600",
            "content": [
                {
                    "type": "header",
                    "ru_text": "Развитие креативности",
                    "en_text": "Developing creativity",
                    "image": ""
                },
                {
                    "type": "description",
                    "ru_text": "Поощрение креативности у детей помогает развивать их воображение и способности к решению проблем. Это включает в себя создание среды, где ребенок может свободно выражать свои идеи и экспериментировать.",
                    "en_text": "Encouraging creativity in children helps develop their imagination and problem-solving skills. This involves creating an environment where the child can freely express their ideas and experiment."
                },
                {
                    "type": "image",
                    "src": "https://picsum.photos/400/600",
                    "alt": "Поощрение креативности"
                },
                {
                    "type": "paragraph",
                    "ru_header": "Роль творческих активностей в развитии креативности",
                    "en_header": "The Role of Creative Activities in Developing Creativity",
                    "ru_text": "Участие в художественных проектах, музыкльных занятиях и других творческих активностях играет ключевую роль в развитии креативности. Это может включать в себя участие в художественных проектах, музыкальных занятиях и других творческих активностях, которые позволяют детям исследовать и развивать свои таланты. Сосредоточение на таких активностях может значительно повысить их уверенность и способность к инновационному мышлению.",
                    "en_text": "Participation in artistic projects, music classes, and other creative activities plays a key role in developing creativity. This may include engaging in artistic projects, musical lessons, and other creative activities that allow children to explore and develop their talents. Focusing on such activities can significantly boost their confidence and ability for innovative thinking."
                },
                {
                    "type": "removal",
                    "ru_text": "Методы и подходы, которые не обеспечили значительного улучшения в развитии креативности, могут быть пересмотрены и заменены на более успешные.",
                    "en_text": "Methods and approaches that have not led to significant improvements in developing creativity can be reviewed and replaced with more successful ones.",
                    "image": ""
                },
                {
                    "type": "paragraph",
                    "ru_header": "Поддержка интереса к новым идеям и подходам",
                    "en_header": "Supporting Interest in New Ideas and Approaches",
                    "ru_text": "Важно также поддерживать интерес ребенка к новым идеям и подходам, предоставляя ему ресурсы и возможности для дальнейшего развития. Вовлечение в разнообразные виды деятельности и поощрение творческих начинаний способствуют раскрытию потенциала. Создание поддерживающей и вдохновляющей среды помогает детям развивать свои способности и достигать новых высот.",
                    "en_text": "It is also important to support the child's interest in new ideas and approaches by providing resources and opportunities for further development. Engaging in various activities and encouraging creative initiatives help unlock their potential. Creating a supportive and inspiring environment helps children develop their abilities and achieve new heights."
                }
            ]
        }
    ]
}
