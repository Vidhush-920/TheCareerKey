const STORAGE_PREFIX = 'ckt-';

function getStorageItem(key, defaultValue) {
    const storedValue = localStorage.getItem(STORAGE_PREFIX + key);
    if (storedValue === null) return defaultValue;
    try {
        // For non-JSON values, or if parsing fails, return the raw value if it's not 'undefined' or 'null' string
        const parsed = JSON.parse(storedValue);
        return parsed;
    } catch (e) {
        return storedValue; // It's likely a plain string like 'en' or '1'
    }
}

function getStorageJson(key, defaultValue) {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    try {
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error(`Failed to parse JSON for key ${key}:`, e);
        return defaultValue;
    }
}

let lang = getStorageItem('lang', 'en');
let page = getStorageItem('page', 1);
let progress = getStorageItem('progress', 0);

const defaultPerson = { personName: '', personNIC: '' };
let person = getStorageJson('person', defaultPerson);

const defaultResults = { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 0 };
let results_section1 = getStorageJson('results_section1', { ...defaultResults });
let results_section2 = getStorageJson('results_section2', { ...defaultResults });
let results_overall = getStorageJson('results_overall', { ...defaultResults });

const defaultCompleted = { section1: {}, section2: {} };
let completedQuestions = getStorageJson('completedQuestions', defaultCompleted);

let recordDate = getStorageItem('recordDate', '');

