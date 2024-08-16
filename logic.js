document.getElementById('quizForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            const answers = {
                q1_1: ['3'], q1_2: ['1'], q1_3: ['2'],
                q2_1: ['2'], q2_2: ['7'], q2_3: ['4'], q2_4: ['6'],
                q3_1: ['4'], q3_2: ['3'], q3_3: ['2'],
                q4_1: ['2'], q4_2: ['3'], q4_3: ['6'],
                q5_1: ['1'], q5_2: ['2'], q5_3: ['1'], q5_4: ['2'],
                q6_1: ['1'], q6_2: ['1'], q6_3: ['1'], q6_4: ['1'],
                q7_1: ['2'], q7_2: ['6'], q7_3: ['8'], q7_4: ['9'],
                q8_1: ['2'], q8_2: ['4'], q8_3: ['1'], q8_4: ['2'],
                q9_1: ['2'], q9_2: ['2'], q9_3: ['3'],
                q10_1: ['1'], q10_2: ['2'], q10_3: ['2'],
            };

            for (let i = 1; i <= 10; i++) {
                for (let j = 1; j <= 4; j++) {
                    let questionKey = `q${i}_${j}`;
                    let inputField = document.querySelector(`input[name=${questionKey}]`);
                    if (inputField) {
                        if (answers[questionKey] && answers[questionKey].includes(inputField.value.trim())) {
                            inputField.style.backgroundColor = 'lightgreen'; // Correct answer
                        } else {
                            inputField.style.backgroundColor = 'lightcoral'; // Incorrect answer
                        }
                    }
                }
            }
        });
