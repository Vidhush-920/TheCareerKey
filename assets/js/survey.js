//Survey Question Types
let questionTypes = ['realistic', 'investigative', 'artistic', 'social', 'enterprising', 'conventional'];
let options = { "Very True": 2, "Mostly True": 1, "Doesn't Apply": 0}

//get array [2, 1, 0] from the options object
let optionValues = Object.values(options).map(Number);


//Survey Section 1 Questions
let questions1 = {
    realistic: {
        question1r1: 'I like to work with tools, machines and animals.',
        question1r2: 'Compared to others my age, I have good skills in working with tools, mechanical drawings, machines or animals.',
        question1r3: 'I value practical things you can see or touch and use like plants you can grow and animals, or things you can build or make better.',
        question1r4: 'I am realistic and like practical and machinery things.'
    },
    investigative: {
        question1i1: 'I like to study and solve math or science problems.',
        question1i2: 'Compared to others my age, I have good skills in math or science.',
        question1i3: 'I value science and math.',
        question1i4: 'I am curious and like to figure out how things work.'
    },
    artistic: {
        question1a1: 'I like to do creative activities like art, drama, crafts, dance or music.',
        question1a2: 'Compared to others my age, I have good skills in creative activities like art, drama, crafts, dance or music.',
        question1a3: 'I value creative activities like art, drama, crafts, dance or music.',
        question1a4: 'I am imaginative and like to do creative activities.'
    },
    social: {
        question1s1: 'I like to help people learn and grow.',
        question1s2: 'Compared to others my age, I have good skills in helping people learn and grow.',
        question1s3: 'I value helping people learn and grow.',
        question1s4: 'I am caring and like to help people.'
    },
    enterprising: {
        question1e1: 'I like to lead and persuade people, and to sell things or ideas.',
        question1e2: 'Compared to others my age, I have good skills in leading and persuading people, and in selling things or ideas.',
        question1e3: 'I value leadership and influencing people, and selling things or ideas.',
        question1e4: 'I am energetic and like to lead and persuade people.'
    },
    conventional: {
        question1c1: 'I like to work with numbers, records or machines in an orderly way.',
        question1c2: 'Compared to others my age, I have good skills in working with numbers, records or machines in an orderly way.',
        question1c3: 'I value working with numbers, records or machines in an orderly way.',
        question1c4: 'I am careful and like to work with numbers, records or machines in an orderly way.'
    }
};

//Survey Section 2 Questions
let questions2 = {
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
    question2i42: 'Research Scientist'
};

function transformID(text) {
    text = text.replace('uestion', '');
    return text;
}

//load survey section 1 questions in page 2
let surveySection1Div = document.querySelector('.survey-section-one');

for (let type of questionTypes) {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'survey-card-one card card-' + type;

    let cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card-header';
    cardHeaderDiv.id = 'pageTwo' + type.charAt(0).toUpperCase() + type.slice(1);
    cardHeaderDiv.innerText = type.charAt(0).toUpperCase() + type.slice(1);
    cardDiv.appendChild(cardHeaderDiv);

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 's1-card-body card-body';
    for (let questionID in questions1[type]) {
        let inputGroupDiv = document.createElement('div');
        inputGroupDiv.className = 'input-group s1-input-group';
        let label = document.createElement('div');
        label.className = 'input-group-text';
        label.id = questionID;
        label.innerText = questions1[type][questionID];
        inputGroupDiv.appendChild(label);

        let btnGroupDiv = document.createElement('div');
        btnGroupDiv.className = 'btn-group opt-btn-group';
        btnGroupDiv.setAttribute('role', 'group');
        btnGroupDiv.setAttribute('aria-label', questionID + ' answers');
        btnGroupDiv.setAttribute('data-question', questionID);
        btnGroupDiv.setAttribute('data-type', type);
        
        for (let i of optionValues) {
            let labelOpt = document.createElement('label');
            labelOpt.className = 'opt-check-label';
            labelOpt.setAttribute('for', transformID(questionID) + '-opt' + i);

            let inputOpt = document.createElement('input');
            inputOpt.className = 'opt-check-input';
            inputOpt.type = 'radio';
            inputOpt.name = questionID;
            inputOpt.id = transformID(questionID) + '-opt' + i;
            inputOpt.value = i;
            labelOpt.appendChild(inputOpt);

            let rectDiv = document.createElement('div');
            rectDiv.className = 'rect';
            rectDiv.innerText = i;
            labelOpt.appendChild(rectDiv);

            btnGroupDiv.appendChild(labelOpt);
        }
        inputGroupDiv.appendChild(btnGroupDiv);
        cardBodyDiv.appendChild(inputGroupDiv);
    }
    cardDiv.appendChild(cardBodyDiv);
    surveySection1Div.appendChild(cardDiv);
}