// Languages
let translations = {
    en: {
        langLabel: 'English',
        langFlag: 'gb',
        pageOneTitle: 'The Career Key',
        pageOnePara1: 'By identifying Your Personal traits and Interests, you can choose a Career Field that best suits you. Take the following Assessment to identify career fields that align with your strengths and aspirations.',
        pageOneBox1Title: 'You',
        pageOneBox1Description: 'Your needs values, abilities, skills, interests, and aspirations.',
        pageOneBox2Title: 'Occupation',
        pageOneBox2Description: 'The job’s demands and potential for satisfying your needs',
        pageOnePara2: 'The Career Key Assessment simplifies the matching process by guiding you to understand your interests and strengths. It helps you identify the careers most likely to bring you satisfaction and success.',
        pageOnePara3: 'To Start the assessment, Please Fill the form below and Click on the \'Start\' button.',
        pageOneButton: 'Start',
        pageOneNameError: 'Please add your Name!',
        pageOneNICError: 'Please add your NIC Number!',
        pageOneNICInvalidError: 'Invalid NIC Number!',
        pageOneCopyRightL1: 'By Lawrence K.Jones, Ph.D, NCC.',
        pageOneCopyRightL2: 'Arranged by Dr. Keerthi Premadasa & Mr. Ajith Jayawardhane from Career Guidance Unit of University of Colombo.',
        pageTwoTitle: 'How do you See Yourself?',
        pageTwoDescription: 'Read each statement carefully and decide how accurately it describes you. Please select the most appropriate option for each statement.',
        pageTwoInstructionText: 'Rate how well a particular statement describes you and accordingly Select',
        pageTwoInstr1: '<b>option 2</b> if the statement describes you <b>very well</b>',
        pageTwoInstr2: '<b>option 1</b> if it describes <b>you somewhat well</b>, or',
        pageTwoInstr3: '<b>option 0</b> if it does not describe you well/<b>does not apply</b> to you.',
        pageTwoExit: 'Exit',
        pageTwoNext: 'Next',
        pageTwoError: 'Please answer all the questions!',
        pageThreeTitle: 'Appealing Occupations',
        pageThreeDescription: 'Review the list of occupations given below and select the ones that appeal to you. For each occupation, Please choose the most appropriate response from given options.',
        pageThreeInstructionText: 'Rate how well a particular occupation is desirable or useful to you and accordingly select',
        pageThreeInstr1: '<b>option 2</b> if the occupation is in <b>any way desirable or useful to you</b>,',
        pageThreeInstr2: '<b>option 1</b> if it is <b>likely to be useful to you</b>, or',
        pageThreeInstr3: '<b>option 0</b> if it is <b>undesirable, useless, or you are undecided.</b>',
        pageThreeExit: 'Exit',
        pageThreeBack: 'Back',
        pageThreeNext: 'See Results',
        pageThreeError: 'Please answer all the questions!',
        pageFourTitle: 'Your Career Key',
        pageFourPersonNameLabel: 'Name :',
        pageFourPersonNICLabel: 'NIC No :',
        pageFourDateLabel: 'Date :',
        pageFourResultsTableTitle: 'Career Key Results',
        pageFourResultsTableDescription: 'According to Dr.John Holland’s Career Key Theory, individuals generally fall into six personality types given below. The top three types in which you score the highest represent the dominant aspects of your career personality. These results help indicate the types of work environments and occupations you are most likely to prefer and succeed in.',
        pageFourTotalLabel: 'Total',
        pageFourChartTitle: 'Career Key Chart',
        pageFourChartPersonType: 'Your Career Key based Personality Type: ',
        pageFourError: 'Not ready for the interpretation',
        pageFourNotesTitle: 'Career Counselling Notes',
        pageFourDownload: 'Download Results',
        pageFourNew: 'Start New Test',
        pageFiveTitle: 'Your Career Key',
        pageFivePersonNameLabel: 'Name :',
        pageFivePersonNICLabel: 'NIC No :',
        pageFiveDateLabel: 'Date :',
        pageFiveResultsTableTitle: 'Career Key Results',
        pageFiveResultsTableDescription: 'According to Dr.John Holland’s Career Key Theory, individuals generally fall into six personality types given below. The top three types in which you score the highest represent the dominant aspects of your career personality. These results help indicate the types of work environments and occupations you are most likely to prefer and succeed in.',
        pageFiveTotalLabel: 'Total',
        pageFiveChartTitle: 'Career Key Chart',
        pageFiveChartPersonType: 'Your Career Key based Personality Type: ',
        pageFiveError: 'Not ready for the interpretation',
        pageFiveNotesTitle: 'Career Counselling Notes',
        pageFiveDownload: 'Download Results',
        pageFiveNew: 'Start New Test',
        question1r1: 'I like to work with tools, machines and animals.',
        question1r2: 'Compared to others my age, I have good skills in working with tools, mechanical drawings, machines, or animals.',
        question1r3: 'I value practical things you can see or touch and use like plants you can grow and animals, or things you can build or make better.',
        question1r4: 'I am realistic and like practical and machinery things.',
        question1i1: 'I like to study and solve mathematics and scientific queries.',
        question1i2: 'I am good at understanding and solving science and math problems, compared to others my age.',
        question1i3: 'I value science.',
        question1i4: 'I am a precise, scientific, and intellectual.',
        question1a1: 'I like to do creative things like art, drama, crafts, dance, music or creative writing.',
        question1a2: 'Compared to others my age, I have good artistic abilities in writing, drama, crafts, music, or art.',
        question1a3: 'I value the creative arts like drama, music and art, or the works of creative writers.',
        question1a4: 'I am artistic, imaginative, original, and independent.',
        question1s1: 'I like to do things where I can help people: like teaching, first aid, or giving information.',
        question1s2: 'Compared to persons my age, I am good at teaching, counselling, nursing, or giving information.',
        question1s3: 'I value helping people and solving social problems.',
        question1s4: 'I am helpful, friendly, and trustworthy.',
        question1e1: 'I like to lead and persuade people, and to sell things or ideas.',
        question1e2: 'Compared to persons my age, I am good at leading people and selling things or ideas.',
        question1e3: 'I value success in politics, leadership or business.',
        question1e4: 'I am energetic, ambitions and sociable.',
        question1c1: 'I like to work with numbers, records, or machines in a set, orderly way.',
        question1c2: 'Compared to persons my age, I am good at working with written records and numbers in a systematic, orderly way.',
        question1c3: 'I value success in business.',
        question1c4: 'I am orderly, and good at following set plan.',
        question2r01: 'Bus Driver',
        question2r02: 'Truck Mechanic',
        question2r03: 'Carpenter',
        question2s04: 'Physical Therapist',
        question2s05: 'Counsellor',
        question2s06: 'Social Worker',
        question2r07: 'Fish & Farm Warden',
        question2r08: 'Airplane Pilot',
        question2r09: 'Mechanical Engineer',
        question2s10: 'Librarian',
        question2s11: 'Speech Therapist',
        question2s12: 'Teacher',
        question2r13: 'Farmer',
        question2c14: 'Bank Examiner',
        question2c15: 'Tax Expert',
        question2s16: 'Nurse',
        question2a17: 'Actor/Actress',
        question2a18: 'Novelist',
        question2c19: 'Insurance Clerk',
        question2c20: 'Bookkeeper',
        question2c21: 'Business Teacher',
        question2a22: 'Clothes Designer',
        question2a23: 'Artist',
        question2a24: 'Singer',
        question2c25: 'Court Stenographer',
        question2e26: 'Sales Manager',
        question2e27: 'Salesperson',
        question2a28: 'Dancer',
        question2i29: 'Chemist',
        question2i30: 'Electrical Engineer',
        question2c31: 'Bank Teller',
        question2e32: 'Apartment Manager',
        question2e33: 'Restaurant Manager',
        question2a34: 'Musician',
        question2i35: 'Astronomer',
        question2i36: 'Chemical Technician',
        question2i37: 'Biologist',
        question2e38: 'Radio /TV Announcer',
        question2e39: 'Insurance Sales Agent',
        question2e40: 'Lawyer',
        question2i41: 'Laboratory Technician',
        question2i42: 'Research Scientist',
        entryTestModalLabel: 'Are you sure?',
        entryTestModalDescription: 'You have already recorded your answers for this test. Do you want to re-enter the test?',
        viewResultsModalButton: 'View Results',
        entryTestModalButton: 'Start Anyway',
        discardTestModalButton: 'Discard',
        exitTestModalLabel: 'Are you sure?',
        exitTestModalDescription: 'Please confirm that you want to exit from the test.',
        exitTestModalButton: 'Confirm',
        chartCols: ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional']
    },
    sn: {
        langLabel: 'සිංහල',
        langFlag: 'lk',
        pageOneTitle: 'වෘත්තීය යතුර',
        pageOnePara1: 'ඔබේ පෞද්ගලික ලක්ෂණ සහ රුචිකත්වයන් හඳුනා ගැනීමෙන්, ඔබට වඩාත් ගැලපෙන වෘත්තීය ක්ෂේත්‍රයක් තෝරා ගත හැකිය. ඔබේ ශක්තීන් සහ අභිලාෂයන් සමඟ සමපාත වන වෘත්තීය ක්ෂේත්‍ර හඳුනා ගැනීමට පහත තක්සේරුව ගන්න.',
        pageOneBox1Title: 'ඔබ',
        pageOneBox1Description: 'ඔබේ අවශ්‍යතා, අගයන්, දක්ෂතාවන්, හැකියාවන්, රුචිකත්වයන්, සහ අභිලාෂයන්',
        pageOneBox2Title: 'රැකියාව',
        pageOneBox2Description: 'ඔබේ අවශ්‍යතාව තෘප්තිමත් කිරීම සඳහා රැකියාවේ ඉල්ලුම සහ විභව්‍යතාව',
        pageOnePara2: 'වෘත්තීය යතුර තක්සේරුව ඔබේ රුචිකත්වයන් සහ ශක්තීන් තේරුම් ගැනීමට මඟ පෙන්වීමෙන් සංසන්දන ක්‍රියාවලිය සරල කරයි. මෙය ඔබට තෘප්තිය සහ සාර්ථකත්වය ගෙන ඒමට ඉඩ ඇති වෘත්තීන් හඳුනා ගැනීමට උපකාරී වේ.',
        pageOnePara3: 'තක්සේරුව ආරම්භ කිරීමට, පහත පෝරමය පුරවා \'ආරම්භක\' බොත්තම ක්ලික් කරන්න.',
        pageOneButton: 'ආරම්භ කරන්න',
        pageOneNameError: 'කරුණාකර ඔබේ නම සඳහන් කරන්න!',
        pageOneNICError: 'කරුණාකර ඔබේ ජා.හැ. අංකය සඳහන් කරන්න!',
        pageOneNICInvalidError: 'අවලංගු ජා.හැ. අංකයක්!',
        pageOneCopyRightL1: 'Lawrence K’Jones, Ph.D, NCC ගේ The Career Key ඇසුරෙන්',
        pageOneCopyRightL2: 'කොළඹ විශ්ව විද්‍යාලයේ වෘත්තීය මාර්ගෝපදේශ ඒකකයේ ආචාර්ය කීර්ති ප්‍රේමදාස හා අජිත් ජයවර්ධනගේ සැකසුමකි.',
        pageTwoTitle: 'ඔබ දෙස ඔබම බලන්නේ කෙසේද?',
        pageTwoDescription: 'පහත දැක්වෙන සෑම ප්‍රකාශයක්ම ප්‍රවේශමෙන් කියවා එය ඔබව කෙතරම් නිවැරදිව විස්තර කරන්නේද යන්න තීරණය කරන්න. එක් එක් ප්‍රකාශය වඩාත් හොඳින් විස්තර කරන විකල්පය තෝරන්න.',
        pageTwoInstructionText: 'කරුණාකර යම් ප්‍රකාශයක් ඔබව කොතරම් දුරට විස්තර කරනවාද යන්න ශ්‍රේණිගත කර, ඒ අනුව එම ප්‍රකාශය',
        pageTwoInstr1: 'ඔබව <b>ඉතා හොඳින් විස්තර කරන්නේ</b> නම් <b>විකල්පය 2</b>,',
        pageTwoInstr2: 'එය <b>ඔබව තරමක් හොඳින් විස්තර කරන්නේ</b> නම් <b>විකල්පය 1</b>,',
        pageTwoInstr3: 'නැතහොත් එය ඔබව <b>හොඳින් විස්තර නොකරන්නේ නම්/ඔබට අදාළ නොවේ නම්</b> <b>විකල්පය 0</b> තෝරන්න.',
        pageTwoExit: 'ඉවත් වන්න',
        pageTwoNext: 'ඊළඟ',
        pageTwoError: 'කරුණාකර සියලුම ප්‍රශ්න වලට පිළිතුරු සපයන්න!',
        pageThreeTitle: 'අභියාචනා වෘත්තීන්',
        pageThreeDescription: 'පහත දක්වා ඇති වෘත්තීන් ලැයිස්තුව සමාලෝචනය කර ඔබට උනන්දුවක් දක්වන ඒවා තෝරන්න. එක් එක් වෘත්තිය සඳහා ලබා දී ඇති විකල්ප වලින් වඩාත් සුදුසු පිළිතුර තෝරන්න.',
        pageThreeInstructionText: 'කරුණාකර යම් වෘත්තියක් ඔබට කොතරම් දුරට යෝග්‍ය හෝ ප්‍රයෝජනවත්ද යන්න ශ්‍රේණිගත කර, ඒ අනුව එම වෘත්තිය',
        pageThreeInstr1: 'ඔබට යම් <b>ආකාරයකින් යෝග්‍ය හෝ ප්‍රයෝජනවත්</b> නම් <b>විකල්ප 2</b>,',
        pageThreeInstr2: 'එය ඔබට <b>ප්‍රයෝජනවත් වීමට ඉඩ තිබේ</b> නම් <b>විකල්ප 1</b>,',
        pageThreeInstr3: 'නැතහොත් එය <b>නුසුදුසු, නිෂ්ඵල හෝ ඔබ තීරණය කර නොමැති</b> නම් <b>විකල්ප 0</b> තෝරන්න.',
        pageThreeExit: 'ඉවත් වන්න',
        pageThreeBack: 'ආපසු',
        pageThreeNext: 'ප්‍රතිඵල බලන්න',
        pageThreeError: 'කරුණාකර සියලුම ප්‍රශ්න වලට පිළිතුරු සපයන්න!',
        pageFourTitle: 'ඔබගේ වෘත්තීය යතුර',
        pageFourPersonNameLabel: 'නම :',
        pageFourPersonNICLabel: 'ජා.හැ. අංකය :',
        pageFourDateLabel: 'දිනය :',
        pageFourResultsTableTitle: 'වෘත්තීය යතුර ප්‍රතිඵලය',
        pageFourResultsTableDescription: 'ආචාර්ය ජෝන් හොලන්ඩ්ගේ වෘත්තීය යතුර න්‍යායට අනුව, පුද්ගලයන් සාමාන්‍යයෙන් පහත සඳහන් පෞරුෂ වර්ග හයකට වර්ගීකරණය කර ඇත. ඔබ වැඩිම ලකුණු ලබා ගන්නා ඉහළම වර්ග තුන ඔබේ වෘත්තීය පෞරුෂයේ ප්‍රමුඛ අංග දක්වයි. මෙම ප්‍රතිඵල මඟින් ඔබ සමෘද්ධිමත් වීමට සහ සාර්ථක වීමට වඩාත්ම ඉඩ ඇති වැඩ පරිසරයන් සහ වෘත්තීන් දැක්වීමට උපකාරී වේ.',
        pageFourTotalLabel: 'සමස්ත',
        pageFourChartTitle: 'වෘත්තීය යතුර ප්‍රස්ථාරය',
        pageFourChartPersonType: 'ඔබගේ වෘත්තීය යතුර මත පදනම් වූ පෞරුෂ වර්ගය : ',
        pageFourError: 'අර්ථකථනයට නුසුදුසුයි',
        pageFourNotesTitle: 'වෘත්තීය මාර්ගෝපදේශක සටහන්',
        pageFourDownload: 'ප්‍රතිඵලය බාගන්න',
        pageFourNew: 'නව පරීක්ෂණය ආරම්භ කරන්න',
        pageFiveTitle: 'ඔබගේ වෘත්තීය යතුර',
        pageFivePersonNameLabel: 'නම :',
        pageFivePersonNICLabel: 'ජා.හැ. අංකය :',
        pageFiveDateLabel: 'දිනය :',
        pageFiveResultsTableTitle: 'වෘත්තීය යතුර ප්‍රතිඵලය',
        pageFiveResultsTableDescription: 'ආචාර්ය ජෝන් හොලන්ඩ්ගේ වෘත්තීය යතුර න්‍යායට අනුව, පුද්ගලයන් සාමාන්‍යයෙන් පහත සඳහන් පෞරුෂ වර්ග හයකට වර්ගීකරණය කර ඇත. ඔබ වැඩිම ලකුණු ලබා ගන්නා ඉහළම වර්ග තුන ඔබේ වෘත්තීය පෞරුෂයේ ප්‍රමුඛ අංග දක්වයි. මෙම ප්‍රතිඵල මඟින් ඔබ සමෘද්ධිමත් වීමට සහ සාර්ථක වීමට වඩාත්ම ඉඩ ඇති වැඩ පරිසරයන් සහ වෘත්තීන් දැක්වීමට උපකාරී වේ.',
        pageFiveTotalLabel: 'සමස්ත',
        pageFiveChartTitle: 'වෘත්තීය යතුර ප්‍රස්ථාරය',
        pageFiveChartPersonType: 'ඔබගේ වෘත්තීය යතුර මත පදනම් වූ පෞරුෂ වර්ගය : ',
        pageFiveError: 'අර්ථකථනයට නුසුදුසුයි',
        pageFiveNotesTitle: 'වෘත්තීය මාර්ගෝපදේශක සටහන්',
        pageFiveDownload: 'ප්‍රතිඵලය බාගන්න',
        pageFiveNew: 'නව පරීක්ෂණය ආරම්භ කරන්න',
        question1r1: 'සතුන්, උපකරණ හෝ යන්ත්‍ර සූත්‍ර සමඟ වැඩ කිරීමට මා කැමතියි.',
        question1r2: 'මගේ වයසේ අනෙක් අය සමඟ සසදන විට මට උපකරණ, යන්ත්‍ර සූත්‍ර හෝ සතුන් සමඟ වැඩ කිරීමේ හා යාන්ත්‍රික ඇඳීම් ආදියේ ඉහළ හැකියාවක් ඇත.',
        question1r3: 'මම ප්‍රායෝගික දේ අගය කරමි. දැකිය හැකි ස්පර්ශ කළ හැකි ගස්වැල් හා සතුන් හදා වඩා ගන්නටත් වඩා හොඳින් ‍සාදන්නටත් කැමතිය.',
        question1r4: 'මා ප්‍රායෝගික, යාන්ත්‍රික දේට කැමති අතර යථාර්ථවාදිය.',
        question1i1: 'මා ගණිතය හෝ විද්‍යා ගැටලු ඉගෙන ගැනීමට හා විසදීමට කැමතියි.',
        question1i2: 'මගේ වයසේ අනෙක් අයට සාපේක්ෂව මට ගණිත හා විද්‍යා ගැටලු අවබෝධ කර ගැනීමේ හා ඒවා විසඳීමේ ඉහළ හැකියාවක් ඇත.',
        question1i3: 'මා විද්‍යාව අගය කරනවා.',
        question1i4: 'මා සූක්‍ෂ්ම, විද්‍යාත්මක හා බුද්ධිමත් අයෙකි.',
        question1a1: 'මා චිත්‍ර, නාට්‍ය, කලා ශිල්ප, නැටුම්, සංගීතය හෝ නිර්මාණාත්මක ‍ලේඛනය වැනි නිර්මාණශීලි දේ කිරීමට කැමතිය.',
        question1a2: 'මාගේ වයසේ අනෙක් අයට සාපේක්‍ෂව නිර්මාණාත්මක ලේඛනය, නාට්‍ය, කලා ශිල්ප, සංගීතය, චිත්‍ර වැනි ක්‍ෂේත්‍රයන්හි ඉහළ කුසලතාවක් මට ඇත.',
        question1a3: 'නිර්මාණශීලි ලේඛකයන් අතින් බිහි වූ නාට්‍ය සංගීත, චිත්‍ර වැනි නිර්මාණාත්මක කලා කටයුතු මම අගය කරමි.',
        question1a4: 'මා ප්‍රතිභා සම්පන්න කලාත්මක, පරිකල්පනාත්මක හැකියාවක් ඇති ස්වාධීන අයෙකි.',
        question1s1: 'ඉගැන්වීම, ප්‍රථමාධාර දීම, තොරතුරු සපයා දීම වැනි මිනිසුන්ට උදව් කළ හැකි දේ කිරීමට මා කැමතියි.',
        question1s2: 'මගේ වයසේ අනෙක් අයට සාපේක්‍ෂව මා ඉගැන්වීම, උපදේශනය, උපස්ථානය හෝ තොරතුරු සැපයීම වැනි ක්‍ෂේත්‍රයන්හි විශේෂ දක්ෂතාවක් දක්වයි.',
        question1s3: 'මම මිනිස්සුන්ට උදව් කිරිම හා සමාජ ප්‍රශ්න විසඳීම අගය කොට සලකමි.',
        question1s4: 'මා අන්‍යයන්ට උපකාර වන, මිත්‍රශීලි හා විශ්වාසවන්ත අයෙකි.',
        question1e1: 'මා මිනිසුන්ට නායකත්වය දීමට සහ ඔවුන්ව මෙහෙයවීමටත් අදහස් ‍හා දේවල් විකිණීමටත් ඉහළ හැකියාවෙන්‍ යුතු අයෙකි.',
        question1e2: 'මගේ වයසේ අනිත් අය සමඟ සසඳන විට මා මිනිසුන් පාලනය කිරිමේ සහ දේවල් විකිණීමේ හැකියාවන්ගෙන් ඉහළ තත්ත්වයක සිටී.',
        question1e3: 'මම දේශපාලනය, නායකත්වය හා ව්‍යාපාර අගය කරමි.',
        question1e4: 'මා උද්‍යෝගිමත් අධිෂ්ඨානශීලි හා සමාජශීලි අයෙකි.',
        question1c1: 'මම ක්‍රමානුකූලව සංඛ්‍යා, වාර්තා හෝ යන්ත්‍ර සූත්‍ර සමග වැඩ කිරීමට කැමැත්තෙමි.',
        question1c2: 'මගේ වයසේ අනිත් අය සමග සසදන විට මා පිළිවෙලට හා ක්‍රමානුකූලව, සංඛ්‍යා, ලිඛිත වාර්තා සමග වැඩ කිරිමේ සුදුසු තත්ත්වයෙන් ඉහළයි.',
        question1c3: 'ව්‍යාපාර මගින් සාර්ථක වීම මම අගය කරමි.',
        question1c4: 'මා ක්‍රමානුකූල මෙන්ම සැලසුම් කළ දෙය හොඳින් අනුගමනය කිරිමේ හැකියාවෙන් යුක්තය.',
        question2r01: 'බස් රියදුරු',
        question2r02: 'ට්‍රක් රථ මෙහෙයවන්නා',
        question2r03: 'වඩු',
        question2s04: 'භෞත චිකිත්සක',
        question2s05: 'අනුශාසක',
        question2s06: 'සමාජසේවා',
        question2r07: 'මත්ස්‍ය/ගොවිපල පාලක',
        question2r08: 'අහස්යාත්‍රා පදවන්නා',
        question2r09: 'යාන්ත්‍රික ඉංජිනේරු',
        question2s10: 'පුස්තකාලයාධිපති',
        question2s11: 'භාෂා චිකිත්සක',
        question2s12: 'ගුරු වෘත්තීය',
        question2r13: 'ගොවි මහතා',
        question2c14: 'බැංකු පරීක්‍ෂක',
        question2c15: 'බදු විශේෂඥ',
        question2s16: 'සාත්තු හෙද',
        question2a17: 'නළු/නිළි',
        question2a18: 'නවකථා රචකයා',
        question2c19: 'රක්ෂණ ලිපිකරු',
        question2c20: 'පොත් තබන්නා',
        question2c21: 'ව්‍යාපාර ගුරු',
        question2a22: 'රෙදි නිර්මාණකරු',
        question2a23: 'චිත්‍ර ශිල්පි',
        question2a24: 'ගායක',
        question2c25: 'උසාවි ලඝුලේඛිකා',
        question2e26: 'වෙළඳ කළමනාකරු',
        question2e27: 'වෙළඳ නියෝජිත',
        question2a28: 'නැටුම් ශිල්පි',
        question2i29: 'රසායනඥ',
        question2i30: 'විදුලි ඉංජිනේරු',
        question2c31: 'බැංකුවේ මුදල් ගණන් කරන්නා',
        question2e32: 'නවාතැන් කළමනාකරු',
        question2e33: 'නිවාඩු නිකේතන කළමනාකරු',
        question2a34: 'සංගීතඥයා',
        question2i35: 'තාරකා ශාස්ත්‍රඥයා',
        question2i36: 'රසායන තාක්‍ෂණ ශිල්පී',
        question2i37: 'ජීව විද්‍යාඥයා',
        question2e38: 'ගුවන් විදුලි/රූපවාහිනී නිවේදක',
        question2e39: 'රක්ෂණ වෙළඳ නියෝජිත',
        question2e40: 'නීතිඥයා',
        question2i41: 'විද්‍යාගාර තාක්‍ෂණ ශිල්පී',
        question2i42: 'පර්යේෂණාත්මක විද්‍යාඥ',
        entryTestModalLabel: 'ඔබට විශ්වාසද?',
        entryTestModalDescription: 'ඔබ මෙම පරීක්ෂණයට ඔබේ පිළිතුරු දායක කර ඇති බව දැනගන්නෙමු. ඔබට පරීක්ෂණයට නැවත ඇතුළු වීමට අවශ්‍යද?',
        viewResultsModalButton: 'ප්‍රතිඵල බලන්න',
        entryTestModalButton: 'නැවත ආරම්භ කරන්න',
        discardTestModalButton: 'අවලංගු කරන්න',
        exitTestModalLabel: 'ඔබට විශ්වාසද?',
        exitTestModalDescription: 'ඔබට පරීක්ෂණයෙන් ඉවත් වීමට අවශ්‍ය බව කරුණාකර තහවුරු කරන්න.',
        exitTestModalButton: 'තහවුරු කරන්න',
        chartCols: ['යථාර්ථ නිරූපිත', 'විමර්ශනාත්මක', 'කලාත්මක', 'සමාජීය', 'ධෛර්ය සම්පන්න', 'චාරිත්‍රානුකූල']
    },
    tm: {
        langLabel: 'தமிழ்',
        langFlag: 'in',
        pageOneTitle: 'தொழிலுக்கான திறவுகோல்',
        pageOnePara1: 'உங்கள் தனிப்பட்ட பண்புகள் மற்றும் ஆர்வங்களை அடையாளம் காண்பதன் மூலம், உங்களுக்கு மிகவும் பொருத்தமான ஒரு தொழில் துறையை நீங்கள் தேர்வு செய்யலாம். உங்கள் பலம் மற்றும் அபிலாஷைகளுடன் ஒத்துப்போகும் தொழில் துறைகளை அடையாளம் காண பின்வரும் மதிப்பீட்டை மேற்கொள்ளுங்கள்.',
        pageOneBox1Title: 'தாங்கள்',
        pageOneBox1Description: 'தங்களது தேவை, பெறுமதிகள், திறமைகள், இயலுமைகள், ஆர்வங்கள், மற்றும் எதிர்பார்ப்புக்கள்',
        pageOneBox2Title: 'தொழில்',
        pageOneBox2Description: 'தங்களது தேவைகளைத் திருப்திப்படுத்துவதற்கான தொழிலுக்கான கேள்விகள் மற்றும் இயலுமைகள்',
        pageOnePara2: 'தொழிலுக்கான திறவுகோல் மதிப்பீடு உங்கள் ஆர்வங்கள் மற்றும் பலங்களைப் புரிந்துகொள்ள வழிகாட்டுவதன் மூலம் ஒப்பீட்டு செயல்முறையை எளிதாக்குகிறது. இது உங்களுக்கு திருப்தியையும் வெற்றியையும் தரக்கூடிய தொழில்களை அடையாளம் காண உதவுகிறது.',
        pageOnePara3: 'மதிப்பீட்டைத் தொடங்க, கீழே உள்ள படிவத்தை நிரப்பி \'தொடங்கவும்\' பொத்தானைக் கிளிக் செய்யவும்.',
        pageOneButton: 'தொடங்கவும்',
        pageOneNameError: 'உங்கள் பெயரைச் சேர்க்கவும்!',
        pageOneNICError: 'உங்கள் தே.அ.அ. எண்ணைச் சேர்க்கவும்!',
        pageOneNICInvalidError: 'தவறான தே.அ.அ. எண்!',
        pageOneCopyRightL1: 'Lawrence K’Jones, Ph.D, NCC இன் The Career Key ஊடாக ',
        pageOneCopyRightL2: 'கொழும்பு பல்கலைக்கழகத்தின் தொழில் வழிகாட்டல் ஆலோசனைப் பிரிவின். விரிவுரையாளர் கீர்த்தி பிரேமதாஸ மற்றும் அஜித் ஜயவர்த்தன ஆகியோரின் ஆக்கமாகும்.',
        pageTwoTitle: 'உங்களை எப்படிப் பார்க்கிறீர்கள்?',
        pageTwoDescription: 'கீழே உள்ள ஒவ்வொரு கூற்றையும் கவனமாகப் படித்து, அது உங்களை எவ்வளவு துல்லியமாக விவரிக்கிறது என்பதை முடிவு செய்யுங்கள். ஒவ்வொரு கூற்றுக்கும் மிகவும் பொருத்தமான விருப்பத்தைத் தேர்ந்தெடுக்கவும்.',
        pageTwoInstructionText: 'ஒரு குறிப்பிட்ட கூற்று உங்களை எந்த அளவிற்கு விபரிக்கின்றது என்பதை நீங்கள் மதிப்பிட்டு அதற்கேற்ப அக்கூற்று ',
        pageTwoInstr1: 'உங்களை <b>மிகச்சரியாக விபரிப்பின்</b> <b>விருப்பம் 2</b> ஐ ',
        pageTwoInstr2: 'அல்லது <b>ஓரளவு சரியாக விபரிப்பின்</b> <b>விருப்பம் 1</b> ஐ ',
        pageTwoInstr3: 'அல்லது <b>சரியாக விபரிக்காவிடின் / உங்களுக்கு பொருந்தாவிடின்</b> <b>விருப்பம் 0</b> ஐ தேர்வு செய்யவும்.',
        pageTwoExit: 'வெளியேறவும்',
        pageTwoNext: 'அடுத்து',
        pageTwoError: 'எல்லா கேள்விகளுக்கும் பதிலளிக்கவும்!',
        pageThreeTitle: 'மேல்முறையீட்டு தொழில்கள்',
        pageThreeDescription: 'கீழே கொடுக்கப்பட்டுள்ள தொழில்களின் பட்டியலை மதிப்பாய்வு செய்து, உங்களுக்குப் பிடித்தமானவற்றைத் தேர்ந்தெடுக்கவும். ஒவ்வொரு தொழிலுக்கும் கொடுக்கப்பட்டுள்ள விருப்பங்களிலிருந்து மிகவும் பொருத்தமான பதிலைத் தேர்ந்தெடுக்கவும்.',
        pageThreeInstructionText: 'ஒரு குறிப்பிட்ட தொழில் உங்களுக்கு எந்த அளவிற்கு விருப்பமானது அல்லது பயன்படக்கூடியது என்பதை நீங்கள் மதிப்பிட்டு அதற்கேற்ப அத்தொழில் ',
        pageThreeInstr1: 'உங்களுக்கு <b>எவ்வகையிலேனும் விருப்பமானதும் பயன்மிக்கதுமாக</b> இருப்பின் <b>விருப்பம் 2</b> ஐயும், ',
        pageThreeInstr2: 'உங்களுக்கு <b>பயன்படக்கூடியது என ஊகிக்கக்கூடியதாக</b> இருப்பின் <b>விருப்பம் 1</b> ஐயும், ',
        pageThreeInstr3: 'உங்களுக்கு <b>விருப்பமற்றது, பயனற்றது, அல்லது உங்களால் தீர்மானம் எடுக்க முடியாததாக</b> இருப்பின் <b>விருப்பம் 0</b> ஐயும் தேர்ந்தெடுக்கவும்.',
        pageThreeExit: 'வெளியேறவும்',
        pageThreeBack: 'மீண்டும்',
        pageThreeNext: 'முடிவுகளைக் காண்க',
        pageThreeError: 'எல்லா கேள்விகளுக்கும் பதிலளிக்கவும்!',
        pageFourTitle: 'உங்கள் தொழிலுக்கான திறவுகோல்',
        pageFourPersonNameLabel: 'பெயர் :',
        pageFourPersonNICLabel: 'தே.அ.அ. எண் :',
        pageFourDateLabel: 'தேதி :',
        pageFourResultsTableTitle: 'தொழிலுக்கான திறவுகோல் முடிவுகள்',
        pageFourResultsTableDescription: 'டாக்டர் ஜோன் ஹோலான்ட் அவர்களின் தொழிலுக்கான திறவுகோல் கோட்பாட்டின் படி, தனிநபர்கள் பொதுவாக பின்வரும் ஆறு ஆளுமை வகைகளாக வகைப்படுத்தப்படுகிறார்கள். நீங்கள் அதிக மதிப்பெண் பெறும் முதல் மூன்று வகைகள் உங்கள் தொழில் ஆளுமையின் ஆதிக்க அம்சங்களைக் குறிக்கின்றன. இந்த முடிவுகள் நீங்கள் விரும்பும் மற்றும் வெற்றிபெற அதிக வாய்ப்புள்ள பணி சூழல்கள் மற்றும் தொழில்களின் வகைகளைக் குறிக்க உதவுகின்றன.',
        pageFourTotalLabel: 'மொத்தம்',
        pageFourChartTitle: 'தொழிலுக்கான திறவுகோல் விளக்கப்படம்',
        pageFourChartPersonType: 'உங்கள் தொழிலுக்கான திறவுகோல் அடிப்படையிலான ஆளுமை வகை: ',
        pageFourError: 'விளக்கத்திற்கு தயாராக இல்லை',
        pageFourNotesTitle: 'தொழில் ஆலோசனை குறிப்புகள்',
        pageFourDownload: 'முடிவுகளைப் பதிவிறக்குக',
        pageFiveNew: 'புதிய சோதனையைத் தொடங்கவும்',
        pageFiveTitle: 'உங்கள் தொழிலுக்கான திறவுகோல்',
        pageFivePersonNameLabel: 'பெயர் :',
        pageFivePersonNICLabel: 'தே.அ.அ. எண் :',
        pageFiveDateLabel: 'தேதி :',
        pageFiveResultsTableTitle: 'தொழிலுக்கான திறவுகோல் முடிவுகள்',
        pageFiveResultsTableDescription: 'டாக்டர் ஜோன் ஹோலான்ட் அவர்களின் தொழிலுக்கான திறவுகோல் கோட்பாட்டின் படி, தனிநபர்கள் பொதுவாக பின்வரும் ஆறு ஆளுமை வகைகளாக வகைப்படுத்தப்படுகிறார்கள். நீங்கள் அதிக மதிப்பெண் பெறும் முதல் மூன்று வகைகள் உங்கள் தொழில் ஆளுமையின் ஆதிக்க அம்சங்களைக் குறிக்கின்றன. இந்த முடிவுகள் நீங்கள் விரும்பும் மற்றும் வெற்றிபெற அதிக வாய்ப்புள்ள பணி சூழல்கள் மற்றும் தொழில்களின் வகைகளைக் குறிக்க உதவுகின்றன.',
        pageFiveTotalLabel: 'மொத்தம்',
        pageFiveChartTitle: 'தொழிலுக்கான திறவுகோல் விளக்கப்படம்',
        pageFiveChartPersonType: 'உங்கள் தொழிலுக்கான திறவுகோல் அடிப்படையிலான ஆளுமை வகை: ',
        pageFiveError: 'விளக்கத்திற்கு தயாராக இல்லை',
        pageFiveNotesTitle: 'தொழில் ஆலோசனை குறிப்புகள்',
        pageFiveDownload: 'முடிவுகளைப் பதிவிறக்குக',
        pageFiveNew: 'புதிய சோதனையைத் தொடங்கவும்',
        question1r1: 'நான் கருவிகள் இயந்திரங்கள் மற்றும் விலங்குகளுடன் வேலை செய்வதினை விரும்புகிறேன்.',
        question1r2: 'கருவிகள் இயந்திரங்கள் மற்றும் விலங்குகளுடன் வேலை செய்யும் எனது திறன் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1r3: 'நடைமுறை விடயங்களுக்கு பெறுமதியளித்தல் தாவர விலங்கு கருவிகள் உபகரணங்கள் மற்றும் இயந்திரங்களுடன் பார்த்து பயன்படுத்த என்னால் முடியும்.',
        question1r4: 'நான் யதார்த்தமான அத்துடன் இயந்திர மற்றும் நடைமுறை விடயங்களை விரும்புகிறேன்.',
        question1i1: 'நான் கணித மற்றும் அறிவியல் கேள்விகளை கற்கவும் தீர்வு காணவும் விருப்பம் உடையவர்.',
        question1i2: 'கணித மற்றும் அறிவியல் கேள்விகளை கற்கவும் தீர்வு காணக்கூடிய ஆற்றல் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1i3: 'நான் அறிவியல் விஞ்ஞானத்தை மெச்சுகிறேன்.',
        question1i4: 'நான் ஒரு அறிவியல் அறிவுடைய நபராவேன்.',
        question1a1: 'நான் கலை நாடகம் அழகியல் நடனம் இசை மற்றும் ஆக்கபூர்வமான எழுத்து போன்ற விடயங்களை விரும்புகிறேன்.',
        question1a2: 'கலை நாடகம் அழகியல் நடனம் இசை மற்றும் ஆக்கபூர்வமான எழுத்து போன்ற விடயங்கள் தொடா;பான எனது ஆற்றல் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1a3: 'நான் கலை நாடகம் அழகியல் நடனம் இசை மற்றும் ஆக்கபூர்வமான எழுத்து போன்ற விடயங்களை மெச்சுகிறேன்.',
        question1a4: 'நான் ஒரு சுயாதீன வெளிப்படையான திறமையான கலைஞர்.',
        question1s1: 'நான் கற்பித்தல் ஆலோசனை வழங்குதல் முதலுதவி அளித்தல் போன்ற மற்றவர்களுக்கு உதவக்கூடியவற்றை செய்ய விரும்புகிறேன்.',
        question1s2: 'நான் கற்பித்தல் ஆலோசனை வழங்குதல் முதலுதவி அளித்தல் போன்ற மற்றவர்களுக்குதவக்கூடியவற்றை செய்வதில் உள்ள எனது விசேட திறன் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1s3: 'நான் மக்களுக்கு உதவி செய்வதையும் சமூக பிரச்சனைகளை தீர்த்தல் போன்ற விடயங்களை மெச்சுகிறேன்.',
        question1s4: 'நான் நட்புடைய நம்பகமான மற்றவர்களை வழிநடத்தக் கூடிய நபராவேன்.',
        question1e1: 'நான் சிறந்த தலைமைத்துவ பண்பு மற்றும் பொருட்கள் எண்ணங்களை விற்பனை செய்யக் கூடிய ஆற்றல் உள்ளவர்.',
        question1e2: 'சிறந்த தலைமைத்துவ பண்பு மற்றும் பொருட்கள் எண்ணங்களை விற்பனை செய்யக் கூடிய ஆற்றல் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1e3: 'நான் அரசியல் தலைமைத்துவ பண்பு அல்லது வணிக வெற்றிகளை மெச்சுகிறேன்.',
        question1e4: 'நான் ஒரு துடிப்பான இலட்சிய மற்றும் சிநேகபூர்வமானவன்.',
        question1c1: 'நான் முறையாக இலக்கங்கள் அறிக்கைகள் மற்றும் இயந்திரங்களுடன் வேலை செய்வதனை விரும்புகிறேன்.',
        question1c2: 'நான் முறையாக இலக்கங்கள் அறிக்கைகள் மற்றும் இயந்திரங்களுடன் வேலை செய்யும் ஆற்றல் மற்ற சமனான வயதுடைய குழுக்களுடன் ஒப்பிடும் போது எனக்கு அதிகமாகும்.',
        question1c3: 'நான் வணிக வெற்றிகளை மெச்சுகிறேன்.',
        question1c4: 'நான் முறையான திட்டங்களை வகுக்கக் கூடிய நபராவேன்.',
        question2r01: 'பஸ் சாரதி',
        question2r02: 'ரக் வண்டி செயற்பாட்டாளர்',
        question2r03: 'தச்சன்',
        question2s04: 'பௌதீக சிகிச்சையாளர்',
        question2s05: 'உள ஆற்றுப்படுத்துனர்',
        question2s06: 'சமூக சேவையாளர்',
        question2r07: 'மீன் /பண்ணை நிர்வாகி',
        question2r08: 'விமானி',
        question2r09: 'இயந்திர பொறியிலாளர்',
        question2s10: 'நூலக பொறுப்பாளர்',
        question2s11: 'மொழிச்சிகிச்சையாளர்',
        question2s12: 'ஆசிரியர்',
        question2r13: 'விவசாயி',
        question2c14: 'வங்கிப் பரிசோதகர்',
        question2c15: 'வரி நிபுணர்',
        question2s16: 'தாதி உத்தியோகத்தர்',
        question2a17: 'நடிகர்/நடிகை',
        question2a18: 'நாவல் ஆசிரியர்',
        question2c19: 'காப்புறுதி எழுதுவினைஞர்',
        question2c20: 'கணக்குப்பதிவாளர்',
        question2c21: 'வர்த்தக ஆசிரியர்',
        question2a22: 'ஆடை தயாரிப்பாளர்',
        question2a23: 'சித்திரக் கலைஞர்',
        question2a24: 'பாடகர்',
        question2c25: 'நீதிமன்ற சுருக்கெழுத்தாளர்',
        question2e26: 'வர்த்தக முகாமையாளர்',
        question2e27: 'வர்த்தக பிரதிநிதி',
        question2a28: 'நடனக் கலைஞர்',
        question2i29: 'இரசாயனகூட ஆய்வாளர்',
        question2i30: 'மின் பொறியியலாளர்',
        question2c31: 'வங்கி நிதிக் கணிப்பீட்டாளர்',
        question2e32: 'தங்குமிட முகாமையாளர்',
        question2e33: 'விடுதி முகாமையாளர்',
        question2a34: 'இசையமைப்பாளர்',
        question2i35: 'விண்வெளி ஆய்வாளர்',
        question2i36: 'இரசாயன தொழில்நுடபவியலாளர்',
        question2i37: 'உயிரியல் விஞ்ஞானி',
        question2e38: 'வானொலி/தொலைக்காட்சி அறிவிப்பாளர்',
        question2e39: 'காப்புறுதி பிரதிநிதி',
        question2e40: 'சட்டத்தரணி',
        question2i41: 'விஞ்ஞான ஆய்வுகூட தொழில்நுட்பவியலாளர்',
        question2i42: 'ஆராய்ச்சி விஞ்ஞானி',
        entryTestModalLabel: 'நீங்கள் சொல்வது உறுதியா?',
        entryTestModalDescription: 'நீங்கள் இந்த சோதனையில் உங்கள் பதில்களை சமர்ப்பித்துள்ளீர்கள் என்பதை நாங்கள் அறிந்துகொள்கிறோம். நீங்கள் சோதனையில் மீண்டும் சேர விரும்புகிறீர்களா?',
        viewResultsModalButton: 'முடிவுகளைப் பார்க்கவும்',
        entryTestModalButton: 'மீண்டும் தொடங்கவும்',
        discardTestModalButton: 'நிராகரிக்கவும்',
        exitTestModalLabel: 'நீங்கள் சொல்வது உறுதியா?',
        exitTestModalDescription: 'நீங்கள் சோதனையிலிருந்து வெளியேற விரும்புகிறீர்கள் என்பதை உறுதிப்படுத்தவும்.',
        exitTestModalButton: 'உறுதிப்படுத்தவும்',
        chartCols: ['யதார்த்தமானது', 'விசாரணை', 'கலை', 'சமூக', 'தொழில்முனைவு', 'வழக்கமான']
    }
};

