
import { QuestionData } from './types';

export const IELTS_DATA: QuestionData[] = [
  {
    type: 'Opinion (Agree/Disagree)',
    body1Structure: [
      { no: 1, function: 'Point 1', template: 'To begin with, one strong argument supporting my agreement/disagreement is that...' },
      { no: 2, function: 'Explanation', template: 'This is primarily due to the fact that... / This perspective is based on the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, a relevant example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'Furthermore, another crucial element supporting this viewpoint is that...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that... / The underlying mechanism for this second point is...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    body2Structure: [
      { no: 1, function: 'Point 1', template: 'On the other hand, the primary counter-argument against my stance is that...' },
      { no: 2, function: 'Explanation', template: 'This is largely attributed to the belief that... / This concern stems from the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, opponents often cite cases like... where...' },
      { no: 4, function: 'Point 2', template: 'Despite this, my view remains stronger because this argument fails to consider that... (Phản bác)' },
      { no: 5, function: 'Explanation', template: 'In other words, the consequence of this failure is... / This is flawed because...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    topics: [
      { title: 'Technology & Employment', question: 'The rapid development of artificial intelligence (AI) and automation is a positive trend that will improve human lives. To what extent do you agree or disagree?', vocab: 'inevitable transition, labor-intensive tasks, productivity enhancement, economic growth, socioeconomic disparity, initial job displacement, retraining initiatives, ethical concerns.', exampleSentenceBody1: 'To begin with, one strong argument supporting my agreement is that AI facilitates an inevitable transition away from labor-intensive tasks.', exampleSentenceBody2: 'Despite the clear advantages, the primary counter-argument against full agreement is that this shift causes initial job displacement and socioeconomic disparity.' },
      { title: 'Traditional Skills', question: 'Children should be taught practical skills, such as cooking and mending clothes, in school. Do you agree or disagree?', vocab: 'self-sufficiency, domestic capabilities, curriculum overload, academic focus.', exampleSentenceBody1: 'To begin with, one strong argument supporting my agreement is that teaching practical skills like cooking fosters self-sufficiency from a young age.', exampleSentenceBody2: 'On the other hand, the primary counter-argument is that adding these subjects could lead to curriculum overload, detracting from core academic subjects.' },
      { title: 'Government Spending', question: 'Government spending on arts and culture should be reduced, and more money should be spent on education and healthcare. To what extent do you agree or disagree?', vocab: 'fiscal priority, societal well-being, cultural heritage, national identity.', exampleSentenceBody1: 'To begin with, one strong argument supporting my agreement is that prioritizing education and healthcare directly improves societal well-being.', exampleSentenceBody2: 'Despite this, my view is challenged by the argument that reducing arts funding can damage a nation\'s cultural heritage and identity.' },
      { title: 'Travel & Culture', question: 'International travel is having a negative effect on local cultures and environments. Do you agree or disagree?', vocab: 'cultural homogenization, environmental degradation, economic dependency, cultural exchange.', exampleSentenceBody1: 'To begin with, one strong argument supporting my agreement is that mass tourism often leads to cultural homogenization and environmental degradation.', exampleSentenceBody2: 'On the other hand, the primary counter-argument is that international travel fosters valuable cultural exchange and provides economic benefits to local communities.' },
    ],
  },
  {
    type: 'Discussion (Thảo luận hai mặt)',
    body1Structure: [
      { no: 1, function: 'Point 1', template: 'To begin with, those who believe that... often point to the fact that...' },
      { no: 2, function: 'Explanation', template: 'This is primarily due to the fact that... / This perspective is based on the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, a relevant example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'Furthermore, proponents of this view also highlight that...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that... / The underlying mechanism for this second point is...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    body2Structure: [
      { no: 1, function: 'Point 1', template: 'Conversely, the opposing view holds that... and the primary reason for this is that...' },
      { no: 2, function: 'Explanation', template: 'This argument stems from the idea that... / This is largely due to the concerns about...' },
      { no: 3, function: 'Example', template: 'For instance, a clear illustration of the negative impacts can be seen in...' },
      { no: 4, function: 'Point 2', template: 'In addition, critics of the first viewpoint often argue that...' },
      { no: 5, function: 'Explanation', template: 'In other words, this perspective suggests that... / This implies a potential risk of...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    topics: [
      { title: 'Education', question: 'Some people believe that schools should focus on academic subjects, while others think they should focus on practical life skills. Discuss both these views and give your own opinion.', vocab: 'holistic development, vocational training, intellectual rigor, abstract reasoning.', exampleSentenceBody1: 'To begin with, those who believe that schools should prioritize academic subjects often point to the fact that this approach develops intellectual rigor and abstract reasoning.', exampleSentenceBody2: 'Conversely, the opposing view holds that focusing on practical skills is more beneficial, and the primary reason for this is its direct applicability to students\' future lives.' },
      { title: 'Crime & Punishment', question: 'Some people think that the main purpose of prisons is to punish the criminal, while others believe it is to reform them. Discuss both these views and give your own opinion.', vocab: 'retributive justice, deterrent effect, rehabilitation programs, societal reintegration.', exampleSentenceBody1: 'To begin with, those who believe that prisons serve primarily to punish criminals often point to the concept of retributive justice and its deterrent effect.', exampleSentenceBody2: 'Conversely, the opposing view holds that the main purpose is reform, and the primary reason is to facilitate the successful societal reintegration of offenders.' },
      { title: 'Urban Living', question: 'Some people prefer to live in large cities, while others believe that life in a small town or the countryside is better. Discuss both these views and give your own opinion.', vocab: 'vibrant cultural hubs, career advancement, diverse employment opportunities, infrastructure investment, close-knit community, sense of belonging, reduced cost of living, tranquil environment.', exampleSentenceBody1: 'To begin with, those who believe that city life is superior often point to the fact that major cities function as vibrant cultural hubs and centres for career advancement.', exampleSentenceBody2: 'Conversely, the opposing view holds that the countryside is better, and the primary reason for this is the promotion of a close-knit community and tranquil environment.' },
    ],
  },
  {
    type: 'Advantages and Disadvantages',
    body1Structure: [
      { no: 1, function: 'Point 1', template: 'To begin with, one significant advantage associated with... is that...' },
      { no: 2, function: 'Explanation', template: 'This is primarily due to the fact that... / This perspective is based on the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, a relevant example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'Furthermore, another crucial benefit that must be highlighted is...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that... / The underlying mechanism for this second point is...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    body2Structure: [
      { no: 1, function: 'Point 1', template: 'On the other hand, the most concerning disadvantage related to... is that...' },
      { no: 2, function: 'Explanation', template: 'This is largely attributed to the problem of... / This concern stems from the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, studies have often shown a link between... and...' },
      { no: 4, function: 'Point 2', template: 'In addition, this trend also presents a risk regarding...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that the consequences of... are...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    topics: [
      { title: 'Working Arrangement', question: 'Many companies now allow employees to work from home. Do the advantages of this outweigh the disadvantages?', vocab: 'flexible schedule, work-life balance, reduced overheads, professional isolation.', exampleSentenceBody1: 'To begin with, one significant advantage associated with working from home is the increased flexibility it offers employees, promoting a better work-life balance.', exampleSentenceBody2: 'On the other hand, the most concerning disadvantage is the potential for professional isolation and a weakened company culture.' },
      { title: 'Online Shopping', question: 'The growth of online shopping has had an impact on society. Do the advantages of online shopping outweigh the disadvantages?', vocab: 'unprecedented convenience, market transparency, geographical barriers, consumer autonomy, decline of brick-and-mortar stores, job security, impulsive consumption, data privacy breaches.', exampleSentenceBody1: 'To begin with, one significant advantage associated with online shopping is the unprecedented convenience it offers consumers, overcoming geographical barriers.', exampleSentenceBody2: 'On the other hand, the most concerning disadvantage related to this trend is the decline of brick-and-mortar stores and subsequent threat to job security.' },
    ],
  },
   {
    type: 'Problem and Solution',
    body1Structure: [
      { no: 1, function: 'Point 1', template: 'To begin with, one significant cause of this widespread problem is the failure of... to...' },
      { no: 2, function: 'Explanation', template: 'This is primarily due to the fact that... / This perspective is based on the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, a relevant example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'Furthermore, the prevalence of this issue is also linked to...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that... / The underlying mechanism for this second point is...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    body2Structure: [
      { no: 1, function: 'Point 1', template: 'Fortunately, one viable solution that governments/individuals should implement is to...' },
      { no: 2, function: 'Explanation', template: 'This is crucial because it would immediately address the root cause of...' },
      { no: 3, function: 'Example', template: 'For instance, a clear example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'In addition, another crucial measure that could mitigate this problem is to...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that the consequences of... can be overcome by...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    topics: [
        { title: 'Childhood Obesity', question: 'Childhood obesity rates are increasing globally. What are the causes of this problem, and what solutions do you suggest?', vocab: 'sedentary lifestyle, processed food consumption, inadequate parental supervision, lack of recreational facilities, public health campaigns, nutritional education, subsidize healthy food, regulatory framework.', exampleSentenceBody1: 'To begin with, one significant cause of this widespread problem is the prevalence of a sedentary lifestyle combined with increased processed food consumption.', exampleSentenceBody2: 'Fortunately, one viable solution that governments/schools should implement is to integrate comprehensive nutritional education into the school curriculum.' },
    ],
  },
  {
    type: 'Double Question',
    body1Structure: [
      { no: 1, function: 'Point 1', template: 'To begin with, the primary factor that accounts for the rise of... is that... (Trả lời Q1)' },
      { no: 2, function: 'Explanation', template: 'This is primarily due to the fact that... / This perspective is based on the idea that...' },
      { no: 3, function: 'Example', template: 'For instance, a relevant example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'Furthermore, another significant reason behind this phenomenon is...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that... / The underlying mechanism for this second point is...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    body2Structure: [
      { no: 1, function: 'Point 1', template: 'Regarding the implications/solutions, one major consequence/step that must be taken is... (Trả lời Q2)' },
      { no: 2, function: 'Explanation', template: 'This is crucial because it would immediately address the root cause of...' },
      { no: 3, function: 'Example', template: 'For instance, a clear example of this can be observed in... where...' },
      { no: 4, function: 'Point 2', template: 'In addition, another crucial measure/impact related to this issue is...' },
      { no: 5, function: 'Explanation', template: 'In other words, this implies that the consequences of... are...' },
      { no: 6, function: 'Example', template: 'A clear illustration of this can be seen in... / To cite an example, data suggests that...' },
    ],
    topics: [
      { title: 'Art & Technology', question: 'More people are engaging with art and music through digital media rather than attending live performances. Why is this the case, and what effect does it have on the traditional arts?', vocab: 'digital accessibility, dissemination of art, virtual platforms, user-friendly interfaces, artistic evolution, funding cuts, decline in attendance, preservation of traditional formats.', exampleSentenceBody1: 'To begin with, the primary factor that accounts for the shift to digital engagement is the digital accessibility and ease of dissemination of art via virtual platforms.', exampleSentenceBody2: 'Regarding the effect on the traditional arts, one major consequence is the potential for funding cuts and a decline in attendance at live events.' },
    ],
  },
];