// Attach single delegated event listener to container (NOT to each input)
surveySection1Div.addEventListener('change', function(event) {
    if (event.target.classList.contains('opt-check-input')) {
        let btnGroup = event.target.closest('.opt-btn-group');
        let questionID = btnGroup.getAttribute('data-question');
        let type = btnGroup.getAttribute('data-type');
        updateResults(questionID, type);
    }
});


//load survey section 2 questions in page 3
let surveySection2Div = document.querySelector('.survey-section-two');
const q2Entries = Object.entries(questions2);
const groupSize = 3;

for (let k=0; k<q2Entries.length; k+=groupSize) {
    const qRow = document.createElement('div');
    qRow.className = 'row';

    const group = q2Entries.slice(k, k+groupSize);

    group.forEach(([Id, value]) => {
        let qHolder = document.createElement('div');
        qHolder.className = 'col-lg-4 mt-3';

        let inputGroupDiv = document.createElement('div');
        inputGroupDiv.className = 'input-group s2-input-group';

        let textGroupDiv = document.createElement('div');
        textGroupDiv.className = 'input-group-text-group';

        type = questionTypes.find(t => t.charAt(0) === Id.charAt(9));

        let typeHead = document.createElement('span');
        typeHead.className = 'input-group-text type-head input-group__' + type + '--type';
        typeHead.innerText = Id.charAt(9).toUpperCase();
        textGroupDiv.appendChild(typeHead);

        let label = document.createElement('span');
        label.className = 'input-group-text input-group__question';
        label.id = Id;
        label.innerText = value;
        textGroupDiv.appendChild(label);
        inputGroupDiv.appendChild(textGroupDiv);

        let btnGroupDiv = document.createElement('div');
        btnGroupDiv.className = 'btn-group opt-btn-group';
        btnGroupDiv.setAttribute('role', 'group');
        btnGroupDiv.setAttribute('aria-label', Id + ' answers');
        btnGroupDiv.setAttribute('data-question', Id);
        btnGroupDiv.setAttribute('data-type', type);
        
        for (let i of optionValues) {
            let labelOpt = document.createElement('label');
            labelOpt.className = 'opt-check-label';
            labelOpt.setAttribute('for', transformID(Id) + '-opt' + i);

            let inputOpt = document.createElement('input');
            inputOpt.className = 'opt-check-input';
            inputOpt.type = 'radio';
            inputOpt.name = Id;
            inputOpt.id = transformID(Id) + '-opt' + i;
            inputOpt.value = i;
            labelOpt.appendChild(inputOpt);

            let rectDiv = document.createElement('div');
            rectDiv.className = 'rect';
            rectDiv.innerText = i;
            labelOpt.appendChild(rectDiv);

            btnGroupDiv.appendChild(labelOpt);
        }
        inputGroupDiv.appendChild(btnGroupDiv);

        qHolder.appendChild(inputGroupDiv);
        qRow.appendChild(qHolder);
        
    });

    surveySection2Div.appendChild(qRow);

}

// Attach single delegated event listener to container (NOT to each input)
surveySection2Div.addEventListener('change', function(event) {
    if (event.target.classList.contains('opt-check-input')) {
        let btnGroup = event.target.closest('.opt-btn-group');
        let questionID = btnGroup.getAttribute('data-question');
        let type = btnGroup.getAttribute('data-type');
        updateResults(questionID, type);
    }
});