const chartColsEn = translations['en']['chartCols'];
let chartColsShort = chartColsEn.map(t => t.charAt(0).toUpperCase());

function changeLanguage(lang) {
    localStorage.setItem(STORAGE_PREFIX + 'lang', lang);
    $('.top_menu a').removeClass('active');
    $('#langSelect-' + lang).addClass('active');

    if (translations[lang]) {
        for (let key in translations[lang]) {
            const element = $('#' + key);
            if (element.length) {
                if (key.startsWith('pageTwoInstr') || key.startsWith('pageThreeInstr')) {
                    element.html(translations[lang][key]);
                } else {
                    element.text(translations[lang][key]);
                }
            }
        }

        // Set the flag image source directly using the 'langFlag' key
        $('img#langFlag').attr('src', 'assets/images/flags/' + translations[lang]['langFlag'] + '.png');
        
        // Safely handle array access
        const currentLang = localStorage.getItem(STORAGE_PREFIX + 'lang') || 'en';
        if(translations[currentLang]['chartCols']){
            const colNames = translations[currentLang]['chartCols'];
            $('#pageTwoRealistic').text(colNames[0]);
            $('#pageTwoInvestigative').text(colNames[1]);
            $('#pageTwoArtistic').text(colNames[2]);
            $('#pageTwoSocial').text(colNames[3]);
            $('#pageTwoEnterprising').text(colNames[4]);
            $('#pageTwoConventional').text(colNames[5]);

            updateTableHeadersForScreenSize();
            $(window).resize(function() {
                updateTableHeadersForScreenSize();
            });
        }
    }
}

function updateTableHeadersForScreenSize() {
    if (!chartColsEn) return;
    const currentLang = localStorage.getItem(STORAGE_PREFIX + 'lang') || 'en';
    const isSmallScreen = window.matchMedia("screen and (max-width: 1098px)").matches;
    const headers = isSmallScreen ? chartColsShort : translations[currentLang]['chartCols'];

    $('#page4 #resultsTableRealistic, #page5 #resultsTableRealistic').text(headers[0]);
    $('#page4 #resultsTableInvestigative, #page5 #resultsTableInvestigative').text(headers[1]);
    $('#page4 #resultsTableArtistic, #page5 #resultsTableArtistic').text(headers[2]);
    $('#page4 #resultsTableSocial, #page5 #resultsTableSocial').text(headers[3]);
    $('#page4 #resultsTableEnterprising, #page5 #resultsTableEnterprising').text(headers[4]);
    $('#page4 #resultsTableConventional, #page5 #resultsTableConventional').text(headers[5]);

    const lang = localStorage.getItem(STORAGE_PREFIX + 'lang');
    $('body').removeClass('lang-tm lang-sn');
    if (lang) {
        $('body').addClass('lang-' + lang);
    }
}

const oldNICRegex = /^[0-9]{9}[vVxX]$/; // Old NIC: 9 digits followed by V or X (case-insensitive)
const newNICRegex = /^[0-9]{12}$/; // New NIC: 12 digits

function validateNIC(nic) {
    if (!nic) return false;

    if (oldNICRegex.test(nic)) {
        return {
            isValid: true,
            type: 'Old'
        };
    } else if (newNICRegex.test(nic)) {
        return {
            isValid: true,
            type: 'New'
        };
    } else {
        return {
            isValid: false,
            type: 'Invalid'
        };
    }
}

function handleStartButtonClick() {
    // First validate the form
    if (!validatePageTwo()) { return; }

    // Get the NIC value
    const nicValue = $('#personNIC').val().trim();
    const emodal = document.getElementById('entryTestModal');

    // Check for previous attempts
    fetch('actions/check_previous_attempts.php?nic=' + encodeURIComponent(nicValue))
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.status === 'success' && data.hasPreviousAttempts) {
                $(emodal).modal('show');
            } else {
                $(emodal).modal('hide');
                changePage(2);
            }
        })
        .catch(error => {
            console.error('Error checking previous attempts:', error);
            $(emodal).modal('hide');
            changePage(2);
        });
}

function validatePageTwo() {
    const nameInput = $('#personName');
    const nicInput = $('#personNIC');
    const formDiv = $('#pageOneFormDiv');

    formDiv.removeClass('was-validated');
    nicInput.removeClass('is-invalid');

    $('#pageOneNICInvalidError').addClass('d-none');

    const nameValue = nameInput.val().trim();
    const nicValue = nicInput.val().trim();

    if ( nameValue === '' || nicValue === '') {
        formDiv.addClass('was-validated');
        return false;
    }
    if (nicValue !== '' && !validateNIC(nicValue).isValid) {
        nicInput.addClass('is-invalid');
        $('#pageOneNICError').addClass('d-none');
        $('#pageOneNICInvalidError').removeClass('d-none');
        return false;
    }
    
    person.personName = nameValue;
    person.personNIC = nicValue;
    localStorage.setItem(STORAGE_PREFIX + 'person', JSON.stringify(person));
    return true;
}

function validatePageThree() {
    // Section 1 validation: Check if all 24 questions are answered
    if (Object.keys(completedQuestions.section1).length < 24) {
        $('#pageTwoError').removeClass('d-none');
        return false;
    } else {
        $('#pageTwoError').addClass('d-none');
        return true;
    }
}

function validatePageFour() {
    // Section 2 validation: Check if all 42 questions are answered
    if (Object.keys(completedQuestions.section2).length < 42) {
        $('#pageThreeError').removeClass('d-none');
        return false;
    } else {
        $('#pageThreeError').addClass('d-none');
        return true;
    }
}

function validatePageFive() {
    // No validation needed for page five as it's just displaying results
    return true;
}

// window.addEventListener('beforeunload', function () {
//     const keysToReset = ['page', 'progress', 'person', 'results_section1', 'results_section2', 'results_overall', 'completedQuestions', 'recordDate']; // 'lang' is preserved
//     keysToReset.forEach(key => localStorage.removeItem(STORAGE_PREFIX + key));
//     localStorage.removeItem('autoSavedSql*');
// });

function handlePageOneReset() {
    const keysToReset = ['page', 'progress', 'person', 'results_section1', 'results_section2', 'results_overall', 'completedQuestions', 'resultDate', 'resultNotes']; // 'lang' is preserved
    keysToReset.forEach(key => localStorage.removeItem(STORAGE_PREFIX + key));
    // Write function alternative to location.reload();
    window.location.href = window.location.href;
}

function handlePageFourDisplay() {
    if (localStorage.getItem(STORAGE_PREFIX + 'progress') === '0') {
        $('#pageFourError').removeClass('d-none');
    } else {
        $('#pageFourError').addClass('d-none');
    }
    const personData = localStorage.getItem(STORAGE_PREFIX + 'person');
    if (personData) {
        try {
            person = JSON.parse(personData) || {};
        } catch (e) {
            console.error("Error parsing person data from localStorage:", e);
            person = {};
        }
        $('#pageFourPersonName').text(person.personName);
        $('#pageFourPersonNIC').text(person.personNIC);
    }
    const todayDate = new Date().toISOString().slice(0, 10);
    $('#pageFourDate').text(todayDate);
}

function handlePageFiveDisplay() {
    //Display Error if any error occured in viewPreviousResults
    if (!console.error) {
        $('#pageFiveError').removeClass('d-none');
    } else {
        $('#pageFiveError').addClass('d-none');
    }

    const personData = localStorage.getItem(STORAGE_PREFIX + 'person');
    if (personData) {
        try {
            person = JSON.parse(personData) || {};
        } catch (e) {
            console.error("Error parsing person data from localStorage:", e);
            person = {};
        }
        $('#pageFivePersonName').text(person.personName);
        $('#pageFivePersonNIC').text(person.personNIC);
        const recordDate = localStorage.getItem(STORAGE_PREFIX + 'resultDate') || '';
        $('#pageFiveDate').text(recordDate);
        $('#exampleFormControlTextarea2').val(localStorage.getItem(STORAGE_PREFIX + 'resultNotes') || '');
    }
}

function saveToDB() {
    const person = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'person'));
    const results = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'results_overall'));
    let payload = {};
    if(!person || !results) {
        return null;
    } else {
        payload = {
            name: person.personName,
            nic: person.personNIC,
            score_r: results.realistic || 0,
            score_i: results.investigative || 0,
            score_a: results.artistic || 0,
            score_s: results.social || 0,
            score_e: results.enterprising || 0,
            score_c: results.conventional || 0
        };
    }

    fetch('actions/save_results.php', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    })
    .then(data => console.log('Results saved:', data.message))
    .catch(err => console.error('Error saving results to DB:', err));
}

function changePage(page) {
    if (page == 2 && !validatePageTwo()) { return; }
    if (page == 3 && !validatePageThree()) { return; }
    if (page == 4 && !validatePageFour()) { return; }
    if (page == 5 && !validatePageFive()) { return; }
    
    localStorage.setItem(STORAGE_PREFIX + 'page', page);

    $('#page1, #page2, #page3, #page4, #page5').fadeOut();
    $('#page' + page).fadeIn();

    if (page == 1) { handlePageOneReset(); };
    if (page == 4) { 
        saveToDB();
        handlePageFourDisplay();
        initializeChart(4, 'pageFourResultChart');
    }
    if(page == 5) {
        handlePageFiveDisplay();
        initializeChart(5, 'pageFiveResultChart');
    }
}

function viewPreviousResults() {
    const emodal = document.getElementById('entryTestModal');
    if (emodal) $(emodal).modal('hide');
    
    const personData = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'person') || '{}');
    const nic = personData.personNIC;
    
    if (!nic) {
        console.error('NIC not available');
        if (emodal) $(emodal).modal('show');
        return;
    }
    
    const payload = { nic: nic };
    
    fetch('actions/get_prev_results.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            const personData = {
                personName: data.name,
                personNIC: data.nic
            };
            const resultDate = data.created_at.slice(0, 10);
            localStorage.setItem(STORAGE_PREFIX + 'resultDate', resultDate);
            localStorage.setItem(STORAGE_PREFIX + 'person', JSON.stringify(personData));
            const prevResults = {
                realistic: parseInt(data.score_r, 10),
                investigative: parseInt(data.score_i, 10),
                artistic: parseInt(data.score_a, 10),
                social: parseInt(data.score_s, 10),
                enterprising: parseInt(data.score_e, 10),
                conventional: parseInt(data.score_c, 10)
            };
            localStorage.setItem(STORAGE_PREFIX + 'results_overall', JSON.stringify(prevResults));
            const resultNotes = data.notes || '';
            localStorage.setItem(STORAGE_PREFIX + 'resultNotes', resultNotes);
            updateChart(prevResults);
            changePage(5);
            // $('#page5 #pageFiveDate').text(data.created_at).slice(0, 10);
        })
        .catch(error => {
            console.error('Error fetching previous results:', error);
            if (emodal) $(emodal).modal('show');
        });
}

function reEnterTest() {
    // Close the modal
    const emodal = document.getElementById('entryTestModal');
    if (emodal) $(emodal).modal('hide');

    changePage(2);
}

function discardTest() {
    // Close the modal
    const emodal = document.getElementById('entryTestModal');
    if (emodal) $(emodal).modal('hide');
}

// function resetTestData() {
//     // Clear all test-related data from localStorage
//     localStorage.removeItem(STORAGE_PREFIX + 'results_section1');
//     localStorage.removeItem(STORAGE_PREFIX + 'results_section2');
//     localStorage.removeItem(STORAGE_PREFIX + 'results_overall');
//     localStorage.removeItem(STORAGE_PREFIX + 'completedQuestions');
//     localStorage.removeItem(STORAGE_PREFIX + 'progress');
    
//     // Reset the variables
//     results_section1 = { ...defaultResults };
//     results_section2 = { ...defaultResults };
//     results_overall = { ...defaultResults };
//     completedQuestions = { ...defaultCompleted };
//     progress = 0;
// }

function setProgress(progress) {
    localStorage.setItem(STORAGE_PREFIX + 'progress', progress);
    $("#progress-bar-1").css('width', progress + '%');
    $('#progress-bar-1').text(progress + '%');
    $("#progress-bar-2").css('width', progress + '%');
    $('#progress-bar-2').text(progress + '%');
}

function setResultsSection1(results_section1) {
    localStorage.setItem(STORAGE_PREFIX + 'results_section1', JSON.stringify(results_section1));
    let totalSection1 = Object.keys(completedQuestions.section1).length;
    let progressSection1 = Math.round((totalSection1 / 24) * 100);
    setProgress(progressSection1);
}

function setResultsSection2(results_section2) {
    localStorage.setItem(STORAGE_PREFIX + 'results_section2', JSON.stringify(results_section2));
    let totalSection2 = Object.keys(completedQuestions.section2).length;
    let progressSection2 = Math.round((totalSection2 / 42) * 100);
    setProgress(progressSection2);
}

function setResultsOverall(results_overall) {
    localStorage.setItem(STORAGE_PREFIX + 'results_overall', JSON.stringify(results_overall));
    let totalQuestions = Object.keys(completedQuestions.section1).length + Object.keys(completedQuestions.section2).length;
    let progressOverall = Math.round((totalQuestions / 66) * 100);
    setProgress(progressOverall);
    updateChart(results_overall);
}

function calculateSectionTotals(sectionQuestions) {
    const totals = { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 0 };
    for (const key in sectionQuestions) {
        const answer = sectionQuestions[key];
        if (totals.hasOwnProperty(answer.type)) {
            totals[answer.type] += parseInt(answer.value, 10);
        }
    }
    return totals;
}

function updateResults(question, type, section) {
    // Get value from radio group by name
    let value;
    const radioGroup = $('[name="' + question + '"]:checked');
    
    if (radioGroup.length > 0) {
        value = radioGroup.val();
    } else if ($('#' + question).length) {
        value = $('#' + question).val();
    } else {
        return; // No value found
    }

    // Determine section: question1* → section1, question2* → section2
    let questionSection = section || (question.startsWith('question1') ? 'section1' : 'section2');
    
    if (value !== '' && typeof value !== 'undefined') {
        if (!completedQuestions[questionSection]) {
            completedQuestions[questionSection] = {};
        }
        completedQuestions[questionSection][question] = { type, value };
    } else {
        if (completedQuestions[questionSection]) {
            delete completedQuestions[questionSection][question];
        }
    }
    localStorage.setItem(STORAGE_PREFIX + 'completedQuestions', JSON.stringify(completedQuestions));

    // Calculate Section 1 totals
    results_section1 = calculateSectionTotals(completedQuestions.section1);
    setResultsSection1(results_section1);

    // Calculate Section 2 totals
    results_section2 = calculateSectionTotals(completedQuestions.section2);
    setResultsSection2(results_section2);

    // Calculate Overall totals (Section 1 + Section 2)
    results_overall = {
        realistic: results_section1.realistic + results_section2.realistic,
        investigative: results_section1.investigative + results_section2.investigative,
        artistic: results_section1.artistic + results_section2.artistic,
        social: results_section1.social + results_section2.social,
        enterprising: results_section1.enterprising + results_section2.enterprising,
        conventional: results_section1.conventional + results_section2.conventional
    };
    setResultsOverall(results_overall);
}

function updateButtons(completedQuestions) {
    // Restore Section 1 answers
    if (completedQuestions.section1) {
        for (let key in completedQuestions.section1) {
            // Try to set radio button value
            const radioGroup = $('[name="' + key + '"]');
            if (radioGroup.length > 0) {
                $('[name="' + key + '"][value="' + completedQuestions.section1[key].value + '"]').prop('checked', true);
            } else {
                $('#' + key).val(completedQuestions.section1[key].value);
            }
        }
    }
    // Restore Section 2 answers
    if (completedQuestions.section2) {
        for (let key in completedQuestions.section2) {
            // Try to set radio button value
            const radioGroup = $('[name="' + key + '"]');
            if (radioGroup.length > 0) {
                $('[name="' + key + '"][value="' + completedQuestions.section2[key].value + '"]').prop('checked', true);
            } else {
                $('#' + key).val(completedQuestions.section2[key].value);
            }
        }
    }
}

function getTopKeys(results_overall, n) {
    if(results_overall) {
        const keys = Object.keys(results_overall);
        const entries = keys.map(k => [k, results_overall[k]]);
        entries.sort(function(a, b) {
            if (b[1] === a[1]) {
                return keys.indexOf(a[0]) - keys.indexOf(b[0]);
            }
            return b[1] - a[1];
        });

        return entries.slice(0, n).map(function(entry) {
            return entry[0].charAt(0).toUpperCase();
        });
    }
}

function updateChart(results_overall) {
    // Display Overall Results
    $('#pageFiveRealistic, #pageFourRealistic').text(results_overall['realistic']);
    $('#pageFiveInvestigative, #pageFourInvestigative').text(results_overall['investigative']);
    $('#pageFiveArtistic, #pageFourArtistic').text(results_overall['artistic']);
    $('#pageFiveSocial, #pageFourSocial').text(results_overall['social']);
    $('#pageFiveEnterprising, #pageFourEnterprising').text(results_overall['enterprising']);
    $('#pageFiveConventional, #pageFourConventional').text(results_overall['conventional']);
    
    // Display Section 1 Results (if elements exist)
    $('#pageFourSection1Realistic').text(results_section1['realistic']);
    $('#pageFourSection1Investigative').text(results_section1['investigative']);
    $('#pageFourSection1Artistic').text(results_section1['artistic']);
    $('#pageFourSection1Social').text(results_section1['social']);
    $('#pageFourSection1Enterprising').text(results_section1['enterprising']);
    $('#pageFourSection1Conventional').text(results_section1['conventional']);
    
    // Display Section 2 Results (if elements exist)
    $('#pageFourSection2Realistic').text(results_section2['realistic']);
    $('#pageFourSection2Investigative').text(results_section2['investigative']);
    $('#pageFourSection2Artistic').text(results_section2['artistic']);
    $('#pageFourSection2Social').text(results_section2['social']);
    $('#pageFourSection2Enterprising').text(results_section2['enterprising']);
    $('#pageFourSection2Conventional').text(results_section2['conventional']);

    const topkeyval = getTopKeys(results_overall, 3);
    $('#pageFourChartPersonTypeValue, #pageFiveChartPersonTypeValue').text(topkeyval.join(" "));

    chartResponsive();
    // The resize event for the chart is handled by Chart.js responsive option
    // $(window).resize(async function() {
    //     await chartResponsive();
    // });
}

async function chartResponsive() {
    if (resultChart) {
        await resultChart.update();
    }
}
    
function printPreview() {
    // Result Table
    $('.table-responsive table').removeClass('mt-3');
    $('#resultsTableRealistic').text(chartColsShort[0]);
    $('#resultsTableInvestigative').text(chartColsShort[1]);
    $('#resultsTableArtistic').text(chartColsShort[2]);
    $('#resultsTableSocial').text(chartColsShort[3]);
    $('#resultsTableEnterprising').text(chartColsShort[4]);
    $('#resultsTableConventional').text(chartColsShort[5])

    window.print();
    return true;
}

let resultChart = null;

function createChartConfig() {
    return {
        data: {
            labels: chartColsShort,
            datasets: [
                {
                    type: 'bar',
                    data: [
                        results_overall['realistic'],
                        results_overall['investigative'],
                        results_overall['artistic'],
                        results_overall['social'],
                        results_overall['enterprising'],
                        results_overall['conventional']
                    ],
                    backgroundColor: '#125051d6',
                    order: 2
                },
                {
                    type: 'line',
                    data: [
                        results_overall['realistic'],
                        results_overall['investigative'],
                        results_overall['artistic'],
                        results_overall['social'],
                        results_overall['enterprising'],
                        results_overall['conventional']
                    ],
                    borderWidth: 2,
                    borderColor: '#d92536',
                    pointStyle: 'crossRot',
                    pointRadius: 8,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales : {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            weight: 'bold',
                            size: '16px'
                        },
                    }
                },
                y: {
                    beginAtZero: true
                },
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    bodyFont: {
                        weight: 'bold'
                    },
                    displayColors: false,
                    callbacks: {
                        title: function() { return ''; },
                    }
                },
            }
        }
    };
}

async function initializeChart(pageNum, containerId) {
    if (resultChart) {
        resultChart.destroy();
    }

    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded.');
        return;
    }

    // For page 5, fetch previous results before initializing chart
    if (pageNum === 5) {
        try {
            const personData = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'person') || '{}');
            const nic = personData.personNIC;
            
            if (!nic) {
                console.error('NIC not available for fetching results');
                return;
            }
            
            const response = await fetch('actions/get_prev_results.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nic: nic })
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            results_overall = {
                realistic: parseInt(data.score_r, 10),
                investigative: parseInt(data.score_i, 10),
                artistic: parseInt(data.score_a, 10),
                social: parseInt(data.score_s, 10),
                enterprising: parseInt(data.score_e, 10),
                conventional: parseInt(data.score_c, 10)
            };
        } catch (error) {
            console.error('Error fetching previous results:', error);
        }
    }

    const ctx = document.getElementById(containerId).getContext('2d');
    const cconfig = createChartConfig();
    resultChart = new Chart(ctx, cconfig);
}

window.addEventListener('beforeprint', () => {
    if (resultChart) resultChart.resize(476, 238);
});
window.addEventListener('afterprint', () => {
    if (resultChart) resultChart.resize();
});


function initializeApp() {
    // 1. Re-initialize state from localStorage
    lang = getStorageItem('lang', 'en');
    page = getStorageItem('page', 1);
    person = getStorageJson('person', defaultPerson);
    results_section1 = getStorageJson('results_section1', { ...defaultResults });
    results_section2 = getStorageJson('results_section2', { ...defaultResults });
    results_overall = getStorageJson('results_overall', { ...defaultResults });
    completedQuestions = getStorageJson('completedQuestions', defaultCompleted);

    // 2. Apply settings and display content
    setTimeout(function() {
        $('.loader-wrapper').fadeOut('slow');
    }, 1000);

    changeLanguage(lang);
    
    // Restore form data and selections
    $('#personName').val(person.personName);
    $('#personNIC').val(person.personNIC);
    updateButtons(completedQuestions);

    // Set initial results and progress (will be 0 on reset)
    setResultsSection1(results_section1);
    setResultsSection2(results_section2);
    setResultsOverall(results_overall);

    // Show the correct page without validation checks on initial load
    $('#page1, #page2, #page3, #page4, #page5').fadeOut();
    $('#page' + page).fadeIn();
    if (page == 4) {
        handlePageFourDisplay();
        initializeChart(4, 'pageFourResultChart');
    }
    if (page == 5) {
        handlePageFiveDisplay();
        initializeChart(5, 'pageFiveResultChart');
    }

}

$(document).ready(function() {
    initializeApp(); // The chart is now initialized inside initializeApp -> changePage -> handlePageFourDisplay
});

    

